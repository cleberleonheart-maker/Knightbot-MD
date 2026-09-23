const { registry } = require('../../lib/commandRegistry');
const quoteCommand = require('../quote');

registry.register({
    aliases: ['quote'],
    category: 'fun',
    usage: '.quote',
    desc: 'Random inspirational quote',
    cooldown: 3,
    run: async (ctx) => {
        await quoteCommand(ctx.sock, ctx.chatId, ctx.message);
    },
});