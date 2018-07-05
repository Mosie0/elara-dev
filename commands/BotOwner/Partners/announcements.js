const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.author.id !== "288450828837322764") return message.reply("This is a Bot Owner Command Only!");
    let VaLembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .setDescription("This Chat is for the Partners to announce contests and announcements in their server if they want to :stuck_out_tongue: and Partners you can send links in this chat for the announcements/contests etc :stuck_out_tongue:")
        .setThumbnail(message.guild.iconURL)
        .setFooter("Message From SUPERCHIEFYT", message.guild.iconURL)




    message.channel.send(VaLembed);
    message.delete().catch();
}
module.exports.help = {
    name: "Announcements"

}