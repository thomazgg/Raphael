const Discord = require('discord.js');
const colors = require('./../../colors.json')
const superagent = require('superagent');

module.exports = {
        name: 'hug',
        description: 'Abraça pessoas',
        aliases: ["hug"],
        usage: '<user>',
        accessableby: "",
    run: async (client, message, args) => {
        let victim = message.mentions.users.first() || (args.length > 0 ? message.users.cache.filter(e => e.username.toLowerCase().includes(args.join(" ").toLowerCase())).first(): message.author) || message.author;
        const { body } = await superagent
          .get("https://nekos.life/api/v2/img/hug");
              const embed = new Discord.MessageEmbed()
             .setColor('#ff4242')
              
          .setDescription(`${victim} foi abraçado por ${message.author}`)
          .setImage(body.url)
           .setTimestamp()
      
        message.channel.send(embed);
        
    }
}