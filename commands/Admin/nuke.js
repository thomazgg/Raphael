const { MessageEmbed } = require('discord.js')
const colors = require('./../../colors.json')

module.exports = {
  name: "nuke",
  description: "Nuke um determinado canal",
  run: async (client, message, args) => {
    const { member, mentions } = message
    const tag = `<@${member.id}`
    const target = message.mentions.users.first();
    if (
      member.hasPermission('MANNAGE_CHANNEL')
    ) {
      let reason = args.join(" ") || "Sem Razão"
      if (!message.channel.deletable) {
        return message.reply("<:check:891611927980154911> Este canal não pode ser nukado!")
      }
      let newchannel = await message.channel.clone()
      await message.channel.delete()
      let embed = new MessageEmbed()
        .setTitle("Canal Nukado")
        .setDescription(reason)
        .setImage('https://media0.giphy.com/media/oe33xf3B50fsc/200.gif')
      await newchannel.send(embed)
    } else {
      message.reply("<a:no:865963806483808256> Você não tem permissão para usar este comando/")
    }
  },
};