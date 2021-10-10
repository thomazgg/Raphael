const Discord = require('discord.js')
const colors = require('./../../colors.json')

module.exports = {
    name: "ping",
    description: "Comando de ping",

    async run (client, message, args) {
 
   let circles = {
      green: "<:IconStatusPhoneOnline:892670684516474930>",
      yellow: "<:IconStatusPhoneIdle:892670684503875614>",
      red: "<:IconStatusPhoneDND:892670684562595850>"
  }

  const msg = await message.channel.send(new Discord.MessageEmbed()
  .setColor(colors.uptime) //you can change this
  .addField("Latência da API", 
      `${client.ws.ping <= 200 ? circles.green : client.ws.ping <= 400 ? circles.yellow : circles.red} ${client.ws.ping}ms`
  ))

  let ping = msg.createdTimestamp - message.createdTimestamp;

  msg.edit(
      new Discord.MessageEmbed()
      .setColor(colors.uptime)
      .addField("Latência da API", 
      `${client.ws.ping <= 200 ? circles.green : client.ws.ping <= 400 ? circles.yellow : circles.red} ${client.ws.ping}ms`
  )
      .addField("Latência do BOT",
      `${ping <= 200 ? circles.green : ping <= 400 ? circles.yellow : circles.red} ${ping} ms `
      )
  )
}
}