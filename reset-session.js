/**
 * Knight Bot - Session reset utility
 * Deletes WhatsApp auth state so the bot re-authenticates (QR/pair code).
 */
const fs = require('fs');
const path = require('path');

const sessionDir = path.join(process.cwd(), 'session');

if (fs.existsSync(sessionDir)) {
    fs.rmSync(sessionDir, { recursive: true, force: true });
    console.log('🧹 Session reset. Restart the bot to scan QR / request a new pairing code.');
} else {
    console.log('✅ No session found. Nothing to reset.');
}