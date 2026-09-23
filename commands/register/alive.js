const { registry } = require('../../lib/commandRegistry');
const aliveCommand = require('../alive');

registry.register({
    aliases: ['alive'],
    category: 'utils',
    usage: '.alive',
    desc: 'Check if the bot is online',
    cooldown: 3,
    run: async (ctx) => {
        await aliveCommand(ctx.sock, ctx.chatId, ctx.message);
    },
});