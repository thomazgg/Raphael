const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const colors = require('./../../colors.json')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");

module.exports = {
  name: "developer",
  description: "Shows all commands of the bot",
  botPermission: [],
  authorPermission: [],
  aliases: ["newhelp"],
  ownerOnly: false,
  run: async (client, message, args) => {
    let helpEmbed = new MessageEmbed()
      .setTitle("Sobre mim:")
      .setFooter("Página inicial\n"+ client.user.username + " | Feito por: @thomazgg", client.user.displayAvatarURL())
      .addField(
        "Opa, me chamo Thomaz, progamei meu bot usando node.js\n19y | He/Him\nEstudando: Ciência da computação\nHobbies: Video Editor and Discord Manager! ",
      )
      .setThumbnail("")

      let button1 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('💞 • Me Convide') 
      .setURL("https://discord.com/api/oauth2/authorize?client_id=888577622404136970&permissions=8&scope=bot");
      let button2 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('🤔 • Meu servidor') 
      .setURL("https://discord.gg/DJuK4KGa94");
      let button3 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('🎬 • Youtube Channel') 
      .setURL("https://www.youtube.com/c/RogmitOp/videos");

      return message.channel.send(helpEmbed,{
        button: [button1,button2,button3],
      });

  },
};