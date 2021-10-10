const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const colors = require('./../../colors.json')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");

module.exports = {
  name: "node16",
  description: "Como usar o node 16",
  aliases: ["node"],
  ownerOnly: false,
  run: async (client, message, args) => {
    let nodeEmbed = new MessageEmbed()
      .setTitle("Como fazer a configuração do node 16:")
      .addField('1. Execute este script no shell para instalar o node e configurar o npm.' , '```npm i --save-dev node@16 && npm config set prefix=$(pwd)/node_modules/node && export PATH=$(pwd)/node_modules/node/bin:$PATH```')
      .addField('2. Crie o .replit para executar o node a partir do shell em vez do console.' , '```run="npm start"```')
      .addField('3. Certifique-se de adicionar o script de início em seu arquivo package.json' , '```"scripts": {\n"start": "node ."\n}```')
      .setFooter('Clique no botão para saber mais ')
      .setThumbnail("")
      .setColor(colors.uptime);

      let button1 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('🤔 • Node e NPM') 
      .setURL("https://balta.io/blog/node-npm-instalacao-configuracao-e-primeiros-passos");

      return message.channel.send(nodeEmbed,{
        button: [button1],
      });

  },
};