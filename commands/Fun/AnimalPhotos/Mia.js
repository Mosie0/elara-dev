const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("SEND_MESSAGES")) return message.reply("Sorry but you don't have the permissions to use this command.");
    let bicon = ("https://cdn.discordapp.com/attachments/402281881669861400/441582951432716288/Db4AOqxXUAAISfK.png");
    let VaLembed = new Discord.RichEmbed()
        .setColor("#800080")
        .setImage(bicon)
        .setFooter("MIA!!💖💖💖", bicon)



    message.channel.send(VaLembed);
    message.delete().catch();
}
module.exports.help = {
    name: "Mia"

}