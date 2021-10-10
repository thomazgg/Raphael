const { ownerID } = require('../../owner.json') 
const colors = require('./../../colors.json')

module.exports = {
        name: "purge",
        aliases: ["clear"],
        description: "Exclui mensagens de um canal",
        usage: "cler [amount of messages]",
    run: async (bot, message, args) => {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("<:xmark:891611927900479489> Você não tem permissões suficientes!- [MANAGE_MESSAGES]")
        if (isNaN(args[0]))
            return message.channel.send('**<:pin:891613615248015390> Forneça uma quantidade válida para excluir mensagens!**');

        if (args[0] > 100)
            return message.channel.send("**<a:EMP_KING:867324413267542026> Forneça um número menor que 100!**");

        if (args[0] < 1)
            return message.channel.send("**<a:EMP_KING:867324413267542026> Forneça um número maior que 1!**");

        message.channel.bulkDelete(args[0])
            .then(messages => message.channel.send(`**Excluído com sucesso \`${messages.size}/${args[0]}\` mensagens**`).then(msg => msg.delete({ timeout: 5000 }))).catch(() => null)
    }
}