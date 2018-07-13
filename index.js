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
    console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
    bot.user.setGame(`${bot.user.username} ` + `Serving: ${bot.guilds.size} Servers` , "https://www.twitch.tv/superchiefyt");
    bot.user.setStatus("online");
});

bot.on(`disconnect`, () => {
console.log(`${bot.user.username} Has Been Disconnected. At: ${new Date()}`);
});

bot.on('reconnecting', () => {
console.log(`${bot.user.username} Is Trying To Reconnect! At: ${new Date()}`);
});

bot.on("guildMemberAdd", async member => {
    let modlogs = member.guild.channels.find('name', "modlogs");
    if (!modlogs) return console.log(`No [modlogs] Channel Detected in [${member.guild.name}]`);
    let botembed = new Discord.RichEmbed()
        .setColor("#1CFF00")
        .setAuthor('Member Joined', member.user.avatarURL)
        .setFooter(`ID: ${member.id}`)
        .setTimestamp()
        .setDescription(`${member} ${member.user.tag}`)
        .setThumbnail(member.user.avatarURL)
    await modlogs.send(botembed);
});

bot.on("guildMemberRemove", async member => {
    let guild = member.guild;
    let modlogsembed = new Discord.RichEmbed()
        .setColor('#FF0000')
        .setAuthor(member.guild.name)
        .setDescription(`There is no **modlogs** Channel \n Please Add one.`)
        .setThumbnail(bot.user.avatarURL)
        .setTimestamp()
        .setFooter(`ID: ${member.guild.id}`)
    let modlogs = member.guild.channels.find('name', "modlogs");
    if (!modlogs) return member.guild.owner.send(modlogsembed);
    let botembed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .setAuthor('Member Left', member.user.avatarURL)
        .setFooter(`ID: ${member.id}`)
        .setTimestamp()
        .setDescription(`${member} ${member.user.tag}`)
        .setThumbnail(member.user.avatarURL)
    modlogs.send(botembed);
});

bot.on(`guildBanAdd`, (guild, user) => {
    let modlogs = guild.channels.find('name', "modlogs");
    let modlogsembed = new Discord.RichEmbed()
    .setColor('#FF0000')
    .setAuthor(guild.name)
    .setDescription(`There is no **modlogs** Channel \n Please Add one.`)
    .setThumbnail(bot.user.avatarURL)
    .setTimestamp()
    .setFooter(`ID: ${guild.id}`)
    if (!modlogs) return guild.owner.send(modlogsembed);
    let botembed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .setAuthor('Member Banned', user.avatarURL)
        .setFooter(`ID: ${user.id}`)
        .setTimestamp()
        .setDescription(`${user} ${user.tag}`)
        .setThumbnail(user.avatarURL)
    modlogs.send(botembed);
});

bot.on(`guildBanRemove`, (guild, user) => {
    let modlogs = guild.channels.find('name', "modlogs");
    let modlogsembed = new Discord.RichEmbed()
        .setColor('#FF0000')
        .setAuthor(guild.name)
        .setDescription(`There is no **modlogs** Channel \n Please Add one.`)
        .setThumbnail(bot.user.avatarURL)
        .setTimestamp()
        .setFooter(`ID: ${guild.id}`)
    if (!modlogs) return guild.owner.send(modlogsembed);
    let botembed = new Discord.RichEmbed()
        .setColor("#12FF00")
        .setAuthor('Member Unbanned', user.avatarURL)
        .setFooter(`ID: ${user.id}`)
        .setTimestamp()
        .setDescription(`${user} ${user.tag}`)
        .setThumbnail(user.avatarURL)
    modlogs.send(botembed);
});

bot.on(`channelCreate`, async channel => {
    let guild = channel.guild;
    let modlogs = guild.channels.find('name', "modlogs");
    let modlogsembed = new Discord.RichEmbed()
        .setColor('#FF0000')
        .setAuthor(guild.name)
        .setDescription(`There is no **modlogs** Channel \n Please Add one.`)
        .setThumbnail(bot.user.avatarURL)
        .setTimestamp()
        .setFooter(`ID: ${guild.id}`)
    if (!modlogs) return guild.owner.send(modlogsembed);
    let botembed = new Discord.RichEmbed()
        .setColor("#FF000")
        .setAuthor('Channel Created', channel.guild.iconURL)
        .setFooter(`ID: ${channel.id}`)
        .setTimestamp()
        .setDescription(`_ _►Name<#${channel.id}> (**${channel.name}**) \n ►Type **${channel.type}** \n ►ID **${channel.id}**`)
    //    .setThumbnail(channel.guild.iconURL)
    await modlogs.send(botembed);
});

bot.on(`channelDelete`, channel => {
    let guild = channel.guild;
    let modlogs = guild.channels.find('name', "modlogs");
    let modlogsembed = new Discord.RichEmbed()
        .setColor('#FF0000')
        .setAuthor(guild.name)
        .setDescription(`There is no **modlogs** Channel \n Please Add one.`)
        .setThumbnail(bot.user.avatarURL)
        .setTimestamp()
        .setFooter(`ID: ${guild.id}`)
    if (!modlogs) return guild.owner.send(modlogsembed);
    let botembed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .setAuthor('Channel Deleted', channel.guild.iconURL)
        .setFooter(`ID: ${channel.id}`)
        .setTimestamp()
        .setDescription(`_ _►Name **${channel.name}**\n ►Type **${channel.type}**\n ►ID ${channel.id}\n ►Position ${channel.position}`)
       // .setThumbnail(channel.guild.iconURL)
    modlogs.send(botembed);
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

bot.on(`messageDelete`, message => {
    let modlogs = message.guild.channels.find('name', "modlogs");
    let modlogsembed = new Discord.RichEmbed()
        .setColor('#FF0000')
        .setAuthor(message.guild.name)
        .setDescription(`There is no **modlogs** Channel \n Please Add one.`)
        .setThumbnail(bot.user.avatarURL)
        .setTimestamp()
        .setFooter(`ID: ${message.guild.id}`)
    if (!modlogs) return guild.owner.send(modlogsembed);
    let botembed = new Discord.RichEmbed()
    .setColor("#FF0000")
    .setTimestamp()
    .setAuthor(`Message Deleted By ${message.author.tag}`, `${message.author.avatarURL}`)
    .setFooter(`${bot.user.tag}`, `${bot.user.displayAvatarURL}`)
    .setDescription(`_ _►Content: **\`${message.cleanContent}\`** \n ►Channel: <#${message.channel.id}> \n ►Message ID: ${message.id}`)
    modlogs.send(botembed);
});
bot.on(`messageUpdate`, (oldMessage, newMessage) => {
    if (newMessage.author.id === bot.user.id) return;
    if(newMessage.author.bot) return;
    let modlogs = oldMessage.member.guild.channels.find('name', "modlogs");
    let modlogsembed = new Discord.RichEmbed()
        .setColor('#FF0000')
        .setAuthor(oldMessage.member.guild.name)
        .setDescription(`There is no **modlogs** Channel \n Please Add one.`)
        .setThumbnail(bot.user.avatarURL)
        .setTimestamp()
        .setFooter(`ID: ${oldMessage.member.guild.id}`)
    if (!modlogs) return guild.owner.send(modlogsembed);
    let botembed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .setTimestamp()
        .setAuthor(`Message Updated By ${newMessage.author.tag}`, `${newMessage.author.avatarURL}`)
        .setFooter(`${bot.user.tag}`, `${bot.user.displayAvatarURL}`)
        .setDescription(`_ _►Content: \n ►Old Message **\`${oldMessage.cleanContent}\`** \n ►Update Message **\`${newMessage.cleanContent}\`** \n ►Channel <#${newMessage.channel.id}> \n ►Message ID ${newMessage.id}`)
    modlogs.send(botembed);
});

bot.on('roleCreate', role => {
let guild = role.guild;
    let modlogs = guild.channels.find('name', "modlogs");
    let modlogsembed = new Discord.RichEmbed()
        .setColor('#FF0000')
        .setAuthor(guild.name)
        .setDescription(`There is no **modlogs** Channel \n Please Add one.`)
        .setThumbnail(bot.user.avatarURL)
        .setTimestamp()
        .setFooter(`ID: ${guild.id}`)
    if (!modlogs) return guild.owner.send(modlogsembed);
    let botembed = new Discord.RichEmbed()
        .setColor("#FF000")
        .setAuthor('Role Created', role.guild.iconURL)
        .setFooter(`${bot.user.tag}`, `${bot.user.avatarURL}`)
        .setTimestamp()
        .setDescription(`_ _►Name <@&${role.id}> (**${role.name}**)\n ►ID **${role.id}**`)
    //    .setThumbnail(channel.guild.iconURL)
     modlogs.send(botembed);

});

bot.on('roleDelete', role => {
    let guild = role.guild;
    let modlogs = guild.channels.find('name', "modlogs");
    let modlogsembed = new Discord.RichEmbed()
        .setColor('#FF0000')
        .setAuthor(guild.name)
        .setDescription(`There is no **modlogs** Channel \n Please Add one.`)
        .setThumbnail(bot.user.avatarURL)
        .setTimestamp()
        .setFooter(`ID: ${guild.id}`)
    if (!modlogs) return guild.owner.send(modlogsembed);
    let botembed = new Discord.RichEmbed()
        .setColor("#FF000")
        .setAuthor('Role Deleted', role.guild.iconURL)
        .setFooter(`${bot.user.tag}`, `${bot.user.avatarURL}`)
        .setTimestamp()
        .setDescription(`_ _►Name **${role.name}** \n ►ID **${role.id}** \n ►Position **${role.position}** \n ►Hoisted **${role.hoist}** \n ►Mentionable **${role.mentionable}** \n ►Color **${role.hexColor}** \n ►Role Created At **${role.createdTimestamp}**`)
    //    .setThumbnail(channel.guild.iconURL)
    modlogs.send(botembed);

});

// bot.on('guildMemberUpdate', (nMember, oMember) => {
//     let modlogsembed = new Discord.RichEmbed()
//         .setColor('#FF0000')
//         .setAuthor(nMember.guild.name)
//         .setDescription(`There is no **modlogs** Channel \n Please Add one.`)
//         .setThumbnail(bot.user.avatarURL)
//         .setTimestamp()
//         .setFooter(`ID: ${nMember.guild.id}`)
//     let modlogs = nMember.guild.channels.find('name', "modlogs");
//     if (!modlogs) return guild.owner.send(modlogsembed);
//     let oldmember = oMember.user.avatarURL;
//     let newmember = nMember.user.avatarURL;
//     let embed = new Discord.RichEmbed()
//         .setColor("#000FF")
//         .setImage(newmember)
//         .setDescription(`${nMember} Changed Their Profile Photo`)
//         .addField(`Old Profile Photo`, `[Click Here](${oldmember})`, true)
//         .addField(`New Profile Photo`, `[Click Here](${newmember})`, true)
//     modlogs.send(embed);
// });

// bot.on('userUpdate', (newUser, oldUser) => {
//     let guild = newUser.client.guilds;
//     // let modlogsembed = new Discord.RichEmbed()
//     //     .setColor('#FF0000')
//     //     .setAuthor(newUser.client.guilds.name)
//     //     .setDescription(`There is no **modlogs** Channel \n Please Add one.`)
//     //     .setThumbnail(bot.user.avatarURL)
//     //     .setTimestamp()
//     //     .setFooter(`ID: ${newUser.client.guilds.id}`)
//     let modlogs = newUser.client.guilds.channels.find('name', "modlogs");
//     if (!modlogs) return newUser.client.guilds.owner.send(modlogsembed);
//     let embed = new Discord.RichEmbed()
//         .setColor("#000FF")
//         .setDescription(`${newUser} Changed Their Username`)
//         .addField(`Old Username`, `[Click Here](${oldmember})`, true)
//         .addField(`New Username`, `[Click Here](${newmember})`, true)
//     modlogs.send(embed);
// });

bot.on("message", async message => {

    if (message.author.bot) return;
    if (message.channel.type === "dm") return message.reply("Commands only work in discord channels");

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    if (!prefixes[message.guild.id]) {
        prefixes[message.guild.id] = {
            prefixes: botconfig.prefix
        };
    }

    let prefix = prefixes[message.guild.id].prefixes;
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
    });
});
fs.readdir("./commands/Fun/AnimalPhotos/", (err, files) => {

    if (err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if (jsfile.length <= 0) {
        console.log("Couldn't find Fun/AnimalPhotos commands.");
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/Fun/AnimalPhotos/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
});
fs.readdir("./commands/Fun/SpecialCommands/", (err, files) => {

    if (err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if (jsfile.length <= 0) {
        console.log("Couldn't find Fun/SpecialConnamds commands.");
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/Fun/SpecialCommands/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
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
    });
});
fs.readdir("./commands/BotOwner/BotInfos", (err, files) => {

    if (err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if (jsfile.length <= 0) {
        console.log("Couldn't find Bot Ower/BotInfos commands.");
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/BotOwner/BotInfos/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
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
    });
});
// End of Getting Commands.
//=============================================================================================================================================================================================