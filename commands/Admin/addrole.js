const { Message } = require('discord.js')
const colors = require('./../../colors.json')

module.exports = {
  name: "addrole",
  aliases: [],
  usage: "*addrole",
  description: "Adiciona cargo",
  run: async (client, message, args) => {

        // então, primeiro vamos verificar se o autor da mensagem tem permissões
        // esta linha significa que se o autor não tiver permissão para gerenciar cargos, ele irá parar o processo e enviar o seguinte texto
        if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('<:xmark:891611927900479489> Você não tem permissão.')

        // em seguida, definimos algumas variáveis
        const target = message.mentions.members.first() // membro = menções

        if(!target) return message.channel.send('<:xmark:891611927900479489> Nenhum membro especificado') // quando nenhum membro é pingado
        
        const role = message.mentions.roles.first() // roles = mentions
        if(!role) return message.channel.send('<:xmark:891611927900479489> Nenhum cargo especificada') // quando nenhuma cargo é especificada ou pingada

        // agora o código!
        await target.roles.add(role) // adicionando a função ao usuário
        message.channel.send(`<:check:891611927980154911> ${target.user.username} obteve um cargo`)
    }
}