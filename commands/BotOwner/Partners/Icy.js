const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Sorry but you don't have the permissions to use this command.");
    let bicon = ("https://cdn.discordapp.com/avatars/261249219812261888/a_6886d95b05a6ff89ae4fc003ddaa88ff.gif?size=2048");
    let VaLembed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .setAuthor("Owner IcyBlaze", bicon)
        .setImage("https://cdn.discordapp.com/attachments/425532605509795851/448432846835679232/pizap.jpg")
        .setDescription("Join IcySquad Today! Here we offer fun bots like Ryhtm and my bot IcyBot  We also have cool YouTubers in server like me :smile: (Cough sub to IcyBlaze on yt) We also have economy! And we have cool people like me and my friend, Ryan but mainly me being coolest person EggsDee")
        .setThumbnail(bicon)
        .setTitle("Welcome To IcyBlaze's Discord Server.")
        .setURL("https://discord.gg/CaNXvMN")
        .addField("What does the server Provide?", " 》:boom:Friendly Server                                                                                          》:boom:Music Bots                                                                                                》:boom:Fun Bots                                                                                                》:boom:Friendly Staff                                                                                                                                   》:boom:Fortnite roles")
        .addField("Discord Invite", "https://discord.gg/CaNXvMN")



    message.channel.send(VaLembed);
    message.delete().catch();
}
module.exports.help = {
    name: "Icy"

}