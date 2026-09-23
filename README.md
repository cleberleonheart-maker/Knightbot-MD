# 🤖 Knight Bot

This is a WhatsApp bot built using the Baileys library for group management, including features like tagging all members, muting/unmuting, and many more. It's designed to help admins efficiently manage WhatsApp groups.

<div align="center"> 
  <a href="https://git.io/typing-svg"> 
    <img src="https://readme-typing-svg.demolab.com?font=Ribeye&size=50&pause=1000&color=33ff00&center=true&width=910&height=100&lines=Knight-Bot;Multi+Device+Whatsapp+Bot;Coded+By+Professor" alt="Typing SVG" />
  </a> 
</div> 

<div align="center"> 
  <a href="https://youtube.com/@mr_unique_hacker"> 
    <img src="https://github.com/mruniquehacker/Knightbot-MD/blob/main/assets/bot_image.jpg" alt="Knight Bot" height="300"> 
  </a> 
</div>

---

## 🚀 Steps to Deploy

### Step 1: Fork the Repository

Click the button below to fork the Knight Bot repository to your GitHub account:

<div align="center">
  <a href="https://github.com/mruniquehacker/Knightbot-MD/fork">
    <img src="https://img.shields.io/badge/Fork-Repository-blue?style=for-the-badge" alt="Fork the repository"/>
  </a>
</div>

---

### Step 2: Get Pair Code

Deploy the bot and easily connect it to your WhatsApp account by pair code. Click the button below to deploy the bot on Replit.

<div align="center">
  <a href="https://replit.com/@DGXeon/Xeon-PairCode?v=1" target="_blank">
    <img src="https://img.shields.io/badge/GET%20PAIR%20CODE-Replit-success?style=for-the-badge" alt="Deploy on Replit"/>
  </a>
</div>

<div align="center">
  <a href="https://knight-bot-paircode.onrender.com" target="_blank">
    <img src="https://img.shields.io/badge/GET%20PAIR%20CODE-Easy%20Method-ff4d4d?style=for-the-badge" alt="Generate Pair Code"/>
  </a>
</div>


### After getting creds.json file, upload it to session folder

---

### Step 3: Deploy Now

For further customization and setup guidance, click the button below:

<div align="center">
  <a href="https://youtu.be/-oz_u1iMgf8">
    <img src="https://img.shields.io/badge/Deploy Tutorial-dc3545?style=for-the-badge&logo=youtube" alt="YouTube Link"/>
  </a>
  <a href="https://bot-hosting.net/?aff=1068419752923508776">
    <img src="https://img.shields.io/badge/Deploy on Panel-28a745?style=for-the-badge" alt="Deploy on Panel"/>
  </a>
</div>

### Deploy on VPS

<div align="center">
  <a href="https://client.petrosky.io/aff.php?aff=394" target="_blank">
    <img src="https://img.shields.io/badge/petrosky vps-0078E7?style=for-the-badge" alt="petrosky vps"/>
  </a>
</div>

### Deploy Now on Below Panel
<div align="center">
<a href="https://dashboard.katabump.com/auth/login#d6b7d6" target="_blank">
  <img src="https://img.shields.io/badge/Katabump-D6B7D6?style=for-the-badge&logo=server&logoColor=black" alt="Katabump"/>
</a>
</div>

### Join Us

<div align="center">
  <a href="https://t.me/+3QhFUZHx-nhhZmY1">
    <img src="https://img.shields.io/badge/Join%20Telegram-0078E7?style=for-the-badge&logo=telegram&logoColor=white" alt="Join Telegram"/>
  </a>
  <a href="https://whatsapp.com/channel/0029Va90zAnIHphOuO8Msp3A">
    <img src="https://img.shields.io/badge/Join%20WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="Join WhatsApp"/>
  </a>
</div>

---

### ➕ Adding a New Command

Commands are self-registering — no need to touch `main.js` or the command switch.

1. Create a file in `commands/register/` (e.g. `commands/register/hello.js`):

    ```js
    const { registry } = require('../../lib/commandRegistry');

    registry.register({
        aliases: ['hello', 'hi'],
        category: 'utils',          // utils | fun | admin | owner | games | media | ai
        usage: '.hello <name>',
        desc: 'Say hello',
        prefixMatch: false,         // true = also match ".hello extra args" (extracts ctx.text)
        cooldown: 3,                // optional seconds between uses
        groupOnly: false,
        adminOnly: false,
        ownerOnly: false,
        run: async (ctx) => {
            // ctx = { sock, chatId, senderId, message, userMessage,
            //         rawText, text, args, isGroup, senderIsSudo, channelInfo }
            const name = ctx.text || 'there';
            await ctx.sock.sendMessage(ctx.chatId, { text: `Hello ${name}!`, ...ctx.channelInfo });
        },
    });
    ```

2. Restart the bot. The command is available immediately, with permission guards
   (owner/admin/group) and cooldown handled automatically by the registry.

Shared helpers live in `lib/`, and classic commands that are not yet migrated remain
in the legacy switch inside `main.js`.

---

## ⚙️ Features

- **Tag all group members** with the `.tagall` command
- **Admin restricted usage** (Only group admins can use certain commands)
- **Games** like Tic-Tac-Toe for interactive group engagement
- **Text-to-Speech** with `.tts`
- **Sticker creation** with `.sticker`
- **Anti-link detection** for group safety
- **Warn and manage group members** with admin control

---

## 📖 About

The Knight WhatsApp Bot assists group admins by providing them with tools to efficiently manage large WhatsApp groups. The bot uses the Baileys library to interact with the WhatsApp Web API and supports multi-device features.

It is lightweight and can be easily customized to add more commands as per your requirements. The bot runs in a Node.js environment and provides QR code-based authentication to link your WhatsApp account.

---

## 🛠️ Setup & Installation

### Prerequisites

- Node.js installed on your system
- Git installed (for cloning the repository)

### Step-by-Step Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/cleberleonheart-maker/Knightbot-MD.git
    cd Knightbot-MD
    ```

2. **Install the dependencies:**

    ```bash
    npm install
    ```

3. **Configure the bot (optional but recommended):**

    Copy `.env.example` to `.env` and edit it with your owner number, bot name and API keys:

    ```bash
    cp .env.example .env
    ```

    At minimum, set `OWNER_NUMBER` (your WhatsApp number with country code, no `+` or spaces).

4. **Run the bot:**

    ```bash
    npm start
    ```

5. **Scan the QR code / enter pairing code:**

    Once the bot starts, a QR code (or pairing code) will appear in the terminal. Scan this QR code using the Linked Devices feature in WhatsApp to connect your WhatsApp account with the bot. On non-interactive hosts, add the pairing number via `PHONE_NUMBER` in `.env`.

---

### 🔄 Running & Keeping it Alive

**Quick launch** (menu-based helper):

```bash
./run.sh start       # normal start (optimized memory flags)
./run.sh clean       # clean temp files then start
./run.sh fresh       # reset session and start again (new login)
./run.sh logs        # tail logs (nohup.out)
```

**With PM2** (recommended for 24/7 hosts — auto-restart on crash/reboot):

```bash
npm install -g pm2
pm2 start ecosystem.config.js    # starts the bot
pm2 save && pm2 startup          # restart on server reboot
pm2 logs knightbot               # watch the logs
pm2 restart knightbot            # restart manually
pm2 monit                        # live CPU/RAM dashboard
```

The PM2 config already applies the memory limits (`512MB` heap, restart over `400MB`).

**On web panels (bot-hosting / Replit / etc.):**
- Start command: `npm start` (or `./run.sh start`)
- If the panel supports node arguments, use `--max-old-space-size=512 --optimize-for-size`
- Non-interactive panels show an auto pairing code using `OWNER_NUMBER`/`PHONE_NUMBER` from `.env`

---


## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT) - see the [LICENSE](https://github.com/mruniquehacker/Knightbot-MD/blob/main/LICENSE) file for details.

---

## 🙌 Contributions

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/mruniquehacker/Knightbot-MD/issues).

---

## 🌟 Show your support

If you like this project, please give it a [⭐️ star on GitHub](https://github.com/mruniquehacker/Knightbot)!


## Credits

- [Professor](https://github.com/mruniquehacker)
- [Baileys](https://github.com/adiwajshing/Baileys)
- [TechGod143](https://github.com/TechGod143) for pair code
- [Dgxeon](https://github.com/Dgxeon) for pair code

---

## ⚠️ Important Warning

**Note:** This bot is created for educational purposes only. This is NOT an official WhatsApp bot. Using this bot may lead to your WhatsApp account being banned. Use it at your own risk. The developers will not be responsible for any consequences or account bans that may occur while using this bot.

## 📝 Legal

- This project is not affiliated with, authorized, maintained, sponsored or endorsed by WhatsApp or any of its affiliates or subsidiaries.
- This is an independent and unofficial software. Use at your own risk.
- Do not spam people with this bot.
- Do not use this bot to send bulk messages or for illegal purposes.
- The developers assume no liability and are not responsible for any misuse or damage caused by this program.

### License
This project is licensed under the MIT License. However, you must:
- Use this software in compliance with all applicable laws and regulations
- Include original license and copyright notices
- Credit original authors
- Not use for spam or malicious purposes

## 📜 Copyright Notice

Copyright (c) 2024 Professor. All rights reserved.

This project contains code from various open source projects:
- Baileys (MIT License)
- Other libraries as listed in package.json
