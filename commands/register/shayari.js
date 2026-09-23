const { registry } = require('../../lib/commandRegistry');
const { shayariCommand } = require('../shayari');

registry.register({
    aliases: ['shayari', 'shayri'],
    category: 'fun',
    usage: '.shayari',
    desc: 'Random shayari (poetry)',
    cooldown: 3,
    run: async (ctx) => {
        await shayariCommand(ctx.sock, ctx.chatId, ctx.message);
    },
});