const colors = require('./../../colors.json')
module.exports = {
    name: 'tdelete',
    aliases: ['deltick'],
    description: 'Deleta um ticket específico.',
    usage: '',
    run: async (client, message, args) => {

        if (message.channel.name.includes('ticket-')) {
            message.channel.delete();
        }
        else {
            return message.reply('<:xmark:891611927900479489> você não pode usar este comando aqui. Use este comando quando quiser apagar um tíquete.');
        }

    }
}