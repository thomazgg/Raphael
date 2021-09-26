const UrlsConfig = require("./../../database/models/UrlsConfig");
const { MessageEmbed } = require("discord.js");
const colors = require('./../../colors.json')
const { default_prefix } = require("./../../config.json");

module.exports = {
  name: "stats",
  description: "Mostra estatísticas de todos os seus projetos.",
  aliases: [],
  botPermission: [],
  authorPermission: [],
  ownerOnly: false,
  run: async (client, message, args) => {
    const filter = {
      authorID: message.author.id,
    };

    const all = await UrlsConfig.find(filter);

    const menuEmoji = "<a:c_:891623491248476160>";

    let embed = new MessageEmbed()
      .setColor(colors.uptime)
      .setTitle(`${menuEmoji} Estatísticas de seus projetos ${menuEmoji}`);

    let count = 0;
    all.forEach(async (data) => {
      count++;
      if (count === 26) return;
      // <:red_dot:841223022560280588>

      if (data.get("error")) {
        embed.addField(
          `**${count}**. \`${data.projectURL}\``,
          `<:ram:866155255472455702> Último Ping: ${
            data.updatedAt ? formatDate(data.updatedAt) : "Não medido"
          }\n<:red_dot:841223022560280588> FetchError: ${data.errorText}`
        );
      } else {
        embed.addField(
          `**${count}**. \`${data.projectURL}\``,
          `<:ram:866155255472455702> Último Ping: ${
            data.updatedAt ? formatDate(data.updatedAt) : "Não medido"
          }`
        );
      }
    });

    if (count === 0) {
      embed.setDescription(
        `*Você não tem nenhum projeto hospedado.*\nAdicione um usando: ${default_prefix}add [project Url]`
      );
    }
    embed.setFooter(`Date Format: DD/MM/YY | HH:MM:SS`);

    var errors = false;

    await message.author.send(embed).catch((err) => {
      errors = true;
      if (err.message === "Não é possível enviar mensagens para este usuário")
        return message.channel.send(
          `Error: \`Não é possível enviar mensagem para você. por favor ligue o seu Dms\`.`
        );
    });
    if (!errors) {
      message.channel.send("📥 Confira sua DM.");
    }
  },
};

function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();
  hours = d.getHours();
  mins = d.getMinutes();
  sec = d.getSeconds();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  let format = `${day}/${month}/${year} | ${hours}:${mins}:${sec}`;

  return format;
}