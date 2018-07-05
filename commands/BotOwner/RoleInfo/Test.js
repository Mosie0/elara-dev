const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.author.id !== "288450828837322764") return message.reply("Sorry but you don't have the permissions to use this command.");
    let bicon = ("");
    let botembed = new Discord.RichEmbed()
        .setDescription("Role **Owner**")
        .setColor("#00ffff")
        .addField("About The Role", "This Role is given to the Owner of the Server SUPERCHIEFYT")
        .addField("Can i get that role?", "Nope. lol this role is only given to the Owner of the Server.")
        .setThumbnail(message.guild.iconURL)
        .setImage("https://cdn.discordapp.com/attachments/444028025932349441/456604898298036234/MOSHED-2018-6-13-16-46-1.gif");
    message.channel.startTyping();
    message.channel.send(botembed);
    message.delete().catch();
    await message.channel.stopTyping();
}
module.exports.help = {
    name: "Test"
}