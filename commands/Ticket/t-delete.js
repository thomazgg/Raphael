const colors = require('./../../colors.json')
module.exports = {
    name: 'tdelete',
    aliases: ['deltick'],
    description: 'Delete a specified ticket.',
    usage: '',
    run: async (client, message, args) => {

        if (message.channel.name.includes('ticket-')) {
            message.channel.delete();
        }
        else {
            return message.reply('<a:no:865963806483808256> you cannot use this command here. Please use this command when you want to delete a ticket.');
        }

    }
}