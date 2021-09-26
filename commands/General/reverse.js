module.exports = {
    name: "reverse",
    description: "Inverte o texto fornecido",
    run: async(client, message, args) => {
        const text = args.join(" ")
        if(!text) return message.reply("Por favor, dê algo para reverter!")
        let Rarray = text.split("")
        let reverseArray = Rarray.reverse()
        let result = reverseArray.join("")
        message.channel.send(result)
    }
}