const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    if (message.author.id !== "283311727477784576") return message.reply("Sorry But this is a Bot Owner Only Command.");
    let ranks1 = new Discord.RichEmbed()
    .setColor("#1bf7f3")
    .setTitle("Jonbn123's Discord")
    .setDescription (`Default rank for all members of the Fan Group.`)
    
    let ranks2 = new Discord.RichEmbed()
    .setColor("#1bf7f3")
    .setTitle("Bad Lumberjacks")
    .setDescription(`Designated for scammers, exploiters, dupers, and people that disobey the ethics of the game or violate our behavior principles. `)

    let ranks3 = new Discord.RichEmbed()
    .setColor("1bf7f3")
    .setTitle("Lumberjack Merchants")
    .setDescription(`This rank is earned by players that have a fully-functioning shop for selling in-game items to other players. To obtain this role you must contact a Supervisor to schedule a review and your base must reflect the following requirements:
    - Have a completed structure that serves as your shop.
    - You do not have a former history of scamming or duping.
    - Not selling excessively priced items or an immense amount of duped items or wood.`)

    let ranks4 = new Discord.RichEmbed()
    .setColor("1bf7f3")
    .setTitle("Electrician")
    .setDescription(`This rank is designed for players that possess extensive knowledge about logic. These players are capable of making innovative creations with the array of logical components provided in-game. To obtain this role you must contact a Supervisor to schedule a review and your base must reflect the following requirements:
    - Have an advanced logical mechanism.
    - The mechanism works efficiently and as intended. 
    - Displays your ability to work with logic.`)

    let ranks5 = new Discord.RichEmbed()
    .setColor("1bf7f3")
    .setTitle("Experienced Lumberjack")
    .setDescription(`This rank is appointed to players that demonstrate a basic understanding of architectural design and game physics. To obtain this role you must contact a Supervisor to schedule a review and your base must reflect the following requirements:
    - Have a data size of at least 2.
    - One complete structure.
    - A sawmill system capable of processing wood.`)

    let ranks6 = new Discord.RichEmbed()
    .setColor("1bf7f3")
    .setTitle("Carpenter")
    .setDescription(`Players that display a moderate knowledge of structural design, have incorporated a few aspects of originality, and possess an average comprehension of game physics. To obtain this role you must contact a Supervisor to schedule a review and your base must reflect the following requirements:
    - Have a data size of at least 4.
    - One completed structure of intermediate scale (ex: two-story house).
    - Moderate attention to detail.
    - 1-2 elements of originality.`)

    let ranks7 = new Discord.RichEmbed()
    .setColor("1bf7f3")
    .setTitle("Carpenter Specialist")
    .setDescription(`This role is acquired by players that flaunt proficient ability to construct a creation with advanced architectural intelligence and merge original components into their build. They also excel at including details to demonstrate their game-playing knowledge and enhance their structural composition. To obtain this role you must contact a Supervisor to schedule a review and your base must reflect the following requirements:
    - Have a data size of at least 6.
    - A large structure being constructed, or a substantially sized completed structure(s).
    - Proficient attention to detail.
    - 2-3 incorporated aspects of originality.`)

    let ranks8 = new Discord.RichEmbed()
    .setColor("1bf7f3")
    .setTitle("Elite Lumberjack")
    .setDescription(`This is the most prestigious Lumberjack rank! This rank is awarded to players with masterful expertise in architectural composition and construction. They exhibit professional ability to integrate detail and innovation and possess immense knowledge of game mechanics. To obtain this role you must contact a Supervisor to schedule a review and your base must reflect the following requirements:
    - Have a data size of at least 8.
    - A large completed structure(s) (ex: castle, city, pixel/wire art).
    - Masterful attention to detail.
    - Numerous, well-incorporated elements of originality.
    - Makes others say WOW!`)

    let ranks9 = new Discord.RichEmbed()
    .setColor("1bf7f3")
    .setTitle("Youtubers")
    .setDescription(`Awesome youtubers that record LT2 videos! To obtain this role, send your YouTube channel link to a Supervisor and ask for a review. Your channel must reflect the following requirements:
    - A minimum of 500 subscribers.
    - Family-friendly LT2 content.
    - No duping or scamming videos.`)

    let ranks10 = new Discord.RichEmbed()
    .setColor("1bf7f3")
    .setTitle("Supervisors")
    .setDescription(`This rank is basically the staff of the group. They help maintain the operation and the community of all members in the group. Some of their main roles are to keep the wall clean, help people get ranked up, to report scammers/dupers, and lots more. To apply for this rank, fill out the application found in <#351099766995943425> and send your completed application to a Supervisor.`)

    let ranks11 = new Discord.RichEmbed()
    .setColor("1bf7f3")
    .setTitle("King Architect")
    .setDescription(`King Architect: This is the lead builder for the group HQ and offices. The King Architect is also the leader over the other builders in the group and the King Architect did not build LT2. Please don’t ask for this rank, the only time that this rank will be offered to others will be when the King Architect quits.`)

    let ranks12 = new Discord.RichEmbed()
    .setColor("1bf7f3")
    .setTitle("Allied Owners")
    .setDescription(`Alliances are Roblox groups and discords who have a relationship with another group for the benefit of both groups. Alliances may have a common goal, interest, or mutual benefit; however, the alliance is an informal relationship. An alliance comes together for mutual benefit however does not include a formal agreement. Allied owners are the owners of the separate groups.`)

    let ranks13 = new Discord.RichEmbed()
    .setColor("1bf7f3")
    .setTitle("LT2 Affiliation")
    .setDescription(`These three groups/discords have formed a partnership and have formally agreed to cross
    promote the other members of the affiliation. The members of the LT2 Affiliation (in no particular order) are the Official LT2 Roblox Fan Group, the Official Lumber Tycoon 2 Discord aka Lumber Chat, the Official Lumber Tycoon 2 Wikia group. Although these three groups have formed a partnership each one maintains autonomy separate from the others. In other words, the Affiliates do not have any influence, power or control of the decisions, staff etc. of the other affiliates. Likewise, no affiliate is subordinate to another. The purpose of the LT2 Affiliation is to cross promote, to increase enjoyment and interest in LT2, to share information, and to have fun. 
    `)
    
    let ranks14 = new Discord.RichEmbed()
    .setColor("1bf7f3")
    .setTitle("Affiliated Owners/Admins")
    .setDescription(`These are people that own or co-own other official communities associated with LT2. For example, the Lumber Chat Discord, The LT2 Wiki, etc. This rank can only be achieved if you are an owner/admin in one of these affiliated communities. `)
    
    let ranks15 = new Discord.RichEmbed()
    .setColor("1bf7f3")
    .setTitle("Co Owner")
    .setDescription(`The co owner is in charge of all other supervisors and helps manage the group. If the co owner quits, then the group leader will choose another one.`)

    let ranks16 = new Discord.RichEmbed()
    .setColor("1bf7f3")
    .setTitle("Defaultio")
    .setDescription(` Creator of the greatest game in the history of the universe! 
    (is that too much?......No it's true)`)
    
    let ranks17 = new Discord.RichEmbed()
    .setColor("1bf7f3")
    .setTitle("Group Leader")
    .setDescription(`The owner and leader of the group, CesarGeronimo`)
    
    
    message.channel.send(ranks1)
    message.channel.send(ranks2)
    message.channel.send(ranks3)
    message.channel.send(ranks4)
    message.channel.send(ranks5)
    message.channel.send(ranks6)
    message.channel.send(ranks7)
    message.channel.send(ranks8)
    message.channel.send(ranks9)
    message.channel.send(ranks10)
    message.channel.send(ranks11)
    message.channel.send(ranks12)
    message.channel.send(ranks13)
    message.channel.send(ranks14)
    message.channel.send(ranks15)
    message.channel.send(ranks16)
    message.channel.send(ranks17)
    }
    
    module.exports.help = {
    name: "Ranks",
    names: "ranks"
    }