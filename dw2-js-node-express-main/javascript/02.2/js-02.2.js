//MÉTODOS DE MANIPULAÇÃO DE VETORES, exp: manipular uma lista de bd
let vetor = ['Laranja', ' Maça', ' Banana']
document.write(`<p>Nosso vetor é o: ${vetor}</p>`)

///Posso adicionar items ao vetor, inserir em um indice que ainda não existe
vetor[3] = ' Morango'
document.write(`<p>Nosso vetor agora é o: ${vetor}</p>`)

//PUSH - insere um novo elemento ao FINAL do vetor
vetor.push(' Abacaxi')
document.write(`<p>Nosso vetor agora é o: ${vetor}</p>`)

//Usar o indice 0 substitui o que já existe
vetor[0] = ' Pera'
document.write(`<p>Nosso vetor agora é o: ${vetor}</p>`)

//UNSHIFT - Para adicioanr elemento no inicio do vetor 
vetor.unshift(' Laranja')
document.write(`<p>Nosso vetor agora é o: ${vetor}</p><hr>`)

//LENGTH - Método para contar os valores de uma lista, retorna o número de elementos de um vetor
let number=[6,8,2,9,3,800,200]
document.write(`<p>Nosso novo vetor agora é o: ${number}</p>`)
document.write(`<p>O número de elementos desse vetor é: ${number.length}</p>`)

//SORT - Ordena o vetor
document.write(`<p>O primeiro elemento do vetor é: ${number[0]}</p>`)
let numberOrdenado = number.sort() // pegou o vetor, ordenou ele e gravou em uma nova variavel
document.write(`<p>O vetor ordenado é: ${numberOrdenado}</p>`) //em números ordena apenas pela primeira casa
document.write(`<p>A lista de frutas ordenadas é: ${vetor.sort()}</p>`)

//Ordenando um vetor numérico em ordem crescente:
document.write(`<p>Nosso vetor em ordem crescente: ${number.sort((a,b) => a-b)}</p>`)
//verifica se o vetor b é menor q a, assim vai ordenando

//Ordenando um vetor numérico em ordem decrescente:
document.write(`<p>Nosso vetor em ordem decrescente: ${number.sort((a,b) => b-a)}</p>`)
//verifica se o vetor a é menor q b, assim vai ordenando


