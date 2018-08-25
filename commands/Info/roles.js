const Discord = require("discord.js");
module.exports.run = async (bot, msg, args) => {
    if (msg.guild.roles.size === 0) {
        return msg.channel.send('There are no roles on this server.');
    }
    else if (msg.guild.roles.sort((b, a) => { return a.position - b.position }).map(role => `<@&${role.id}>`).join("\n").length > 2000) {
        let rolenumber = msg.guild.roles.size;
        let s = msg.guild.roles.sort((b, a) => { return a.position - b.position }).map(role => `<@&${role.id}>`).join("\n")
        let i = Math.ceil(s.length / 2);
        let partOne = s.slice(0, i).trim();
        let partTwo = s.slice(i + 1, s.length).trim();
        let embed1 = new Discord.RichEmbed()
            .setColor(`#FF000`)
            .setTitle(`Current Server Roles [${rolenumber}]`)
            .setDescription(`${partOne}`)
        msg.channel.send(embed1);
        let embed2 = new Discord.RichEmbed()
            .setColor(`#FF000`)
            .setDescription(`${partTwo}`)
        msg.channel.send(embed2);
    }
    else {
        let embed = new Discord.RichEmbed()
            .setColor(`#FF000`)
            .setTitle(`Current Server Roles`)
            .setDescription(`${msg.guild.roles.map(role => role).join('|')}`)
        msg.channel.send(embed);
    }
}
module.exports.help = {
    name: "roles",
    names: "Roles"
}
