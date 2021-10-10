const Discord = require('discord.js');
const colors = require('./../../colors.json')
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "sudo",
  description: "sudo webhook",
  
   async run (client, message, args) {
      if (!args[1]) return message.reply('Forneça uma mensagem para enviar \n ```\n usages: sudo [mention] [text]```')
        const member = message.mentions.members.first()
 if (!member) return message.reply('Marque um usuário')
 message.channel.createWebhook(member.user.username, {
     avatar: member.user.displayAvatarURL({dynamic: true})
 }).then(webhook => {
     webhook.send(args.slice(1).join(' '))
     setTimeout(() => {
         webhook.delete()        
     }, 3000)
  }) 
  }
}
