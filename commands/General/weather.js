const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const config = require('../../config');
const weather = require('weather-js');
const colors = require('./../../colors.json')

module.exports = {
        name: 'weather',
        description: 'Mostra informações meteorológicas',
        aliases: ["weather"],
        usage: '<city name>',
    run: async (bot, message, args) => {
    
        if(args.length === 0){
            let errorembed = new MessageEmbed()
            .setTitle("Error :cry:")
            .setDescription("<a:no:865963806483808256> Por favor, insira um local!")
            .setColor(colors.uptime)
            .setTimestamp();
                return message.channel.send(errorembed);
        }
        
        weather.find({ search: args.join(" "), degreeType: 'C'}, function(err, result) {
          
        if(result.length === 0){
            let errorembed = new MessageEmbed()
            .setTitle("Error :cry:")
            .setDescription("<a:no:865963806483808256> Insira um local válido!")
            .setColor(colors.uptime)
            .setTimestamp();
                return message.channel.send(errorembed);
        }
        
          var current = result[0].current;
          var location = result[0].location;
            if (err) {
            let errorembed = new MessageEmbed()
            .setTitle("Error :cry:")
            .setDescription("<a:no:865963806483808256> Por favor, insira um local válido!")
            .setColor(colors.uptime)
            .setTimestamp();
                return message.channel.send(errorembed);
            }
        
            
            let embed = new MessageEmbed()
            .setDescription(`**${current.skytext}**`)
            .setAuthor(`Tempo para ${current.observationpoint}`)
            .setThumbnail(current.imageUrl)
            .setColor(colors.uptime)
            .addField('Fuso horário', `UTC${location.timezone}`, true)
            .addField('Tipo de grau', location.degreetype, true)
            .addField('Temperatura', `${current.temperature} Graus`, true)
            .addField('Parece', `${current.feelslike} Graus`, true)
            .addField('Ventos', current.winddisplay, true)
            .addField('Umidade', `${current.humidity}%`, true)
            .setTimestamp();
                message.channel.send(embed);
        });
    }
};