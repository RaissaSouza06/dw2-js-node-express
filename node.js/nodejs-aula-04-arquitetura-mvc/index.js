import express from "express" // ES6 Modules 
// Importando o express (Framework)
//const express = require("express"); //require -> importa módulos, é nativo do node, forma mais antiga
//Iniciando o express na variável app
const app = express(); //toda vez que eu for usar o express, eu uso app

//importando os Controllers (onde estão as rotas, onde é tartado as requisições)
import ClientesController from "./controllers/ClientesController.js"
import PedidosController from "./controllers/PedidosController.js"
import ProdutosController from "./controllers/ProdutosController.js"

// CONFIGURANDO O EJS
app.set("view engine", "ejs");

// definindo a pasta public para arquivos estaticos 
app.use(express.static("public"));

//DEFININDO O USO DAS ROTAS QUE ESTÃO NOS CONTROLLERS
app.use("/", ClientesController)
app.use("/", PedidosController)
app.use("/", ProdutosController)

// Criando a primeira rota do site (ROTA PRINCIPAL)
//REQ = trata REQUISIÇÃO / RES = trata a RESPOSTA
app.get("/", (req, res) => {
  res.render("index"); //coloco entre parenteses a pasta que quero renderizar(só o nome, não preciso nem do enderenço, nem da extenção)
});

// CTRL + C -> PARA O SERVIDOR (no terminal)


// ROTA DE PERFIL
// :user é um parametro da rota, nesse caso é um parametro obrigatório, VAI CAIR NA PROVA
// :user? é um parametro de rota não obrigatorio
app.get("/perfil/:user", (req, res) => {
  // req = requesição
  // res = resposta do servidor
  const user = req.params.user
  // coletando o parametro user da requisição e guardando na variavel user

  res.render("perfil", {
    //enviando variaveis para a página ejs (html)
    user: user,
  });
});

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
