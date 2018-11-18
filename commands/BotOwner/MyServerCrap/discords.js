const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.author.id !== "288450828837322764") return message.reply("Sorry But this is a Bot Owner Only Command.");
    let ranks1 = new Discord.RichEmbed()
.setColor("#1bf7f3")
.setTitle("Jonbn123's Discord")
.addField("Lumberjack, Default rank for all members of the Fan Group.")

    module.exports.help = {
    name: "discords",
    names: "Discords"
}
