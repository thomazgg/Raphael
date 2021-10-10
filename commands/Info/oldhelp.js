const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");

module.exports = {
  name: "oldhelp",
  description: "Mostra todos os comandos do bot",
  category: "uptime",
  botPermission: [],
  authorPermission: [],
  aliases: ["newhelp"],
  ownerOnly: false,
  run: async (client, message, args) => {
    let helpEmbed = new MessageEmbed()
      .setTitle("Old help | Aqui estão todos meus comandos")
      .addField(
        "<:stafftools:891611927879512114> **ADMIN**",
        "`addrole` `auditlog` `ban` `dm` `embed` `hackban` `kick` `lock` `nuke` `removerole` `addemoji` `unban` `unlock`"
      )
      .addField(
        "<:message:891611927892099072> **CHATBOT**",
        "`chatbot-disable` `chatbot-set`"
      )
      .addField(
        "<:emoji_ghost:891612246550122538> **FUN**",
        "`deepfry` `coinflip` `corona` `drake` `eightball` `flipcoin` `google` `hack` `hangman` `hug` `joke` `meme` `ship` `slap` `snake` `snipe` `sudo` `tictactoe` `triggered` `trivia` `tictactoe` `youtube`"
      )
      .addField(
        "<:reply:881402558457982996> **GENERAL**",
        "`servericon` `akinator` `ascii` `avatar` `base64` `battleship` `calculator` `calc` `choose` `color` `country` `emojify` `firstmsg` `invite` `reverse` `rps` `support` `trivia` `weather`"
      )
      .addField(
        "🎉 **GIVEAWAY**",
        "start [channel] [time] [winner] [prize]`, `end [giveaway id]` , `recoll [giveaway id]"
      )
      .addField(
        "<:gif:891612246906662952> **IMAGE**",
        "`3000years` `affect` `beautiful` `dog` `facepalm` `fire` `fox` `gay` `glass` `jail` `kangaroo` `shit` `tweet`"
      )
      .addField(
        "<:slash:881402558059532332> **INFO**",
        "`botinfo` `botinvite` `report-bug` `commandscount` `developer` `djs` `feedback` `github` `help` `info` `roleinfo` `serverinfo` `userinfo`"
      )
      .addField(
        "<:certifiedmod:891611560332656670> **MODERATION**",
        "`purge` `resetwarns` `Userid` `lockchannel` `mute` `purge` `say` `setchat` `slowmode` `unlockchannel` `unmute` `warn` `warnings` `Userinfo`"
      )
      .addField(
        "<:certifiedmod:891611560332656670> **AUTOMODERATION**",
        "`anti-alt` `antilink` `autonick` `autoofficial` `autoofficiald` `autorole` `roleall`"
      )
      .addField(
        "<:role:881402558126649346> **AURA**",
        "`addword` `blacklist-server` `blacklist-user` `delword` `whitelist-add` `whitelist-delete` `whitelist` `wordlist`"
      )
      .addField(
        "<:channel_nsfw:891612246898249768> **NSFW**",
        "`4k` `anal` `ass` `boobs` `pussy` `erokemo` `gonewild` `hentai` `hentai-ass` `hentai-midriff` `kitsune` `lewd` `pussy` `solo` `Thigh`"
      )
      .addField(
        "<:owner:891612246973751296> **OWNER**",
        "`bot-token` `eval-test` `eval` `getinvite` `reload` `serverlist`"
      )
      .addField(
        "<:threadchannel:891614250571804739> **TICKET**",
        "`tadd`, `tclose`,`tdelete`, `tnew`,`topen`, `tremove`"
      )
      .addField(
        "<:pin:891613615248015390> **UTILITY**",
        "`bot-token` `eval-test` `eval` `getinvite` `reload` `serverlist`"
      )
      .addField(
        "<:away:891614318393688085> **UPTIMER**",
        "`add` `howtouse` `ping` `projects` `remove` `stats` `total` `uptime`"
      )
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter("BOT DEVELOPERS: RogmitOp | Prefix: !")


      let button1 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('💞 • Me Convide') 
      .setURL("https://discord.com/api/oauth2/authorize?client_id=888577622404136970&permissions=8&scope=bot");
      let button2 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('🤔 • Servidor de Suporte') 
      .setURL("https://discord.gg/q9WRkXF2A5 ");
      let button3 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('🎬 • Youtube Channel') 
      .setURL("https://www.youtube.com/c/RogmitOp/videos");


      return message.channel.send(helpEmbed,{
        button: [button1,button2,button3],
      });

  },
};