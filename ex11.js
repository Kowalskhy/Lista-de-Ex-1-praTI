// Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
// cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
// ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou
// NEGATIVO.

const prompt = require('prompt-sync')();

let valorInt = parseInt(prompt("Insira um valor inteiro: "));

while (valorInt !== null && valorInt > 0) {
    if (valorInt % 2 === 0) {
        console.log("O número é PAR!");
    } else {
        console.log("O número é IMPAR!");
    }
    valorInt = parseInt(prompt("Insira um valor inteiro: "));
}