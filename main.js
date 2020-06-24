const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const path = require('path')

var configContents = fs.readFileSync(filePath = path.join("./config.json"), encoding = 'utf-8');

const config = JSON.parse(configContents);

var token = config["token"];

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.user != "Nagito Komaeda#3709") {
        msg.reply('Hope is the only way.');
    }
});

client.login(token);