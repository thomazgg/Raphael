const db = require("quick.db");
const colors = require('./../../colors.json')
const Discord = require ("discord.js")
const { version } = require('../../package.json');
const ms = require('pretty-ms');
const { version: discordjsVersion } = require('discord.js');
module.exports = {
  name: "botinfo",
    aliases: ['binfo', 'botstats', 'stats', 'info'],
    description: 'Check\'s bot\'s status',
  run: async (client, message, args, del, member) => {
   message.delete();
      message.channel.send(new Discord.MessageEmbed()
            .setColor(colors.uptime)
            .setTitle(`<:MarkQuoteStart:892670933813305366> EstatĂ­sticas do Bot Raphael ${version} <:MarkQuoteEnd:892670934274703421>`)
            .addField('				**:clock1:  Atividade:**', `â”• ${ms(client.uptime)}`, true)
            .addField('				**<:ItemPong:892670933939126273> Ping:**', `â”• ${client.ws.ping}ms`, true)
            .addField('				**<:ItemCodingFrame:892670684277403649>  MemĂłria:**', `â”• RSS: ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} | Heap:${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}`, true)
            .addField('				**:homes: Servidores: **', `â”• ${client.guilds.cache.size} guilds`, true)
            .addField(`				**<:IconStaff:892966257480044584> UsuĂˇrios:**`, `â”• ${client.users.cache.size} usuĂˇrios`, true)
            .addField('				**<:blurplesettings:892673855083126784> Comandos:**', `â”• ${client.commands.size} cmds`,true)
            .addField('				** <:blurpleverifiedbotdeveloper:892673855200579624> Node:**', `â”• ${process.version}`, true)
            .addField('				**<:ItemBox:892670684566790145>  Emojis:**', `â”•${client.emojis.cache.size} emojis`, true)
            .addField('				**<:LogoDiscord:892670934052384779> Discord.js:**', `â”• ${discordjsVersion}`, true)
            .setFooter(`đź‘‘ Criador do BOT: @thomazgg\nRequested by ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true,}) )
            .setTimestamp()
        );
    }
}
