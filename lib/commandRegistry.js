/**
 * Knight Bot - Dynamic command registry
 *
 * New commands register themselves in ./commands/register (one file per command)
 * and are dispatched automatically by main.js. No switch-case edits needed.
 *
 * A registration entry looks like:
 *   registry.register({
 *       aliases: ['base64'],          // command names (without the leading dot)
 *       category: 'utils',            // utils | fun | admin | owner | games | media | ai
 *       usage: '.base64 <text>',      // help text
 *       desc: 'Encode text to Base64',
 *       prefixMatch: true,            // true = matches ".alias extra args" too (default false = exact)
 *       cooldown: 3,                  // seconds between uses (optional)
 *       ownerOnly: false,             // owner/sudo only
 *       adminOnly: false,             // group admins only
 *       groupOnly: false,             // usable only inside groups
 *       run: async (ctx) => { ... }   // ctx = { sock, chatId, senderId, message,
 *                                     //        userMessage, rawText, text, args,
 *                                     //        isGroup, senderIsSudo, channelInfo }
 *   });
 */
const isAdmin = require('./isAdmin');

class CommandRegistry {
    constructor() {
        this.list = [];
        this.lookup = new Map();
    }

    register(cmd) {
        if (!cmd || typeof cmd.run !== 'function') throw new Error('Command requires a run(ctx) function');
        if (!Array.isArray(cmd.aliases) || cmd.aliases.length === 0) throw new Error(`Command ${cmd.name || ''} requires aliases`);
        cmd.aliases = cmd.aliases.map(a => String(a).toLowerCase());
        this.list.push(cmd);
        for (const a of cmd.aliases) {
            if (!this.lookup.has(a)) this.lookup.set(a, cmd);
        }
        return cmd;
    }

    /**
     * Find commands matching the (lowercased, dot-normalized) user message.
     * @returns {Array<{cmd, alias}>} matches sorted by longest alias first.
     */
    matching(text) {
        if (typeof text !== 'string') return [];
        const matches = [];
        for (const cmd of this.list) {
            for (const alias of cmd.aliases) {
                const key = `.${alias}`;
                let hit = false;
                if (cmd.prefixMatch) {
                    hit = text === key || text.startsWith(`${key} `);
                } else {
                    hit = text === key;
                }
                if (hit) {
                    matches.push({ cmd, alias, aliasLength: alias.length });
                    break;
                }
            }
        }
        return matches.sort((a, b) => b.aliasLength - a.aliasLength);
    }

    getByAlias(alias) {
        return this.lookup.get(String(alias).toLowerCase()) || null;
    }

    cooldownRemaining(cmd, userId, at) {
        const key = `${cmd.aliases[0]}|${userId}`;
        const last = this._cooldowns ? this._cooldowns[key] : 0;
        if (!last) return 0;
        const elapsed = at - last;
        const seconds = Math.ceil((cmd.cooldown * 1000 - elapsed) / 1000);
        return seconds > 0 ? seconds : 0;
    }

    _markCooldown(cmd, userId, at) {
        if (!cmd.cooldown) return;
        if (!this._cooldowns) this._cooldowns = {};
        this._cooldowns[`${cmd.aliases[0]}|${userId}`] = at;
    }
}

// Single shared instance
const registry = new CommandRegistry();

/**
 * Run the first matching command (by registration/alias priority).
 * Applies permission + cooldown guards before executing.
 * @returns {Promise<boolean>} true if a command was executed
 */
async function dispatchRegistry(ctx, commands = registry) {
    const matches = commands.matching(ctx.userMessage);
    for (const { cmd } of matches) {
        const ok = await runCommand(cmd, ctx, commands);
        if (ok) return true;
    }
    return false;
}

async function runCommand(cmd, ctx, commands) {
    const { sock, chatId, senderId, message } = ctx;
    const fromMe = !!(message && message.key && message.key.fromMe);

    if (cmd.ownerOnly && !ctx.senderIsSudo && !fromMe) {
        await sock.sendMessage(chatId, { text: '❌ This command is only available for the owner or sudo!', ...ctx.channelInfo }, { quoted: message });
        return false;
    }

    if (cmd.groupOnly && !ctx.isGroup) {
        await sock.sendMessage(chatId, { text: 'This command can only be used in groups!', ...ctx.channelInfo }, { quoted: message });
        return false;
    }

    if (cmd.adminOnly && ctx.isGroup) {
        const adminStatus = await isAdmin(sock, chatId, senderId, message);
        if (!adminStatus.isBotAdmin) {
            await sock.sendMessage(chatId, { text: 'Please make the bot an admin to use admin commands.', ...ctx.channelInfo }, { quoted: message });
            return false;
        }
        if (!adminStatus.isSenderAdmin && !fromMe) {
            await sock.sendMessage(chatId, { text: 'Sorry, only group admins can use this command.', ...ctx.channelInfo }, { quoted: message });
            return false;
        }
    } else if (cmd.adminOnly && !ctx.isGroup) {
        await sock.sendMessage(chatId, { text: 'This command can only be used in groups!', ...ctx.channelInfo }, { quoted: message });
        return false;
    }

    if (cmd.cooldown) {
        const left = commands.cooldownRemaining(cmd, senderId, Date.now());
        if (left > 0) {
            await sock.sendMessage(chatId, { text: `⏳ Slow down! Try again in *${left}s*.`, ...ctx.channelInfo });
            return false;
        }
        commands._markCooldown(cmd, senderId, Date.now());
    }

    // Provide the args after the matched alias to every command
    const aliasKey = `.${cmd.aliases[0]}`;
    ctx.alias = aliasKey;
    ctx.text = ctx.userMessage.startsWith(aliasKey + ' ')
        ? ctx.userMessage.slice(aliasKey.length + 1).trim()
        : (cmd.prefixMatch ? ctx.rawText.slice(aliasKey.length).trim() : '');
    ctx.args = ctx.text ? ctx.text.split(/\s+/) : [];

    try {
        await cmd.run(ctx);
    } catch (err) {
        console.error(`❌ Error in command "${cmd.aliases[0]}":`, err);
        await sock.sendMessage(chatId, { text: '❌ Failed to process command!', ...ctx.channelInfo }).catch(() => {});
    }
    return true;
}

module.exports = {
    CommandRegistry,
    registry,
    dispatchRegistry,
    runCommand,
};