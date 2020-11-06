const Discord = require('discord.js');
const client = new Discord.Client();
//recibiendo mensajes del servidor y async para que de igual lo que tarde en contestar
client.on('message', async message => {
    console.log(message.content);

    if (message.content === "ping") {
        //metodo reply sirve para responder
        message.reply("pong");
    }
});

module.exports = client;