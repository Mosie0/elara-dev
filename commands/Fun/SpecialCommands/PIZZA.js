const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("SEND_MESSAGES")) return message.reply("Sorry but you don't have the permissions to use this command.");
    let botembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .setImage("https://cdn.discordapp.com/attachments/444028025932349441/445640610808856606/tenor_4.gif");
    message.channel.send(botembed);
    message.delete().catch();
}
module.exports.help = {
    name: "Pizza"
}