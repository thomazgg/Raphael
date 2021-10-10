const { MessageEmbed } = require("discord.js");
const colors = require('./../../colors.json')
const Discord = require("discord.js")
module.exports = {
  name: "servericon",
  aliases: ['icon'],
  usage: "*servericon",
  description: "Mostra o ícone do servidor",
  run: async (client, message, args) => {
    const { guild } = message 
    //console.log(guild)
    
    const { name, region, memberCount, owner, afkTimeout } = guild 
    const icon = guild.iconURL() 
    //console.log(icon)
    //console.log(name, region, memberCount, icon, owner, afkTimeout)
    message.channel.send(`O ícone do servidor é: \n${icon}`)
  },
};