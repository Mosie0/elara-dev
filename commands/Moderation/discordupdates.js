const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_SERVER")) return;
    let announce = message.guild.channels.find('name', 'discord-updates');
    let botembed = new Discord.RichEmbed()
        .setColor(`#FF000`)
        .setTitle(`New ${args[0]} Update!`)
        .setDescription(args.join(' ').slice(args[0]))
        .setAuthor(`${message.guild.name}`, `${message.guild.iconURL}`)
        .setFooter(`Announcement From ${message.author.username}`, message.author.avatarURL)
    announce.send(botembed);
    message.delete().catch();
}
module.exports.help = {
    name: "change"
}