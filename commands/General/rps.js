const discord = require('discord.js')
const colors = require('./../../colors.json')

module.exports = {
	name: "rps",
  aliases: ["rockpaperscissor", "rock-paper-scissor"],
	description: "Jogar uma partida de pedra, papel e tesoura",
	run: async(client, message, args) => {
		let embed = new discord.MessageEmbed()
		.setTitle("RPS GAME")
		.setDescription("Reaja para jogar!")
		.setTimestamp()
		let msg = await message.channel.send(embed)
		await msg.react("🗻")
		await msg.react("✂")
		await msg.react("📰")

		const filter = (reaction, user) => {
            return ['🗻', '✂', '📰'].includes(reaction.emoji.name) && user.id === message.author.id;
        }

        const choices = ['🗻', '✂', '📰']
        const me = choices[Math.floor(Math.random() * choices.length)]
        msg.awaitReactions(filter, {max:1, time: 60000, error: ["time"]}).then(
        	async(collected) => {
        		const reaction = collected.first()
        		let result = new discord.MessageEmbed()
        		.setTitle("RESULTADO")
        		.addField("Sua escolha", `${reaction.emoji.name}`)
        		.addField("Minha escolha", `${me}`)
			await msg.edit(result)
        		if ((me === "🗻" && reaction.emoji.name === "✂") ||
                (me === "📰" && reaction.emoji.name === "🗻") ||
                (me === "✂" && reaction.emoji.name === "📰")) {
                    message.reply("Você perdeu!");
            } else if (me === reaction.emoji.name) {
                return message.reply("É um empate!");
            } else {
                return message.reply("Você ganhou!");
            }
        })
        .catch(collected => {
                message.reply('O processo foi cancelado porque você não respondeu a tempo!');
            })
}
}