const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.author.id !== "288450828837322764") return message.reply("This is a Bot Owner Command Only!");
    let bicon = ("https://cdn.discordapp.com/attachments/404847858915999759/447957814883909633/Mo_sie_Shadow_Head.png");
    let VaLembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .setAuthor("Owner Mo_sie", bicon)
        .setImage("https://cdn.discordapp.com/attachments/444028025932349441/448056058682802186/pizap_1.jpg")
        .setThumbnail(bicon)
        .setTitle(":wave: | Welcome to Mo_sie's Hangout!")
        .setURL("https://discord.gg/krXDXEM")
        .addField("What does the server Provide?", ":fire: Youtube Promotions                                                                                                                     :fire: Active Members and Staff                                                                  :fire: Friendly Members and Staff                                                                                                        :fire: Fun things to do within the server                                                                                                                       :fire: Moderators and fun                                                                                                                :fire: Fun voice channels you can talk with your friends in !                                                                                               :fire: Partnerships!                                                                                                                :fire: Group chats(Coming Soon)")
        .addField("Discord Invite", "https://discord.gg/krXDXEM")
        .setDescription("My server is best for everyone to talk and meet new people, or friends! You will always feel like you belong here with our friendly staff and active server! ");



    message.channel.send(VaLembed);
    message.delete().catch();
}
module.exports.help = {
    name: "Mosie"

}