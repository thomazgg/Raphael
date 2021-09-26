export NVM_DIR=/home/runner/nvm
export NODE_VERSION=14

if ! ls $NVM_DIR > /dev/null 2>&1 
then mkdir -p $NVM_DIR
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
fi

[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use $NODE_VERSION

# Você pode querer executá-lo se alterar a versão do nó
#rm -rf node_modules/
#npm i

# instalar uma versão npm personalizada
#if [ $(npm -v) != "6.14.9" ]
#then npm i -g npm@6.14.9
#fi

# só para verificar se algum pacote está faltando
npm outdated | grep "MISSING"
if [ $? -eq 0 ]
then npm i
fi

node .