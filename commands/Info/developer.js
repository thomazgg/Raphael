const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const colors = require('./../../colors.json')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");

module.exports = {
  name: "developer",
  description: "Sobre mim",
  aliases: ["dev","sobre","support","suporte"],
  ownerOnly: false,
  run: async (client, message, args) => {
    let helpEmbed = new MessageEmbed()
      .setTitle("Sobre mim:")
      .setFooter(client.user.username + " | Criado por: @thomazgg", client.user.displayAvatarURL())
      .addField("Opa, me chamo Thomaz, progamei meu bot usando node.js",">>> 19y | He/Him\nEstudando: Ciência da computação\nHobbies: Video Editor and Discord Manager!")

      let button1 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('💞 • Me Convide') 
      .setURL("https://discord.com/api/oauth2/authorize?client_id=888577622404136970&permissions=8&scope=bot");
      let button2 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('🤔 • Servidor de Suporte') 
      .setURL("https://discord.gg/q9WRkXF2A5");

      return message.channel.send(helpEmbed,{
        button: [button1,button2],
      });

  },
};