const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("SEND_MESSAGES")) return message.reply("Sorry but you don't have the permissions to use this command.");
    let bicon = ("");
    let botembed = new Discord.RichEmbed()
        .setColor("#800080")
        .setImage("https://cdn.discordapp.com/emojis/410906831465218059.png?v=1");



    message.channel.send(botembed);
    message.delete().catch();
}
module.exports.help = {
    name: "bruh"
}