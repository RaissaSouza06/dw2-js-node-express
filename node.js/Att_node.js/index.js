import express from "express"
const app = express();

// Importando o Sequelize
import connection from "./config/sequelize-config.js"

import RomanceController from "./controllers/RomanceController.js"
import AcaoController from "./controllers/AcaoController.js"
import ComediaController from "./controllers/ComediaController.js"

import Acao from "./models/Acao.js";

// Realizando a conexão com o banco de dados
connection.authenticate().then(()=> {
    console.log("Conexão com o banco de dados feita com sucesso!")
}).catch((error) => {
    console.log(error)
})

// Criando o banco de dados se ele não existir
connection.query(`CREATE DATABASE IF NOT EXISTS Att_node;`).then(() => {
    console.log("O banco de dados está criado.")
}).catch((error) => {
    console.log(error)
})

// Define o EJS como Renderizador de páginas
app.set("view engine", "ejs");
app.use(express.static("public"));

// Permite capturar dados vindo de formulários
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// Definindo o uso das rotas dos Controllers
app.use("/", RomanceController)
app.use("/", AcaoController)
app.use("/", ComediaController)

app.get("/", (req, res) => {
  res.render("index"); //coloco entre parenteses a pasta que quero renderizar(só o nome, não preciso nem do enderenço, nem da extenção)
});

app.get("/perfil/:user", (req, res) => {
  const user = req.params.user
  res.render("perfil", {
    user: user,
  });
});


const port = 8080;

app.listen(port, (error) => {
  if (error) {
    console.log(
      `Não foi possível iniciar o servidor. Ocorreu um erro! ${error}`
    );
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});