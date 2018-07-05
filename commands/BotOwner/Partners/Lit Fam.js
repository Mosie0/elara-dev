const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.author.id !== "288450828837322764") return message.reply("This is a Bot Owner Command Only!");
    let VaLembed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .setAuthor("Owner's Savage & iDicer ", "https://cdn.discordapp.com/icons/297872830488641536/872f93ac1aaa326c4f7352133bebf21b.webp?size=2048")
        .setImage("https://cdn.discordapp.com/attachments/444028025932349441/447555633835671583/pizap_11.png")
        .setThumbnail("https://cdn.discordapp.com/icons/297872830488641536/872f93ac1aaa326c4f7352133bebf21b.webp?size=2048")
        .setTitle("Welcome To Lit Fam Discord Server.")
        .setURL("https://discord.gg/xzWtMvd")
        .addField("What does the server Provide?", "》:boom:Level Up Roles                                                                       》:boom:Family Friendly Community                                                                                   》:boom:Open For Partnerships                                                                               》:boom:Self Assignable Roles                                                                                            》:boom:Music Bots                                                                                    》:boom:Fun Bots                                                                                                        》:boom:Friendly Staff                                                                                           》:boom:Lit Contests                                                                                          》:boom:Question of the Day")
        .addField("Discord Invite", "https://discord.gg/xzWtMvd")
        .setDescription("We are a community of people from all over the world & all ages who share our desire for all online games and the friendships we have created with each other.")



    message.channel.send(VaLembed);
    message.delete().catch();
}
module.exports.help = {
    name: "LitFam"

}