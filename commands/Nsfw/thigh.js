const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const NSFW = require('discord-nsfw')
const colors = require('./../../colors.json')
const nsfw = new NSFW();
module.exports = {
    name: "Thigh",
    description: " nsfw cmd!",

    async run (client, message, args) {

if(message.channel.nsfw) {

const image = await nsfw.thigh();
const embed = new Discord.MessageEmbed()
    .setTitle(`Thigh Image`)
    .setColor(colors.uptime)
    .setImage(image);
message.channel.send(embed);

} else {
message.channel.send("💢 canal não é nsfw")
}

    }
}