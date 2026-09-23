/**
 * Knight Bot - PM2 process configuration
 * Usage:
 *   npm install -g pm2
 *   pm2 start ecosystem.config.js
 *   pm2 save && pm2 startup
 *   pm2 logs knightbot
 */
module.exports = {
    apps: [
        {
            name: 'knightbot',
            script: './index.js',
            cwd: __dirname,
            interpreter: 'node',
            interpreter_args: ['--max-old-space-size=512', '--optimize-for-size', '--gc-interval=100'],
            autorestart: true,
            max_restarts: 10,
            restart_delay: 5000,
            exp_backoff_restart_delay: 100,
            max_memory_restart: '400M',
            kill_timeout: 5000,
            env: {
                NODE_ENV: 'production'
            }
        }
    ]
};