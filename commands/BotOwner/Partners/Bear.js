const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.author.id !== "288450828837322764") return message.reply("This is a Bot Owner Command Only!");
    let bearembed = new Discord.RichEmbed()
        .setColor("#00FFF5")
        .setAuthor("Owner TheGiraffeHouse", "https://cdn.discordapp.com/attachments/444028025932349441/451759247953494027/8ffe7ee1532bb827ac83904fde687092.png")
        .setImage("https://cdn.discordapp.com/attachments/437036424953593867/451495878713147394/image.png")
        .setThumbnail("https://cdn.discordapp.com/attachments/437036424953593867/451490935549853697/image.jpg")
        .setTitle("Welcome To Edward Bear And Friends Discord Server.")
        .setURL("https://discord.gg/dPRN2Dm")
        .addField("What does the server Provide?", "-Weekly Game Nights :video_game:\n -Great Community :family:\n -Kind Members :grinning:\n -Best Staff :trophy:\n -Loyal Friends:exclamation:\n -A Chance to Meet Your Future Best Friends:couple_with_heart:\n -Active Members:regional_indicator_o::regional_indicator_n::regional_indicator_l::regional_indicator_i::regional_indicator_n::regional_indicator_e:\n -PG Community :regional_indicator_p: :regional_indicator_g:\n -Welcoming Members :wave:")
        .addField("Discord Invite", "https://discord.gg/dPRN2Dm")



    message.channel.send(bearembed);
    message.delete().catch();
}
module.exports.help = {
    name: "Bear"

}