const { hangman } = require('reconlx')
const colors = require('./../../colors.json')

module.exports = {
  name: "hangman",
  aliases: [],
  usage: "hangman",
  description: "hangman",
  run: async (client, message, args) => {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('Você precisa de permissão para gerenciar mensagens.')
        const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
        if(!channel) return message.channel.send('Especifique um canal')
        const word = args.slice(1).join(" ")
        if(!word) return  message.channel.send('Especifique uma palavra para adivinhar.')

        const hang = new hangman({
            message: message,
            word: word,
            client: client,
            channelID: channel.id,
        })

        hang.start();
    }
}