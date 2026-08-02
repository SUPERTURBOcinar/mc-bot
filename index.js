const mineflayer = require('mineflayer');
const express = require('express');
const app = express();

app.get("/", (req, res) => res.send("Bot Aktif!"));
app.listen(process.env.PORT || 3000);

function createBot() {
    const bot = mineflayer.createBot({
        host: 'superturbocinarmc.mcsh.', // Sunucu IP'sini yazın
        port: 25565,
        username: 'babapiromcoyuncu',   // Bot adı
        version: '1.20.1'         // Sunucu sürümü
    });

    bot.on('spawn', () => console.log('Bot sunucuya girdi!'));
    bot.on('end', () => setTimeout(createBot, 5000));
    bot.on('error', (err) => console.log(err));
}
createBot();
