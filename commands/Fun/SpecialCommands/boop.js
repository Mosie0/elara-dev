const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
        .setColor("#000FF")
        //.setImage("https://cdn.discordapp.com/attachments/444028025932349441/447035410846318593/tenor_2.gif")
        .setImage("https://media1.tenor.com/images/558b3577f8828bae6e2a5d9a24272582/tenor.gif?itemid=5691456")
        .setFooter("Boop")



    message.channel.send(embed);
    message.delete().catch();
    
}
module.exports.help = {
    name: "boop"

}