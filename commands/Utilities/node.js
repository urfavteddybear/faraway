const moment = require("moment");
require("moment-duration-format");
const { MessageEmbed } = require("discord.js");

module.exports = {
    config: {
        name: "node",
        aliases: ["nodes"],
        usage: "<command>",
        category: "Utilities",
        description: "Shows the bot node status.",
        accessableby: "Members"
    },
    run: async (client, message, args, user, prefix) => {
      let lavauptime, lavaram, lavaclientstats;
		
		const statsEmbed = new MessageEmbed()
		.setTitle(`${client.user.username} Nodes Information`)
		.setColor(client.color)
		
		if (client.manager) {
			for (const [index, lavalinkClient] of client.manager.nodes.entries()){

				lavaclientstats = lavalinkClient.stats;
				lavacores = lavaclientstats.cpu.cores;
				lavauptime = moment.duration(lavaclientstats.uptime).format("d[ Days]・h[ Hrs]・m[ Mins]・s[ Secs]");
				lavaram = (lavaclientstats.memory.used / 1024 / 1024).toFixed(2);
				lavalloc = (lavaclientstats.memory.allocated / 1024 / 1024).toFixed(2);

				statsEmbed.addField( 
					`${index}`,
					`\`\`\`yml\nUptime: ${lavauptime}\nRAM: ${lavaram} / ${lavalloc}MB\nCPU: ${(lavacores === 1) ? "1 Core" : `${lavacores} Cores`}\nPlaying: ${lavaclientstats.playingPlayers} out of ${lavaclientstats.players}\n\`\`\``,
				)
			}
		} else {
			statsEmbed.setDescription("**Lavalink manager was not initialized on startup, there are no nodes connected.**")
		}
		return message.reply({ embeds: [statsEmbed], ephemeral: true });
	},
};