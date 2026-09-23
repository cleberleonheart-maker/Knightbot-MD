const { registry } = require('../../lib/commandRegistry');
const { flirtCommand } = require('../flirt');

registry.register({
    aliases: ['flirt'],
    category: 'fun',
    usage: '.flirt',
    desc: 'Send a flirty line',
    cooldown: 3,
    run: async (ctx) => {
        await flirtCommand(ctx.sock, ctx.chatId, ctx.message);
    },
});