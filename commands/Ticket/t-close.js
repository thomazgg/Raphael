const colors = require('./../../colors.json')
module.exports = {
    name: 'tclose',
    aliases: [''],
    description: 'Closes the ticket.',
    usage: '',
    run: async (client, message, args) => {

        if (message.channel.name.includes('ticket-')) {
            const member = message.guild.members.cache.get(message.channel.name.split('ticket-').join(''));
            if (message.member.permissions.has('ADMINISTRATOR') || message.channel.name === `ticket-${message.author.id}`) {
                message.channel.messages.fetch().then(async (messages) => {
                    const output = messages.array().reverse().map(m => `${new Date(m.createdAt).toLocaleString('en-US')} - ${m.author.tag}: ${m.attachments.size > 0 ? m.attachments.first().proxyURL : m.content}`).join('\n');

                    let response;
                    try {
                        response = await sourcebin.create([
                            {
                                name: ' ',
                                content: output,
                                languageId: 'text',
                            },
                        ], {
                            title: `Chat transcript for ${message.channel.name}`,
                            description: ' ',
                        });
                    }
                    catch (e) {
                        return message.channel.send('<a:no:865963806483808256> An error occurred, please try again!');
                    }

                    const embed = new MessageEmbed()
                        .setDescription(`[\`📄 View\`](${response.url})`)
                        .setColor(colors.uptime)
                    member.send('Here is a transcript of your ticket, please click the link below to vew the transcript', embed);
                }).then(() => {
                    try {
                        message.channel.updateOverwrite(member.user, {
                            VIEW_CHANNEL: false,
                            SEND_MESSAGES: false,
                            ATTACH_FILES: false,
                            READ_MESSAGE_HISTORY: false,
                        }).then(() => {
                            message.channel.send(`Successfully closed ${message.channel}!`);
                        });
                    }
                    catch (e) {
                        return message.channel.send('<a:no:865963806483808256> An error occurred, please try again!');
                    }
                });
            }
        }
        else {
            return message.reply('<a:no:865963806483808256> you cannot use this command here. Please use this command when you\'re closing a ticket.');
        }

    }
}