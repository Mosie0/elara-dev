const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("SEND_MESSAGES")) return message.reply("Sorry but you don't have the permissions to use this command.");
    let VaLembed = new Discord.RichEmbed()
        .setColor("#800080")
        .setImage("https://cdn.discordapp.com/attachments/444028025932349441/445664707567812628/tenor_8.gif")
        .setFooter("Roo <3", "https://cdn.discordapp.com/attachments/444028025932349441/445664707567812628/tenor_8.gif")



    message.channel.send(VaLembed);
    message.delete().catch();
}
module.exports.help = {
    name: "Roo"

}