const Discord = module.require("discord.js");
const colors = require('./../../colors.json')

module.exports = {
    name: "lock",
    description: "Bloqueia um canal",
    aliases: ["lockchannel"],
    usage: "lock <channel>",
    args: true,
    category: "moderation",
    run: async(client, message, args) => {
    if (!message.member.hasPermission('MANAGE_SERVER', 'MANAGE_CHANNELS')) {
    return message.channel.send("<:xmark:891611927900479489> VocÃª nÃ£o tem permissÃµes suficientes")
    }
    message.channel.overwritePermissions([
     {
        id: message.guild.id,
        deny : ['SEND_MESSAGES'],
     },
    ],);
    const embed = new Discord.MessageEmbed()
    .setTitle("AtualizaÃ§Ãµes de canal")
    .setDescription(`ðŸ”’ ${message.channel} foi bloqueado`)
    .setColor(colors.uptime)
    await message.channel.send(embed);
    message.delete();
}
}
