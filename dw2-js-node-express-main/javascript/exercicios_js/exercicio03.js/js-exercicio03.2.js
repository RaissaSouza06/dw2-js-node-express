const dataAtual = new Date();
document.write(`Data e hora atuais: ${dataAtual}`); 

const salario = 500.75;
const salarioDolar = salario.toLocaleString("en-us", {
  style: "currency",
  currency: "USD",
}); 
document.write(`<p>Seu salário em dólar: ${salarioDolar}</p>`);

const salarioConvertido = salario*5;
document.write(
  `<p>Seu salário convertido de dólar para real: ${salarioConvertido.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  })}</p>`
);

dataAtual.setDate(dataAtual.getDate() + 12);

const dia = String(dataAtual.getDate()).padStart(2, '0');
const mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); // mês começa em 0
const ano = dataAtual.getFullYear();
const dataEntrega = `${dia}/${mes}/${ano}`;

document.write(`<p>Data em que ocorrerá a entrega do produto: ${dataEntrega}</p><hr>`);