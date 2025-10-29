function Auth(req, res, next){
    // o usuario possui uma sessão no site
    if(req.session.user != undefined) { 
        //permite a copntinuação da requisição
        next()
    } else { //se não estiver logado 
        res.render("login");
    }
}

export default Auth;