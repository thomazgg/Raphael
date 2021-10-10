const { Message, MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const colors = require('./../../colors.json')
const fetch = require("node-fetch");
module.exports = {
  name: 'youtube',
  aliases: ["yt"],
  description: "Obtenha uma amostra de yt a search",
  usage: "map <place>",
run: async (client, message, args) => {
  const sit = args.join("_")
if (!args.length) return message.reply("<:xmark:891611927900479489> Forneça um nome de canal válido ou consulta de pesquisa")
    const site = `https://www.youtube.com/results?search_query=${args.join("+")}`
    try {
      const msg = await message.channel.send('**Aguarde ...** Isso pode demorar até 10 segundos.')
          msg.delete({ timeout: 5000 })
      const { body } = await fetch(
        `https://image.thum.io/get/width/1920/crop/675/noanimate/${site}`
      );
let att = new Discord.MessageAttachment(body, `${sit}.png`)
      return message.channel.send(att)
  
    } catch (err) {
      if (err.status === 404)
        return message.channel
          .send("idk")
          .then(m => m.delete({ timeout: 14000 }).catch(e => {}));
      return message
        .reply(`Oh não, ocorreu um erro: \`${err.message}\`. Tente mais tarde!`)
        
    };
  
}
}


/**
 * @INFO
 * Bot Coded by RogmitOp#6051 |
 * https://www.youtube.com/channel/UCPJRB-I9FCkWzgN3c2vKIpQ
 * @INFO
 * Please mention Him , when using this Code!
 * @INFO
 */

