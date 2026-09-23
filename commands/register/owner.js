const { registry } = require('../../lib/commandRegistry');
const ownerCommand = require('../owner');

registry.register({
    aliases: ['owner'],
    category: 'utils',
    usage: '.owner',
    desc: 'Show the bot owner contact',
    cooldown: 3,
    run: async (ctx) => {
        await ownerCommand(ctx.sock, ctx.chatId);
    },
});