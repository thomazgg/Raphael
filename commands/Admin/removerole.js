const { Message } = require('discord.js')
const colors = require('./../../colors.json')

module.exports = {
  name: "removerole",
  aliases: [],
  usage: "*removeroel",
  description: "Remove cargos de um membro",
  run: async (client, message, args) => {
        // então, primeiro vamos verificar se o autor da mensagem tem permissões
        // esta linha significa que se o autor não tiver permissão para gerenciar cargos, ele irá parar o processo e enviar o seguinte texto
        if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('<:xmark:891611927900479489> Você não tem permissão.')
        // a seguir definimos algumas variáveis
        const target = message.mentions.members.first() // membro = menções
        if(!target) return message.channel.send('<:xmark:891611927900479489> Nenhum membro especificado') // quando nenhum membro recebe ping
        const role = message.mentions.roles.first() // roles = mentions
        if(!role) return message.channel.send('<:xmark:891611927900479489> Nenhuma cargo especificada') // quando nenhum cargo é especificado ou pingado
        // agora o código!
        await target.roles.remove(role) // removeing the role to the user
        message.channel.send(`<:check:891611927980154911> ${target.user.username} cargos foram removidos`) //this is optional and editable
    }
}