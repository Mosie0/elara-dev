const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry but you don't have the permissions to use this command.");
    let bicon = ("https://cdn.discordapp.com/avatars/298822483060981760/c5f04275e99defe458fc7ebbef0d5e72.png?size=2048");
    let botembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .addField("How To Get Logger bot's.", "https://bit.ly/2voS0Si", true)
        .addField("How To Get To Logger bot's Website", "https://whatezlife.com/", true)
        .addField("Logger bot's Support Discord.", "https://discord.gg/dYmudv3", true)
        .setThumbnail(bicon)



    message.channel.send(botembed);
    message.delete().catch();
}
module.exports.help = {
    name: "Logger"
}