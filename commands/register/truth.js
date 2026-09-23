const { registry } = require('../../lib/commandRegistry');
const { truthCommand } = require('../truth');

registry.register({
    aliases: ['truth'],
    category: 'fun',
    usage: '.truth',
    desc: 'Random truth question',
    cooldown: 3,
    run: async (ctx) => {
        await truthCommand(ctx.sock, ctx.chatId, ctx.message);
    },
});