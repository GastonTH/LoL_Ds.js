const Discord = require('discord.js');
const client = new Discord.Client();
//fichero que contiene el tokken
const config = require('./config.json');
//mysql
const mysql = require('mysql');


function connectDB() {

    const connect = mysql.createConnection({
        host: 'localhost',
        user: 'dbWor',
        password: '123asd123asda',
        database: 'wor_bot_db'
    })

    return connect;
};

//cuando el bot esta listo -->
client.on('ready', async() => {
    client.user.setStatus('online');
    console.log(`Bot ${client.user.tag} is ready and is ${client.user.presence.status}`);
});

//recibiendo mensajes del servidor y async para que de igual lo que tarde en contestar
client.on('message', async message => {
    //console.log(message.content);

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

        console.log(message);
    }

    //mensajes embebidos
    if (message.content === '!guapo') {
        //setautor puedes meterle una imagen
        const embed = new Discord.MessageEmbed().setTitle('Ejemplo dice...').addField('titulo', 'subtitulo').setAuthor('Caitlyn', 'https://www.mordeo.org/files/uploads/2018/07/Caitlyn-League-of-Legends-HD-Mobile-Wallpaper-950x1689.jpg');
        message.channel.send(embed);
    }

    if (message.content === '(Wor)registro') {
        //comprovacion del usuario en la base de datos
        const con = connectDB();
        console.log(con);
    }



});

client.login(config.tokken);