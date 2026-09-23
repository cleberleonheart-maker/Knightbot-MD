const { registry } = require('../../lib/commandRegistry');
const { dareCommand } = require('../dare');

registry.register({
    aliases: ['dare'],
    category: 'fun',
    usage: '.dare',
    desc: 'Random dare',
    cooldown: 3,
    run: async (ctx) => {
        await dareCommand(ctx.sock, ctx.chatId, ctx.message);
    },
});