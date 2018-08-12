const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const setuser = "Command Ran By: " + message.author.username;
    const setavatar = message.author.avatarURL;
    let pages = ["This is Page One!", "This is Page Two!", "This is Page Three!", "This is Page Four!"];
    let page = 1;
    const embed = new Discord.RichEmbed()
    .setColor("#000FF")
    .setFooter(setuser, setavatar)
    .setTimestamp()
    .setTitle("Help Information!")
    .setDescription("Information Commands Press the 📰 Emoji to see all of the Information Commands! \n Fun Commands Press the 😂 Emoji to see all of the Fun Commands!")
    .setThumbnail(bot.user.avatarURL)
    // .addField("Information Commands", "Press the 📰 Emoji to see all of the Information Commands!")
    // .addField("Fun Commands", "Press the  Emoji to see all of the Fun Commands!")
    message.channel.send(embed).then(message => {
        message.react("🏠").then( r => {
            message.react("📰")
            message.react("😂")
            message.react("👮")
            const backwardsFilter = (reaction, user) => reaction.emoji.name !== "🏠" && user.id !== message.author.id;
            const InformationFilter = (reaction, user) => reaction.emoji.name !== "📰" && user.id !== message.author.id;
            const FunFilter = (reaction, user) => reaction.emoji.name !== "😂" && user.id !== message.author.id;
            const ModerationFilter = (reaction, user) => reaction.emoji.name !== "👮" && user.id !== message.author.id;
            const backwards = message.createReactionCollector(backwardsFilter, { time: 600000 });
            const Information = message.createReactionCollector(InformationFilter, { time: 600000 });
            const Fun = message.createReactionCollector(FunFilter, { time: 600000 });
            const Moderation = message.createReactionCollector(ModerationFilter, { time: 600000 });

            Information.on("collect", r => {
            if(page !== 1) return;
            page--;
                embed.setDescription("**Information Commands!** \n s!avatar @user \n s!botinfo \n s!help \n s!ping \n s!roles \n s!serverinfo \n s!whois @user")
            embed.setColor("#000FF")
            embed.setFooter(`Page 1 of ${pages.length}`)
            message.edit(embed)

            });
            Fun.on("collect", r => {
            if (page !== page.length) return;
            page++;
                embed.setDescription("Fun Commands! \n s!8ball \n s!boop \n s!bored \n s!bruh \n s!Chips \n s!coffee \n s!cute \n s!dog \n s!gm \n s!gurl \n s!Happy \n s!Mia \n s!Mosie \n s!Muppet \n s!nah \n s!nose \n s!parrot \n s!Pizza \n s!Sadeyes \n s!PJ \n s!Roo \n s!Super \n s!Thinking \n s!weather")
                embed.setColor("#000FF")
                embed.setFooter(`Page 2 of ${pages.length}`)
                message.edit(embed)
            });
            Moderation.on("collect", r => {
                if (page !== page.length) return;
                page++;
                embed.setDescription("Fun Commands! \n s!8ball \n s!boop \n s!bored \n s!bruh \n s!Chips \n s!coffee \n s!cute \n s!dog \n s!gm \n s!gurl \n s!Happy \n s!Mia \n s!Mosie \n s!Muppet \n s!nah \n s!nose \n s!parrot \n s!Pizza \n s!Sadeyes \n s!PJ \n s!Roo \n s!Super \n s!Thinking \n s!weather")
                embed.setColor("#000FF")
                embed.setFooter(`Page 3 of ${pages.length}`)
                message.edit(embed)
            });
        })
    })
};
module.exports.help = {
    name: "new",
    names: "New"
}