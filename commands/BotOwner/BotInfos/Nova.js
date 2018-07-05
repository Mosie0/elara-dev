const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry but you don't have the permissions to use this command.");
    let bicon = ("https://cdn.discordapp.com/avatars/293587362569519104/1ee1174ab578c31dc4c90dea8350ed3d.png?size=2048");
    let botembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .addField("How To Get Novabot.", "https://bit.ly/2HJUblY", true)
        .addField("How To Get To Novabot's Admin Panel", "https://bit.ly/2ETRuLv", true)
        .addField("Novabot's Support Discord.", "https://discord.gg/xDcqjCs", true)
        .setThumbnail(bicon)



    message.channel.send(botembed);
    message.delete().catch();
}
module.exports.help = {
    name: "Nova"
}