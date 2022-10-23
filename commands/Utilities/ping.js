const { MessageEmbed } = require("discord.js");

module.exports = {
    config: {
        name: "ping",
        aliases: [],
        usage: "<command>",
        category: "Utilities",
        description: "Check bot ping.",
        accessableby: "Members"
    },
      run: async (client, message, args, user, prefix) => {
        let msg = await message.channel.send({
            embeds: [
              new MessageEmbed()
                .setDescription("🏓 | Fetching ping...")
                .setColor(client.color),
            ],
          });

    let zap = "⚡";
    let green = "🟢";
    let red = "🔴";
    let yellow = "🟡";

    var botState = zap;
    var apiState = zap;

    let apiPing = client.ws.ping;
    let botPing = Math.floor(msg.createdAt - message.createdAt);

    if (apiPing >= 50 && apiPing < 200) {
      apiState = green;
    } else if (apiPing >= 200 && apiPing < 400) {
      apiState = yellow;
    } else if (apiPing >= 400) {
      apiState = red;
    }

    if (botPing >= 50 && botPing < 600) {
      botState = green;
    } else if (botPing >= 600 && botPing < 800) {
      botState = yellow;
    } else if (botPing >= 800) {
      botState = red;
    }

    msg.delete();
    message.reply({
      embeds: [
        new MessageEmbed()
          .setTitle("🏓 | Pong!")
          .addField(
            "API Latency",
            `\`\`\`yml\n${apiState} | ${apiPing}ms\`\`\``,
            true
          )
          .addField(
            "Bot Latency",
            `\`\`\`yml\n${botState} | ${botPing}ms\`\`\``,
            true
          )
          .setColor(client.color)
          .setFooter({
            text: `Requested by ${message.author.tag}`,
            iconURL: message.author.avatarURL(),
          }),
      ],
    });
  }
}

