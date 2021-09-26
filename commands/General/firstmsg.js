const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const colors = require('./../../colors.json')


module.exports = {
  name: 'firstmsg',
  async run (cleint, message, args) {
    
  

   const fetchMessages = await message.channel.messages.fetch({
      after: 1,
      limit: 1,
    });
    const msg = fetchMessages.first();

    message.channel.send(
      new MessageEmbed()
        .setTitle(`Primeira mensagem em ${message.guild.name}`)
        .setURL(msg.url)
        .setThumbnail(msg.author.displayAvatarURL({ dynamic: true }))
        .setDescription("Conteúdo: " + msg.content)
        .addField("Autor", msg.author, true)
        .addField('ID da mensagem', msg.id, true)
        .addField('Criado em', message.createdAt.toLocaleDateString(), true)
);
}
}