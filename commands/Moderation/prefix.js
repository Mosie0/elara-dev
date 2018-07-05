const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    const nopermembed = new Discord.RichEmbed()
    .setColor("#FF0000")
    .setDescription(":x: You need the Manage Server Permission to Change the Prefix!")
    .setFooter("Command Ran By: " + message.author.username, message.author.avatarURL)
    if (!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send(nopermembed);
    if (!args[0] || args[0 == "help"]) return message.reply("Usage: s!prefix <desired prefix here>");

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

    prefixes[message.guild.id] = {
        prefixes: args[0]
    };

    fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
        if (err) console.log(err)
    });

    let sEmbed = new Discord.RichEmbed()
        .setColor("#000FF")
        .setTitle("Prefix Set!")
        .setDescription(`Set to ${args[0]}`);

    message.channel.send(sEmbed);
    message.reactMessage("✅");

}

module.exports.help = {
    name: "prefix"
}