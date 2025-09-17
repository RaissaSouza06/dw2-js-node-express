// Importando o express (Framework)
const express = require("express"); //require -> importa módulos
//Iniciando o express na variável app
const app = express(); //toda vez que eu for usar o express, eu uso app

// CONFIGURANDO O EJS
app.set("view engine", "ejs");

// Criando a primeira rota do site (ROTA PRINCIPAL)
//REQ = trata REQUISIÇÃO / RES = trata a RESPOSTA
app.get("/", (req, res) => {
  res.render("index"); //coloco entre parenteses a pasta que quero renderizar(só o nome, não preciso nem do enderenço, nem da extenção)
});

// CTRL + C -> PARA O SERVIDOR (no terminal)

// ROTA DE PRODUTOS
app.get("/produtos", (req, res) => {
  //const produtos = ["Computador", "Celular", "Tablet", "Notebook"];

  // ARRAY DE OBJETOS COM OS PRODUTOS:
  const produtos = [
    { nome: "Celular", preco: 3000 },
    { nome: "Computador", preco: 4000 },
    { nome: "Tablet", preco: 2000 },
    { nome: "Notebook", preco: 3800 },
  ];

  res.render("produtos", {
    produtos: produtos,
  });
});

// ROTA DE CLIENTES
app.get("/clientes", (req, res) => {
  const clientes = [
    {nome:"Ricardo", cpf: "123.456.789-00", endereco: "Rua das flores, 34"},
    {nome:"Isaac", cpf: "123.456.789-00", endereco: "Rua diamente, 100"},
    {nome:"Ana Flávia", cpf: "123.456.789-00", endereco: "Rua Ceara, 30"},
    {nome:"Renan", cpf: "123.456.789-00", endereco: "Rua Curitiba, 28"},
  ];

  res.render("clientes", {
    clientes:clientes
  });
});

// ROTA DE PEDIDOS
app.get("/pedidos", (req, res) => {
  const pedidos = [
    {numero:"1", produto: "Notebook", valor: "3800"},
    {numero:"2", produto: "Computador", valor: "4000"},
    {numero:"3", produto: "Tablet", valor: "2000"},
    {numero:"4", produto: "Celular", valor: "3000"},
  ];

  res.render("pedidos", {
    pedidos:pedidos
  });
});


// ROTA DE PERFIL
app.get("/perfil", (req, res) => {
  //criando a variavel que será enviado para a página
  const user = "Diego Max";
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
