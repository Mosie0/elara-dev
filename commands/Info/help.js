const Discord = require("discord.js");
const config = require('../../config.js')
module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
    .setColor(`RANDOM`)
    .setThumbnail(bot.user.displayAvatarURL)
    .addField(`Prefixes for the bot`, `${config.prefix}`)
    .setTimestamp()
    .setFooter("Command Ran By: " + message.author.username, message.author.avatarURL)
    message.channel.send(botembed);
};


module.exports.help = {
    name: "help",
    names: "Help"
}