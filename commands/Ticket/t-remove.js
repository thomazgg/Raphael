const colors = require('./../../colors.json')
module.exports = {
    name: 'tremove',
    aliases: ['ticketremove'],
    description: 'Remove um membro de um ticket especificado.',
    usage: '',
    run: async (client, message, args) => {

        if (message.channel.name.includes('ticket-')) {
            const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(' ') || x.user.username === args[0]);
            if (!member) {
                return message.channel.send(`Uso incorreto! Modo de usar correto:${config.prefix}remove <membro>`);
            }
            try {
                message.channel.updateOverwrite(member.user, {
                    VIEW_CHANNEL: false,
                    SEND_MESSAGES: false,
                    ATTACH_FILES: false,
                    READ_MESSAGE_HISTORY: false,
                }).then(() => {
                    message.channel.send(`<:check:891611927980154911> Removido com sucesso ${member} de ${message.channel}`);
                });
            }
            catch (e) {
                return message.channel.send('<:xmark:891611927900479489> Ocorreu um erro. Por favor, tente novamente!');
            }
        }

    }
}