const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry but you don't have the permissions to use this command.");
    let bicon = ("https://cdn.discordapp.com/avatars/289989751950409728/0f8d5ce21ca10de524f6c33c280f7756.png?size=2048");
    let botembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .setDescription("Just some info this bot only Moderatates Photos and you can't control it besides with the channel permissions in the server.")
        .addField("How To Get Content Moderator.", "https://bit.ly/2HFY3HC", true)
        .addField("How To Get To Bot's site", "https://bit.ly/2vZCjRE", true)
        .setThumbnail(bicon)



    message.channel.send(botembed);
    message.delete().catch();
}
module.exports.help = {
    name: "ImageModerator"
}