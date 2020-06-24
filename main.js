const Discord = require('discord.js');
const client = new Discord.Client();

const { token, spam } = require("./config/config.js");

var boneMeme = "bone on the meat".split(" ");

function sendMsg(text, ping = false, context = null) {
    if (ping) {
        msg.reply(text)
    } else {
        client.channels.cache.get(msg.channel.id).send(text)
    }
    if ( context != null ) {
        console.log(context)
    }
}

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    //client.channels.cache.get("725300214600171533").send("What is hope?");
});

client.on('message', msg => {
    if (msg.author.bot) {
        return;
    } else if ( ( msg.mentions.users.has(client.user.id) || msg.mentions.users.has(client.user.tag) ) && msg.channel.type != "dm") {
        var cmd = msg.content.toLowerCase();

        if ( cmd == `@${AbortController} info`) {
            //reserved
        } else if ( cmd.includes("help") ) {
            sendMsg("HOPE ".repeat(320).trim(), ping = true);
        } else if ( cmd.includes("scary") ) {
            sendMsg(client.user.avatarURL(options = {format: "png", size: 4096}), ping = true);
        } else if ( cmd.includes(boneMeme[0]) && cmd.includes(boneMeme[1]) && cmd.includes(boneMeme[2]) && cmd.includes(boneMeme[3]) ) {
            sendMsg("\nMEAT ON THE BONE\nTHE MEAT BONE ON\nON THE MEAT BONE\nMEAT ON THE BONE", ping = true)
        } else {
            sendMsg("Hope is the only way.", ping = true);
        }

    } else if (spam) {
        sendMsg("Hope is the only way.");
    } else if ( msg.channel.type == "dm" ) {
        sendMsg("Hope is the only way.");
    } else {
        return;
    }

});

client.login(token);
