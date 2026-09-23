const { registry } = require('../../lib/commandRegistry');
const groupInfoCommand = require('../groupinfo');

registry.register({
    aliases: ['groupinfo', 'infogp', 'infogrupo'],
    category: 'utils',
    usage: '.groupinfo',
    desc: 'Show group information',
    groupOnly: true,
    cooldown: 3,
    run: async (ctx) => {
        await groupInfoCommand(ctx.sock, ctx.chatId, ctx.message);
    },
});