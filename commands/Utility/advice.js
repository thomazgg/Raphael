const api = require("srod-v2");
const Discord = require("discord.js");
const colors = require('./../../colors.json')

module.exports = {
  name: "advice",
  aliases: ["a"],
  description: "Devolva um conselho aleatÃ³rio!",
  usage: "Advice",
  run: async (client, message, args) => {
    const Data = await api.GetAdvice({ Color: "#39d822" });
    return message.channel.send(Data);
  }
};
