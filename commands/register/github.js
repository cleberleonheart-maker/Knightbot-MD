const { registry } = require('../../lib/commandRegistry');
const githubCommand = require('../github');

registry.register({
    aliases: ['git', 'github', 'sc', 'script', 'repo'],
    category: 'utils',
    usage: '.git',
    desc: 'Show the bot source repository',
    cooldown: 3,
    run: async (ctx) => {
        await githubCommand(ctx.sock, ctx.chatId, ctx.message);
    },
});