const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Sorry but you don't have the permissions to use this command.");
    let bicon = ("https://cdn.discordapp.com/attachments/402281881669861400/441582951432716288/Db4AOqxXUAAISfK.png");
    let botembed = new Discord.RichEmbed()
    .setTitle("Welcome Ibotmealot's Hangout!")
    .setColor("#00FFF5")
    .setDescription("**This server is for everyone to meet and talk to new people or others they have already met. Everyone within staff will try their best to keep everything under control, solve problems and make sure you, as a member, are comfortable. Hope you enjoy being apart of our community!**")
    .setURL("https://discord.gg/zbZKWKa")
    .setThumbnail("https://cdn.discordapp.com/attachments/350490340613947392/447450274009841664/image.jpg")
    .setImage("https://cdn.discordapp.com/attachments/350490340613947392/447452380850683905/pizap_7.png")
    .addField("What does the server Provide?", "Friendly Staff, Active Server, Partnerships, Self Assignable Roles!...")
    .addField("What the server has.", " 》:boom:Open For Partnerships                                                   》:boom:Self Assignable Roles                                                                   》:boom:Active Memebers and Staff                                                                    》:boom:Music Bots                                                                                》:boom:Anti Spam, Anti Advertise, Anti Raid System                                                                             》:boom:Many More Stuff Is Coming! ")
    .addField("Discord Invite.", "https://discord.gg/zbZKWKa")
    .setAuthor("Owner Ibotmealot","https://cdn.discordapp.com/attachments/350490340613947392/447450274009841664/image.jpg")




    message.channel.send(botembed);
    message.delete().catch();
}
module.exports.help = {
    name: "Ibot"

}