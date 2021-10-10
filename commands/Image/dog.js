const superagent = require("snekfetch");
const Discord = require('discord.js')
const colors = require('./../../colors.json')

module.exports = {
  name: "dog",
  aliases: [],
  run: async (client, message, args) => {
    superagent.get('https://nekos.life/api/v2/img/woof')
        .end((err, response) => {
      const embed = new Discord.MessageEmbed()
      .setTitle("Random dog")
      .setImage(response.body.url)
      .setColor(colors.uptime)
      .setFooter(`woof`)
      .setURL(response.body.url);
  message.channel.send(embed);
    }).catch((err) => message.channel.send({embed: {
                color: 16734039,
                description: "Something went wrong... :cry:"
            }}));

}
}