// importando o express
import express from "express"

const router = express.Router()
// caregando na variavel router o express.Router() responsavel por gerenciar as rotas da aplicação
//usa só o metodo router, responsavel por gerenciar as rotas 

// ROTA DE CLIENTES - retirada do index.js
router.get("/clientes", (req, res) => {
    // trocar app.get por router.get
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

// exportando o objeto router
export default router;
