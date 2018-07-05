const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry but you don't have the permissions to use this command.");
    let bicon = ("https://cdn.discordapp.com/emojis/405944757869871105.gif?v=1");
    let botembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .setDescription("!! IMPORTANT !!")
        .addField("Info", "Just a warning what happen's in the Support Bot's Discord Server's this staff and myself have no control over their rule's apply not our's")
        .setThumbnail(bicon)



    message.channel.send(botembed);
    message.delete().catch();
}
module.exports.help = {
    name: "botrules"
}