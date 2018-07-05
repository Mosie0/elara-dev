const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const botembed = new Discord.RichEmbed()
        .setColor("#FF000")
        .setAuthor("Command Ran By: " + message.author.username, message.author.displayAvatarURL)
        .setDescription("Shutting Down :wave:")
        .setFooter("Shutting Down will take a few minutes for the bot to appear offline.", message.author.displayAvatarURL)
    const cantfindembed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .setDescription(`Can't Find the **modlogs** Channel to Post my Shutdown Message! **${bot.user.username}** Can't be shutdown without that Channel!`)
        .setFooter("Command Ran By: " + message.author.username, message.author.avatarURL);
    let alert = message.guild.channels.find('name', "modlogs");
    if (!alert) return message.channel.send(cantfindembed);
    console.log("Bot Has Gone Offline.");
    if (message.author.id !== "288450828837322764") return message.reply("Sorry But this is a Bot Owner Only Command.");
    await message.react("✅");
    await alert.send(botembed);
    message.delete(1000).catch();
    process.exit();
}
module.exports.help = {
    name: "shutdown"
}