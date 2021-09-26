const Discord = require('discord.js')
const { DiscordBattleShip } = require("discord-battleship");
const colors = require('./../../colors.json')

const BattleShip = new DiscordBattleShip({
    embedColor: "RED", /* Any Discord.js Color Resolvable will work. */prefix: "!"
});

module.exports = {
  name: 'battleship',
  aliases: ["bs"],

  run: async (client , message , args) => {

     await BattleShip.createGame(message);
                          }
                          } 
    