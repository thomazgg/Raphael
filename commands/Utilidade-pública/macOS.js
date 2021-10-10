const Discord = require('discord.js');
const disbut = require("discord-buttons");
const { MessageMenuOption, MessageMenu } = require("discord-buttons");
const colors = require('./../../colors.json')
const { MessageAttachment } = require("discord.js");
const file = new MessageAttachment("./assets/macOS.rar"); 
//for a file on projects root if your file is in another subfolder just type the relative path to it 

module.exports = {
  name: "macOS",
  aliases: ["cursor"],
  description: "cursor macOS",
  run: async (client, message, args ) => {
    //--------------------------------------S T A R T---------------------------------------

    const embed1 = new Discord.MessageEmbed()
    .setTitle('<:blurplesearch:892673855326421012> Como usar: Cursor do MacOS! <:blurpleline:892673855259308042> Passo <:MarkNumber_1:892671132665253898>')
    .addField("**Na Área de Trabalho**",">>> ┕ Botão direito -> Configurações -> Dispositivos -> Mouse -> Opções adicionais do mouse -> Clique em passo 2"
    )
    .setImage(`https://media.discordapp.net/attachments/766655902509563944/892937810653368400/unknown.png?width=370&height=384`)
    .setColor(colors.uptime);

    const embed2 = new Discord.MessageEmbed()
    .setTitle('<:blurplesearch:892673855326421012> Como usar: Cursor do MacOS! <:blurpleline:892673855259308042> Passo <:MarkNumber_2:892671132359069749>')
    .addField("**Em propriedades do mouse**",
    "┕ Nossa próxima customizar todos cursores (faça o dowload <:download:892947634145357846> do cursor)\n <:IconSwitchIconOff:892670684575182858>  Clique em **ponteiros**, depois clique em procurar e faça isso para todos cursores.\n<:IconSwitchIconOnGreen:892670684617117756> **E pronto basta somente clicar em aplicar!**"
    )
    .setImage(`https://media.discordapp.net/attachments/766655902509563944/892944457337540628/unknown.png?width=338&height=384`)
    .setColor(colors.uptime);

    //-----------------------------OPTIONS----------------------

    let option1 = new MessageMenuOption()
    .setLabel('Passo 1')
    .setEmoji('892671132665253898')
    .setValue('option1')

    let option2 = new MessageMenuOption()
    .setLabel('Passo 2')
    .setEmoji('892671132359069749')
    .setValue('option2')

    let option3 = new MessageMenuOption()
    .setLabel('Dowload do Cursor')
    .setEmoji('892676954262741022')
    .setValue('option3')
    
    let select = new MessageMenu()
    .setID('selector')
    .setPlaceholder('Clique aqui para ver o menu de ajuda!')
    .setMaxValues(1)
    .setMinValues(1)
    .addOptions(option1, option2, option3)

    //-----------------------------OPTIONS----------------------

    const Sendmenu = await message.channel.send(embed1, select);

    const filter = ( button ) => button.clicker.user.id === message.author.id; //if only the message author click thenit will work
    let collector = Sendmenu.createMenuCollector(filter, { time : 100000 });

    collector.on("collect" , (b) => {
        if(b.values[0] == "option1") {
            Sendmenu.edit(embed1, select)
        }

        if(b.values[0] == "option2") {
            Sendmenu.edit(embed2, select)
        }

        if(b.values[0] == "option3") {
            message.channel.send(file)
        }

        b.reply.defer();
    })

    collector.on("end", (b) => {
        Sendmenu.edit("<:xmark:891611927900479489> Este menu de ajuda expirou!\n<:reply:891618744814686269> Digite `!cursor` para visualizar novamente.")
    })

  }
};