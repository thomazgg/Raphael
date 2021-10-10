const UrlsConfig = require("./../../database/models/UrlsConfig");
const discord = require("discord.js");
const colors = require('./../../colors.json')
const { default_prefix } = require("./../../config.json");

module.exports = {
  name: "projects",
  description: "Mostra todos os seus projetos",
  aliases: [],
  botPermission: [],
  authorPermission: [],
  ownerOnly: false,
  run: async (client, message, args) => {
    const filter = {
      authorID: message.author.id,
    }; // THIS WILL ONLY GET THE PROJECTS OF THE USER

    let content = [];

    const all = await UrlsConfig.find(filter); // GETS ALL DATA FROM DATABASE

    var menuEmoji = "<a:animezin:891622730926010408>";

    // PRE-DEFINED EMBED
    var embed = new discord.MessageEmbed()
      .setColor(colors.uptime)
      .setTitle(`${menuEmoji} Seus Projetos ${menuEmoji}`)
      .setTimestamp();

    var count = 0; // FOR SERIAL NUMBERS FOR DISPLAY

    all.forEach(async (data) => {
      // LOOPS THROUGH ALL DATA
      count++;
      content.push(`**${count}**. \`${data.projectURL}\``);
    });

    // DATA HANDLING
    if (content.length === 0) {
      // RUNS IF THE DATA RETURNS IS 0 MEANS THE DATABSE HAS NO DATA OF THE USER
      embed.setDescription(
        `*Você não tem nenhum projeto adicionado.*\nAdicione um usando: ${default_prefix}add [project Url]`
      );
    } else {
      // RUNS WHEN DATA FOUND IN THE DATABASE
      embed.setDescription(content.join("\n"));
    }

    // THANKS MESSAGE :)
    embed.setFooter("Obrigado por me usar!");

    // NO ERRORS
    var errors = false;

    // SENDS THE EMBED TO THE USER
    await message.author.send(embed).catch((err) => {
      errors = true;
      if (err.message === "Não é possível enviar mensagens para este usuário") {
        // RUNS WHEN THE USER HAS THEIR DMS OFF
        return message.channel.send(
          `Error: \`Não é possível enviar mensagem para você. por favor ligue o seu Dms\`.`
        );
      }
    });
    if (!errors) {
      // EVERYTHING SUCCESSFULL NOTIFIES USER WITH AN MESSAGE
      message.channel.send("📥 Olha a DM.");
    }
  },
};