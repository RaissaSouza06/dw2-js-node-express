const dataAtual = new Date();
document.write(`Data e hora atuais: ${dataAtual}`); 

const salario = 500.75;
const salarioDolar = salario.toLocaleString("pt-br", {
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
document.write(`<p>Data em que ocorrerá a data do produto: ${dataAtual.getDate() }</p><hr>`);