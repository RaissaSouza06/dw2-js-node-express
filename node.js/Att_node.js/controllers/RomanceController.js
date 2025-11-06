// importando o express
import express from "express"
const router = express.Router()
import Romance from "../models/Romance.js";

// ROTA DE ROMANCE 
router.get("/romance", function(req, res){
  Romance.findAll().then(romance => {
    res.render("romance", {
      romance: romance
    })
  })
})

// ROTA PARA CADASTRAR OS FILMES DE ROMANCE - onde as novas informações vão chegar
router.post("/romance/new", function (req, res) { 
  //coletando os dados do formulario
  const nome = req.body.nome  //coletando dados do form, o nome escolhido (req.body.nome) tem que ser o mesmo do input 
  const ator = req.body.ator
  const ano = req.body.ano
  Romance.create({  // cadastra os novos valores
    // colunda bd : dados do form
    nome : nome,
    ator : ator,
    ano : ano
  }).then(() => {
    res.redirect("/romance");
  }).catch(error => {
    console.log(error);
  })
});

//ROTA DE EXCLUSÃO DE ROMANCE	 
router.get("/romance/delete/:id", (req, res) =>{ //:id é um parametro obrigatório
  const id = req.params.id //pega um parametro como nome id
  //.destroy() -> exclui um registro do banco
  Romance.destroy({
    where : {
      id : id,
    },
  }).then(() => {
    res.redirect("/romance");
  }).catch(error => {
    console.log(error);
  })
});

//ROTA DE EDIÇÃO DE FILMES DE ROMANCE 
router.get("/romance/edit/:id", (req, res) =>{ 
  const id = req.params.id  //coleta o id
  //buscando o filme pelo ID
  // findByPk() busca um registro pela chave primaria
  Romance.findByPk(id).then(romance => {
    res.render("romanceEdit", {
      romance : romance
    });
  });
});

//ROTA DE ALTERAÇÃO DE FILMES DE ROMANCE 
router.post("/romance/update", (req, res) => {
  //coletando os dados do formulario
  const id = req.body.id //usar body para buscar coisas que vem do body, como o formulario
  const nome = req.body.nome
  const ator = req.body.ator
  const ano = req.body.ano
  Romance.update({
    nome :nome,
    ator : ator,
    ano : ano
  },
  { where : {id : id}}
  ).then (() => {
    res.redirect("/romance");
  }).catch(error => {
    console.log(error)
  })
})

// exportando o objeto router
export default router;
