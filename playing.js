module.exports = (bot) => {
	bot.user.setActivity(`Prefix e! or E!`, { type: "STREAMING", url: "https://www.twitch.tv/elarabots_discord" });
	let userssize = bot.users.size;
	let channelsize = bot.channels.size;
	let guildsize = bot.guilds.size;
	var status = [
		`Prefix e! or E! | Serving: ${guildsize} Servers, ${channelsize} Channels, ${userssize} Users`,
		`Prefix e! or E! | More Updates Coming Soon!`,
		`Prefix e! or E! | My Support Server: https://discord.gg/hgsM86w`
	];
	var types = [
		`STREAMING`,
		`STREAMING`,
		`STREAMING`
	];
	gameval = 0;
	setInterval(() => {
		if (gameval == status.length) { gameval = 0; }
		bot.user.setActivity(`${status[gameval]}`, { type: types[gameval], url: "https://www.twitch.tv/elarabots_discord" });
		gameval++;
	}, 10000);
};