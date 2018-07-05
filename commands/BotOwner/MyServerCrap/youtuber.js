const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.author.id !== "288450828837322764") return message.reply("Sorry But this is a Bot Owner Only Command.");
    let bicon = ("https://cdn.discordapp.com/emojis/405944757869871105.gif?v=1");
    let botembed = new Discord.RichEmbed()
    .setColor("#000FF")
    .addField("Youtuber Discord's", "Listed Down Below")
    .addField("G-Rated Family Gaming", "https://discord.gg/tAZgvdd", true)
    .addField("GamerBears", "https://discord.gg/8UGhQSe", true)
    .addField("Seniac", "https://discord.gg/Seniac", true)
    .addField("ImaFlyNmidget", "https://discord.gg/ImaFlyNmidget", true)
    .addField("DarkJGaming", "https://discord.gg/CxGf6yY", true)
    .addField("CodePrime8", "https://discord.gg/CodePrime8", true)
    .addField("BunnyFilms1", "https://discord.gg/u3XEYXK", true)
    .addField("SkyTheGamer", "https://discord.gg/cva5b", true)
    .addField("Roblox News Channel", "https://discord.gg/RStWZcE", true)
    .addField("GamerBoyJJM", "https://discord.gg/AcwuBzM", true)
    .addField("Magikarp Films", "https://discord.gg/RyJU4Wa", true)
    .addField("DigDugPlays", "https://discord.gg/9pBE7hX", true)
    .setImage("https://cdn.discordapp.com/attachments/444028025932349441/444408933482758144/pizap_1.jpg");



message.channel.send(botembed);
message.delete().catch();
}
module.exports.help = {
    name: "Youtubers"
}    