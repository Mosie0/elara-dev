const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry but you don't have the permissions to use this command.");
    let bicon = ("https://cdn.discordapp.com/attachments/444028025932349441/444418982716506112/2501400.gif");
    let botembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .addField("How To Get Rythm.", "https://bit.ly/2Jmtd3h", true)
        .addField("How To Get Rythm 2.", "https://bit.ly/2K10qBL", true)
        .addField("How To Get Rythm Canary.", "https://bit.ly/2Inm469", true)
        .addField("How To Get To Rythm's Website", "https://rythmbot.co/", true)
        .addField("Rythm's Support Discord.", "https://discord.gg/cf3tNMW", true)
        .setThumbnail(bicon)



    message.channel.send(botembed);
    message.delete().catch();
}
module.exports.help = {
    name: "Rythm"
}