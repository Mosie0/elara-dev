const Discord = require("discord.js");
const config = require('../../config.js');
module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let string = '';
    bot.guilds.forEach(guild => {
    string += guild.name + '\n';})
    let bt = bot.user.username;
    let botembed = new Discord.RichEmbed()
        .setDescription("[Bot Information](https://discord.gg/hgsM86w)")
        .setColor("#000FF")
        .setThumbnail(bicon)
        .addField("Prefixes", `${config.prefix}`)
        .addField("Mention", bot.user, true)
        .addField(`Name`, bot.user.username, true)
        .addField(`Tag`, `\`${bot.user}\``, true)
        .addField(`ID`, bot.user.id, true)
        .addField(`Discriminator`, `#${bot.user.discriminator}`, true)
        .addField("Invite Link",  `[Bot Invite](https://discordapp.com/oauth2/authorize?client_id=${bot.user.id}&permissions=8&scope=bot)`, true)
        .addBlankField()
        .addField("To see other commands do", "**e!help**", true)
        .addField("Created On", "**June 9th 2018**", true)
        .addField("Servers In", string)
        .setFooter(`Creator of the Bot: ${bot.users.get(config.SC).tag}`, `${bot.users.get(config.SC).displayAvatarURL}`);
    message.channel.startTyping();
    message.channel.send(botembed);
    await message.channel.stopTyping();
}

module.exports.help = {
    name: "botinfo",
    names: "Botinfo"
}