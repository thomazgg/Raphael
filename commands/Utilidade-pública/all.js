const { MessageAttachment } = require("discord.js");

module.exports = {
  name: "all",
  description: "mostra todos comandos de utilidade-publica",
  ownerOnly: false,
  run: async (client, message, args) => {
    return message.channel.send("Comandos disponiveis: `!emojis[1-8]` `!icones` `!markdown` `!win10` `!cursor` `!darkmode`"); 
  },
};