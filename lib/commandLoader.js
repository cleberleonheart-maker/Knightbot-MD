/**
 * Knight Bot - Command loader
 * Loads every self-registering command file from ./commands/register
 * into the shared command registry. New commands only need a file there.
 */
const fs = require('fs');
const path = require('path');
const { registry } = require('./commandRegistry');

const registerDir = path.join(__dirname, '..', 'commands', 'register');

if (fs.existsSync(registerDir)) {
    for (const file of fs.readdirSync(registerDir).filter(f => f.endsWith('.js'))) {
        require(path.join(registerDir, file));
    }
}

module.exports = registry;