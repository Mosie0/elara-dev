const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let VaLembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .setImage("https://cdn.discordapp.com/emojis/412329230924513290.gif?v=1");


    message.channel.send(VaLembed);
    message.delete().catch();
}
module.exports.help = {
    name: "thinking"

}