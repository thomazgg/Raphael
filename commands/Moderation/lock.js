const Discord = module.require("discord.js");
const colors = require('./../../colors.json')

module.exports = {
   name: "lockchannel",
   description: "Bloqueia um canal",
   usage: "lock <channel>",
  args: true,
 category: "moderation",
   run: async(client, message, args) => {
   if (!message.member.hasPermission('MANAGE_SERVER', 'MANAGE_CHANNELS')) {
   return message.channel.send("<:xmark:891611927900479489> Você não tem permissões suficientes")
   }
   message.channel.overwritePermissions([
     {
        id: message.guild.id,
        deny : ['SEND_MESSAGES'],
     },
    ],);
   const embed = new Discord.MessageEmbed()
   .setTitle("Atualizações de canal")
   .setDescription(`🔒 ${message.channel} foi bloqueado`)
   .setColor(colors.uptime)
   await message.channel.send(embed);
   message.delete();
}
}
