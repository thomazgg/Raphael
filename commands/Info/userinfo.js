const {
  MessageEmbed
} = require("discord.js")
const colors = require('./../../colors.json')
const moment = require("moment")

module.exports = {
  name: "userinfo",
  aliases: ["whois",
    "user"],
  usage: "<MENTION>",
  description: "Obtenha estatísticas avançadas de determinada pessoa ou de você mesmo",
  run: async (client, message, args) => {

    let user;

    if (!args[0]) {
      user = message.member;
    } else {

      user = message.mentions.members.first() || await message.guild.members.fetch(args[0]).catch(err => {
        return message.channel.send("<:xmark:891611927900479489> Incapaz de encontrar esta pessoa")
      })
    }

    if (!user) {
      return message.channel.send("<:xmark:891611927900479489> Incapaz de encontrar esta pessoa!")
    }

    //OPTIONS FOR STATUS

    let stat = {
      online: "https://emoji.gg/assets/emoji/9166_online.png",
      idle: "https://emoji.gg/assets/emoji/3929_idle.png",
      dnd: "https://emoji.gg/assets/emoji/2531_dnd.png",
      offline: "https://emoji.gg/assets/emoji/7445_status_offline.png"
    }

    //NOW BADGES
    let badges = await user.user.flags
    badges = await badges ? badges.toArray(): ["None"]

    let newbadges = [];
    badges.forEach(m => {
      newbadges.push(m.replace("_", " "))
    })

    let embed = new MessageEmbed()
    .setThumbnail(user.user.displayAvatarURL({
      dynamic: true
    }))

    //ACTIVITY
    let array = []
    if (user.user.presence.activities.length) {

      let data = user.user.presence.activities;

      for (let i = 0; i < data.length; i++) {
        let name = data[i].name || "None"
        let xname = data[i].details || "None"
        let zname = data[i].state || "None"
        let type = data[i].type

        array.push(`**${type}** : \`${name} : ${xname} : ${zname}\``)

        if (data[i].name === "Spotify") {
          embed.setThumbnail(`https://i.scdn.co/image/${data[i].assets.largeImage.replace("spotify:", "")}`)
        }

        embed.setDescription(array.join("\n"))

      }
    }

    //EMBED COLOR BASED ON member
    embed.setColor(user.displayHexColor === "#000000" ? "#ffffff": user.displayHexColor)

    //OTHER STUFF
    embed.setAuthor(user.user.tag, user.user.displayAvatarURL({
      dynamic: true
    }))

    //CHECK IF USER HAVE NICKNAME
    if (user.nickname !== null) embed.addField("Nickname", user.nickname)
    embed.addField("<:ItemThumbsUp:892670934127882300> Entrou no servidor em", moment(user.joinedAt).format("LLLL"))
    .addField("<:LogoDiscordParty:892670934132072448> Conta criada em", moment(user.user.createdAt).format("LLLL"))
    .addField("<:rich_presence:891692190030516234> Informações da conta", `ID: \`${user.user.id}\`\n#: ${user.user.discriminator}\nBot: ${user.user.bot}\nUsuário deletado: ${user.deleted}`)
    .addField("<:IconActivity:893071976225194004> Emblemas", newbadges.join(", ").toLowerCase() || "None")
    .setFooter(user.user.presence.status, stat[user.user.presence.status])

    return message.channel.send(embed).catch(err => {
      return message.channel.send("Erro: " + err)
    })

  }

}