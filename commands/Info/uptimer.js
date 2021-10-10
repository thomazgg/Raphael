const Discord = require('discord.js');
const disbut = require("discord-buttons");
const { MessageMenuOption, MessageMenu } = require("discord-buttons");
const colors = require('./../../colors.json')

module.exports = {
  name: "howtouse",
   aliases: ["uptimer"],
  run: async (client, message, args ) => {
      //--------------------------------------S T A R T---------------------------------------

        const embed = new Discord.MessageEmbed()
        .setTitle('')
        .setFooter("Página inicial\n"+ client.user.username + " | Feito por: @thomazgg", client.user.displayAvatarURL())
        .setImage(`https://media.discordapp.net/attachments/820950216249180170/881057229078421505/Untitled.png?width=1214&height=683`)
        .setColor(colors.uptime);

        const embed1 = new Discord.MessageEmbed()
        .setTitle('<:blurplesearch:892673855326421012> Como usar: Uptimer!')
        .addField("<:reply:891618744814686269> **Pegue o link**",
          "Nosso primeiro passo é obter o link da página da web. Você pode encontrar o código na parte inferior ou lateral do seu repl.it (veja a imagem abaixo)! Se você não tiver este link, copie, cole este código no topo do seu `index.js` e execute-o novamente.\n ```https://pastebin.com/HJGhAUZf```"
        )
        .setImage(`https://images-ext-2.discordapp.net/external/VEUaWiaOlFDUoyOQZsT4LrOFkvnGGnCFvCZUpPNlGBA/%3Fwidth%3D1017%26height%3D534/https/media.discordapp.net/attachments/870077234780725281/873324807444365413/Screen_Shot_2021-08-06_at_2.57.52_PM.png?width=681&height=358`)
      .setColor(colors.uptime);

        const embed2 = new Discord.MessageEmbed()
      .setTitle('<:blurplesearch:892673855326421012> Como usar: Uptimer!')
      .addField("<:reply:891618744814686269> **Execute o comando**",
        "Nossa próxima etapa é executar o comando. A sintaxe deste comando é `!add <repl_url>.` Se feito corretamente, o bot deve dar embed dizendo: \n ```Adicionado com sucesso!```"
      )
      .setImage(`https://images-ext-1.discordapp.net/external/pORWifuygzks1a_RYTURYatptD469qGA3PT8X0kefh8/https/media.discordapp.net/attachments/870077234780725281/873366580522782820/Screen_Shot_2021-08-06_at_5.46.41_PM.png?width=570&height=165`)
      .setColor(colors.uptime);

        const embed3 = new Discord.MessageEmbed()
      .setTitle('<:blurplesearch:892673855326421012> Como usar: Uptimer!')
      .addField("<:reply:891618744814686269> **Outros Comandos**","Agora que adicionamos seu projeto, você pode usar outro comando, como `projects` `remove` `stats` e `total`. Abaixo está uma imagem do comando remove")
      .setImage(`https://media.discordapp.net/attachments/875796343338172447/875976584715182100/Screen_Shot_2021-08-13_at_10.37.50_PM.png?width=679&height=164`)
      .setColor(colors.uptime);

        //-----------------------------OPTIONS----------------------

        let option1 = new MessageMenuOption()
        .setLabel('Step 1')
        .setEmoji('880786952205529169')
        .setValue('option1')

        let option2 = new MessageMenuOption()
        .setLabel('Step 2')
        .setEmoji('880786952205529169')
        .setValue('option2')

        let option3 = new MessageMenuOption()
        .setLabel('Step 3')
        .setEmoji('880786952205529169')
        .setValue('option3')
        
    let select = new MessageMenu()
        .setID('selector')
        .setPlaceholder('Clique aqui para ver o menu de ajuda!')
        .setMaxValues(1)
        .setMinValues(1)
        .addOptions(option1, option2, option3)

        //-----------------------------OPTIONS----------------------
    
    const Sendmenu = await message.channel.send(embed, select);

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
            Sendmenu.edit(embed3, select)
        }

        b.reply.defer();
    })

    collector.on("end", (b) => {
        Sendmenu.edit("<:IconLeave:892670684394844170>  Este menu de ajuda expirou!\n<:IconJoin:892670684801691678>  Digite `!howtouse` para visualizar novamente.")
    })

    }
  };