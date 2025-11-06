// importando o express
import express from "express"
const router = express.Router()
import Comedia from "../models/Comedia.js";

// ROTA DE COMEDIA 
router.get("/comedia", function(req, res){
  Comedia.findAll().then(comedia => {
    res.render("comedia", {
      comedia: comedia
    })
  })
})

// ROTA PARA CADASTRAR OS FILMES DE COMÈDIA - onde as novas informações vão chegar
router.post("/comedia/new", function (req, res) { 
  //coletando os dados do formulario
  const nome = req.body.nome  //coletando dados do form, o nome escolhido (req.body.nome) tem que ser o mesmo do input 
  const ator = req.body.ator
  const ano = req.body.ano
  Comedia.create({  // cadastra os novos valores
    // colunda bd : dados do form
    nome : nome,
    ator : ator,
    ano : ano
  }).then(() => {
    res.redirect("/comedia");
  }).catch(error => {
    console.log(error);
  })
});

//ROTA DE EXCLUSÃO DE COMEDIA	 
router.get("/comedia/delete/:id", (req, res) =>{ //:id é um parametro obrigatório
  const id = req.params.id //pega um parametro como nome id
  //.destroy() -> exclui um registro do banco
  Comedia.destroy({
    where : {
      id : id,
    },
  }).then(() => {
    res.redirect("/comedia");
  }).catch(error => {
    console.log(error);
  })
});

//ROTA DE EDIÇÃO DE FILMES DE COMÉDIA 
router.get("/comedia/edit/:id", (req, res) =>{ 
  const id = req.params.id  //coleta o id
  //buscando o filme pelo ID
  // findByPk() busca um registro pela chave primaria
  Comedia.findByPk(id).then(comedia => {
    res.render("comediaEdit", {
      comedia : comedia
    });
  });
});

//ROTA DE ALTERAÇÃO DE FILMES DE COMÉDIA 
router.post("/comedia/update", (req, res) => {
  //coletando os dados do formulario
  const id = req.body.id //usar body para buscar coisas que vem do body, como o formulario
  const nome = req.body.nome
  const ator = req.body.ator
  const ano = req.body.ano
  Comedia.update({
    nome :nome,
    ator : ator,
    ano : ano
  },
  { where : {id : id}}
  ).then (() => {
    res.redirect("/comedia");
  }).catch(error => {
    console.log(error)
  })
})

// exportando o objeto router
export default router;