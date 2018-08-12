const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    if (message.author.id !== "288450828837322764") return;
    let rUser = message.mentions.users.first();
    let reason = args.slice(1).join(' ');
    rUser.send(reason);
}
module.exports.help = {
    name: "dm",
    names: "Dm"
}
