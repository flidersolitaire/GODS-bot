const Discord = require('discord.js'); // Chargement de la librairie discord.js

const client = new Discord.Client();  // Création du bot

client.on('ready', () => {
    console.log(`Je suis prêt !`); // On affiche un message de log dans la console au demarage
});

client.on('error', console.error); // Afficher les erreurs si il y en as

// token du bot
client.login(process.env.TOKEN);