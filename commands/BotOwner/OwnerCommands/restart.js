const Discord = require("discord.js");
const fs = require('fs');

module.exports.run = async (bot, message, args) => {
    let modlogs = bot.channels.get('468372950266150916')
    if(!modlogs) return;
    let botembed = new Discord.RichEmbed()
    .setColor("#000FF")
    .addField("Restart Issued", `<@${message.author.id}> Has Restarted the Bot!`)
    .setThumbnail(bot.user.avatarURL)
    .setFooter("Command Ran By: " + message.author.username, message.author.avatarURL)
    .setTimestamp()
    console.log(`Bot Has Been Restart By: ` + message.author.username);
    if (message.author.id !== "288450828837322764") return message.reply("Sorry But this is a Bot Owner Only Command.");
    await message.react("✅");
    await modlogs.send(botembed);
    message.delete(1000).catch();
    fs.writeFile('./log.json', JSON.stringify(`Bot has Been Restarted.`), (err) => {
        if (err) console.log(err)
    });
    process.exit();

}
module.exports.help = {
    name: "restart"
}