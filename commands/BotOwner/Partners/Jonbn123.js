const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.author.id !== "288450828837322764") return message.reply("This is a Bot Owner Command Only!");
    let VaLembed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .setAuthor("Owner Jonbn123", "https://cdn.discordapp.com/avatars/244271175608303616/574a365d8529abda6a0b1d704cc1c102.png?size=2048")
        .setImage("https://cdn.discordapp.com/attachments/444028025932349441/447468205271941130/pizap_8.png")
        .setThumbnail("https://cdn.discordapp.com/avatars/244271175608303616/574a365d8529abda6a0b1d704cc1c102.png?size=2048")
        .setTitle("Welcome To Jonbn's Discord Server.")
        .setURL("https://discord.gg/nRv7nnW")
        .addField("What does the server Provide?", " 》:boom:A Family Friendly Environment                                                                       》:boom:Level up Roles                                                                          》:boom:Voice Chat's                                                                                            》:boom:Game Nights                                                                                        》:boom:Karaoke                                                                                                      》:boom:Q&A's")
        .addField("Discord Invite", "https://discord.gg/nRv7nnW")



    message.channel.send(VaLembed);
    message.delete().catch();
}
module.exports.help = {
    name: "Jonbn"

}