const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry but you don't have the permissions to use this command.");
    let bicon = ("https://cdn.discordapp.com/avatars/172002275412279296/f5f65755f67ae1dc88d9bb271d0f5bef.png?size=2048");
    let botembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .addField("How To Get Tatsumaki.", "https://bit.ly/2l52L2R", true)
        .addField("How To Get To Tatsumaki's Website", "https://tatsumaki.xyz/dashboard", true)
        .addField("Tatsumaki's Support Discord.", "https://discord.gg/Tatsumaki", true)
        .setThumbnail(bicon)



    message.channel.send(botembed);
    message.delete().catch();
}
module.exports.help = {
    name: "Tat"
}