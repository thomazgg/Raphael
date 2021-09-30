const Discord = require("discord.js")
const { readdirSync } = require("fs");
const { ownerID } = require("../../owner.json");
const colors = require('./../../colors.json')
const { MessageEmbed } = require("discord.js");

module.exports = {
        name: "reload",
        description: "Comando de reload - Dev Only",
        aliases: ['rmod','r'],

    run: async (bot, message, args) => {
        if(message.author.id != ownerID) {
          const rembed = new MessageEmbed()
          .setTitle("Error")
          .setDescription("<:xmark:891611927900479489> Você não está autorizado a usar este comando, pois é restrito apenas ao proprietário")
          .setColor(colors.uptime)
          .setFooter(message.author.username, bot.user.displayAvatarURL())
          .setTimestamp();
        message.channel.send(rembed).then(m => m.delete({
          timeout: 7500
        })
        );
        } else {
       
        if(!args[0]) return message.channel.send("Forneça um nome de comando!")

        let commandName = args[0].toLowerCase()

        try {
          
          delete require.cache[require.resolve(`./${commandName}.js`)]
          const pull = require(`./${commandName}.js`)
          bot.commands.set(pull.config.name, pull)
          message.channel.send(`Comando recarregado com sucesso: \`${commandName}\``)
        }

        catch (e) {
          console.log(e)
          return message.channel.send(`Não foi possível recarregar o comando: ${commandName} motivo: \n${e}`)
        }

}
      }
} 
