const Discord = require("discord.js");
const colors = require('./../../colors.json')
const db = require("quick.db");

            module.exports = {
  name: "tictactoe",
  aliases: ["ttt"],
  run: async (client, message, args) => {
 if(!message.mentions.users.first()) return message.channel.send(`Por favor, mencione alguém`)
    var mention = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
    if(!mention)
    {
      message.channel.send("Você não mencionou ninguém para brincar com você")
      return;
      
    }

    const { tictactoe } = require('easy-games-js')
    const tic = new tictactoe(mention, message)
    tic.init({ PROVIDE_MEMBER: "Forneça um membro", ACCEPT_CHALLENGE: "{user} Você aceita este desafio? se sim, digite \`yes\` neste chat", DOESNT_PLAY: "parece que o {user} não quer jogar", WICH_SIDE: "**{user}, Qual lado você escolhe? Type \`End\` Para terminar o jogo!**", GAME_OVER: "Times up!", END: "end", INACTIVITY: "jogo terminou devido à inatividade!", WINNER: "Parabéns, vc ganhou {winner} ", DRAW: "É um empate"})
        }
            }