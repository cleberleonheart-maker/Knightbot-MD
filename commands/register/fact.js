const { registry } = require('../../lib/commandRegistry');
const factCommand = require('../fact');

registry.register({
    aliases: ['fact'],
    category: 'fun',
    usage: '.fact',
    desc: 'Random interesting fact',
    cooldown: 3,
    run: async (ctx) => {
        await factCommand(ctx.sock, ctx.chatId, ctx.message, ctx.message);
    },
});