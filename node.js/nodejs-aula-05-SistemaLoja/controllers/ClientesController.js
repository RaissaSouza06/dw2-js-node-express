import express from "express";
const router = express.Router();

//importando o Model de cliente
import Cliente from "../models/Cliente.js";

// ROTA PARA LISTAR OS CLIENTES
router.get("/clientes", function (req, res) {
  Cliente.findAll().then((clientes) =>{  //select * from Cliente, o then retorna com um pacotinho clientes
  res.render("clientes", {
    clientes:clientes,
    });
    //catcah = falha na resolução da promessa
  }).catch (error => {
    console.log(error)
  });
});

// ROTA PARA CADASTRAR OS CLIENTES - onde as novas informações vão chegar
router.post("/clientes/new", function (req, res) { 
  //coletando os dados do formulario
  const nome = req.body.nome  //coletando dados do form, o nome escolhido (req.body.nome) tem que ser o mesmo do input 
  const cpf = req.body.cpf
  const endereco = req.body.endereco
  Cliente.create({  // cadastra os novos valores
    // colunda bd : dados do form
    nome : nome,
    cpf : cpf,
    endereco : endereco
  }).then(() => {
    res.redirect("/clientes");
  }).catch(error => {
    console.log(error);
  })
});

//ROTA DE EXCLUSÃO DE CLIENTE 
router.get("/clientes/delete/:id", (req, res) =>{ //:id é um parametro obrigatório
  const id = req.params.id //pega um parametro como nome id
  //.destroy() -> exclui um registro do banco
  Cliente.destroy({
    where : {
      id : id,
    },
  }).then(() => {
    res.redirect("/clientes");
  }).catch(error => {
    console.log(error);
  })
});

//ROTA DE EDIÇÃO DE CLIENTE 
router.get("/clientes/edit/:id", (req, res) =>{ 
  const id = req.params.id  //coleta o id
  //buscando o cliente pelo ID
  // findByPk() busca um registro pela chave primaria
  Cliente.findByPk(id).then(cliente => {
    res.render("clienteEdit", {
      cliente : cliente
    });
  });
});

//ROTA DE ALTERAÇÃO DE CLIENTES
router.post("/clientes/update", (req, res) => {
  //coletando os dados do formulario
  const id = req.body.id //usar body para buscar coisas que vem do body, como o formulario
  const nome = req.body.nome
  const cpf = req.body.cpf
  const endereco = req.body.endereco
  Cliente.update({
    nome :nome,
    cpf : cpf,
    endereco : endereco
  },
  { where : {id : id}}
  ).then (() => {
    res.redirect("/clientes");
  }).catch(error => {
    console.log(error)
  })
})

export default router;
