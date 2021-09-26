const discord = require("discord.js");
const colors = require('./../../colors.json')

module.exports = {
  name: "bot-token",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`<:bughunter:866155261017063424> Discord Bot Token`)
    .setDescription('```ODY1Nzc2NTMzMzA0NDkwMg==.WolwWe.tIXkVxbH0PpVs3UPkkoGAwt44PE``` \n ||Note: This token is Propabbly Fake!|| <:fun:866155255321853982>')
    .setColor(colors.uptime)
    .setFooter(`Made by Rogmitop `)
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel .send(embed)
    
  
  }
}