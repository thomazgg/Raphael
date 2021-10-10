const db = require("old-wio.db");
const colors = require('./../../colors.json')

module.exports = {
  name: "resetwarns",
  aliases: ["rwarns"],
  usage: "rwarns <@user>",
  description: "Redefini os warns da pessoa mencionada",
  run: async (bot, message, args) => {
    
    
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("<:xmark:891611927900479489> Você deve ter permissões de administrador para usar este comando")
    }
    
    const user = message.mentions.members.first() 
    
    if(!user) {
    return message.channel.send("<:xmark:891611927900479489> Mencione a pessoa que vc quer redefinir")
    }
    
    if(message.mentions.users.first().bot) {
      return message.channel.send("<:xmark:891611927900479489> Os bots não podem ter warns")
    }
    
    if(message.author.id === user.id) {
      return message.channel.send("<:xmark:891611927900479489> Você não tem permissão para redefinir seus warns")
    }
    
    let warnings = await db.fetch(`warnings_${message.guild.id}_${user.id}`)
    
    if(warnings === null) {
      return message.channel.send(`${message.mentions.users.first().username} não tem nenhum warn`)
    }
    
   await db.delete(`warnings_${message.guild.id}_${user.id}`);
    user.send(`Todos os seus warns são redefinidos por ${message.author.username} de ${message.guild.name}`)
    await message.channel.send(`Reiniciou todos os warns de ${message.mentions.users.first().username}`)
    
  
}
}