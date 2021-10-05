const {Client, Message, Util} = require("discord.js")
const colors = require('./../../colors.json')

module.exports = {
  name: "steal",
  aliases: ["addemoji"],
  usage: "steal emoji",
  description: "Rouba um emoji",
  run: async (client, message, args) => {
    if(!args.length) return message.reply('<:xmark:891611927900479489> Especifique qual emoji deseja adicionar!');
    
    for (const rawEmoji of args){
      const parsedEmoji = Util.parseEmoji(rawEmoji);

      if(parsedEmoji.id){
        const extension = parsedEmoji.animated ? ".gif" : ".png";
        const url = `https://cdn.discordapp.com/emojis/${parsedEmoji.id + extension}`;
        message.guild.emojis.create(url, parsedEmoji.name)
          .then((emoji) => message.channel.send(`Adicionado: \`${emoji.url}\`` ));
      }
    }
  },
};
