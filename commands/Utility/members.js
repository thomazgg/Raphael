const Discord = module.require("discord.js");
const colors = require('./../../colors.json')

module.exports = {
  name: "members",
  aliases: ["MemberCount" , "Memberscount", "memberscount", "membercount"],
  run: async (client, message, args) => {

 
  
  const embed = new Discord.MessageEmbed()
    .setAuthor("Membros", message.guild.iconURL)
    .setColor(colors.uptime)
    .addField("Total de Membros:", message.guild.memberCount || message.guild.members.size)
  
  message.channel.send(embed);
}
}