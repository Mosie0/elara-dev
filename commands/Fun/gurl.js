const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("SEND_MESSAGES")) return message.reply("Sorry but you don't have the permissions to use this command.");
    let bicon = ("");
    let botembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .setImage("https://cdn.discordapp.com/attachments/444028025932349441/445662962544410646/tenor_7.gif");



    message.channel.send(botembed);
    message.delete().catch();
}
module.exports.help = {
    name: "gurl"
}