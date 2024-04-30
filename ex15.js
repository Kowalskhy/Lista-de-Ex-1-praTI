// Fazer um algoritmos para receber um número decimal e o peso de cada número até
// que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
// respectivos.

const prompt = require('prompt-sync')();

let soma = 0;
let i = 0;
let valorD;
let pvalor; // peso do valor

do{
    valorD = parseFloat(prompt("Insira um numero decimal: "));
    pvalor = parseFloat(prompt("Insira o peso desse valor: "));

    if( valorD !== 0 && pvalor !==0 ){
        soma = soma + ( valorD*pvalor );
        i = i + pvalor;
    }
    
}while (valorD !== 0 && pvalor !== 0);

if ( i !== 0){
    let mediaP = soma / i;
    console.log("A média ponderada é de:", mediaP );
}else{
    console.log("O numero valor inserido é inválido!")
}

