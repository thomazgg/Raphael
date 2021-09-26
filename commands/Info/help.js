const Discord = require('discord.js');
const disbut = require("discord-buttons");
const { MessageMenuOption, MessageMenu } = require("discord-buttons");
const colors = require('./../../colors.json')


module.exports = {
  name: "help",
   aliases: ["hlp","ajuda"],
  run: async (client, message, args ) => {
      //--------------------------------------S T A R T---------------------------------------

        const embed = new Discord.MessageEmbed()
        .setTitle('')
        .setFooter("Página inicial\n"+ client.user.username + " | Feito por: @thomazgg", client.user.displayAvatarURL())
        .setImage(`https://media.discordapp.net/attachments/766655902509563944/891595151502377010/raphael.gif`)
        // ---------- FEATURES -----------
        .addField("<:rich_presence:881402558407651348> **__Features__**",
`>>> <a:excited:868038020648034305> Um dos melhores e **tudo-em-um** <:botTag:891603295511142400>!\n <a:animezin:868015172005011466> Sistema de **Ticket**, e um novo Sistema de __**Uptimer+**__! <:slowmode:881402558378295356>
<a:zero_two:868015170599940137> Muitos comandos de **Nsfw** e  de **Diversão** (50+)
<:settings:881402558483140648>  **Admin**, **Auto-Moderation** e muito mais!
<:online:881402558361509928> **\`${Math.floor(client.ws.ping)}ms\` Ping**`)
        // ----------- UPTIMER -----------
        .addField("<:slowmode:881402558378295356> **__Uptimer+__**",">>> Uptimer é recurso gratuito que permite que você faça seus projetos (bot) online __24/7__ Apenas usando um **ÚNICO** Comando.\n__Uptimer+ Commands__ <a:typing:881402558663499806> \n`add` `howtouse` `ping` `projects` `remove` `stats` `total` `uptime`")
        // ----------- COMO USAR -----------
        .addField("<:threadchannel:881402558516690955> __Como usar:__",">>> __Adicione o bot__ para o seu servidor discord\n Digite `!howtouse` para obtenher <:rich_presence:881402558407651348> informações")
        .setColor(colors.uptime);

        const embed1 = new Discord.MessageEmbed()
        .setTitle('<:stafftools:891611927879512114> Admin  & <:certifiedmod:891611560332656670> Moderation')
        .setFooter("Página 1\n"+ client.user.username + " | Feito por: @thomazgg", client.user.displayAvatarURL())
        .addField("ㅤ⠀⠀⠀ \n <:stafftools:891611927879512114> **Admin** | <:online:881402558361509928> **ENABLED**",
          "`addrole` `auditlog` `ban` `dm` `embed` `hackban` `kick` `lock` `nuke` `removerole` `addemoji` `unban` `unlock` \n\n<:certifiedmod:891611560332656670> **Moderation** | <:online:881402558361509928> **ENABLED** \n `purge` `resetwarns` `Userid` `lockchannel` `mute` `purge` `say` `setchat` `slowmode` `unlockchannel` `unmute` `warn` `warnings` `Userinfo` \n\n<:certifiedmod:891611560332656670> **AutoModeration** | <:online:881402558361509928> **ENABLED** \n `anti-alt` `antilink` `autonick` `autoofficial` `autoofficiald` `autorole` `roleall`"
        )
      .setThumbnail(client.user.displayAvatarURL())
      .setColor(colors.uptime);

        const embed2 = new Discord.MessageEmbed()
      .setTitle('<:slash:881402558059532332> Info , <:role:881402558126649346> Aura & <:reply:881402558457982996> General')
      .setFooter("Página 2\n"+ client.user.username + " | Feito por: @thomazgg", client.user.displayAvatarURL())
      .addField("ㅤ⠀⠀⠀ \n <:slash:881402558059532332> **Info** | <:online:881402558361509928> **ENABLED**",
        "`botinfo` `botinvite` `report-bug` `commandscount` `developer` `djs` `feedback` `github` `help` `info` `roleinfo` `serverinfo` `userinfo`\n\n<:role:881402558126649346> **Aura** | <:online:881402558361509928> **ENABLED**\n `addword` `blacklist-server` `blacklist-user` `delword` `whitelist-add` `whitelist-delete` `whitelist` `wordlist`\n\n<:reply:881402558457982996> **General** | <:online:881402558361509928> **ENABLED** \n `servericon` `akinator` `ascii` `avatar` `base64` `battleship` `calculator` `calc` `choose` `color` `country` `emojify` `firstmsg` `invite` `reverse` `rps` `support` `trivia` `weather`"
      )
      .setThumbnail(client.user.displayAvatarURL())
      .setColor(colors.uptime);

        const embed3 = new Discord.MessageEmbed()
      .setTitle('<:emoji_ghost:891612246550122538> Fun, <:gif:891612246906662952> Images & <:channel_nsfw:891612246898249768> Nsfw')
      .setFooter("Página 3\n"+ client.user.username + " | Feito por: @thomazgg", client.user.displayAvatarURL())
      .addField("ㅤ⠀⠀⠀ \n <:emoji_ghost:891612246550122538> **Fun** | <:online:881402558361509928> **ENABLED**","`deepfry` `coinflip` `corona` `drake` `ciel` `flipcoin` `google` `hack` `hangman` `hug` `joke` `meme` `ship` `slap` `snake` `snipe` `sudo` `tictactoe` `triggered` `trivia` `tictactoe` `youtube`\n\n <:gif:891612246906662952> **Image** | <:online:881402558361509928> **ENABLED** \n`3000years` `affect` `beautiful` `dog` `facepalm` `fire` `fox` `gay` `glass` `jail` `kangaroo` `shit` `tweet` \n\n <:channel_nsfw:891612246898249768> **Nsfw** | <:online:881402558361509928> **ENABLED** \n `4k` `anal` `ass` `boobs` `pussy` `erokemo` `gonewild` `hentai` `hentai-ass` `hentai-midriff` `kitsune` `lewd` `pussy` `solo` `Thigh`",)
      .setThumbnail(client.user.displayAvatarURL())
      .setColor(colors.uptime);

       const embed4 = new Discord.MessageEmbed()
      .setTitle('<:owner:891612246973751296> Owner, <:message:891611927892099072> ChatBot & <:pin:891613615248015390> Ultility')
      .setFooter("Página 4\n"+ client.user.username + " | Feito por: @thomazgg", client.user.displayAvatarURL())
      .addField("ㅤ⠀⠀⠀ \n <:owner:891612246973751296> **Owner** | <:online:881402558361509928> **ENABLED**",
        "`bot-token` `reload` `serverlist`\n\n <:message:891611927892099072> ChatBot | <:online:881402558361509928> **ENABLED** \n`chatbot-disable` `chatbot-set` \n\n<:pin:891613615248015390> **Ultility** | <:online:881402558361509928> **ENABLED** \n`advice` `announce` `binary` `members` `membercount` `minecraft` `poll` `prefix` `rank` `serverinfo` `shortener` `whatsapp` `worldclock` `yt`"
      )
      .setThumbnail(client.user.displayAvatarURL())
      .setColor(colors.uptime);


       const embed5 = new Discord.MessageEmbed()
      .setTitle(`<:threadchannel:891614250571804739> Ticket, 🎉 Giveaways & <:away:891614318393688085> Uptimer`)
      .setFooter("Página 5\n"+ client.user.username + " | Feito por: @thomazgg", client.user.displayAvatarURL())
      .addField("ㅤ⠀⠀⠀ \n <:threadchannel:891614250571804739> **Ticket** | <:online:881402558361509928> **ENABLED**",
        "`tadd`, `tclose`,`tdelete`, `tnew`,`topen`, `tremove`\n\n 🎉 **Giveaways** | <:online:881402558361509928> **ENABLED** \n`start [channel] [time] [winner] [prize]`, `end [giveaway id]` , `recoll [giveaway id]` \n\n<:away:891614318393688085> **Uptimer ** | <:online:881402558361509928> **ENABLED** \n `add` `howtouse` `ping` `projects` `remove` `stats` `total` `uptime`")
      .setThumbnail(client.user.displayAvatarURL())
      .setColor(colors.uptime);

        //-----------------------------OPTIONS----------------------

        let option1 = new MessageMenuOption()
        .setLabel('Admin , Auto/Moderation')
        .setEmoji('880786952205529169')
        .setValue('option1')
        .setDescription('Comandos de Administração, Auto/Moderação')

        let option2 = new MessageMenuOption()
        .setLabel('Info , General & Aura')
        .setEmoji('880786952205529169')
        .setValue('option2')
        .setDescription('Comandos de Informações, Geral & Aura')

        let option3 = new MessageMenuOption()
        .setLabel('Fun , Image & Nsfw')
        .setEmoji('880786952205529169')
        .setValue('option3')
        .setDescription('Comandos de Diversão, Images & Nsfw')

        let option4 = new MessageMenuOption()
        .setLabel('Owner , ChatBot & Utility')
        .setEmoji('880786952205529169')
        .setValue('option4')
        .setDescription('Comandos de Criador, ChatBot e Utilidade')

        let option5 = new MessageMenuOption()
        .setLabel('Ticket , Giveaways  & Uptimer')
        .setEmoji('880786952205529169')
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

    const filter = ( button ) => button.clicker.user.id === message.author.id; //if only the message author click then it will work
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

        if(b.values[0] == "option4") {
            Sendmenu.edit(embed4, select)
        }

        if(b.values[0] == "option5") {
            Sendmenu.edit(embed5, select)
        }

        if(b.values[0] == "option6") {
            Sendmenu.edit(embed6, select)
        }

        b.reply.defer();
    })

    collector.on("end", (b) => {
        Sendmenu.edit("<:denied_s:795521524898594846> Este menu de ajuda expirou!\n<:reply:881402558457982996> Digite novamente `!help` para visualizar novamente.")
    })

    }
  };