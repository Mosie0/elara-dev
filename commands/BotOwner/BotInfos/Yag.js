const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry but you don't have the permissions to use this command.");
    let bicon = ("https://cdn.discordapp.com/avatars/204255221017214977/fcdfbdc43a2a3e836599b0c78a4c17a3.png?size=2048");
    let botembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .addField("How To Get the bot.", "https://bit.ly/2Hbk8K6", true)
        .addField("How To Get To the Website", "https://yagpdb.xyz/", true)
        .addField("The Bot Support Discord.", "https://discord.gg/GcpyYh3", true)
        .setThumbnail(bicon)



    message.channel.send(botembed);
    message.delete().catch();
}
module.exports.help = {
    name: "Yag"
}