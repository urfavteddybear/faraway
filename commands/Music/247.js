const { MessageEmbed } = require('discord.js');

module.exports = { 
    config: {
        name: "247",
        description: "24/7 Music!",
        accessableby: "Member",
        category: "Music"
    },
    run: async (client, message, args, user, language, prefix) => {
        const msg = await message.channel.send(`${client.i18n.get(language, "music", "247_loading")}`);
            const player = client.manager.get(message.guild.id);
            if (!player) return msg.edit(`${client.i18n.get(language, "noplayer", "no_player")}`);
            const { channel } = message.member.voice;
            if (!channel || message.member.voice.channel !== message.guild.me.voice.channel) return msg.edit(`${client.i18n.get(language, "noplayer", "no_voice")}`);

        if (player.twentyFourSeven) {
            player.twentyFourSeven = false;
            const off = new MessageEmbed()
            .setDescription(`${client.i18n.get(language, "music", "247_off")}`)
            .setColor(client.color);

            msg.edit({ content: " ", embeds: [off] });
        } else {
            player.twentyFourSeven = true;
            const on = new MessageEmbed()
            .setDescription(`${client.i18n.get(language, "music", "247_on")}`)
            .setColor(client.color);

            msg.edit({ content: " ", embeds: [on] });
        }
    }
}