const UrlsConfig = require("./../../database/models/UrlsConfig");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const colors = require('./../../colors.json')
const validUrl = require("valid-url");

module.exports = {
  name: "add",
  description: "Adiciona monitor ao seu projeto.",
  aliases: ["host"],
  botPermission: [],
  authorPermission: [],
  ownerOnly: false,
  run: async (client, message, args) => {
    var url = args[0];

    // CHECKS THE URL IF PROVIDED OR WRONG
    if (!url) return message.reply("<:xmark:891611927900479489> Forneça um url do projeto!");
    if (!validUrl.isUri(url)) {
      return message.channel.send("<:xmark:891611927900479489> Forneça um url válido!");
    }

    // LOADING
    let waitEmbed = new MessageEmbed().setDescription(
      "<a:loading:891622176753590302> Por favor, espere..."
    );
    var messageAlert = await message.channel.send(message.author, waitEmbed);

    // CHECKS IF THE PROJECT IS ALREADY REGISTERED
    var checkIfExsists = await UrlsConfig.findOne({
      projectURL: url,
    });

    if (checkIfExsists === null) {
      // RUNS WHEN PROJECT IS NOT REGISTERED
      await UrlsConfig.create({
        authorID: message.author.id,
        projectURL: url,
        pinged: 0,
      }).then(async () => {
        // RUNS AFTER THE PROJECT STORES THE DATA IN DATABASE
        client.projects.push(url);
        try {
          // TRIES TO PING PROJECT
          await fetch(url);
        } catch (e) {
          // ERRORS HANDLING
          await UrlsConfig.findOneAndUpdate(
            { projectURL: url },
            { error: true, errorText: e.message },
            { new: true }
          );
          message.reply("Fetching Error");
        }

        // NOTIFIES WITH AN EMBED THAT PROJECT IS SUCCESSFULLY REGISTERED
        let embed = new MessageEmbed()
          .setTitle("<:check:891611927980154911> Adicionado com sucesso!")
          .setDescription("Thanks for using me")
          .setColor(colors.uptime)
          .setTimestamp();
        await messageAlert.edit(embed);
        return message.delete();
      });
    } else {
      // RUNS WHEN THE PROJECT IS ALREADY IN DATABASE
      let embed = new MessageEmbed()
        .setTitle(
          "<:xmark:891611927900479489> Este projeto já está registrado!"
        )
        .setDescription(
          "<:xmark:891611927900479489> O projeto que você está tentando registrar já está no banco de dados"
        )
        .setColor(colors.uptime)
        .setTimestamp();

      await messageAlert.edit(embed);
      return message.delete();
    }
  },
};
