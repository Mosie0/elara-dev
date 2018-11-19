module.exports = (bot) => {
    bot.user.setActivity(`Prefix l! or L!`, { type: "WATCHING"});
    var status = [
     	`Prefix l! or L! | Watching Lumber Fans`,
		`Prefix l! or L! | Chopping Trees`,
		`Prefix l! or L! | Building`
    ];
    setInterval(() => {
        let gameval = Math.floor((Math.random() * status.length));
        bot.user.setActivity(`${status[gameval]}`, { type: "WATCHING"});
    }, 100000);
};