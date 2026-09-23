require('dotenv').config();

const settings = {
  packname: process.env.PACKNAME || 'Knight Bot',
  author: process.env.PACK_AUTHOR || '',
  botName: process.env.BOT_NAME || 'Knight Bot',
  botOwner: process.env.BOT_OWNER || 'Professor',
  ownerNumber: process.env.OWNER_NUMBER || '919876543210',
  giphyApiKey: process.env.GIPHY_API_KEY || 'qnl7ssQChTdPjsKta2Ax2LMaGXz303tq',
  commandMode: process.env.COMMAND_MODE || 'public',
  maxStoreMessages: parseInt(process.env.MAX_STORE_MESSAGES || '20', 10),
  storeWriteInterval: parseInt(process.env.STORE_WRITE_INTERVAL || '10000', 10),
  description: process.env.BOT_DESCRIPTION || 'This is a bot for managing group commands and automating tasks.',
  version: process.env.BOT_VERSION || '2.3.0',
  updateZipUrl: process.env.UPDATE_ZIP_URL || 'https://github.com/cleberleonheart-maker/Knightbot-MD/archive/refs/heads/main.zip',
};

module.exports = settings;