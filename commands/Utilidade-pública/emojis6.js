const { MessageAttachment } = require("discord.js");

const file = new MessageAttachment("./assets/emojis/emojis6.txt"); 
//for a file on projects root if your file is in another subfolder just type the relative path to it 

module.exports = {
  name: "emojis6",
  description: "emojis 6",
  ownerOnly: false,
  run: async (client, message, args) => {
    return message.channel.send(file); 
  },
};