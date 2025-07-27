const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: '91.197.5.218', // your cracked server IP
    username: 'YagiSheep', // cracked name
    port: 26149             // default port
  });

  bot.on('login', () => {
    console.log('✅ Bot logged in');
    bot.chat('/afk');
  });

  bot.on('end', () => {
    console.log('🔁 Bot disconnected. Reconnecting...');
    setTimeout(createBot, 5000);
  });

  bot.on('error', (err) => console.log('Error:', err));
}

createBot();
