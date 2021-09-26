const db = require("quick.db");
const Discord = require("discord.js")
const colors = require('./../../colors.json')
module.exports = {
  name: "autorole",
  aliases: ["ar", "auto-role"],
  run: async (client, message, args) => {
     if (message.member.hasPermission("MANAGE_SERVER")) {
      if (message.content.includes("@everyone")) {
        return message.reply("Everyone is already automatically given by discord");
      }
    
if(!args[0])
{
  return message.reply("Hey You didnt Gave me role to add when a member joins the server");
}
  var role1 = message.mentions.roles.first().id;
    if(!role1)
    {
      var role1 = args[0];
    }
if(args[0] == "disable" || args[0] == "off")
{
 
  db.delete(`autorole_${message.guild.id}`);
  return message.reply("Done i have Disabled auto role in your server enable it by adding any role");
}
else {
message.reply(`Ok Now i will give this role when someone joins this server role - ${role1}`)
db.set(`autorole_${message.guild.id}`, role1);
}
     }
  }
}

/**
 * @INFO
 * Bot Coded by RogmitOp#6051 |
 * https://www.youtube.com/channel/UCPJRB-I9FCkWzgN3c2vKIpQ
 * @INFO
 * Please mention Him , when using this Code!
 * @INFO
 */