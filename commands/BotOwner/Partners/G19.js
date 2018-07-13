const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Sorry but you don't have the permissions to use this command.");
    let VaLembed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .setAuthor("Owner [G19] StyledArc19", "https://cdn.discordapp.com/avatars/234046043036057601/977f1f34fd39d01a5a5bfe7737c2a2c5.png?size=2048")
        .setImage("https://cdn.discordapp.com/attachments/404368952244961290/447577194060054547/pizap_12.png")
        .setThumbnail("https://cdn.discordapp.com/avatars/234046043036057601/977f1f34fd39d01a5a5bfe7737c2a2c5.png?size=2048")
        .setTitle("Welcome To G19's Discord Server.")
        .setURL("https://discord.gg/ZgxyUFJ")
        .addField("What does the server Provide?", "》:boom:Music Bots                                                                        》:boom:Nice Chill Community                                                                    》:boom:Discord Suggestions")
        .addField("Discord Invite", "https://discord.gg/ZgxyUFJ");



    message.channel.send(VaLembed);
    message.delete().catch();
}
module.exports.help = {
    name: "G19"

}