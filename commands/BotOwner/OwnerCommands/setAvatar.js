const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let messageauthor = message.author;
    let modlogs = bot.channels.get(process.env.LOGCHANNEL);
    if (message.author.id !== "288450828837322764") return message.react('❌')
    let image = message.attachments.first().url;
    bot.user.setAvatar (image);
    let embed = new Discord.RichEmbed()
    .setColor(`RANDOM`)
    .setTitle(`Profile Photo Change Issued`)
    .setDescription(`${messageauthor} Has Changed My Profile Photo!`)
    .setImage(image)
    await modlogs.send(embed)
}
module.exports.help = {
    name: "setavatar",
    names: "SetAvatar"
}