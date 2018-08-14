const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.guild.id !== "371105897570631691" && message.guild.id !== "424200844666208265") return;
    let VaLembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .setImage("https://cdn.discordapp.com/avatars/288450828837322764/a_9da0205f2e4a0f15565046ad156ac839.gif?size=2048")
        .setFooter("SUPERCHIEFYT")
    message.channel.send(VaLembed);
}
module.exports.help = {
    name: "Super"

}