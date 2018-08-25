const snek = require('node-fetch'),
    moment = require('moment'),
    { MessageEmbed } = require('discord.js');
module.exports.run = async (bot, msg, args) => {
    try {
        const res = await snek(`https://discordbots.org/api/bots/${bot}`, { headers: { Authorization: process.env.DISCORDBOTLIST } }),
            info = await res.json(),
            infoEmbed = new MessageEmbed();

        infoEmbed
            .setColor(msg.guild ? msg.guild.me.displayHexColor : '#7CFC00')
            .setTitle(`Discord Bots Info for ${info.username}#${info.discriminator} (${info.clientid})`)
            .setURL(`https://discordbots.org/bot/${info.clientid}`)
            .setThumbnail(`https://images.discordapp.net/avatars/${info.clientid}/${info.avatar}.png`)
            .setDescription(info.shortdesc)
            .setFooter(`${info.username}#${info.discriminator} was submitted`)
            .setTimestamp(moment(info.date)._d)
            .addField('Default Prefix', info.prefix, true)
            .addField('Library', info.lib, true)
            .addField('Server Count', info.server_count, true) // eslint-disable-line camelcase
            .addField('Shards Count', info.shards.length, true)
            .addField('Invite Link', `[Click Here](${info.invite})`);

        return msg.embed(infoEmbed, `https://discordbots.org/bot/${info.clientid}`);
    } catch (err) {
        console.log(err)
        return msg.reply('an error occurred getting info from that bot, are you sure it exists on the website?');
    }

}
module.exports.help = {
    name: "botlookup"
}