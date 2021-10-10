const Discord = require("discord.js");
const colors = require('./../../colors.json')

module.exports = {
  name: "announce",
  aliases: ["anunciar"],
  description: "Anuncie sua mensagem a outro canal",
  usage: "!announce <#canal> sua mensagem",
  run: async (client, message, args) => {
    if (!message.member.hasPermission(["ADMINISTRATOR"]))
      return message.channel.send("Você não tem permissão para fazer isso");

    let inline = true;
    let sayChannel =
      message.mentions.channels.first() ||
      message.guild.channels.cache.get(args[0]);
    if (!sayChannel)
      return message.channel.send(`${message.author}, mencione um canal primeiro`);
    let sayMsg = args
      .slice(1)
      .join(" ")
      .split(" | ");

    if (!sayMsg[1]) sayMsg[1] == "#39d822";
    if (!sayMsg)
      return message.channel.send(
        ` | Diga alguma mensagem para anunciar`
      );
    let role = message.member.highestRole;
    let embed = new Discord.MessageEmbed()
      .setColor(sayMsg[1])
      .setDescription(sayMsg[0]);

    message.delete();
    message.channel
      .send(
        `<:check:891611927980154911>  | Sua mensagem foi anunciada com sucesso em ${sayChannel}`
      )
      .then(m => m.delete({ timeout: 2000 }));

    sayChannel.send({ embed }).catch(console.error);
  }
};

















/**
 * @INFO
 * Bot Coded by RogmitOp#6051 |
 * https://www.youtube.com/channel/UCPJRB-I9FCkWzgN3c2vKIpQ
 * @INFO
 * Please mention Him , when using this Code!
 * @INFO
 */