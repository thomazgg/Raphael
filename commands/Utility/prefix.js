
const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'prefix',
    aliases: ["prefixo"],
    cooldown: 5,
    run: async (client, message, args)=> {
        try {
            console.log("setprefix")

            const PREFIX = db.get(`guild_${message.guild.id}_prefix`) || "!"

            if (!message.member.hasPermission('MANAGE_GUILD')) return message.reply('Você não tem as permissões necessárias para usar este comando.')

            if (!args.length) {
                const embed = new Discord.MessageEmbed()
                    .setColor(colors.uptime)
                    .setDescription(`${PREFIX}setprefix [prefix]`)

                message.channel.send(embed)
            }


            if (args[0]) {

                const pAlready = new Discord.MessageEmbed()
                    .setColor(colors.uptime)
                    .setDescription(`Esse já é o seu prefixo.`)

                if (args[0] === db.get(`guild_${message.guild.id}_prefix`)) return message.channel.send(pAlready) // already

                if (args[0] === "B!") db.delete(`guild_${message.guild.id}_prefix`)

                db.set(`guild_${message.guild.id}_prefix`, args[0])

                let pEmbed = new Discord.MessageEmbed()
                    .setColor(colors.uptime)
                    .setTitle("Prefixo alterado!")
                    .setDescription(`Novo prefixo definido para ${args[0]}`);

                message.channel.send(pEmbed)
            }
        }  catch (e) {
        return message.channel.send(`Ocorreu um erro, por favor tente novamente!`);
        }
    }
}