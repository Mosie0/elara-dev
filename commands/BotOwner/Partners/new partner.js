const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.author.id !== "288450828837322764") return message.reply("This is a Bot Owner Command Only!");
    let VaLembed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .setAuthor("Owner ", "")
        .setImage("")
        .setThumbnail("")
        .setTitle("Welcome To  Discord Server.")
        .setURL("")
        .addField("What does the server Provide?", "")
        .addField("Discord Invite", "")



    message.channel.send(VaLembed);
    message.delete().catch();
}
module.exports.help = {
    name: "New Partner"

}