const {
  Message
} = require('discord.js')
const colors = require('./../../colors.json')

module.exports = {
  name: 'unmute',
  usage: "<member id>",
  run: async(client, message, args) => {
    const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('<:xmark:891611927900479489> Você não tem permissão para usar este comando')

    if (!Member) return message.channel.send('Membro não encontrado')

    const role = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'mutado');

    await Member.roles.remove(role)

    message.channel.send(`${Member.displayName} agora não está mudo`)
  }
}