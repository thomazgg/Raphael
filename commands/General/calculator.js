const math = require('discord-math');
const colors = require('./../../colors.json')
module.exports = {
  name: "calculator",
  aliases: ["calc"],
  usage: "calculator",
  description: "math",
  run: async (client, message, args) => {
  
  let num1 = Number(args[0]);
            let operation = args[1];
            let num2 = Number(args[2]);
            
            if (!num1) return message.channel.send('Num1 precisa ser especificado!');
            if (!operation) return message.channel.send('Uma operação não foi especificada!');
            if (!num2) return message.channel.send('Num2 precisa ser especificado!');
 
            message.channel.send(`Answer: ${math.calculate(num1, operation, num2)}`);
  
  }
}