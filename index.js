const Discord = require('discord.js');
const client = new Discord.Client();
const dotenv = require("dotenv")
const fs = require("fs")

function _() {
    try {
        var file = require("./config/config.js");
        return file;
    } catch(error) {
        try {
            return dotenv.config().parsed;
        } catch(error) {
            console.log("A config file was not found or could not be loaded.");
            console.log("Please create a config file in ./config/config.js");
            console.log("An example can be found in ./examples");
            return 1;
        }
    }
};
var _ = _();
const { token } = _;
var { spam } = _; 
console.log(_)
delete _;
console.log(fs.readFileSync(".env", options = { encoding: "UTF8"}))
var boneMeme = "bone on the meat".split(" ");

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    //client.channels.cache.get("725300214600171533").send("What is hope?");
});

client.on('message', msg => {
    var noPingMsg = client.channels.cache.get(msg.channel.id);
    var profilePic = client.user.avatarURL(options = {format: "png", size: 4096});

    if (msg.author.bot) {
        return;
    } else if ( ( msg.mentions.users.has(client.user.id) || msg.mentions.users.has(client.user.tag) ) && msg.channel.type != "dm") {
        var cmd = msg.content.toLowerCase();

        if ( cmd == `<@!` + client.user.id + `> info`) {
            var _ = new Discord.MessageEmbed()
            .setThumbnail(profilePic)
            .setTitle("nagito-bot")
            .setColor("0x959595")
            .setAuthor("github.com/MinecraftPlayYT")
            .setDescription("HOPE IS THE ONLY WAY")
            .addField("Abandon despair", "Hope is the only way", inline = true)
            .setFooter("github.com/MinecraftPlayYT/nagito-bot", client.user.avatarURL(options = {format: "png", size: 32}));
            noPingMsg.send(msg, _);
            delete _;
        } else if ( cmd.includes("help") ) {
            msg.reply("HOPE ".repeat(320).trim());
        } else if ( cmd.includes("scary") ) {
            msg.reply(profilePic);
        } else if ( cmd.includes(boneMeme[0]) && cmd.includes(boneMeme[1]) && cmd.includes(boneMeme[2]) && cmd.includes(boneMeme[3]) ) {
            msg.reply("MEAT ON THE BONE");
            msg.reply("THE MEAT BONE ON");
            msg.reply("ON THE MEAT BONE");
            msg.reply("MEAT ON THE BONE");
        } else {
            msg.reply("Hope is the only way.");
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
