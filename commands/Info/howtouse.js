const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const colors = require('./../../colors.json')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");

module.exports = {
  name: "howtouse",
  description: "como usar o bot",
  ownerOnly: false,
  run: async (client, message, args) => {
    let helpEmbed = new MessageEmbed()
      .setTitle("<:blurplesearch:892673855326421012> Como usar: Raphael!")
      .addField("<:reply:891618744814686269> **Comandos principais**", "Bom vc pode me convidar se quiser clicando no botão abaixo\n `!all`: mostra todos comandos de utilidade-publica\n `!info`: informações sobre o bot \n `!developer`: informações sobre o desenvolvedor \n `!feedback`: Vc pode dar algum feedback ou sugestão")
      .addField("<:reply:891618744814686269> **Outros comandos**"," Vc pode ver a lista de todos comandos em `!help` \n `!botinfo`: informações sobre o bot \n `!roleinfo`: Mostra as estatísticas do cargo mencionado \n `!serverinfo`: Obtenha estatísticas avançadas de determinada pessoa")
      .setFooter(client.user.username + " | Criado por: @thomazgg", client.user.displayAvatarURL())

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