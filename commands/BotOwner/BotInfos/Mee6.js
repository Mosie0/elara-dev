const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry but you don't have the permissions to use this command.");
    let bicon = ("https://cdn.discordapp.com/avatars/159985870458322944/8c7187aa71f15ba271c85bfece9b067e.png?size=2048");
    let botembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .addField("How To Get MEE6.", "https://bit.ly/2HHmXDt", true)
        .addField("How To Get To MEE6's Website", "https://mee6.xyz/servers", true)
        .addField("MEE6's Support Discord.", "https://discord.gg/MEE6", true)
        .setThumbnail(bicon)



    message.channel.send(botembed);
    message.delete().catch();
}
module.exports.help = {
    name: "Mee6"
}