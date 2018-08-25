module.exports = (bot) => {
	bot.user.setActivity(`Prefix e! or E!`, { type: "STREAMING", url: "https://www.twitch.tv/elarabots_discord" });
	var status = [
		`Serving: ${bot.guilds.size} Servers, ${bot.channels.size} Channels, ${bot.users.size} Users`,
		`More Updates Coming Soon!`,
		`My Support Server: https://discord.gg/hgsM86w`
	];
	var types = [
		`STREAMING`,
		`STREAMING`,
		`STREAMING`,
		`STREAMING`,
		`STREAMING`,
		`STREAMING`,
		`STREAMING`,
		`STREAMING`,
		`STREAMING`
	];
	gameval = 0;
	setInterval(() => {
		if (bot.user.presence.game.name.startsWith(`Prefix e! or E!`)) {
			if (gameval == status.length) {
				gameval = 0;
			}
			bot.user.setActivity(`Prefix e! or E! | ${status[gameval]}`, { type: types[gameval], url: "https://www.twitch.tv/elarabots_discord" });
			gameval++;
		}
	}, 10000);
};