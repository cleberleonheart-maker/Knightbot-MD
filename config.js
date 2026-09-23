require('dotenv').config();

global.APIs = {
    xteam: process.env.API_XTEAM || 'https://api.xteam.xyz',
    dzx: process.env.API_DZX || 'https://api.dhamzxploit.my.id',
    lol: process.env.API_LOL || 'https://api.lolhuman.xyz',
    violetics: process.env.API_VIOLETICS || 'https://violetics.pw',
    neoxr: process.env.API_NEOXR || 'https://api.neoxr.my.id',
    zenzapis: process.env.API_ZENZAPIS || 'https://zenzapis.xyz',
    akuari: process.env.API_AKUARI || 'https://api.akuari.my.id',
    akuari2: process.env.API_AKUARI2 || 'https://apimu.my.id',
    nrtm: process.env.API_NRTM || 'https://fg-nrtm.ddns.net',
    bg: process.env.API_BG || 'http://bochil.ddns.net',
    fgmods: process.env.API_FGMODS || 'https://api-fgmods.ddns.net'
};

global.APIKeys = {
    'https://api.xteam.xyz': process.env.KEY_XTEAM || 'd90a9e986e18778b',
    'https://api.lolhuman.xyz': process.env.KEY_LOLHUMAN || '85faf717d0545d14074659ad',
    'https://api.neoxr.my.id': process.env.KEY_NEOXR || '',
    'https://violetics.pw': process.env.KEY_VIOLETICS || 'beta',
    'https://zenzapis.xyz': process.env.KEY_ZENZAPIS || '',
    'https://api-fgmods.ddns.net': process.env.KEY_FGMODS || 'fg-dylux'
};

module.exports = {
    WARN_COUNT: 3,
    APIs: global.APIs,
    APIKeys: global.APIKeys
};