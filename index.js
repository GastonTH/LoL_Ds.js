const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

//devuelve la conexion ya realizada
const connection = require("./database/db.connect");

//require de la base de datos--
const mysql = require('mysql');
//-----------------------------

//si el bot esta listo... -->
client.on('ready', async() => {
    client.user.setStatus('online');
    console.log(`Bot ${client.user.tag} is ready and is ${client.user.presence.status}`);
});

//recibiendo mensajes del servidor y async para que de igual lo que tarde en contestar
client.on('message', async message => {
    console.log(message.content);

    if (message.content === "ping") {
        //metodo reply sirve para responder
        message.reply("pong");
    }

    if (message.content === "hola") {
        //mensaje personalizado y para todo el canal    
        message.channel.send(`Hola ${message.author}`)
    }

    //sabiendo si incluye X en el mensaje, buena forma para crear comandos
    if (message.content.includes("!test")) {
        message.channel.send("Con que trasteando eeeee ¬-¬");
    }

    if (message.content.includes("!connect")) {

        const ficha = await connection.query('SELECT * FROM wor_bot_db');
        console.log(ficha);

        //message.channel.send("Con que conectando con la base de datos eeeeeeee ¬-¬");
    }

    //mensajes embebidos
    if (message.content === '!guapo') {
        //setautor puedes meterle una imagen
        const embed = new Discord.MessageEmbed().setTitle('Ejemplo dice...').addField('titulo', 'subtitulo').setAuthor('Caitlyn', 'https://www.mordeo.org/files/uploads/2018/07/Caitlyn-League-of-Legends-HD-Mobile-Wallpaper-950x1689.jpg');
        message.channel.send(embed);
    }

    //intento de conversaciones del lol XD
    /*
    if (message.content.includes("!auto")) {
      message.channel.send("!auto");
    }*/

});

client.login(config.tokken);