import express from "express";
const router = express.Router();
//importando o model de usuário
import User from "../models/Users.js";
// importando o bcrypt usado para gerar hashs de senhas
import bcrypt from "bcrypt";

// ROTA DE LOGIN
router.get("/login", (req, res) => {
  res.render("login");
});

// ROTA DE CADASTRO
router.get("/cadastro", (req, res) => {
  res.render("cadastro");
});

// ROTA DE CRIAÇÃO DE USUÁRIO
router.post("/createUser", (req, res) => {
  //coletando os dados do formulario
  const email = req.body.email;
  const password = req.body.password;

  // verificando se o usuário já esta cadastrado no banco
  User.findOne({ where: { email: email } }).then((user) => {
    // se o usuário não existir
    if (user == undefined) {
      // fará o cadastro
      // gerando o hash de senha antes de enviar para o banco
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);
      //gera o hash baseado no password digitado pelo usuário e baseado no valor do salt

      //enviando para o banco
      User.create({
        email: email,
        password: hash, //password deixa de receber password no bd e recebe hash
      })
        .then(() => {
          res.redirect("/login");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      // se o usuário ja existir
      res.send(`O usuário informado ja esta cadastrado! <br> 
            <a href="/login">Tentar novamente.</a>`);
    }
  });
});

// ROTA DE AUTENTICAÇÃO
router.post("/authenticate", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  // buscando o usuário no banco
  User.findOne({ where: { email: email } }).then((user) => {
    if (user != undefined) {
      //se o usuario existir
      // validando a senha p ver se esta correta, fazer a checagem do hash por meio do bcrypt
      const correct = bcrypt.compareSync(password, user.password);
      // se a senha for válida
      if (correct) {
        // se a senha estiver correta ele autoriza o login
        // agora vai gerar a sessão para o usuário
        req.session.user = {
            id: user.id,
            email: user.email
        }
        // res.send(`O usuário logao é: <br>
            // ID: ${req.session.user['id']}<br>
            // E-mail: ${req.session.user['email']}`)
        res.redirect("/");
      } else {
        // se a senha não for válida
        res.send(`A senha digitada esta incorreta! <br>
                    <a href="/login">Tentar novamente</a>`);
      }
    } else {
      // se o usuario não existir
      res.send(`Usuário informado não existe! <br>
                <a href="/login">Tentar novamente</a>`);
    }
  });
});

// ROTA DE LOGOUT 
router.get("/logout", (req,res) => {
  req.session.user = undefined
  res.redirect("/")
})

export default router;
