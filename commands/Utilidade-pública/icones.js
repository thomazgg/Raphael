const { MessageAttachment } = require("discord.js");

const file = new MessageAttachment("./assets/Icones.rar"); 
//for a file on projects root if your file is in another subfolder just type the relative path to it 

module.exports = {
  name: "icones",
  aliases: ["ico"],
  description: "envia Icones.rar",
  ownerOnly: false,
  run: async (client, message, args) => {
    return message.channel.send(file); 
  },
};