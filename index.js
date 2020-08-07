const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
const commandCtl = require("./handlers/command.handler.js");

function _() {
    try {
        var file = require("./config/config.js");
        return file;
    } catch(error) {
        console.log("A config file was not found or could not be loaded.");
        throw "FileNotFoundError";
    }
}

function loadCommands() {
    commands = require("./handlers/command.handler.js");
}

var _ = _();
const { token } = _;
var spam = false;
delete _;

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    //client.channels.cache.get("725300214600171533").send("What is hope?");
    if (spam) {
        console.log("Spamming is enabled!");
    }
    var profilePic = client.user.avatarURL(options = {format: "png", size: 4096});
    var botInformationEmbed = new Discord.MessageEmbed()
    .setThumbnail(profilePic)
    .setTitle("nagito-bot")
    .setColor("0x959595")
    .setAuthor("Nagito Komaeda")
    .setDescription("HOPE IS THE ONLY WAY")
    .addField("Author", "MinecraftPlayYT#8550", inline = false)
    .addField("Author's GitHub", "github.com/MinecraftPlayYT", inline = false)
    .setFooter("github.com/MinecraftPlayYT/nagito-bot", client.user.avatarURL(options = {format: "png", size: 32}));
    var boneMeme = "bone on the meat".split(" ");
    //eval(commandCtl.loadCommands()); //Loads commands
});

client.on('message', msg => {
    var noPingMsg = client.channels.cache.get(msg.channel.id);

    if (msg.author.bot) {
        return;
    } else if ( ( msg.mentions.users.has(client.user.id) || msg.mentions.users.has(client.user.tag) ) && msg.channel.type != "dm") {
        let cmd = msg.content.toLowerCase().split(" ");

        if ( cmd == "<@!" + client.user.id + ">") {
            switch (cmd[1]) {
                case "info":        
                    noPingMsg.send(msg, botInformationEmbed);
                    console.log(msg.author.username + " asked for info.")
                default:
                    //msg.reply("Hope is the only way.");
            }
        } else if ( cmd.includes("help") ) {
            msg.reply("HOPE ".repeat(320).trim());
        } else if (
            cmd.includes("spear") &&
            cmd.includes("see")
        ) { // Oh my go i think there's a spear there
            msg.reply(new Discord.MessageAttachment("./assets/oof.gif"));
        } else if ( cmd.includes("scary") ) {
            msg.reply(profilePic);
        } else if (
            cmd.includes(boneMeme[0]) &&
            cmd.includes(boneMeme[1]) &&
            cmd.includes(boneMeme[2]) && 
            cmd.includes(boneMeme[3])
        ) { // Where would the weapon be?
            msg.reply("MEAT ON THE BONE");
            msg.reply("THE MEAT BONE ON");
            msg.reply("ON THE MEAT BONE");
            msg.reply("MEAT ON THE BONE");
        } else {
            
        }

    } else if (spam) {
        noPingMsg.send("Hope is the only way.");
    } else if ( msg.channel.type == "dm" ) {
        noPingMsg.send("Hope is the only way.");
    } else {
        return;
    }

});

client.login(token);
