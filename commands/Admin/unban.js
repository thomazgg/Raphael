const colors = require('./../../colors.json')

module.exports = {
  name: "unban",
  aliases: ["ub"],
  usage: "unban",
  description: "Desbani um membro",
  run: async (client, message, args) => {
    const {member, mentions} = message
    const tag = `<@${member.id}`
      if (
        member.hasPermission('BAN_MEMBERS') ||
        member.hasPermission('ADMINISTRATOR')
      ) if (!args[0]) return message.channel.send(`${tag}> <:xmark:891611927900479489> Por favor, especifique um usuário para desbanir!`);
      {
        const user = await message.channel.guild.members.unban(args[0]);
        return message.channel.send(`<:check:891611927980154911> ${user.tag} foi desbanido`);

      }
        
      
  }
}