const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')
const colors = require('./../../colors.json')
const config = require('../../config');
const axios = require('axios')

module.exports = {
        name: 'binary',
        description: 'Mostra o seu texto em formato binário',
        aliases: ["binary"],
        usage: '<text>',
        accessableby: "",
    run: async (client, message, args) => {
        
        const url = `http://some-random-api.ml/binary?text=${args}`;

  let response, data;
  try {
    response = await axios.get(url);
    data = response.data;
  } catch (e) {
    return message.channel.send(`Ocorreu um erro, por favor tente novamente!`);
  }

  const embed = new MessageEmbed()
    .setTitle("Converter texto para binário")
    .setThumbnail(
      "https://png.pngtree.com/png-clipart/20200225/original/pngtree-binary-code-and-magnifying-glass-isometric-icon-png-image_5252004.jpg"
    )

    .setDescription("**Código binário** - `" + data.binary + "`")
    .setTimestamp()
    .setColor(colors.uptime);

  await message.channel.send(embed);

    }
}