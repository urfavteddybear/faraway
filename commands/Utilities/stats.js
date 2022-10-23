const { MessageEmbed, version } = require("discord.js");
const moment = require("moment");
const duration = require("moment-duration-format");
const os = require('os')
const si = require('systeminformation');

module.exports = {
    config: {
        name: "status",
        aliases: ["stats"],
        usage: "<command>",
        category: "Utilities",
        description: "Shows the bot status.",
        accessableby: "Members"
    },
    run: async (client, message, args, user, prefix) => {
      const duration1 = moment.duration(message.client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
        const cpu = await si.cpu();
        let ccount = client.channels.cache.size;
        let scount = client.guilds.cache.size;
        let mcount = 0; 
client.guilds.cache.forEach((guild) => {
    mcount += guild.memberCount 

})
        const embed = new MessageEmbed()
            .setColor(client.color)
            .setThumbnail(message.client.user.displayAvatarURL())
            .setAuthor({ name: '︳Far Away System Status 💻', iconURL : message.author.avatarURL({ dynamic: true })})
            .addField(`RAM Usage`, `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
            .addField(`Uptime`, `${duration1}`, true)
            .addField(`Server Count`, `${scount}`, true)
            .addField(`User Count`, `${mcount}`, true)
            .addField(`Channel Count`, `${ccount}`, true)
            .addField(`Lavalink Host Name`, `N-1`, true)
            .setFooter({ text: `© ${message.guild.me.displayName} `, iconURL: client.user.displayAvatarURL({ dynamic: true })})
            .setTimestamp();
         message.reply({embeds: [embed]});
        
    }
	}

