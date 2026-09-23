const { registry } = require('../../lib/commandRegistry');
const memeCommand = require('../meme');

registry.register({
    aliases: ['meme'],
    category: 'fun',
    usage: '.meme',
    desc: 'Random meme image',
    cooldown: 5,
    run: async (ctx) => {
        await memeCommand(ctx.sock, ctx.chatId, ctx.message);
    },
});