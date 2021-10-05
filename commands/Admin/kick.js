const math = require('discord-math');
const colors = require('./../../colors.json')
module.exports = {
  name: "kick",
  aliases: ["ckl"],
  usage: "kick",
  description: "Kicka um membro",
  run: async (client, message, args) => {
    const {member, mentions} = message
    const tag = `<@${member.id}` 
    const target = message.mentions.users.first();

      if (
        member.hasPermission('KICK_MEMBERS') ||
        member.hasPermission('ADMINISTRATOR')
      ) {
        if (target){
          const memberTarget = message.guild.members.cache.get(target.id);
          memberTarget.kick();
          message.channel.send(`${tag}>, <:check:891611927980154911> <@${memberTarget.user.id}> foi kickado!`);

      }else {
        message.channel.send(`${tag}> <:xmark:891611927900479489> Especifique um usuário válido para kickar!`);
      }
    }else {
      message.channel.send(`${tag}> <:xmark:891611927900479489> Você não tem permissões necessárias para usar este comando!`);
    }
  },
};