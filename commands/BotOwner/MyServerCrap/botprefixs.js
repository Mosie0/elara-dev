const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.author.id !== "288450828837322764") return message.reply("Sorry But this is a Bot Owner Only Command.");
    let botembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .setDescription("The Current Prefixes for the Bots. in **Bot Testing**")
        .setThumbnail(message.guild.iconURL)
        .setTimestamp()
        .setFooter("Command Ran By: " + message.author.username, message.author.avatarURL)
        .addField("Marv Family", "Steve: $ \n Marv: m!! \n Marv Patreon: m! \n Marv Canary: > \n ", true)
        .addField("My Bots", "SUPERCHIEFYT: s! \n SUPERCHIEFYT Dev: S! \n BabyThor 2.0: s! \n BearBot: b! \n ", true)
        .addField("Auttaja Bots", "Auttaja: !! \n Auttaja Music: am.", true)
        .addField("Awesome Bots", "GAwesomeBot Dev: ?? \n Novabot: n! \n YAGPDB.xyz: - \n Dyno: ? \n ", true)
        .addField("Moderation Bots", "Nightbot: ! \n Modulo: m! \n Nitro: n! \n MEE6: ! \n ", true)
        .addField("Light Moderation Bots", "Nano: ! \n Wings: w. \n Rem: d! \n Sheepy: > \n Mantaro: -> \n Tatsumaki: t! \n Tesla: = \n Yui: + \n Miki: mi! \n PenguBot: p! \n TurtleBot: tb! \n UnbelievaBoat: u! \n MatBot: ; \n Sigma: >> \n ", true)
        .addField("Logging Bots", "Logger: %", true)
        .addField("Music Bots", "ErisBot: . \n Rythm: r! \n FredBoat: ;; \n AmazingBot: a!! \n TomBot: T! \n GnarBot: !? \n Astolfo: A! \n MedalBot: m! \n Spotify Search: s* \n DabBot: !!! \n ", true)
        .addField("Fun Bots", "PokeCord: p! \n AekaBot: ab! \n GamesROB: @GamesROB \n Now Live: -nl \n Not Live: !nl \n Fortnite Stats: !ftn \n Kibo: $ \n Coin Master: cm! \n G4M3R: g! \n TweetCord: t/ \n PatchBot: ?patchbot \n ", true)
    message.channel.send(botembed);
    message.delete().catch();
}
module.exports.help = {
    name: "prefixes"

}