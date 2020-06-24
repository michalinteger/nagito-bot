const Discord = require('discord.js');
const client = new Discord.Client();

const { token } = require("./config/config.js");

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    //client.channels.cache.get("725300214600171533").send("What is hope?");
});

client.on('message', msg => {
    if (msg.author.bot) {
        return
    } else {
        if ( msg.mentions.users.has( client.user.id ) ) {
            msg.reply("Hope is the only way.");
        } else {
            //client.channels.cache.get("725300214600171533").send("Hope is the only way.");
        }
    }
});

client.login(token);