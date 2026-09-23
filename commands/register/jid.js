const { registry } = require('../../lib/commandRegistry');

registry.register({
    aliases: ['jid', 'groupjid'],
    category: 'utils',
    usage: '.jid',
    desc: 'Show the group JID',
    groupOnly: true,
    cooldown: 3,
    run: async (ctx) => {
        await ctx.sock.sendMessage(ctx.chatId, { text: `✅ Group JID: ${ctx.chatId}` }, { quoted: ctx.message });
    },
});