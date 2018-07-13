const Discord = require("discord.js");

module.exports.run = async (bot,message,args) =>{
    let bicon = ("https://cdn.discordapp.com/attachments/444028025932349441/446291474221629440/tenor_16.gif");
    let botembed = new Discord.RichEmbed()
    .setColor("#000FF")
    .setFooter("BORED")
    .setImage(bicon);

message.delete().catch()
message.channel.send(botembed);
}
module.exports.help = {
    name: "bored"
};