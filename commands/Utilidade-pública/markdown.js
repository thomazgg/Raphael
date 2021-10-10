const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const colors = require('./../../colors.json')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");

module.exports = {
  name: "markdown",
  description: "Link para os etilos em markdown no discord",
  aliases: ["md"],
  ownerOnly: false,
  run: async (client, message, args) => {
    let mdEmbed = new MessageEmbed()
      .setTitle("Texto estilo Markdown no Discord:")
      .addField(
        "Quer dar um toque especial ao seu chat? Veja como fazer!","Clique no botão abaixo e confira as formatações em **Markdown** no **Discord**")
      .setThumbnail("")
      .setColor(colors.uptime);

      let button1 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('🤔 • Markdown') 
      .setURL("https://github.com/thomazgg/markdown");

      return message.channel.send(mdEmbed,{
        button: [button1],
      });

  },
};