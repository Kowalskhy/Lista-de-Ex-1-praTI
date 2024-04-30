// Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const prompt = require('prompt-sync')();

// let nInt = parseInt(prompt("Insira um numero inteiro: "));

// for ( let contador =0; contador <10; contador++){
//     console.log(nInt);
// }

function impressao(){

    let n1 = parseInt(prompt("Insira um numero inteiro: "))

    for ( let i=0; i<10; i++){
        console.log(n1)
    }
}

impressao();