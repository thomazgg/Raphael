const db = require("quick.db")
const colors = require('./../../colors.json')

module.exports = {
        name: "auditlog",
        aliases: ['setm', 'sm', 'smc', 'setmodlog'],
        usage: "[channel mention | channel ID | channel name]",
        description: "Define um canal para o qual o bot pode enviar registros de moderação!",
    run: async (bot, message, args) => {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("**<:xmark:891611927900479489> Você não tem as permissões necessárias! - [ADMINISTRATOR]**")
    if (!args[0]) {
      let b = await db.fetch(`modlog_${message.guild.id}`);
      let channelName = message.guild.channels.cache.get(b);
      if (message.guild.channels.cache.has(b)) {
        return message.channel.send(
          `**<:check:891611927980154911> O canal modlog definido neste servidor é \`${channelName.name}\`!**`
        );
      } else
        return message.channel.send(
          "**<:xmark:891611927900479489> Digite um nome de canal ou ID para definir!**"
        );
    }
        let channel = message.mentions.channels.first() || bot.guilds.cache.get(message.guild.id).channels.cache.get(args[0]) || message.guild.channels.cache.find(c => c.name.toLowerCase() === args.join(' ').toLocaleLowerCase());

        if (!channel || channel.type !== 'text') return message.channel.send("**<:xmark:891611927900479489> Insira um canal de texto válido!**");

        try {
            let a = await db.fetch(`modlog_${message.guild.id}`)

            if (channel.id === a) {
                return message.channel.send("**<:xmark:891611927900479489> Este canal já está definido como canal Modlog!**")
            } else {
                bot.guilds.cache.get(message.guild.id).channels.cache.get(channel.id).send("**<:check:891611927980154911> Canal setado para Modlog!**")
                db.set(`modlog_${message.guild.id}`, channel.id)

                message.channel.send(`**<:check:891611927980154911> O canal modlog foi configurado com sucesso em \`${channel.name}\`!**`)
            }
        } catch {
            return message.channel.send("**<:xmark:891611927900479489> Erro - `Permissões faltando ou o canal não é um canal de texto!`**");
        }
    }
};