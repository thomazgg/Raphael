const Discord = require('discord.js')
const colors = require('./../../colors.json')
const { WebhookClient } = require('discord.js');

module.exports = {
    name: "feedback",
    description: "Comando de Feedback",
    async run(bot, message, args) {
        const wc = new WebhookClient('891974757342392361','65iXqThLhzfm-bFwgiiDYUhFPc7NZBRliTFJ8sumeeouiskWJVRa7Atu8cWXUnMd5GC-')

        if (!args[0]) {
            return message.reply('<:reply:891618744814686269> Por favor, adicione um motivo para o feedback!')
        }else{
            message.reply(`✉ | ${message.author.username}, Obrigado pelo feedback! :)`)

            const feedbackEmbed = new Discord.MessageEmbed()
                .setColor(colors.uptime)
                .setTitle(`${message.author.username}#${message.author.discriminator} (${message.author.id}) Feedback:`)
                .setDescription(`${args}`)
                .addField("No servidor:", `${message.guild.name}`)
                .addField("ID do servidor:", `${message.guild.id}`)

            wc.send({
                embeds: [feedbackEmbed]
            })
        }
    }
}