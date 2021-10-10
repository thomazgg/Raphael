const { MessageEmbed } = require("discord.js");
const colors = require('./../../colors.json')

module.exports = {
    name: "coinflip",
    description: "Joga uma moeda!",
    run: async(client, message, args) => {
        const choices= ["😀 cara", "👑 coroa"];
        const choice = choices[Math.floor(Math.random() * choices.length)];
        let embed = new MessageEmbed()
        .setTitle("😀 Cara ou 👑 coroa?")
        .setDescription(`Vc tirou **${choice}**!`)
        .setFooter("Bot feito por @thomazgg")
        message.channel.send(embed)
    }
}