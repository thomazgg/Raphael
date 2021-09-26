const Discord = require('discord.js')
const { MessageButton } = require('discord-buttons');
const colors = require('./../../colors.json')
const {MessageActionRow} = require('discord-buttons');


module.exports = {
    name: "invite",
    description: "invite command!",
    aliases: ["invite"],
    async run (client, message, args) {


      //code
let embed = new Discord.MessageEmbed()
.setTitle('Convide / Apoie')
.setDescription('A Habilidade Final Rei da Sabedoria Raphael [智慧之王ラファエル, Chie no OuR a f a e r u], é a forma evoluída da habilidade única Grande Sábio. Como resultado, o Grande Sábio foi apagado.')
.setColor(colors.uptime)
.addField('**:link: Me convide**','\n [Clique aqui](https://discord.com/api/oauth2/authorize?client_id=888577622404136970&permissions=8&scope=bot) Para me convidar para o seu servidor.', true)
.addField(':link: **Servidor de Suporte**','\n [Clique aqui](https://discord.gg/q9WRkXF2A5) Para se juntar ao nosso servidor de suporte.', true)
.setTimestamp()
.setFooter(`Requested by ${message.author.tag}`)

const support = new MessageButton()
.setID('support')
.setLabel('Support!')
.setStyle('green')
.setEmoji('💎')

const button = new MessageButton()
    .setStyle('url')
    .setURL('https://discord.com/api/oauth2/authorize?client_id=888577622404136970&permissions=8&scope=bot')
    .setLabel('Invite!')
 
 
let row = new MessageActionRow();
row.addComponent(button);
row.addComponent(support);


//Do same for all buttons

message.channel.send("", {
  embed : embed,
  component: row
})


    }
}