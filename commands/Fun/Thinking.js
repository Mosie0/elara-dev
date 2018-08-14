const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.guild.id !== "371105897570631691" && message.guild.id !== "424200844666208265") return;
    let VaLembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .setImage("https://cdn.discordapp.com/emojis/412329230924513290.gif?v=1");
    message.channel.send(VaLembed);
}
module.exports.help = {
    name: "thinking"

}