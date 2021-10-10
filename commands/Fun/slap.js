const { MessageEmbed } = require("discord.js");
const nekos = require("nekos.life");
const colors = require('./../../colors.json')
const {
  sfw: { slap },
} = new nekos();
module.exports = {
    name: "slap",
    description: "Da um tapa!",
    aliases: ["SLAP", "Slap"],
    usage: "<user>",
    accessableby: "",
  run: async (client, message, args) => {
    const { url } = await slap().catch(() => {});

    if (!url) return message.channel.send(`Não foi possível conectar a nekos.life`);

    const embed = new MessageEmbed();

    if (
      message.mentions.members.size &&
      message.mentions.members.first().id === client.user.id
    ) {
      return message.channel.send(
        `${
          [`Ai! Como se atreve a me dar um tapa! `,` Pare com isso! `,` Isso dói! ; -;`][
            Math.floor(Math.random() * 2)
          ]
        }`
      );
    } else if (
      message.mentions.members.size &&
      message.mentions.members.first().id === message.author.id
    ) {
      return message.channel.send(`Wai~ Seriously!?`);
    } else if (message.mentions.members.size) {
      return message.channel.send(
        embed
          .setColor(colors.uptime)
          .setDescription(
            `${message.member} deu um tapa em ${message.mentions.members.first()}!`
          )
          .setImage(url)
      );
    } else {
      return message.channel.send(
        `${message.member}, você está praticando para dar um tapa ou algo assim?`
      );
    }
  },
};