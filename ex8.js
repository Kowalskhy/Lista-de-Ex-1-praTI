// Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

const prompt = require('prompt-sync')()

// let valor1 = parseInt(prompt("Insira o primeiro valor: "));
// let valor2 = parseInt(prompt("Insira o segundo valor: "));

// if ( valor1 === valor2 ){
//     console.log("Os números não podem ser iguais!");
// }else if ( valor1 > valor2){
//     console.log( valor2, valor1 );
// }else{
//     console.log( valor1, valor2);
// }

function main(){
    
    let valor1 = parseInt(prompt("Insira o primeiro valor: "));
    let valor2 = parseInt(prompt("Insira o segundo valor: "));

    if ( valor1 === valor2){
        console.log("Os numeros não podem ser iguais!");
    }else{
        valores = [valor1, valor2].sort()
        console.log( valores )
    }

}

main();