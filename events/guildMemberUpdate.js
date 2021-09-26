const UrlsConfig = require("./../database/models/UrlsConfig");
const UserConfig = require("./../database/models/UserConfig");
const { MessageEmbed } = require("discord.js");

const boosterRole = "782582934489661451";
const uptimerChannel = "732292431617327186";

module.exports.run = async (client, oldMember, newMember) => {
  if (oldMember.roles.cache.size !== newMember.roles.cache.size) {
    if (
      !oldMember.roles.cache.has(boosterRole) &&
      newMember.roles.cache.has(boosterRole)
    ) {
      let count = 0;
      await UrlsConfig.find().then((data) => {
        data.forEach((doc) => {
          if (doc.authorID === newMember.id) {
            count++;
          }
        });
      });
      await UserConfig.findOne({ userId: newMember.id }).then(async (data) => {
        if (data === null) {
          await UserConfig.create({
            userId: newMember.id,
            coins: 20,
            totalProjects: count,
          });
        } else {
          let coins = data.coins + 20;
          await UserConfig.findOneAndUpdate(
            { userId: newMember.id },
            { coins },
            { new: true }
          );
        }
      });

      const embed = new MessageEmbed()
        .setTitle("Obrigado por impulsionar <a:nitrin:891641580430180374>")
        .setDescription(
          `Parabéns, você tem 20 moedas para adicionar projetos no bot uptimer.\n Adicione um usando: \`,add <url>\`\nVerificar moedas: \`,balance\``
        )
        .setFooter(`Enviado de ${newMember.guild.name}`)
        .setColor("#ff52bf");
      await newMember.send(embed).catch(err => {
        if(err.message === "Não é possível enviar mensagens para este usuário"){
            return client.channels.cache.get(uptimerChannel).send(newMember, embed);
        }
      });
    }
  }
};
