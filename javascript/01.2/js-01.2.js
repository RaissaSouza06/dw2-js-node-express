//
//
//
//
const soma = function (n1,n2){
    return n1+n2;
};
document.write(`<p>O resultado da soma é ${soma(8,7)}.</p>`)
const tipo = typeof(soma)
//typeof mostra o tipo de algo, qual é o tipo de soma? varchar
document.write(`${tipo}`)

//------------------------------------------------------------------------------------------

// ARROW FUNCTION (FUNÇÃO ANÔNIMA)
// arrow function c apenas um parâmetro pode ficar sem parentesses ()
// substituir const dobro = function(x){ por:
// ou const dobro = x => 
const dobro = (x) =>{
    return x*2;
};
document.write(`<p>O dobro do núemro é ${dobro(900)}.</p>`)

//------------------------------------------------------------------------------------------

/* ARROW FUNCTION com mais de um parâmetro:
const calc = (num1,operador,num2) => {
    return eval(`${num1} ${operador} ${num2}`);
    // eval = função nativa do js que faz cálculos a partir de 2 numeros e um operador
    // função eval cria uma função que faz a mesma coisa
};

document.write(`<p>O resultado da operação é ${calc(1100,"-",1)}.</p>`)
*/

//------------------------------------------------------------------------------------------

// SIMPLIFICANDO ARROW FUNCTION C UM ÚNICO RETORNO (pode apagar as chaves e o return)
const calculadora = (num1,operador,num2) => 
     eval(`${num1} ${operador} ${num2}`);
    document.write(`<p>O resultado da operaçãoé ${calculadora(1100,"+",1)}.</p>`)

//------------------------------------------------------------------------------------------

// IIFE - FUNÇÃO IMEDIATA(immediately invoked function expression)
// é uma função invocada imediatamente, função anonima
const IIFE = (function(){
        document.write(`<p>Estou sendo executada imediatamente </p>`)

})();

//IIFE COM PARÂMETRO
const loadUser = (function(user){
            document.write
            (`<p>Carregando as informações do usuário: <strong>${user}</strong... </p>`)
})("Raíssa");
