const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const colors = require('./../../colors.json')

module.exports = {
  name: "set-channel",
  aliases: ["chatbot", "channel-set"],
  run: async (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_SERVER"))
{
  return;
} 
if(!message.guild.me.hasPermission("MANAGE_CHANNELS"))
{
  return message.reply("<:xmark:891611927900479489> Eu preciso de permissão de gerenciamento de canal para alterar o modo de funcionamento do canal");
}

 
  let chatbot = db.fetch(`chatbotc_${message.guild.id}`);



if(!chatbot){
 if(!args[0])
  {
    return message.channel.send("<:xmark:891611927900479489> Você não me deu um canal !");
  }
  var wchannel =  message.mentions.channels.first().id || args[0];
  var channel2 = message.mentions.channels.first();
  if(!channel2)
  {
    var channel2 = args[0];
    var channel2 = client.channels.cache.get(channel2);
  }
db.set(`chatbotc_${message.guild.id}`, wchannel);
let vc1 = "4";
 channel2.setRateLimitPerUser(vc1, `Responsible - ${message.member}`);
        
return message.reply(`<:check:891611927980154911> Feito eu agora vou falar em ${wchannel} e haverá modo lento por causa de RateLimits`);
}else {
  return message.reply("<:xmark:891611927900479489> Você já tem um canal do chatbot, primeiro exclua-o do meu comando");
}
  }
  }