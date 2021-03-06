const {
  Message,
  MessageEmbed
} = require('discord.js')
const colors = require('./../../colors.json')
const ms = require('ms')

module.exports = {
  name: 'mute',
  usage: '<name of member>',
  description: 'Silencia um membro',

  run: async(client, message, args) => {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('<:xmark:891611927900479489> Você não tem permissão para usar este comando')
    const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if (!Member) return message.channel.send('<:xmark:891611927900479489> Marque algum membro para silenciar.')
    const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'muted')
    if (!role) {
      try {
        message.channel.send('<:xmark:891611927900479489> O cargo de  silenciado/mutado não foi encontrada, tentando criar um cargo de silenciado/mutado...')

        let muterole = await message.guild.roles.create({
          data: {
            name: 'muted',
            permissions: []
          }
        });
        message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
          await channel.createOverwrite(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          })
        });
        message.channel.send('<:check:891611927980154911> O cargo de silenciado/mutado foi criada com sucesso!')
      } catch (error) {
        console.log(error)
      }
    };
    let role2 = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted')
    if (Member.roles.cache.has(role2.id)) return message.channel.send(`<a:no:865963806483808256> ${Member.displayName} já foi silenciado/mutado.`)
    await Member.roles.add(role2)
    message.channel.send(`<:check:891611927980154911> ${Member.displayName} agora está mutado.`)
  }
}