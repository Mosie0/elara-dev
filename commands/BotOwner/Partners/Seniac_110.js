const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.author.id !== "288450828837322764") return message.reply("This is a Bot Owner Command Only!");
    let VaLembed = new Discord.RichEmbed()
        .setColor("#8B0000")
        .setAuthor("Owners Seniac_110 & Mo_sie", "https://cdn.discordapp.com/attachments/388961580420694016/448836693882175498/Seniac.png")
        .setImage("https://cdn.discordapp.com/attachments/388961580420694016/448837343009570826/pizap_2.jpg")
        .setThumbnail("https://cdn.discordapp.com/attachments/388961580420694016/448836693882175498/Seniac.png")
        .setTitle("Welcome To Seniac_110 & Mo_sie's Discord Server.")
        .setURL("https://discord.gg/KgVRqp")
        .addField("What does the server Provide?", ":family: A Friendly Community!                                                                  :up: Level Up Bot                                                                       :tada: Giveaways!                                                                      :telephone: General Voice Chat!")
        .addField("Discord Invite", "https://discord.gg/KgVRqp")
        .setDescription("Gaming, Community, Friendly and stuff this server is not active we are looking for all members are active! and much more! We do Voice Chat, Gaming chat and about roblox!! I hope you guys have a good day!!")



    message.channel.send(VaLembed);
    message.delete().catch();
}
module.exports.help = {
    name: "Seniac_110"

}