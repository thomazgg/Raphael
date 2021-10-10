const Discord = require('discord.js');
const { MessageMenuOption, MessageMenu } = require("discord-buttons");
const colors = require('./../../colors.json')

module.exports = {
  name: "help",
  aliases: ["h", "hlp", "ajuda"],
  description: "Mostra todos os comandos do bot",
  run: async (client, message, args) => {

    try {
      //--------------------------------------S T A R T---------------------------------------

      const embed = new Discord.MessageEmbed()
        .setTitle('')
        .setFooter("Página inicial\n" + client.user.username + " | Criado por: @thomazgg", client.user.displayAvatarURL())
        .setImage(`https://media.discordapp.net/attachments/766655902509563944/891595151502377010/raphael.gif`)
        // ---------- FEATURES -----------
        .addField("<:MarkCheck:892670934182408252> **__Features__**",
          `>>> <a:excited:868038020648034305> Um dos melhores e **tudo-em-um** <:BadgeBot:892670684420001822>!\n <a:animezin:868015172005011466> Sistema de **Ticket**, e um novo Sistema de __**Uptimer+**__! <:slowmode:881402558378295356>
          <a:zero_two:868015170599940137> Muitos comandos de **Nsfw** e  de **Diversão** (50+)
          <:blurpleverified:892673854940520490>  **Administração**, **Auto-Moderação** e muito mais!
          <:ItemPong:892670933939126273> **\`${Math.floor(client.ws.ping)}ms\` Ping**`)
        // ----------- UPTIMER -----------
        .addField("<:slowmode:881402558378295356> **__Uptimer+__**", ">>> Uptimer é recurso gratuito que permite que você faça seus projetos (bot) online __24/7__ Apenas usando um **ÚNICO** Comando.\n__Como usar:__\n>>> __Adicione o bot__ para o seu servidor discord\n Digite `!howtouse` para obter mais informações <:rich_presence:891692190030516234>")
        .setColor(colors.uptime);

      const embed1 = new Discord.MessageEmbed()
        .setTitle('<:blurpleverified:892673854940520490> Administração  & <:certifiedmod:891611560332656670> Moderação')
        .setFooter("Página 1\n" + client.user.username + " | Criado por: @thomazgg", client.user.displayAvatarURL())
        .addField("<:blurpleverified:892673854940520490> **Administração** | <:IconSwitchIconOnGreen:892670684617117756> **ENABLED**",
          "`addrole` `auditlog` `ban` `dm` `embed` `hackban` `kick` `nuke` `removerole` `addemoji` `unban`"
        )
        .addField("<:certifiedmod:891611560332656670> **Moderação** | <:IconSwitchIconOnGreen:892670684617117756> **ENABLED**", 
        "`clear` `lock` `unlock`  `say` `setchat` `slowmode` `mute` `unmute` `warn` `warnings` `resetwarns`"
        )
        .addField("<:certifiedmod:891611560332656670> **Auto-Moderação** | <:IconSwitchIconOnGreen:892670684617117756> **ENABLED**", 
          "`anti-alt` `antilink` `autonick` `autoofficial` `autoofficiald` `autorole` `roleall`"
        )
        .setThumbnail(client.user.displayAvatarURL())
        .setColor(colors.uptime);

      const embed2 = new Discord.MessageEmbed()
        .setTitle('<:blurplesearch:892673855326421012> Info , <:blurplebell:892673854906957855> Aura & <:blurplesettings:892673855083126784> Geral')
        .setFooter("Página 2\n" + client.user.username + " | Criado por: @thomazgg", client.user.displayAvatarURL())
        .addField("<:blurplesearch:892673855326421012> **Info** | <:IconSwitchIconOnGreen:892670684617117756> **ENABLED**",
        "`botinfo` `botinvite` `report-bug` `commandscount` `developer` `djs` `feedback` `github` `help` `info` `roleinfo` `serverinfo` `userinfo`"
        )
        .addField("<:blurplebell:892673854906957855> **Aura** | <:IconSwitchIconOnGreen:892670684617117756> **ENABLED**", 
        "`addword` `blacklist-server` `blacklist-user` `delword` `whitelist-add` `whitelist-delete` `whitelist` `wordlist`"
        )
        .addField("<:blurplesettings:892673855083126784> **Geral** | <:IconSwitchIconOnGreen:892670684617117756> **ENABLED**", 
        "`ascii` `avatar` `base64` `calculator` `calc` `choose` `color` `country` `emojify` `firstmsg` `invite` `reverse` `support` `weather`"
        )
        .setThumbnail(client.user.displayAvatarURL())
        .setColor(colors.uptime);

      const embed3 = new Discord.MessageEmbed()
        .setTitle('<:ItemPotion:892670933901393960> Diversão, <:gif:891612246906662952> Imagens & <:channel_nsfw:891612246898249768> Nsfw')
        .setFooter("Página 3\n" + client.user.username + " | Criado por: @thomazgg", client.user.displayAvatarURL())
        .addField("<:ItemPotion:892670933901393960> **Diversão** | <:IconSwitchIconOnGreen:892670684617117756> **ENABLED**", " `akinator` `battleship` `coinflip` `corona` `drake` `ciel` `flipcoin` `hack` `hangman` `joke` `meme` `rps` `ship` `slap` `hug` `snake` `snipe` `sudo` `trivia` `tictactoe` `youtube`"
        )
        .addField("<:gif:891612246906662952> **Imagens** | <:IconSwitchIconOnGreen:892670684617117756> **ENABLED**", 
        "`deepfry` `dog` `gay` `jail` `kangaroo` `tweet`"
        )
        .addField("<:channel_nsfw:891612246898249768> **Nsfw** | <:IconSwitchIconOnGreen:892670684617117756> **ENABLED**", 
        "`4k` `anal` `ass` `boobs` `pussy` `erokemo` `gonewild` `hentai` `hentai-ass` `hentai-midriff` `kitsune` `lewd` `pussy` `solo` `Thigh`")
        .setThumbnail(client.user.displayAvatarURL())
        .setColor(colors.uptime);

      const embed4 = new Discord.MessageEmbed()
        .setTitle('<:blurpleemployee:892673855372546068> Utilidade-pública , <:ItemCodingFrame:892670684277403649> Progamação & <:owner:891612246973751296> Owner')
        .setFooter("Página 4\n" + client.user.username + " | Criado por: @thomazgg", client.user.displayAvatarURL())
        .addField("<:blurpleemployee:892673855372546068> **Utilidade** | <:IconSwitchIconOnGreen:892670684617117756> **ENABLED**", 
        "`advice` `announce` `binary` `members` `membercount` `minecraft` `poll` `prefix` `rank` `shortener` `whatsapp` `worldclock` `chatbot-disable` `chatbot-set`"
        )
        .addField("<:blurpleemployee:892673855372546068> **Utilidade-pública** | <:IconSwitchIconOnGreen:892670684617117756> **ENABLED**", 
        "`emojis[1-8]` `icones` `markdown` `node16` `win10`"
        )
        .addField("<:ItemCodingFrame:892670684277403649> **Progamação** | <:IconSwitchIconOff:892670684575182858>  **DISABLED**", 
        "`nada ainda k, opora to fazendo demora tio`"
        )
        .addField("<:owner:891612246973751296> **Desenvolvedor** | <:IconSwitchIconOnGreen:892670684617117756> **ENABLED**",
        "`bot-token` `reload` `serverlist`"
        )
        .setThumbnail(client.user.displayAvatarURL())
        .setColor(colors.uptime);


      const embed5 = new Discord.MessageEmbed()
        .setTitle(`<:ItemCardboard:892670684482904074> Ticket, <:HeroWumpusGrownUp:892670684705206322> Sorteios & <:away:891614318393688085> Uptimer`)
        .setFooter("Página 5\n" + client.user.username + " | Criado por: @thomazgg", client.user.displayAvatarURL())
        .addField("<:ItemCardboard:892670684482904074> **Ticket** | <:IconSwitchIconOnGreen:892670684617117756> **ENABLED**",
        "`tadd`, `tclose`,`tdelete`, `tnew`,`topen`, `tremove`"
        )
        .addField("<:HeroWumpusGrownUp:892670684705206322> **Giveaways** | <:IconSwitchIconOnGreen:892670684617117756> **ENABLED**", 
        "`start [channel] [time] [winner] [prize]`, `end [giveaway id]` , `recoll [giveaway id]`"
        )
        .addField("<:away:891614318393688085> **Uptimer** | <:IconSwitchIconOnGreen:892670684617117756> **ENABLED**", 
        " `add` `howtouse` `ping` `projects` `remove` `stats` `total` `uptime`"
        )
        .setThumbnail(client.user.displayAvatarURL())
        .setColor(colors.uptime);

      //-----------------------------OPTIONS----------------------

      let option1 = new MessageMenuOption()
        .setLabel('Administração , Auto/Mod')
        .setEmoji('892673855343185920')
        .setValue('option1')
        .setDescription('Comandos de Administração, Auto/Moderação')

      let option2 = new MessageMenuOption()
        .setLabel('Info , Geral & Aura')
        .setEmoji('892673855326421012')
        .setValue('option2')
        .setDescription('Comandos de Informações, Geral & Aura')

      let option3 = new MessageMenuOption()
        .setLabel('Diversão , Imagens & Nsfw')
        .setEmoji('892670933901393960')
        .setValue('option3')
        .setDescription('Comandos de Diversão, Images & Nsfw')

      let option4 = new MessageMenuOption()
        .setLabel('Utilidade-pública, Progamação & Desenvolvedor')
        .setEmoji('892670684277403649')
        .setValue('option4')
        .setDescription('Comandos de Utilidade, Progamação e Desenvolvedor')

      let option5 = new MessageMenuOption()
        .setLabel('Ticket , Sorteios  & Uptimer')
        .setEmoji('892670684482904074')
        .setValue('option5')
        .setDescription('Comandos para criar Tickets , Sorteios & Uptimer')

      let select = new MessageMenu()
        .setID('selector')
        .setPlaceholder('Clique aqui para ver o menu de ajuda!')
        .setMaxValues(1)
        .setMinValues(1)
        .addOptions(option1, option2, option3, option4, option5)

      //-----------------------------OPTIONS----------------------

      const Sendmenu = await message.channel.send(embed, select);

      const filter = (button) => button.clicker.user.id === message.author.id; //if only the message author click then it will work
      let collector = Sendmenu.createMenuCollector(filter, { time: 100000 });

      collector.on("collect", (b) => {
        if (b.values[0] == "option1") {
          Sendmenu.edit(embed1, select)
        }

        if (b.values[0] == "option2") {
          Sendmenu.edit(embed2, select)
        }

        if (b.values[0] == "option3") {
          Sendmenu.edit(embed3, select)
        }

        if (b.values[0] == "option4") {
          Sendmenu.edit(embed4, select)
        }

        if (b.values[0] == "option5") {
          Sendmenu.edit(embed5, select)
        }

        if (b.values[0] == "option6") {
          Sendmenu.edit(embed6, select)
        }

        b.reply.defer();
      })

      collector.on("end", (b) => {
        Sendmenu.edit("<:IconLeave:892670684394844170>  Este menu de ajuda expirou!\n<:IconJoin:892670684801691678>  Digite `!help` para visualizar novamente.")
      })
    } catch (e) {
      return message.channel.send(`Ocorreu um erro, tente novamente!`);
    }
  }
};