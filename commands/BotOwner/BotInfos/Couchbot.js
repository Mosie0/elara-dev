const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry but you don't have the permissions to use this command.");
    let bicon = ("https://cdn.discordapp.com/avatars/418438671486681098/c09c727ded2fa1933ea85c81c128c17d.png?size=2048");
    let botembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .addField("Couchbot's Bot Link", "https://bit.ly/2qHLssi", true)
        .addField("Couchbot's Bot Commands", "https://bit.ly/2HHkUPQ", true)
        .addField("Couchbot's Support Discord.", "https://discord.gg/ADRpuJu", true)
        .addField("How To Get Couchbot", "https://bit.ly/2HyGrfY", true)
        .setThumbnail(bicon)
        .setFooter("Owner Of Couchbot dawgeth#1234", "https://cdn.discordapp.com/avatars/93015586698727424/dec06d6a86fda9ca5a7c5c66cce905a3.png?size=2048")



    message.channel.send(botembed);
    message.delete().catch();
}
module.exports.help = {
    name: "Couchbot"
}