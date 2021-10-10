const colors = require('./../../colors.json')
const Color = "RANDOM", Random = require("srod-v2");
const Discord = require("discord.js");

module.exports = {
  name: "shit",
  aliases: [],
  description: "Return A Random shit!",
  usage: "shit",
  run: async (client, message, args) => {

    const Data = await Random.GetAnimeImage({ Anime: "shit", Color: Color });
    
    return message.channel.send(Data);
  }
};