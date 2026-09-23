const { registry } = require('../../lib/commandRegistry');
const { goodnightCommand } = require('../goodnight');

registry.register({
    aliases: ['goodnight', 'gn', 'lovenight'],
    category: 'fun',
    usage: '.goodnight',
    desc: 'Send a goodnight message',
    cooldown: 3,
    run: async (ctx) => {
        await goodnightCommand(ctx.sock, ctx.chatId, ctx.message);
    },
});