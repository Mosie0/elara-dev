const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.author.id !== "288450828837322764") return;
    let newbotname = args.join(" ");
    bot.user.setUsername(newbotname);
    await message.reply(`Username has been changed! My New Name is ${bot.user}`);
}

module.exports.help = {
    name: "setname",
    names: "Setname"
}