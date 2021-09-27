# Raphael
+ Discord bot "Rei da Sabedoria Raphael" com 100+ comandos

## Instalação | Como usar o bot

 **1.** Instale [node.js v12 +](https://nodejs.org/en/download/) ou superior

 **2.** Baixe este repositório e descompacte-o | ou git cloná-lo

 **3.** Instale todos os pacotes com **`npm install @discordjs/opus @ksoft/api ascii-table canvacord canvas colors common-tags discord.js enmap erela.js erela.js-deezer erela.js-facebook erela.js-spotify lyrics-finder ms radio-browser`** | os pacotes importantes são **`npm install discord.js erela.js`**

 **4** Preencha os parâmetros, BEM em `botconfig / config.json`!

 **5.** [Baixe Lavalink](https://cdn.discordapp.com/attachments/798196676405755905/827174915714711572/Lavalink.jar) e baixe Java 15 (Java 13 recomendado)

**5.1** Execute o arquivo Lavalink com: **`java -jar Lavalink.jar`**

 **CERTIFIQUE-SE DE QUE EXISTE O ARQUIVO `application.yml`, CASO CONTRÁRIO NÃO FUNCIONARÁ!**

 **6.** inicie o bot com **`node index.js`**

### *Modificar - `config.json`*

```javascript
{
    "token": "Seu_Token",
    "prefix": "Seu_Prefixo"
}        
```

#### **NOTA:**

*Se você está tendo erros / problemas ao iniciar, exclua o arquivo package.json e faça, antes de instalar os pacotes `npm init`*

# É ASSIM QUE DEVE SER PARECIDO!

![](https://github.com/Tomato6966/discord-js-lavalink-Music-Bot-erela-js/blob/main/Folder_structure.png)

## Windows start Command .bat file
```bat
@ECHO OFF
ECHO ==========================
ECHO Starting Lavalink
ECHO ==========================
start cmd /k java -jar ./Lavalink.jar
ECHO ==========================
@ECHO Taking a 5 Second Break for Lavalink
ECHO ==========================
timeout /T 5 /nobreak
ECHO ==========================
@ECHO Starting BOT
ECHO ==========================
start cmd /k node .
exit /s'
```
Arquivo `start.bat` do Windows
Que inicia Lavalink e o Bot juntos com um clique;)

Coloque-o na mesma pasta que `index.js` e` Lavalink.jar`

## Entre no meu servidor do discord

[Thomaz's Cord ₊🌸](https://discord.gg/DJuK4KGa94)
