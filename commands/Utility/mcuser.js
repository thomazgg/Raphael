const Discord = require('discord.js')
const colors = require('./../../colors.json')
module.exports = {
  name: 'minecraft',
  run :async (client , message , args) => {
  const sentence = args.join("+")
    
    if (!sentence) return message.channel.send('Por favor, insira algum texto.')
    if (sentence > 22) return message.channel.send("Digite um texto de no máximo 22 caracteres")
    let embed = new Discord.MessageEmbed()
      .setTitle('Conquista desbloqueada!')
      .setImage(`https://api.cool-img-api.ml/achievement?text=${sentence}`)
      .setColor(colors.uptime)
    message.channel.send(embed)
  }
}