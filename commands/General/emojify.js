const Discord = require('discord.js');
const config = require('../../config');
const colors = require('./../../colors.json')

module.exports = {
        name: 'emojify',
        description: 'Emojifica sua mensagem de texto',
        aliases: ["emojify"],
        usage: '<text>',
    run: async (bot, message, args) => {
    
        if(!args[0]) {
			return message.channel.send(
				'❎ Forneça um texto válido.',
			);
		}

		const specialChars = {
			'0': ':zero:',
			'1': ':one:',
			'2': ':two:',
			'3': ':three:',
			'4': ':four:',
			'5': ':five:',
			'6': ':six:',
			'7': ':seven:',
			'8': ':eight:',
			'9': ':nine:',
			'#': ':hash:',
			'*': ':asterisk:',
			'?': ':grey_question:',
			'!': ':grey_exclamation:',
			' ': '   ',
		};

		const emojified = `${args.join(' ')}`.toLowerCase().split('').map(letter => {
			if (/[a-z]/g.test(letter)) {
				return `:regional_indicator_${letter}: `;
			}
			else if (specialChars[letter]) {
				return `${specialChars[letter]} `;
			}
			return letter;
		}).join('');

		if(emojified.length > 2000) {
			return message.channel.send(`${bot.emotes.error} A mensagem emojificada excede 2.000 caracteres.`);
		}

		message.channel.send(emojified);

    }
};






/**
 * @INFO
 * Bot Coded by RogmitOp#6051 |
 * https://www.youtube.com/channel/UCPJRB-I9FCkWzgN3c2vKIpQ
 * @INFO
 * Please mention Him , when using this Code!
 * @INFO
 */