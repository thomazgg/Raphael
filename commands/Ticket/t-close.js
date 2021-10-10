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
                            title: `Transcrição de chat para ${message.channel.name}`,
                            description: ' ',
                        });
                    }
                    catch (e) {
                        return message.channel.send('<:xmark:891611927900479489> Ocorreu um erro. Por favor, tente novamente!');
                    }

                    const embed = new MessageEmbed()
                        .setDescription(`[\`📄 View\`](${response.url})`)
                        .setColor(colors.uptime)
                    member.send('Aqui está uma transcrição do seu ticket, clique no link abaixo para ver a transcrição', embed);
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
                        return message.channel.send('<:xmark:891611927900479489> Ocorreu um erro. Por favor, tente novamente!');
                    }
                });
            }
        }
        else {
            return message.reply('<:xmark:891611927900479489> você não pode usar este comando aqui. Use este comando quando estiver fechando um ticket.');
        }

    }
}