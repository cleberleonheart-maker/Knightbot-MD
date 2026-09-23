const { registry } = require('../../lib/commandRegistry');
const jokeCommand = require('../joke');

registry.register({
    aliases: ['joke'],
    category: 'fun',
    usage: '.joke',
    desc: 'Random joke',
    cooldown: 3,
    run: async (ctx) => {
        await jokeCommand(ctx.sock, ctx.chatId, ctx.message);
    },
});