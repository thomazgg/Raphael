
const { client, message } = require("discord.js");
const colors = require('./../../colors.json')

const diceEmoji = ':game_die:';
const msgs = ["I choose ?!","I like ?!","I love ?!","? is the best choice","definitely ?!","? 100%"];

module.exports = {

    name: "choose",
    aliases:["pick", "decide"],
    args:"{item1} | {item2} | ...",
    description:"Deixe-me decidir uma opção aleatória de uma lista de itens!",

    example:["owo pick dog | cat | mouse"],
    
    cooldown:5000,
    half:80,
    six:400,

    run: async(client, message, args) => {
        if (!args[0]) return message.channel.send('Por favor, especifique um texto que você deseja que o bot escolha!')

        let items = args.join(" ").replace(/[,;]/gi,'|').split('|');

        if(items.length==1){
            return message.channel.send('Especifique pelo menos 2 consultas de texto!')
        }

        let item = items[Math.floor(Math.random()*items.length)];
        const msg = ', '+msgs[Math.floor(Math.random()*msgs.length)].replace('?','**'+item+'**');
        message.channel.send(diceEmoji + msg);
    }
};