const Discord = require('discord.js');
const disbut = require("discord-buttons");
const { MessageMenuOption, MessageMenu } = require("discord-buttons");
const colors = require('./../../colors.json')

module.exports = {
  name: "ciel",
  aliases: ["raphael", "Raphael", "Ciel"],
  run: async(client, message, args) => {
  if (!args.length){

    //--------------------------------------S T A R T---------------------------------------

    const embed = new Discord.MessageEmbed()
    .setTitle('Ciel')
    .setFooter("Página inicial\n"+ client.user.username + " | Feito por: @thomazgg", client.user.displayAvatarURL())
    // ----------- Ciel -----------
    .setDescription("«Eu sou **Ciel**. Aquele que integra habilidades, Manas. Aquele que apoiará meu mestre, na alma do Lorde Demônio **Rimuru**. Mestre, mais uma vez, por favor, me trate bem!!»")
    // ----------- Info -----------
    .addField("**__The Ultimate Skill Core Manas: Ciel [マ ナ ス シ エ ル]__**",">>> é uma espécie de núcleo inteligente. Semelhante a uma forma de vida espiritual, ela é incapaz de se materializar por conta própria.")
    // ----------- COMO USAR -----------
    .addField("<:threadchannel:891614250571804739> __Como usar:__",">>> Digite `!ciel <pergunta>` ou `!raphael <pergunta>` e  a **Ciel** irá dar uma resposta")
    .setColor(colors.uptime);

    const embed1 = new Discord.MessageEmbed()
    .setTitle('Personalidade')
    .setDescription("Quando ela era Raphael, as ações eram baseadas em cálculos e não em emoções. Ela agiu apenas para ser útil ao seu mestre [Rimuru Tempest](https://tensura.fandom.com/pt-br/wiki/Rimuru_Tempest) antes. Depois de sua evolução (ao nomear Rimuru), ela se tornou um núcleo inteligente de sentimentos.\n Ela não gosta de ninguém olhando para seu mestre e experimentando descontentamento quando Manas: Lucia olhou para [Rimuru](https://tensura.fandom.com/pt-br/wiki/Rimuru_Tempest).\n Ela é esperta e travessa, mas ao mesmo tempo muito gentil com seus aliados, especialmente com aqueles que têm boas intenções em relação a **Rimuru**.\n Muitas vezes, devido ao fato de que ela sabe como seu mestre pensa, ela esconde certas informações dele que o fazem ficar surpreso e chocado.\n É claro que isso ainda está fora de boas intenções, pois **Ciel** sempre quer a melhoria de seu mestre, e ela percebe que, mesmo que **Rimuru** seja bondoso e inteligente, ele às vezes é um pouco perdoador, ingênuo e acidentalmente pode causar um erro. Assim, ela procura a melhor solução sem causar desagrado à **Rimuru**.")
    .setThumbnail(client.user.displayAvatarURL())
    .setColor(colors.uptime);

    const embed2 = new Discord.MessageEmbed()
    .setTitle('Cronologia')
    .setDescription("Sendo apenas um conceito de uma habilidade única, sem ter autoconsciência, mas para servir ao seu mestre, habilidade única que o Grande Sábio desejava evoluir.\n Após cerca de um milhão de tentativas fracassadas, integrou a habilidade única Shapeshifter. Assim evoluiu para a Sabedoria, Senhor Rafael.\n O Festival da Colheita concedeu a ele um presente. Nas profundezas de sua mente sem emoção, havia um ego escondido em um canto.\n Duvidando de sua própria existência, um pequeno vislumbre de pensamento nasceu sutilmente, sem o conhecimento de Raphael.\n Depois de perceber a profunda confiança que **Rimuru** tinha em Rafael, levou ao nascimento da emoção. **Rimuru** deu uma bênção caprichosamente ao rei Raphael da Suprema Habilidade, sob a forma de um nome que resultou no nascimento de **Ciel**: Manas (Núcleo da Sabedoria de Deus) e se separou do rei Raphael da Sabedoria da Suprema Habilidade e se tornou uma existência independente.\n **Rimuru** refere-se a **Ciel** como uma mulher.\n **Rimuru** a chamou de **Ciel** porque ela parecia sempre ensinar coisas a ele. 'Oshieru' em japonês significa 'ensinar' e 'Shieru' sendo a pronúncia japonesa de '**Ciel**'.")
    .setThumbnail(client.user.displayAvatarURL())
    .setColor(colors.uptime);

    const embed3 = new Discord.MessageEmbed()
    .setTitle('Relacionamentos')
    .addField("Rimuru","Ela o vê não apenas como seu mestre, mas como seu marido. Ela existe para servi-lo.")
    .addField("Diablo","Ela fala com ele através do Soul Corridor e entende sua devoção a **Rimuru**. Ela permite que ele acesse as habilidades que estão dentro de sua capacidade de usar.")
    .addField("Benimaru","Ela fala com ele através do Soul Corridor e entende sua devoção a **Rimuru**. Ela permite que ele acesse as habilidades que estão dentro de sua capacidade de usar.")
    .addField("Zegion","Ela fala com ele através do Soul Corridor e entende sua devoção a **Rimuru**. Ela permite que ele acesse as habilidades que estão dentro de sua capacidade de usar.")
    .addField("Ranga","Ela o guia no uso de habilidades quando fundido com Gobuta.")
    .addField("Gobta","Ela fala com ele através do Soul Corridor e entende sua amizade com **Rimuru**. Ela tem inveja do seu direito de se dirigir a **Rimuru** casualmente. Ela o guia no uso de habilidades quando fundido com Ranga.")
    .setThumbnail(client.user.displayAvatarURL())
    .setColor(colors.uptime);

    const embed4 = new Discord.MessageEmbed()
    .setTitle('Habilidades')
    .setDescription("O desempenho de sua velocidade de cálculo e outras habilidades foram aprimorados até certo ponto. **Ciel** parecia capaz de ocultar até a 'Voz do Mundo'.\n\n<:rich_presence:891692190030516234>**Efeitos**\n\n<:pin:891613615248015390> Aceleração do pensamento: aumente a velocidade de processamento do pensamento em um milhão de vezes.\n<:pin:891613615248015390> Especialista em análise: * Processamento paralelo: a capacidade de separar pensamentos e análises do fenômeno.\n Fusão: a capacidade de fundir-se em um único ser com o sujeito visado.\n<:pin:891613615248015390> Separação: a capacidade de se separar e de possuir você. (Se o alvo que está sendo separado não possui uma forma física, ele pode desaparecer).\n<:pin:891613615248015390> Canto descartado: Ao usar magia, o canto não é mais necessário.\n<:pin:891613615248015390> Toda a criação: a capacidade compreende qualquer fenômeno não oculto neste mundo.\n<:pin:891613615248015390> Cadeia Alimentar: É possível adquirir habilidades dos subordinados.\n<:pin:891613615248015390> Corredor da Alma Conexão contínua com seus subordinados, Veldora e Velgrynd, nos quais ele pode transferir, atualizar e presentear Habilidades.\n\n<:rich_presence:891692190030516234>**Habilidades**\n\n<:pin:891613615248015390> Habilidades de Espécies (Habilidades Essenciais da Sabedoria\n<:pin:891613615248015390> Ocultação de 'voz do mundo'. * Síntese de habilidades: Combinando habilidades para criar mais poderosas.\n<:pin:891613615248015390> Promoção de habilidades: Fortalecimento dos subordinados de Rimuru, desenvolvendo suas habilidades. \n<:pin:891613615248015390> Ultimate Skills\n<:pin:891613615248015390> Deus Vazio Azathoth\n<:pin:891613615248015390> Consumo de Alma\n<:pin:891613615248015390> Tornar nulo (recolhimento do nada)\n<:pin:891613615248015390> Quarto Imaginário\n<:pin:891613615248015390> Controle do Tempo Espacial\n<:pin:891613615248015390> Barreira Multidimensional\n<:pin:891613615248015390> Liberação True Dragon\n<:pin:891613615248015390> Transformação do núcleo do dragão verdadeiro\n<:rich_presence:891692190030516234> Senhor da Colheita Shub Niggurath\n<:pin:891613615248015390> Criação de Habilidades\n<:pin:891613615248015390> Duplicação de Habilidades\n<:pin:891613615248015390> Competência\n<:pin:891613615248015390> Banco de habilidades\n<:pin:891613615248015390> Senhor do Dragão Maligno Azi Dahaka\n<:pin:891613615248015390> Aceleração do Pensamento\n<:pin:891613615248015390> Pensamento Paralelo\n<:pin:891613615248015390> Controle de matéria orgânica\n<:pin:891613615248015390> Produção em massa de duplicação\n<:pin:891613615248015390> Absorção de Habilidade\n<:pin:891613615248015390> Controle de espaço\n<:pin:891613615248015390> Barreira Multidimensional")
    .setThumbnail(client.user.displayAvatarURL())
    .setColor(colors.uptime);

    const embed5 = new Discord.MessageEmbed()
    .setTitle('Curiosidades')
    .setDescription("Presume-se que **Ciel** carrega com mais precisão as memórias do falecido Lucia, devido ao tempo que **Ciel** passou como seu antigo eu, Rei da Sabedoria Raphael, uma vez que compartilhava a mesma concha que o Rei do Conhecimento de Lucia Raphael.\n\nManas é originalmente um conceito budista antigo que pode ser traduzido como a Mente. O nome **Ciel**-sensei é uma referência ao personagem **Ciel** de Tsukihime.")
    .setThumbnail(client.user.displayAvatarURL())
    .setColor(colors.uptime);

    //-----------------------------OPTIONS----------------------

    let option1 = new MessageMenuOption()
    .setLabel('Personalidade')
    .setEmoji('891679849444417566')
    .setValue('option1')

    let option2 = new MessageMenuOption()
    .setLabel('Cronologia')
    .setEmoji('891679849444417566')
    .setValue('option2')

    let option3 = new MessageMenuOption()
    .setLabel('Relacionamentos')
    .setEmoji('891679849444417566')
    .setValue('option3')

    let option4 = new MessageMenuOption()
    .setLabel('Habilidades')
    .setEmoji('891679849444417566')
    .setValue('option4')

    let option5 = new MessageMenuOption()
    .setLabel('Curiosidades')
    .setEmoji('891679849444417566')
    .setValue('option5')
    
    let select = new MessageMenu()
    .setID('selector')
    .setPlaceholder('Clique aqui para ver o menu de opções!')
    .setMaxValues(1)
    .setMinValues(1)
    .addOptions(option1, option2, option3, option4, option5)

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

        if(b.values[0] == "option4") {
            Sendmenu.edit(embed4, select)
        }

        if(b.values[0] == "option5") {
            Sendmenu.edit(embed5, select)
        }

        b.reply.defer();

        collector.on("end", (b) => {
            Sendmenu.edit("<:denied_s:795521524898594846> Este menu de ajuda expirou!\n<:reply:881402558457982996> Digite novamente `!ciel` para visualizar novamente.")
        })
    })

    }else {
        var array = ["Sim.", "É certo.", "Certamente que sim.", "Sem dúvida.", "Sim, definitivamente.", "Pode confiar nisso.", "A meu ver, sim.", "Provavelmente.", "Aparenta ser bom.", "Os sinais apontam para sim.", "Resposta nebulosa, tente novamente.", "Pergunte novamente mais tarde.", "Melhor não te dizer agora ...", "Não dá para prever agora.", "Concentre-se e pergunte de novo.", "Não conte com isso.", "Minha resposta é não.", "Minhas fontes dizem que não.", "Aparenta não muito bom ...", "Muito duvidoso.",];  
        
        await message.channel.send({embed: {
            color: 3447003,
            description: array[Math.floor(Math.random()*array.length)]
            }
        })
    }
  }
}