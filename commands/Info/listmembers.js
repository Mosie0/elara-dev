const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    let roleName = message.content.split(" ").slice(1).join(" ");
    let membersWithRole = message.guild.members.filter(member => {
    return member.roles.find("name", roleName);
    }).map(member => {return member.user;})
    let embed = new Discord.RichEmbed()
    .setTitle(`Users With the **${roleName}** Role`)
    .setDescription(`${membersWithRole.join('\n')}`)
    .setColor(`#000FF`)
    message.channel.send(embed)
}
module.exports.help = {
    name: "members",
    aliases: "Members"
}