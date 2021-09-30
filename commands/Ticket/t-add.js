const colors = require('./../../colors.json')
module.exports = {
    name: 'tadd',
    aliases: ['ticketadd'],
    description: 'Adiciona um membro a um ticket especificado.',
    usage: '',
    run: async (client, message, args) => {
        if (!message.guild.me.permissions.has("ADMINISTRATOR")) return message.channel.send("<:xmark:891611927900479489> Eu preciso da permissÃ£o de `MANAGE_WEBHOOKS` para usar este comando");
        if (message.channel.name.includes('ticket-')) {
            const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(' ') || x.user.username === args[0]);
            if (!member) {
                return message.channel.send(`Uso incorreto! Modo de usar correto: \`${config.prefix}!add <membro>\``);
            }
            try {
                message.channel.updateOverwrite(member.user, {
                    VIEW_CHANNEL: true,
                    SEND_MESSAGES: true,
                    ATTACH_FILES: true,
                    READ_MESSAGE_HISTORY: true,
                }).then(() => {
                    message.channel.send(`<:check:891611927980154911> Adicionado com sucesso ${member} para ${message.channel}`);
                });
            }
            catch (e) {
                return message.channel.send('**<:xmark:891611927900479489> Ocorreu um erro. Por favor, tente novamente!**');
            }
        }
    }
}
