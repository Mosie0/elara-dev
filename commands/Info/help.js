const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .setDescription("This is the Help Information")
        .setTitle("Click Here to See all the Commands for the Bot!")
        .addField("Help Commands", "[Click Here](https://hastebin.com/uwudazirup.nginx)", true)
        .addField("Fun Commands", "[Click Here](https://hastebin.com/wutumekaza.nginx)", true)
        .addField("Moderation Commands", "[Click Here](https://hastebin.com/eqofemoquk.nginx)", true)
        .addField("Bot Owner Commands", "[Click Here](https://hastebin.com/sefuqonati.pl)", true)
        .setThumbnail(bot.user.displayAvatarURL)
        .setURL("https://hastebin.com/tozuroboxa.pl")
        .setTimestamp()
        .setFooter("Command Ran By: " + message.author.username, message.author.avatarURL)
    message.channel.send(botembed);
};


module.exports.help = {
    name: "help",
    names: "Help"
}