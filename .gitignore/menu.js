const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Maître ! Je suis prête !');
});

client.login("NTgyNjIxMDk5Mzk3ODczNzAz.XO2rgg.MPyzn6I9a8pVnHFKntWvtzXv5jQ");

var prefix = ("//Ai-");

client.on("message", (message) => {

    if(message.content === prefix + "help"){
        message.channel.send("Désolé, Mon maître travail sur mon développement. Merci de Patienter !")
    }


});
