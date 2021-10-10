const Discord = require('discord.js')
const colors = require('./../../colors.json')
const { WebhookClient } = require('discord.js');

module.exports = {
    name: "bug-report",
    aliases: ['bugreport','report','bug'],
    description: "Comando de para reportar bug",
    async run(bot, message, args) {
        const wc = new WebhookClient('893079136032129035/KSGGETQ6PZAy0i2ORmmo68zHF4EGSLmvhcHwA8uuIl3wPyhAEhgNMfkVsjBiVL7D-IWy')

        if (!args[0]) {
            return message.reply('<:reply:891618744814686269> Por favor, adicione um bug para relatar!')
        }else{
            message.reply(`✉ | ${message.author.username}, Obrigado por informar! :)`)

            const bugEmbed = new Discord.MessageEmbed()
                .setColor(colors.uptime)
                .setTitle(`${message.author.username}#${message.author.discriminator} (${message.author.id}) Bug:`)
                .setDescription(`${args}`)
                .addField("No servidor:", `${message.guild.name}`)
                .addField("ID do servidor:", `${message.guild.id}`)

            wc.send({
                embeds: [bugEmbed]
            })
        }
    }
}