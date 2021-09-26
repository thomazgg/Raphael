const math = require('discord-math');
const colors = require('./../../colors.json')

module.exports = {
  name: "ban",
  aliases: ["b"],
  usage: "ban",
  description: "Bani um membro",
  run: async (client, message, args) => {
    const {member, mentions} = message
    const tag = `<@${member.id}` 
    const target = message.mentions.users.first();

      if (
        member.hasPermission('BAN_MEMBERS') ||
        member.hasPermission('ADMINISTRATOR')
      ) {
        if (target){
          const memberTarget = message.guild.members.cache.get(target.id);
          memberTarget.ban();
          message.channel.send(`${tag}> , <:check:891611927980154911> <@${memberTarget.user.id}> has been banned!`);

      }else {
        message.channel.send(`${tag}> <:xmark:891611927900479489> Por favor, especifique um usuário válido para banir!`);
      }
    }else {
      message.channel.send(`${tag}> <:xmark:891611927900479489> Você não tem permissões necessárias para usar este comando!`);
    }
  },
};