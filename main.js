const Discord = require('discord.js');
const client = new Discord.Client();

const { token, spam } = require("./config/config.js");

var boneMeme = "bone on the meat".split(" ");

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    //client.channels.cache.get("725300214600171533").send("What is hope?");
});

client.on('message', msg => {
    if (msg.author.bot) {
        return
    } else if ( ( msg.mentions.users.has(client.user.id) || msg.mentions.users.has(client.user.tag) ) && msg.channel.type != "dm") {
        var cmd = msg.content.toLowerCase();
        if ( cmd.includes("help") ) {
            msg.reply("HOPE ".repeat(320).trim())
        } else if ( cmd.includes("scary") ) {
            msg.reply(client.user.avatarURL(format = "png", size = 4096));
        } else if ( cmd.includes(boneMeme[0]) && cmd.includes(boneMeme[1]) && cmd.includes(boneMeme[2]) && cmd.includes(boneMeme[3]) ) {
            msg.reply("MEAT ON THE BONE");
            msg.reply("THE MEAT BONE ON");
            msg.reply("ON THE MEAT BONE");
            msg.reply("MEAT ON THE BONE");
        } else {
            msg.reply("Hope is the only way.");
        }
    } else if (spam) {
        client.channels.cache.get(msg.channel.id).send("Hope is the only way.");
    } else if ( msg.channel.type == "dm" ) {
        client.channels.cache.get(msg.channel.id).send("Hope is the only way.");
    }
});

client.login(token);
