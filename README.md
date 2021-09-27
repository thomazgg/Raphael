# Raphael
+ Discord bot "Rei da Sabedoria Raphael" com 100+ comandos

## Instalação | Como usar o bot

 **1.** Instale [node.js v12 +](https://nodejs.org/en/download/) ou superior e baixe Java 15 (Java 13 recomendado)

 **2.** Baixe este repositório e descompacte-o | ou git cloná-lo

 **3.** Instale todos os pacotes com **`npm install @discordjs/opus @ksoft/api ascii-table canvacord canvas colors common-tags discord.js enmap erela.js erela.js-deezer erela.js-facebook erela.js-spotify lyrics-finder ms radio-browser`** | os pacotes importantes são **`npm install discord.js erela.js`**

 **4** Preencha os parâmetros, BEM em `botconfig / config.json`!

 **5.** inicie o bot com **`node index.js`**

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

![](https://media.discordapp.net/attachments/766655902509563944/892190708746825728/unknown.png)

# COMO INSTALAR NODE v.16

1. Execute este script no shell para instalar o node e configurar o npm.
```
npm i --save-dev node@16 && npm config set prefix=$(pwd)/node_modules/node && export PATH=$(pwd)/node_modules/node/bin:$PATH
```

2. Crie o .replit para executar o node a partir do shell em vez do console.
```
run="npm start"
```

3. Certifique-se de adicionar o script de início em seu arquivo package.json
```
"scripts": {
    "start": "node ."
  }
```

## Entre no meu servidor do discord

[Thomaz's Cord ₊🌸](https://discord.gg/DJuK4KGa94)
