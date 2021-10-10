const { MessageAttachment } = require("discord.js");

module.exports = {
  name: "emojis",
  aliases: ["emoji"],
  description: "mostra quais emojis tem disponiveis",
  ownerOnly: false,
  run: async (client, message, args) => {
    return message.channel.send("Emojis disponiveis: !emojis[1-8]"); 
  },
};