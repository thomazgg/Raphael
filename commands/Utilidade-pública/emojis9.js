const { MessageAttachment } = require("discord.js");

module.exports = {
  name: "emojis9",
  description: "emojis 9",
  ownerOnly: false,
  run: async (client, message, args) => {
    return message.channel.send("cabo"); 
  },
};