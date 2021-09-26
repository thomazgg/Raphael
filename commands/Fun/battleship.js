const Discord = require('discord.js')
const { DiscordBattleShip } = require("discord-battleship");
const colors = require('./../../colors.json')

const BattleShip = new DiscordBattleShip({
    embedColor: "RED", /* Any Discord.js Color Resolvable will work. */prefix: "!"
/* Este é o prefixo que será usado na DM dos usuários para comandos.
          Você pode definir isso para qualquer string. */
});

module.exports = {
  name: 'ship',
  aliases: ["bs"],

  run: async (client , message , args) => {

     await BattleShip.createGame(message);
  }
} 
