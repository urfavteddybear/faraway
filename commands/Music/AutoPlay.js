const { MessageEmbed } = require('discord.js');

module.exports = { 
    config: {
        name: "autoplay",
        description: "Auto play music in voice channel.",
        accessableby: "Member",
        category: "Music"
    },
    run: async (client, message, args, user, language, prefix) => {
        const msg = await message.channel.send(`${client.i18n.get(language, "music", "autoplay_loading")}`);
                const player = client.manager.get(message.guild.id);
                if (!player) return msg.edit(`${client.i18n.get(language, "noplayer", "no_player")}`);
        
                const autoplay = player.get("autoplay");
        
                const { channel } = message.member.voice;
                if (!channel || message.member.voice.channel !== message.guild.me.voice.channel) return msg.edit(`${client.i18n.get(language, "noplayer", "no_voice")}`);
        
        if (autoplay === true) {

            await player.set("autoplay", false);
            await player.queue.clear();

            const off = new MessageEmbed()
            .setDescription(`${client.i18n.get(language, "music", "autoplay_off")}`)
            .setColor(client.color);

            msg.edit({ content: " ", embeds: [off] });
        } else {

            const identifier = player.queue.current.identifier;
            const search = `https://www.youtube.com/watch?v=${identifier}&list=RD${identifier}`;
            const res = await player.search(search, message.author);

            await player.set("autoplay", true);
            await player.set("requester", message.author);
            await player.set("identifier", identifier);
            await player.queue.add(res.tracks[1]);

            const on = new MessageEmbed()
            .setDescription(`${client.i18n.get(language, "music", "autoplay_on")}`)
            .setColor(client.color);

            msg.edit({ content: " ", embeds: [on] });
        }
    } 
}