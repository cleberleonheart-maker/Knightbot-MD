/**
 * Example of a new command added through the registry only —
 * no edits to main.js or the switch statement required.
 */
const { registry } = require('../../lib/commandRegistry');

registry.register({
    aliases: ['base64'],
    category: 'utils',
    usage: '.base64 <text>',
    desc: 'Encode or decode Base64 (.base64 decode <text>)',
    prefixMatch: true,
    cooldown: 2,
    run: async (ctx) => {
        const parts = ctx.text.split(/\s+/);
        const text = parts[0]?.toLowerCase() === 'decode'
            ? parts.slice(1).join(' ')
            : ctx.text;
        if (!text) {
            return ctx.sock.sendMessage(ctx.chatId, {
                text: '*BASE64*\n\nUsage:\n.base64 <text>  - encode\n.base64 decode <text>  - decode',
                ...ctx.channelInfo,
            }, { quoted: ctx.message });
        }
        try {
            const result = parts[0]?.toLowerCase() === 'decode'
                ? Buffer.from(text, 'base64').toString('utf-8')
                : Buffer.from(text, 'utf-8').toString('base64');
            await ctx.sock.sendMessage(ctx.chatId, {
                text: `*Result:*\n${result}`,
                ...ctx.channelInfo,
            }, { quoted: ctx.message });
        } catch (err) {
            console.error('Error in base64 command:', err);
            await ctx.sock.sendMessage(ctx.chatId, { text: '❌ Invalid Base64 input.' }, { quoted: ctx.message });
        }
    },
});