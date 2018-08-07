module.exports.run = async (bot, message, args) => {
    if(message.member.hasPermission('MANAGE_SERVER')) return message.channel.send(`Sorry but you can't use this command!`)
    let riddleannounce = message.guild.channels.find('name', 'weekly-riddle-ask')
    if (!riddleannounce) return message.channel.send(`Can't find the **weekly-riddle-ask** Channel!`)
    riddleannounce.send(args.join(' '))
}
module.exports.help = {
    name: "riddle"
}