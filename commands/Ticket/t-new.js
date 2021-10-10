const colors = require('./../../colors.json')
module.exports = {
    name: 'tnew',
    aliases: ['open-ticket', 'newtick'],
    description: 'Creates a new ticket.',
    usage: '',
    run: async (client, message, args) => {

        if (!message.guild.me.permissions.has("MANAGE_CHANNELS")) return message.channel.send("Eu preciso da permissão de `MANAGE_CHANNELS` para usar este comando");
        if (message.guild.channels.cache.find(channel => channel.name === `ticket-${message.author.id}`)) {
            return message.reply('você já tem um ticket, feche o ticket existente antes de abrir um novo!');
        }

        message.guild.channels.create(`ticket-${message.author.id}`, {
            permissionOverwrites: [
                {
                    id: message.author.id,
                    allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
                },
                {
                    id: message.guild.roles.everyone,
                    deny: ['VIEW_CHANNEL'],
                },
            ],
            type: 'text',
        }).then(async channel => {
            message.reply(`<:check:891611927980154911> você criou um ticket com sucesso! Por favor clique em ${channel} para ver o seu ticket.`);
            channel.send(`Opa ${message.author}, bem vindo ao seu ticket! Por favor, seja paciente, estaremos com você em breve. Se você gostaria de fechar este tíquete, execute \`${config.prefix}close\``);
            let logchannel = message.guild.channels.cache.find(channel => channel.name === `ticket-logs`)
            if (logchannel) {
                logchannel.send(`Ticket ${message.author.id} criada. Clique no canal para ver <#${channel.id}>`);
            }
        });

    }
}