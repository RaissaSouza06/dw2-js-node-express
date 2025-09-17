// Importando o express (Framework)
const express = require("express"); //require -> importa módulos
//Iniciando o express na variável app
const app = express(); //toda vez que eu for usar o express, eu uso app

// CONFIGURANDO O EJS
app.set('view engine', 'ejs') // renderiza as paginas

// Criando a primeira rota do site (ROTA PRINCIPAL)
//REQ = trata REQUISIÇÃO / RES = trata a RESPOSTA
app.get("/", (req, res) => {
  res.send(
    "<h1>Hello World! Bem-vindo ao meu primeiro site com node.js e Express! =)<h1>"
  ); //send - envio uma mensagem
});

// CTRL + C -> PARA O SERVIDOR (no terminal)

// ROTA DE PRODUTOS
app.get("/produtos", (req, res) => {
  res.send("<h1>Bem-vindo a página de Produtos!</h1>");
});

// ROTA DE CLIENTES
app.get("/clientes", (req, res) => {
    res.send("<h1>Bem-vindo a página de Clientes!!</h1>")
})

// Iniciando o servidor HTTP
// O servidor escutará na porta 8080
const port = 8080;

app.listen(port, (error) => {
  //contem o erro caso ocorra e me fala qual é (crio uma função para guardá-lo)
  if (error) {
    console.log(
      `Não foi possível iniciar o servidor. Ocorreu um erro! ${error}`
    );
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});
