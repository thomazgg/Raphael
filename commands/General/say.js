const db = require("old-wio.db");
const colors = require('./../../colors.json')

const { MessageEmbed } = require("discord.js");

const Discord = require("discord.js");

var pattern = new RegExp(
  "^(https?:\\/\\/)?" +
    "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
    "((\\d{1,3}\\.){3}\\d{1,3}))" +
    "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
    "(\\?[;&a-z\\d%_.~+=-]*)?" +
    "(\\#[-a-z\\d_]*)?$",
  "i"
);

module.exports = {
    name: "say",
    description: "Diz sua mesagem por meio do bot em embed",
    usage: "say <input>",
    run: async (bot, message, args) => {
    //Start

    message.delete();

    let Content = args.join(" ");

    if (!Content)
      return message.channel.send(`<:xmark:891611927900479489> Por favor, dê-me algo para dizer!`);

    function UrlCheck(str) {
      return pattern.test(str);
    }

    if (UrlCheck(Content) === true) {
      if (!message.member.hasPermission("ADMINISTRATOR")) {
        return message.channel.send(
          `<:xmark:891611927900479489> Links não são permitidos | Apenas administradores podem usar links!`
        );
      }
    }

    let embed = new Discord.MessageEmbed()
      .setColor(colors.uptime)
      .setDescription(`${Content}`)
      .setFooter(`Solicitado por ${message.author.tag}`)

    return message.channel.send(embed);

    //End
  }
};