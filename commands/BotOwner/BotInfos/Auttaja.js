const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry but you don't have the permissions to use this command.");
    let bicon = ("https://cdn.discordapp.com/attachments/444028025932349441/444418519287857153/logo_color_light.png");
    let botembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .addField("How To Get Auttaja.", "https://bit.ly/2vnU2lH", true)
        .addField("How To Get To Auttaja's Website", "https://auttaja.io/", true)
        .addField("Auttaja's Support Discord.", "https://discord.gg/Wb52DJe", true)
        .setThumbnail(bicon)



    message.channel.send(botembed);
    message.delete().catch();
}
module.exports.help = {
    name: "Auttaja"
}