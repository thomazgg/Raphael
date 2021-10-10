const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const colors = require('./../../colors.json')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");

module.exports = {
  name: "win10",
  description: "win 10 mais bacana",
  aliases: ["win"],
  ownerOnly: false,
  run: async (client, message, args) => {
    let winEmbed = new MessageEmbed()
      .setTitle("Windows 10 <:windows_10:892975647679447040> , mais bonito e mais pratico...")
      .addField(
        "<:blurpletextchannel:892673854873403393> Como posso melhorar meu windows 10?","Essas são ferramentas gratuitas que vc pode usar para deixar mais bonito e mais pratico de usar o Windows 10.")
      .addField(
        "<:blurplerules:892673855074742332> Comandos disponiveis","`win10` `cursor` `darkmode`")
      .setColor(colors.uptime);

      let button1 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('🤔 • Link do video') 
      .setURL("https://www.youtube.com/watch?v=uCVc-7z-toE");

      return message.channel.send(winEmbed,{
        button: [button1],
      });

  },
};