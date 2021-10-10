const colors = require('./../../colors.json')
const Discord = require("discord.js");
const ms = require("ms")
module.exports = {
  name: "hack",
  aliases: ["hax"],
  run: async(client, message, args) => {
    const hacked = message.mentions.users.first();
    const user = message.mentions.users.first();
    if(user == client.users.cache.get(message.author.id))
    {
      return message.channel.send("ok, você foi hackeado Escolha outra pessoa")
    }
            function wait(ms){
            let start = new Date().getTime();
            let end = start;
            while(end < start + ms) {
              end = new Date().getTime();
           }
         }

if(!user)
{
  return message.reply("Quem hackear? Por favor, mencione-o");
}
const prompt = await message.channel.send(`Hackeando ${user ? hacked.username : hacked} agora...`);
    
   await wait(2700);
     await  prompt.edit('Encontrando login discord...');
     await wait(2700);
     await  prompt.edit(`Encontrado:\n**Email**: \`${hacked.username}***@gmail.com\`\n**Senha**: \`*******\``);
     await  wait(3700);
     await  prompt.edit('Buscando dms');
     await  wait(3700);
     await prompt.edit('Listando palavras mais comuns...');
     await  wait(2700);
     await  prompt.edit(`Injetando vírus no discriminador #${hacked.discriminator}`);
    await  wait(3700);
     await  prompt.edit('Vírus injetado');
     await  wait(3700);
    
   await prompt.edit('Localizando endereço IP..');
    await wait(5000);
   await  prompt.edit('Spamando o email dele(a)...');
   await wait(6700);
   await  prompt.edit('Vendendo dados para o Facebook...');
  await   wait(3700);
  let embed = new Discord.MessageEmbed()
  .setDescription(`Um HACKING perigoso e muito ORIGINAL de ${user ? hacked.username : hacked} acabou de ser completado`)
  .setImage("https://media1.tenor.com/images/5ba5501d9ee356cc0c478daa57306c19/tenor.gif?itemid=20964053");
  await prompt.delete
   await  message.channel.send(embed);
  }
}