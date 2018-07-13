const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    // let Announcementchannel = message.guild.channels.find('name', "announcements");
    // if (!Announcementchannel) return console.log(`No Announcement Channel Detected in [${message.guild.name}]`);
    if (message.author.id !== "288450828837322764") return message.reply("Sorry but This is a Bot Owner Command Only!");
    let rMember = message.guild.member(message.mentions.users.first())
    if (!rMember) return message.reply("Sorry please check again i don't see that user.");
    let staffrole = rMember.addRole('455152231956873236');
    let modrole = rMember.addRole('455152024145625088'); 
 //   Announcementchannel.send(`@here Welcome ${rMember} to the Moderator Team`);
    rMember.send(`Congrats you are now a Moderator in SUPERCHIEFYT's Discord`)
    message.delete().catch();
}
module.exports.help = {
    name: "mod"
}