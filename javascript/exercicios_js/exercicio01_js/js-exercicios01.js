//FUNÇÃO COM PARÂMETROS:
const user = "Aluno";
function saudacaoPersonalizada(name) {
  document.write(`<h3>Olá, ${name}! Bem-vindo(a) á Calculadora Universal!</h3><br>`);
}
saudacaoPersonalizada(user); 

const n1=10;
const n2=5;
function soma(n1,n2){
  let result = n1+n2;
  document.write(`A soma de ${n1}+${n2} é igual a ${result}<br>`);
} soma(n1,n2);

function subt(n1,n2){
  let result = n1-n2;
  document.write(`A subtração de ${n1}-${n2} é igual a ${result}<br>`);
} subt(n1,n2);

function div(n1,n2){
  let result = n1/n2;
  document.write(`A soma de ${n1}/${n2} é igual a ${result}<br>`);
} div(n1,n2);

function mult(n1,n2){
  let result = n1*n2;
  document.write(`A multiplicação de ${n1}*${n2} é igual a ${result}<br>`);
} mult(n1,n2);

const calcularDobro = (x) =>{
    return x*2;
};
  let numero1 = 20
document.write(`<p>O dobro do número ${numero1} é ${calcularDobro(numero1)}</p>`)

const calcularMetade = (x) =>{
    return x/2;
};
  let numero2 = 20
document.write(`<p>A metade do número ${numero2} é ${calcularMetade(numero2)}</p>`)

const IIFE = (function(){
        document.write(`<h3> Calculadora Universal pronta para uso!</h3>`)

})();