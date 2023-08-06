# PROJETO MARVEL PONTUAWEB DOCUMENTAÇÃO

Visualização em produção: (https://main--melodic-liger-df3b9c.netlify.app/perfil)

## Instalação

Você precisará ter o [NodeJS](https://nodejs.org) instalado na sua máquina, e, após isso, clonar este repositório:
```sh
  $ git clone https://github.com/Danielrl98/Projeto-Marvel-Pontua.git
```

Depois disso, instale as dependências do Front-end 

```sh
  cd projeto-marvel-Pontua / npm install 
```

## Variaveis de Ambiente

Será necessário renomear o arquivo .env_copy para .env na raiz do projeto.

explicação das variaveis de ambiente:


### PUBLIC_KEY=
### PRIVATE_KEY=

### FIREBASE_APIKEY=
### FIREBASE_AUTODOMAIN=
### FIREBASE_PROJECTID=
### FIREBASE_STORAGEBUCKET=
### FIREBASE_MESSAGESENDERID=
### FIREBASE_APPID=


conseguir public_key e private_key em (https://developer.marvel.com/)

conseguir firebase keys em (https://console.firebase.google.com/)

No firebase será necessário criar uma autenticação no modo email e senha com recuperação de senha e banco de dados.
processo Firebase: Criar projeto > criar aplicação web > criar autenticação modo email e senha > criar banco de dados em modo teste.

Após configurado, rodar o comando para iniciar

```sh
   npm run dev
```

dúvidas entre em contato comigo (daniel-rl-98@hotmail.com)




