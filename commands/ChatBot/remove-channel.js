 const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const colors = require('./../../colors.json')

module.exports = {
  name: "remove-channel",
  aliases: ["channel-remove"],
  run: async (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_SERVER"))
{
  return;
} 
 let chatbot = db.fetch(`chatbotc_${message.guild.id}`);
  if(chatbot){
    let vc1 = "0";
    let checkc = client.channels.cache.get(chatbot);
 checkc.setRateLimitPerUser(vc1, `Responsible - ${message.member}`);
        
     db.delete(`chatbotc_${message.guild.id}`);
     message.reply("<:check:891611927980154911> Pronto, eu apaguei o canal do chatbot do meu banco de dados");
     return;
  }
  else {
    return message.reply("<:xmark:891611927900479489> Você não tem um canal Por favor, adicione-o primeiro");
  }
  }
}
