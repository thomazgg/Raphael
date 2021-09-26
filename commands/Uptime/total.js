const UrlsConfig = require("./../../database/models/UrlsConfig");
const { MessageEmbed } = require("discord.js");
const colors = require('./../../colors.json')

module.exports = {
  name: "total",
  description: "Mostra todos os projetos",
  botPermission: [],
  authorPermission: [],
  ownerOnly: false,
  run: async (client, message, args) => {
    UrlsConfig.countDocuments(
      { authorID: message.author.id },
      async function (err, total) {
        const embed = new MessageEmbed()
          .setTitle(`Uptimer Bot Stats`)
          .setColor(colors.uptime)
          .addField("Total de Projetos: ", client.projectsSize, true)
          .addField("Seus Projetos: ", total, true);
        return message.channel.send(embed);
      }
    );
  },
};