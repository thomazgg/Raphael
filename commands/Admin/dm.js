const { ownerID } = require('../../owner.json') 
const colors = require('./../../colors.json')

module.exports = {
      name: "dm",
      description: "DM a user in the guild",
      aliases: ['pm'],
    run: async (bot, message, args) => {
        
        if(!message.channel.permissionsFor(message.member).has("MANAGE_MESSAGES") && !ownerID.includes(message.author.id)) return;


      let user =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]);
      if (!user)
        return message.channel.send(
          `<:xmark:891611927900479489> Você não mencionou um usuário`
        );
      if (!args.slice(1).join(" "))
        return message.channel.send("<:xmark:891611927900479489> Você não especificou sua mensagem");
      user.user
        .send(args.slice(1).join(" "))
        .catch(() => message.channel.send("<:xmark:891611927900479489> Esse usuário não pôde receber DMs!"))
        .then(() => message.channel.send(`
        <:check:891611927980154911> Enviou uma mensagem para ${user.user.tag}`));
    },
  };