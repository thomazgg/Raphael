const db = require("quick.db")
const { MessageEmbed } = require("discord.js");
const { measureMemory } = require("vm");
const colors = require('./../../colors.json')

module.exports = {
        name: "hackban",
        aliases: ['forceban'],
        usage: "[hackban || forceban] <user ID>",

    run: async(bot, message, args) => {
        const target = args[0];
        if (isNaN(target)) return message.reply(`<:xmark:891611927900479489> Especifique um ID`);

        const reason   = args.splice(1, args.length).join(' ');

            try {
                message.guild.members.ban(target, {reason: reason.length < 1 ? 'Nenhum motivo fornecido.': reason});
                const embed2 = new MessageEmbed()
                .setColor(colors.uptime)
                .setDescription("**<:check:891611927980154911> Eles foram banidos com sucesso. O usuário não foi notificado!**");
                await message.channel.send(embed2);                
                const channel  = db.fetch(`modlog_${message.guild.id}`);
                if (!channel) return;
            const embed = new MessageEmbed()
                .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
                .setColor(colors.uptime)
                .setFooter(message.guild.name, message.guild.iconURL())
                .addField("**Moderação**", "ban")
                .addField("**ID**", `${target}`)
                .addField("**Banido por**", message.author.username)
                .addField("**Razão**", `${reason || "**Sem Razão**"}`)
                .addField("**Data**", message.createdAt.toLocaleString())
                .setTimestamp();
  
            var sChannel = message.guild.channels.cache.get(channel)
            if (!sChannel) return;
            sChannel.send(embed)
            
            } catch (error) { console.log(error)}
    }
} 