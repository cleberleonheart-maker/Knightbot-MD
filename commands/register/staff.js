const { registry } = require('../../lib/commandRegistry');
const staffCommand = require('../staff');

registry.register({
    aliases: ['staff', 'admins', 'listadmin'],
    category: 'utils',
    usage: '.staff',
    desc: 'List group admins',
    groupOnly: true,
    cooldown: 3,
    run: async (ctx) => {
        await staffCommand(ctx.sock, ctx.chatId, ctx.message);
    },
});