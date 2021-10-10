const discord = require("discord.js");
const colors = require('./../../colors.json')

module.exports = {
  name: "bot-token",
  aliases: ["token","bottoken"],
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`<:BadgeDiscordBugHunterGold:893071976229404702> Discord Bot Token <:MarkBoutonGG:892670934157250610> `)
    .setDescription('```ODY1Nzc2NTMzMzA0NDkwMg==.WolwWe.tIXkVxbH0PpVs3UPkkoGAwt44PE``` \n ||Note: Este token é provavelmente falso!|| <:MarkBoutonLOL:892670934081753128> ')
    .setColor(colors.uptime)
    .setFooter(`Da uma sugada aq na minha rola`)
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel .send(embed)
    
  
  }
}