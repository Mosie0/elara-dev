const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let Valembed = new Discord.RichEmbed()
        .setColor("#800080")
        .setFooter("Quote From VAL")
        .setImage("https://cdn.discordapp.com/attachments/444028025932349441/445660380920938516/2417417.gif");



    message.channel.send(Valembed);
    message.delete().catch();
}
module.exports.help = {
    name: "Muppet"
}