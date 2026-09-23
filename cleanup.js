/**
 * Knight Bot - Cleanup utility
 * Removes temporary/runtime files that accumulate on hosted panels.
 */
const fs = require('fs');
const path = require('path');

const targets = [
    'temp',
    'tmp',
    'XeonMedia',
    'session',
];

let removed = 0;

for (const name of targets) {
    const target = path.join(process.cwd(), name);
    if (fs.existsSync(target)) {
        fs.rmSync(target, { recursive: true, force: true });
        console.log(`🧹 Removed ./${name}`);
        removed++;
    }
}

if (removed === 0) {
    console.log('✅ Nothing to clean. Runtime folders are already clean.');
} else {
    console.log(`✅ Cleanup finished (${removed} folder(s)).`);
}