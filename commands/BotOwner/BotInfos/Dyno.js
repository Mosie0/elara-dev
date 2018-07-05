const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry but you don't have the permissions to use this command.");
    let bicon = ("https://cdn.discordapp.com/avatars/347378090399236096/cdacb7ecadba5177f2fda86128c5175e.png?size=2048");
    let botembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .addField("How To Get Dyno.", "https://bit.ly/2evtLX3", true)
        .addField("How To Get To Dyno's Admin Panel", "https://www.dynobot.net/", true)
        .addField("Dyno's Support Discord.", "https://discord.gg/Dyno", true)
        .addField("How To Get Dyno Premium", "https://www.patreon.com/dyno", true)
        .setThumbnail(bicon)



    message.channel.send(botembed);
    message.delete().catch();
}
module.exports.help = {
    name: "Dyno"
}