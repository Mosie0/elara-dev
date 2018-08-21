//=============================================================================================================================================================================================
// Start of the bot requirements etc.

const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
let cooldown = new Set();
let cdseconds = 2;
bot.login(process.env.BOT_TOKEN);

// End of the Bot Requirements etc.
//=============================================================================================================================================================================================
// Start Of the bot.on Messages.

bot.on("ready", async () => {
        const Discord = require('discord.js')
    let embed = new Discord.RichEmbed()
        .setColor(`RANDOM`)
        .setTimestamp()
        .setFooter(`Connected At`)
        .setDescription(`${bot.user} Has Successfully Connected!`)
    bot.users.get('288450828837322764').send(embed);
    console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
    bot.user.setPresence({
        game: {
            name: `Prefix e! or E! | ${bot.user.username} Serving: ${bot.guilds.size} Servers, ${bot.users.size} Users`,
            type: "STREAMING",
            url: "https://www.twitch.tv/elarabots_discord"
        }
    })
});

bot.on(`disconnect`, () => {
    const Discord = require('discord.js')
    let embed = new Discord.RichEmbed()
        .setColor(`RANDOM`)
        .setTimestamp()
        .setFooter(`Disconnected At`)
        .setDescription(`${bot.user} Has Successfully Disconnected, Please reconnect the bot!`)
    bot.users.get('288450828837322764').send(embed);
console.log(`${bot.user.username} Has Been Disconnected. At: ${new Date()}`);
});

bot.on('reconnecting', () => {
    const Discord = require('discord.js')
    let embed = new Discord.RichEmbed()
        .setColor(`RANDOM`)
        .setTimestamp()
        .setFooter(`Reconnected At`)
        .setDescription(`${bot.user} Has Successfully Reconnected!`)
    bot.users.get('288450828837322764').send(embed);
console.log(`${bot.user.username} Is Trying To Reconnect! At: ${new Date()}`);
    bot.user.setPresence({
        game: {
            name: `Prefix e! or E! | ${bot.user.username} Serving: ${bot.guilds.size} Servers, ${bot.users.size} Users`,
            type: "STREAMING",
            url: "https://www.twitch.tv/elarabots_discord"
        }
    })
});

bot.on('guildCreate', async guild => {
    let modlogs = await guild.channels.find('name', "modlogs");
    if (!modlogs) return guild.createChannel('modlogs', 'text');
    let botembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .setDescription("Hello :wave:")
        .setAuthor(bot.user.username, bot.user.avatarURL)
        .setThumbnail(bot.user.avatarURL)
        .setTitle(`You have added ${bot.user.username} to ${guild.name}`)
        .setTimestamp()
        .addField("My Bot Support Server", "[Click Here](https://discord.gg/hgsM86w)", true)
        .addField("Prefix", `S!`, true)
        .addField("Commands", `do S!help`, true)
        .addField("My Bot Creator", `SUPERCHIEFYT#0001`, true)
    console.log(`I was added to (${guild.name}) Discord!, ServerID: ${guild.id}, Server Owner: ${guild.owner}, Server OwnerID: ${guild.ownerID}, MemberCount: ${guild.memberCount}, Server Region: ${guild.region}`);
       await modlogs.send(botembed);
});

bot.on("guildDelete", async guild => {
    console.log(`I was removed from! (${guild.name}) Discord!, ServerID: ${guild.id}, Server Owner: ${guild.owner}, Server OwnerID: ${guild.ownerID}, MemberCount: ${guild.memberCount}, Server Region: ${guild.region}`);
});

bot.on("message", async message => {
    const swearWords = ['shit', 'anal', 'ass', 'assbang', 'assbanged', 'assbangs', 'asses', 'assfuck', 'assfucker', 'assh0le', 'asshat', 'assho1e', 'asshole', 'assholes', 'assmaster', 'assmunch', 'asswipe', 'asswipes', 'b1tch', 'bastard', 'bastards', 'beardedclam', 'beastiality', 'beatch', 'beeyotch', 'beotch', 'biatch', 'bigtits', 'bitch', 'bitched', 'bitches', 'bitchy', 'blowjob', 'blowjobs', 'bollock', 'bollocks', 'bollok', 'boner', 'boners', 'boob', 'boobies', 'boobs', 'booby', 'bukkake', 'bullshit', 'bullshits', 'bullshitted', 'bullturds', 'bung', 'busty', 'buttfuck', 'buttfucker', 'buttplug', 'c.0.c.k', 'c.o.c.k.', 'c.u.n.t', 'c0ck', 'c-0-c-k', 'caca', 'cahone', 'cameltoe', 'carpetmuncher', 'cawk', 'cervix', 'chinc', 'chincs', 'chink', 'chode', 'cl1t', 'climax', 'clit', 'clitoris', 'clitorus', 'clits', 'clitty', 'cocain', 'cocaine', 'cock', 'c-o-c-k', 'cockblock', 'cockholster', 'cockknocker', 'cocks', 'cocksmoker', 'cocksucker', 'corksucker', 'crackwhore', 'cum', 'cummin', 'cumming', 'cumshot', 'cumshots', 'cumslut', 'cumstain', 'cunilingus', 'cunnilingus', 'cunny', 'cunt', 'c-u-n-t', 'cuntface', 'cunthunter', 'cuntlick', 'cuntlicker', 'cunts', 'd1ck', 'd1ld0', 'd1ldo', 'dick', 'dickbag', 'dickdipper', 'dickface', 'dickflipper', 'dickhead', 'dickheads', 'dickish', 'dick-ish', 'dickripper', 'dicksipper', 'dickweed', 'dickwhipper', 'dickzipper', 'dike', 'dildo', 'dildos', 'dipship', 'doggie-style', 'doggy-style', 'dumass', 'dumbass', 'dumbasses', 'f.u.c.k', 'fuck', 'f-u-c-k', 'fuckass', 'fucked', 'fucker', 'fuckface', 'fuckin', 'fucking', 'fucknugget', 'fucknut', 'fuckoff', 'fucks', 'fucktard', 'fuck-tard', 'fuckup', 'fuckwad', 'fuckwit', 'fudgepacker', 'fuk', 'fvck', 'fxck', 'gtfo', 'handjob', 'j3rk0ff', 'jackass', 'jackhole', 'jackoff', 'jerk0ff', 'jerkoff', 'jism', 'jiz', 'jizm', 'jizz', 'jizzed', 'motherfucka', 'motherfucker', 'motherfucking', 'mtherfucker', 'mthrfucker', 'mthrfucking', 'muthafuckaz', 'muthafucker', 'mutherfucker', 'mutherfucking', 'muthrfucking', 'nazi', 'nazism', 'negro', 'nigga', 'niggah', 'niggas', 'niggaz', 'nigger', 'niggers', 'niggle', 'niglet', 'pissed', 'pissoff', 'piss-off', 'porn', 'porno', 'pussies', 'pussy', 'pussypounder', 's.h.i.t.', 'sh1t', 's-h-1-t', 'shamedame', 's-h-i-t', 'shite', 'shiteater', 'shitface', 'shithead', 'shithole', 'shithouse', 'shits', 'shitt', 'shitted', 'shitter', 'shitty', 'shiz', 'slut', 'slutdumper', 'sluts', 'dicks'];
    if (swearWords.some(word => message.content.includes(word))) {
        if(message.guild.id !== "424200844666208265") return;
        if (message.author.bot) return;
        if (message.member.hasPermission('MANAGE_GUILD')) return;
        const modlogs = message.guild.channels.find('name', 'modlogs')
        if (!modlogs) return console.log(`Can't find a Modlogs channel in ${message.guild.name}`);
        const Userembed = new Discord.RichEmbed()
            .setColor(`#FF0000`)
            .setDescription(`You said a Filtered Word in **${message.guild.name}** Watch your Language!\n**Server Moderators has been Notified. [WARNING]**`)
        const warnembed = new Discord.RichEmbed()
            .setColor(`#FF0000`)
            .setDescription(`Filtered Word was used`)
            .setFooter(`Filtered Word used at: `, message.author.avatarURL)
            .setTimestamp()
            .addField(`User`, `${message.author}\n(**${message.author.tag}**)`, true)
            .addField(`Channel`, `<#${message.channel.id}>\n${message.channel.name}`, true)
            .addField(`Content`, `${message.content}`)
        modlogs.send(warnembed)
        message.author.send(Userembed)
        message.delete().catch()
        message.channel.send(`${message.author} Has been warned Filtered Word. [WARNING]`).then(message => { message.delete(10000).catch() })
    }
    const dab = ['!dab', `!Dab`, `!DAb`, `!DAB`, `!dAB`, `<o/`]
    if(dab.some(word => message.content.includes(word))){
        message.channel.send(`<a:dab:448954506420682763>`)
    }
    if (message.channel.id === '455184204615909377') {
        message.react('👍')
        message.react('👎')
    }
    if (message.channel.id === "473574603374067732") {
        message.member.addRole(`474016263883194373`)
        message.delete().catch()
        let riddleanswers = message.guild.channels.find(`name`, `elara-log`)
        let riddleembed = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setAuthor(`${message.author.tag}`, message.author.avatarURL)
            .setTimestamp()
            .setFooter(`Riddle submitted at`)
            .setTitle(`Riddle submitted`)
            .setDescription(`${message.content}`)
        riddleanswers.send(riddleembed)
        let dmembed = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setDescription(`Your riddle answer has been submitted\nand Have been given the **Riddle Submitted** Role,\nWhich means you can't post another answer until next week`)
            .setTimestamp()
            .setFooter(`Answer Submitted At`)
            .setAuthor(message.author.tag, message.author.avatarURL)
        message.author.send(dmembed);
    }
    if (message.author.bot) return;
    if (message.channel.type === "dm") return message.reply("Commands only work in discord channels");
    const prefixes = ['e!', 'E!'];
    let prefix = false;
    for (const thisPrefix of prefixes) {
        if (message.content.startsWith(thisPrefix)) prefix = thisPrefix;
    }
    if (!prefix) return;
    if (!message.content.startsWith(prefix)) return;
    if (cooldown.has(message.author.id)) {
        message.delete();
        return message.reply("You have to wait 5 seconds between commands.")
    }
    if (!message.member.hasPermission("ADMINISTRATOR")) {
        cooldown.add(message.author.id);
    }
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if (commandfile) commandfile.run(bot, message, args);

    setTimeout(() => {
        cooldown.delete(message.author.id)
    }, cdseconds * 1000)

});
// End of the bot.on Messages.
//==============================================================================================================================================================================================
// Start of Getting and Loading the Commands

fs.readdir("./commands/Fun", (err, files) => {

    if (err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if (jsfile.length <= 0) {
        console.log("Couldn't find Fun commands.");
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/Fun/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
        bot.commands.set(props.help.names, props);
    });
});

fs.readdir("./commands/Info/", (err, files) => {

    if (err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if (jsfile.length <= 0) {
        console.log("Couldn't Info find commands.");
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/Info/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
        bot.commands.set(props.help.names, props);
    });
});
fs.readdir("./commands/Moderation/", (err, files) => {

    if (err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if (jsfile.length <= 0) {
        console.log("Couldn't find Moderation commands.");
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/Moderation/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
        bot.commands.set(props.help.names, props);
    });
});
fs.readdir("./commands/BotOwner", (err, files) => {

    if (err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if (jsfile.length <= 0) {
        console.log("Couldn't find Bot Owner commands.");
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/BotOwner/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
        bot.commands.set(props.help.names, props);
    });
});

fs.readdir("./commands/BotOwner/RoleInfo", (err, files) => {

    if (err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if (jsfile.length <= 0) {
        console.log("Couldn't find BotOwner/RoleInfo commands.");
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/BotOwner/RoleInfo/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
        bot.commands.set(props.help.names, props);
    });
});
fs.readdir("./commands/BotOwner/Partners", (err, files) => {

    if (err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if (jsfile.length <= 0) {
        console.log("Couldn't find BotOwner/Partners commands.");
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/BotOwner/Partners/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
        bot.commands.set(props.help.names, props);
    });
});
fs.readdir("./commands/BotOwner/OwnerCommands", (err, files) => {

    if (err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if (jsfile.length <= 0) {
        console.log("Couldn't find BotOwner/OwnerCommands commands.");
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/BotOwner/OwnerCommands/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
        bot.commands.set(props.help.names, props);
    });
});
fs.readdir("./commands/BotOwner/MyServerCrap", (err, files) => {

    if (err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if (jsfile.length <= 0) {
        console.log("Couldn't find BotOwner/MyServerCrap commands.");
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/BotOwner/MyServerCrap/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
        bot.commands.set(props.help.names, props);
    });
});
// End of Getting Commands.
//=============================================================================================================================================================================================