const Discord = require("discord.js");
const colors = require('./../../colors.json')
const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "serverinfo",
  aliases: ["serverinformation"],
  description: "Show Server Information!",
  usage: "Serverinfo",
  run: async (client, message, args) => {
    //Start
    const guild = message.guild;
    const Emojis = guild.emojis.cache.size || "No Emoji!";
    const Roles = guild.roles.cache.size || "No Roles!";
    const Members = guild.memberCount;
    const Humans = guild.members.cache.filter(member => !member.user.bot).size;
    const Bots = guild.members.cache.filter(member => member.user.bot).size;

    const embed = new MessageEmbed()
      .setTitle("Info of " + guild.name)
      .setColor(colors.uptime)
      .setThumbnail(guild.iconURL())
      .addField(`Name`, guild.name, true)
      .addField(`ID`, `${guild.id}`, true)
      .addField(`Owner`, `${guild.owner.user.tag}`, true)
      .addField(`Roles Count`, Roles, true)
      .addField(`Emojis Count`, Emojis, true)
      .addField(`Members Count`, Members, true)
      .addField(`Humans Count`, Humans, true)
      .addField(`Bots Count`, Bots, true)
      .addField(`Server Created At`, guild.createdAt.toDateString())
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};



/**
 * @INFO
 * Bot Coded by RogmitOp#6051 |
 * https://www.youtube.com/channel/UCPJRB-I9FCkWzgN3c2vKIpQ
 * @INFO
 * Please mention Him , when using this Code!
 * @INFO
 */