const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
const Embed = new Discord.RichEmbed()
.setColor(`#FF000`)
.setDescription(`${message.author} Are you talking about the Worlds Famous NEV?..... <@285663216770744321>`)
message.channel.send(Embed);
}
module.exports.help = {
    name: "Nev"
}