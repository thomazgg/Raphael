const colors = require('./../../colors.json')
module.exports = {
    name: 'topen',
    aliases: ['ticketopen'],
    description: 'Reabre um ticket.',
    usage: '',
    run: async (client, message, args) => {
        if (message.channel.name.includes('ticket-')) {
            const member = message.guild.members.cache.get(message.channel.name.split('ticket-').join(''));
            try {
                message.channel.updateOverwrite(member.user, {
                    VIEW_CHANNEL: true,
                    SEND_MESSAGES: true,
                    ATTACH_FILES: true,
                    READ_MESSAGE_HISTORY: true,
                })
                    .then(() => {
                        message.channel.send(`<:check:891611927980154911> Reaberto com sucesso ${message.channel}`);
                    });
            }
            catch (e) {
                return message.channel.send('<:xmark:891611927900479489> Ocorreu um erro. Por favor, tente novamente!');
            }
        }
        else {
            return message.reply(
                '<:xmark:891611927900479489> você não pode usar este comando aqui. Use este comando em um tíquete fechado.',
            );
        }
    }
}