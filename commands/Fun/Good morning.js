const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("SEND_MESSAGES")) return message.reply("Sorry but you don't have the permissions to use this command.");
    let VALembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .setImage("https://cdn.discordapp.com/attachments/444028025932349441/446989751250059264/tenor_1.gif");



    message.channel.send(VALembed);
    message.delete().catch();
}
module.exports.help = {
    name: "gm"
}