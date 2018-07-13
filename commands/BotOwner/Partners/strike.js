const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Sorry but you don't have the permissions to use this command.");
    let VaLembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .setAuthor("Owner's Strike & Savage ", "https://cdn.discordapp.com/attachments/444028025932349441/447700673967161344/6ed3faa8ed229ce9cde2231a2dadb88d.png")
        .setImage("https://cdn.discordapp.com/attachments/444028025932349441/447703140834476034/214f7789f838a84cbb0cc94656d7e36d-png.png")
        .setThumbnail("https://cdn.discordapp.com/attachments/444028025932349441/447700673967161344/6ed3faa8ed229ce9cde2231a2dadb88d.png")
        .setTitle("Welcome To Strike & Savage's Hangout! Be sure to enjoy being in the server!")
        .setURL("https://discord.gg/mF9SJV2")
        .addField("What does the server Provide?", ":boom: Welcome To Strike & Savage's Hangout!                                                               :boom:Be sure to enjoy being in the server!                                                                                                                                                                                  :boom:Friendly staff                                                                                                                         :boom: Nice Members                                                                                        :boom: A Friendly Community                                                                                                :boom: Giveaways                                                                                                          :boom: Music Channels: boom: And Much More!!!")
        .addField("Discord Invite", "https://discord.gg/mF9SJV2")



    message.channel.send(VaLembed);
    message.delete().catch();
}
module.exports.help = {
    name: "Strike"

}