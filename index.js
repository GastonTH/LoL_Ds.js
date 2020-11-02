const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Bot is ready ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NzcyOTE2MjkyMTM4ODI3ODQ3.X6BoZA.QXDlXDvPLKPB5DXqnM9Nv9PpKMo');