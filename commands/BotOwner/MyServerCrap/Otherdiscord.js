const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.author.id !== "288450828837322764") return message.reply("Sorry But this is a Bot Owner Only Command.");
    let bicon = ("https://cdn.discordapp.com/emojis/405944757869871105.gif?v=1");
    let botembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .addField("Other Discord Servers.", "Listed Down Below")
        .addField("Creativerse Fan Discord.", "https://discord.gg/eUERDFP", true)
        .addField("Xander's Discord", "https://discord.gg/6j7GkFR", true)
        .addField("Pie_Nation's Discord", "https://discord.gg/tqUAF4", true)
        .addField("DragonRaid's Discord", "https://discord.gg/cwgbQgY", true)
        .addField("Lit Fam Gaming Discord", "https://discord.gg/pxPa4Hb", true)
        .addField("Fifteam Discord", "https://discord.gg/8uKAuzH", true)
        .addField("CrypticOmission's Discord", "https://discord.gg/G7CBfeZ", true)
        .addField("Amy's Discord", "https://discord.gg/7mh7tfR", true)
        .addField("Ibotmealot's Discord", "https://discord.gg/zbZKWKa", true)
        .addField(`DaxSquad Discord`, "https://discord.gg/hHQMwt7", true)
        .addBlankField()
        .addField("Lumber Related Discord's", "Listed Down Below")
        .addField("Lumber Chat Discord", "https://discord.gg/2TC4EKY", true)
        .addField("Lumber Tycoon Relations Discord ", "https://discord.gg/s6TMRNN", true)
        .addBlankField()
        .addField(`Global Emoji Servers`, `Listed Down Below`)
        .addField(`Slippy's Dream Worlds`, `https://discord.gg/sa5kSUy \n https://discord.gg/4uQG5BD`, true)
        .addField(`Lulurd's Hideout`, `https://discord.gg/3XtG2DQ`, true)
        .addField(`CommunityLegends`, `https://discord.gg/3NeVJjc`, true)
        .addBlankField()
        .addField("Official Discord Servers(Ran By Discord Staff Members)", "Listed Down Below")
        .addField("Official Discord Events","https://discord.gg/events", true)
        .addField("Discord Developers","https://discord.gg/discord-developers", true)
        .addField("Discord Testers", "https://discord.gg/discord-testers", true)
        .addField("Discord Feedback", "https://discord.gg/discord-feedback", true)
    message.channel.send(botembed);
    message.delete().catch();
}
module.exports.help = {
    name: "OtherDiscords"
}