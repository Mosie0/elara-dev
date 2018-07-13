const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let VaLembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .setImage("https://cdn.discordapp.com/avatars/288450828837322764/a_9da0205f2e4a0f15565046ad156ac839.gif?size=2048")
        .setFooter("SUPERCHIEFYT")



    message.channel.send(VaLembed);
    message.delete().catch();
}
module.exports.help = {
    name: "Super"

}