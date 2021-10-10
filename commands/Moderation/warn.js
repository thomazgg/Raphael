const colors = require('./../../colors.json')
const db = require("quick.db");
const Discord = require('discord.js')

module.exports = {
  name: "warn",
  usage: "warn <@mention> <reason>",
  description: "Dar warn para quem não obedece às regras",
  cooldown: 3,
  run: async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send(
        "```Você deve ter permissões de administrador para usar este comando!```"
      );
    }

    const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send(
        "```Mencione a pessoa a quem deseja dar warn - warn @mention <reaosn>```"
      );
    }

    if (message.mentions.users.first().bot) {
      return message.channel.send("```Você não pode dar warn em bots```");
    }

    if (message.author.id === user.id) {
      return message.channel.send("```Você não pode se dar warn```");
    }

    if (user.id === message.guild.owner.id) {
      return message.channel.send(
        "```Seu idiota, como você pode dar warn no dono do servidor? -_-```"
      );
    }

    const reason = args.slice(1).join(" ");

    if (!reason) {
      return message.channel.send(
        "```Por favor, forneça um motivo para dar warn - warn @mention <reason>```"
      );
    }

    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

    if (warnings === null) {
      db.set(`warnings_${message.guild.id}_${user.id}`, 1);
      user.send(
        `Você tomou warn em **${message.guild.name}** por ${reason}`
      );
      await message.channel.send(
        `Você deu warn **${
          message.mentions.users.first().username
        }** por ${reason}`
      );
    } else if(warnings !== null) {
      
      db.add(`warnings_${message.guild.id}_${user.id}`, 1);
      
      user.send(`Você tomou warn em **${message.guild.name}** por ${reason}`);
      
      await message.channel.send(`Você deu warn **${message.mentions.users.first().username}** por ${reason}`);
      
      message.delete
      
    }
  }
};