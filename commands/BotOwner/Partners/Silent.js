const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.author.id !== "288450828837322764") return message.reply("This is a Bot Owner Command Only!");
    let VaLembed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .setAuthor("Owner SilentGamerPlayz", "https://cdn.discordapp.com/attachments/354374294869901313/449325332219035658/TGF.jpg")
        .setImage("https://cdn.discordapp.com/attachments/354374294869901313/449324910121058314/PartnerBanner.png")
        .setThumbnail("https://cdn.discordapp.com/attachments/354374294869901313/449325332219035658/TGF.jpg")
        .setTitle("Welcome To The Gaming Family's Discord Server.")
        .setURL("https://discord.gg/8dTVWrg")
        .setDescription("The Gaming Family is a fun, family friendly community! We have lots of games and we are adding more as we go!")
        .addField("What does the server Provide?", "-Game nights                                                                                                                    -YouTuber ranks                                                                                                                    -Activity roles                                                                                                                    -Family Friendly                                                                                                                                                                                   -Great staff                                                                                                                    -Partnerships                                                                                              -Music, and much much more!")
        .addField("Discord Invite", "https://discord.gg/8dTVWrg")



    message.channel.send(VaLembed);
    message.delete().catch();
}
module.exports.help = {
    name: "Silent"

}