const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
    .setColor("#800080")
    .setImage("https://cdn.discordapp.com/emojis/414344149186248705.gif?v=1");
    message.channel.send(botembed);
    message.delete().catch();
}
module.exports.help = {
    name: "Happy"

}