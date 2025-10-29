// Importando o Express
import express from "express" 

// Iniciando o Express
const app = express() 

//importando o express-session (gerador de sessões)
import session from "express-session"

// Importando o Sequelize
import connection from "./config/sequelize-config.js" 

// Importando os Controllers
import ClientesController from "./controllers/ClientesController.js"
import PedidosController from "./controllers/PedidosController.js"
import ProdutosController from "./controllers/ProdutosController.js"

//importando o controller de usuário
import UsersController from "./controllers/UsersControllers.js"

//importando os models
import Pedido from "./models/Pedido.js";
import Cliente from "./models/Cliente.js";

//importando os relacionamentos
import defineAssociations from "./config/associations.js";

//configurando o expression-session
app.use(session({
    secret: "minhalojasecret",
    cookie: {maxAge: 3600000}, //sessão expira em 1 hora
    saveUninitialized: false,
    resave: false
}))

// Realizando a conexão com o banco de dados
connection.authenticate().then(()=> {
    console.log("Conexão com o banco de dados feita com sucesso!")
}).catch((error) => {
    console.log(error)
})

// Criando o banco de dados se ele não existir
connection.query(`CREATE DATABASE IF NOT EXISTS lojarelacional;`).then(() => {
    console.log("O banco de dados está criado.")
}).catch((error) => {
    console.log(error)
})

// invocando a função que cria os relacionamnetos, só pode criar embaixo da criação do banco
defineAssociations()

// forçando uma promessa - sincronizando as tabelas com um relacionamneto 
Promise.all([
    Cliente.sync({force:false}), //mudar de false p true uma vez, depois voltar de true p false
    Pedido.sync({force:false}),
]).then(() => {
    console.log("Tabelas e relacionamentos criados com sucesso!")
}).catch(error => {
    console.log("Erro na criação das tabelas: ", error)
})
 
// Define o EJS como Renderizador de páginas
app.set('view engine', 'ejs')
// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static('public'))
// Permite capturar dados vindo de formulários
app.use(express.urlencoded({extended: false}))
app.use(express.json())
// Definindo o uso das rotas dos Controllers
app.use("/", ClientesController)
app.use("/", PedidosController)
app.use("/", ProdutosController)
app.use("/", UsersController)

// ROTA PRINCIPAL
app.get("/", function(req,res){
    res.render("index")
})

// INICIA O SERVIDOR NA PORTA 8080
app.listen(8080, erro => {
    if (erro) {
        console.log("Ocorreu um erro!")
    } else {
        console.log("Servidor iniciado com sucesso!")
    }
})