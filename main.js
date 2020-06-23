const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const path = require('path');    
const filePath = path.join(__dirname, 'start.html');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (bool(msg.content) === true) {
        msg.reply('Pong!');
    }
});

client.login('');