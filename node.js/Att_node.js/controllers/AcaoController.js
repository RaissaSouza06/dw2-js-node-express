// importando o express
import express from "express"
const router = express.Router()
import Acao from "../models/Acao.js";

// ROTA DE AÇÃO 
router.get("/acao", function(req, res){
  Acao.findAll().then(acao => {
    res.render("acao", {
      acao: acao
    })
  })
})

// ROTA PARA CADASTRAR OS FILMES DE AÇÃO - onde as novas informações vão chegar
router.post("/acao/new", function (req, res) { 
  //coletando os dados do formulario
  const nome = req.body.nome  //coletando dados do form, o nome escolhido (req.body.nome) tem que ser o mesmo do input 
  const ator = req.body.ator
  const ano = req.body.ano
  Acao.create({  // cadastra os novos valores
    // colunda bd : dados do form
    nome : nome,
    ator : ator,
    ano : ano
  }).then(() => {
    res.redirect("/acao");
  }).catch(error => {
    console.log(error);
  })
});

//ROTA DE EXCLUSÃO DE AÇÂO 
router.get("/acao/delete/:id", (req, res) =>{ //:id é um parametro obrigatório
  const id = req.params.id //pega um parametro como nome id
  //.destroy() -> exclui um registro do banco
  Acao.destroy({
    where : {
      id : id,
    },
  }).then(() => {
    res.redirect("/acao");
  }).catch(error => {
    console.log(error);
  })
});

//ROTA DE EDIÇÃO DE FILMES DE AÇÃO 
router.get("/acao/edit/:id", (req, res) =>{ 
  const id = req.params.id  //coleta o id
  //buscando o filme pelo ID
  // findByPk() busca um registro pela chave primaria
  Acao.findByPk(id).then(acao => {
    res.render("acaoEdit", {
      acao : acao
    });
  });
});

//ROTA DE ALTERAÇÃO DE FILMES DE AÇÃO 
router.post("/acao/update", (req, res) => {
  //coletando os dados do formulario
  const id = req.body.id //usar body para buscar coisas que vem do body, como o formulario
  const nome = req.body.nome
  const ator = req.body.ator
  const ano = req.body.ano
  Acao.update({
    nome :nome,
    ator : ator,
    ano : ano
  },
  { where : {id : id}}
  ).then (() => {
    res.redirect("/acao");
  }).catch(error => {
    console.log(error)
  })
})

// exportando o objeto router
export default router;