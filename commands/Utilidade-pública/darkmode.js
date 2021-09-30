const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const colors = require('./../../colors.json')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");


module.exports = {
  name: "darkmode",
  description: "dark mode win 10",
  run: async (client, message, args ) => {
    let darkmodeEmbed = new MessageEmbed()
      .setTitle("<:blurplesearch:892673855326421012> Como usar: Darkmode")
      .addField(
        "Modo escuro ( dark mode ) + Efeito de transparÃªncia","â”• BotÃ£o direito -> ConfiguraÃ§Ãµes -> PersonalizaÃ§Ã£o -> Cores\n>>> Aqui vc pode escolher o dark mode e os efeitos de transparÃªncia")
      .setImage(`https://media.discordapp.net/attachments/892402622269644821/892405633947672586/unknown.png`)
      .setColor(colors.uptime);

      let button1 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('ðŸ¤” â€¢ Link do Video') 
      .setURL("https://www.youtube.com/watch?v=uCVc-7z-toE");

      return message.channel.send(darkmodeEmbed,{
        button: [button1],
      });

  },
};
