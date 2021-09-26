const { Client, Message, MessageEmbed } = require('discord.js');
const akinator = require('discord.js-akinator')
const colors = require('./../../colors.json')
module.exports = {
    name: 'akinator',
    aliases: ['aki'],
   description: 'Akinator game but on discord',
    usage: 'akinator <option>',
    run: async(client, message, args) => {
        akinator(message, client)
    }
}
