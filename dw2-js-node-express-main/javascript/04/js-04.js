// // capturando elementos c DOM
// const parar = document.getElementById("parar")
// // pegou o elmeneto id parar e guardou 
// parar.style.backgroundColor="red"
// atencao.style.backgroundColor="yellow"

function parar(){
    document.getElementById("parar").style.backgroundColor="red"
    document.getElementById("atencao").style.backgroundColor="gray"
    document.getElementById("prosseguir").style.backgroundColor="gray"
}
//captura o elemento e já altera a cor

function atencao(){
    document.getElementById("atencao").style.backgroundColor="yellow"
    document.getElementById("parar").style.backgroundColor="gray"
    document.getElementById("prosseguir").style.backgroundColor="gray"
}

function prosseguir(){
    document.querySelector("#prosseguir").style.backgroundColor="green"
    document.querySelector("#parar").style.backgroundColor="gray"
    document.querySelector("#atencao").style.backgroundColor="gray"
}