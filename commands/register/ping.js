const { registry } = require('../../lib/commandRegistry');
const pingCommand = require('../ping');

registry.register({
    aliases: ['ping'],
    category: 'utils',
    usage: '.ping',
    desc: 'Check bot latency, uptime and version',
    cooldown: 3,
    run: async (ctx) => {
        await pingCommand(ctx.sock, ctx.chatId, ctx.message);
    },
});