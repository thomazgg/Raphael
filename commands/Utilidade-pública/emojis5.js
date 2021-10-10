const { MessageAttachment } = require("discord.js");

const file = new MessageAttachment("./assets/emojis/emojis5.txt"); 
//for a file on projects root if your file is in another subfolder just type the relative path to it 

module.exports = {
  name: "emojis5",
  description: "emojis 5",
  ownerOnly: false,
  run: async (client, message, args) => {
    return message.channel.send(file); 
  },
};