const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.author.id !== "288450828837322764") return message.reply("Sorry But this is a Bot Owner Only Command.");
    let bicon = ("https://cdn.discordapp.com/emojis/405944757869871105.gif?v=1");
    let botembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .setThumbnail(bicon)
        .setDescription("IMPORTANT")
        .addField("Discord links for Other Discords", "If you want your server added dm me and Ask me to put your discord server in this list")
        .addBlankField()
        .addField("Information", "The Link's posted here what goes on in these servers we have no control over. Remember inside these discord servers their rules apply not ours. You Have Been Warned. ")
        .addBlankField()
        .addField("Friend's Discord Servers", "Listed Down Below")
        .addBlankField()
        .addField("Caittlin's Discord", "https://discord.gg/wfvWpcW", true)
        .addField("RHG'S Discord", "https://discord.gg/WUTAaSW", true)
        .addField("Cameron's Discord", "https://discord.gg/rg5XKMZ", true)
        .addField("Internal Sephus's Discord", "https://discord.gg/kDUecZD", true)
        .addField("Spenny's Discord", "https://discord.gg/UQ3CkvE", true)
        .addField("TruckerDenmark's Discord", "https://discord.gg/6M5xE9Q", true)
        .addField("Mo_sie's Discord", "https://discord.gg/krXDXEM", true)
        .addField("Icy's Discord", "https://discord.gg/wVZTjkm", true)
        .addField("Trevaless's Discord", "https://discord.gg/z3HsPa8", true)
        .addField("Pokemonman's Discord", "https://discord.gg/9QBegq7", true)
        .addField("Nivenia's Discord", "https://discord.gg/CVuaS", true)
        .addField("Strike's Discord", "https://discord.gg/cFC857N", true)
        .addField("CocoBananas Discord", "https://discord.gg/GepPnzE", true)
        .addField("Jonbn123's Discord", "https://discord.gg/HbYx6XE", true)
    
    
        message.channel.send(botembed);
    message.delete().catch();
}
module.exports.help = {
    name: "Friends"
}