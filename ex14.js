// Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.(WHILE DO)

const prompt = require('prompt-sync')();

let soma =0;
let i = 0;
let valorD;


do{

    valorD = parseFloat(prompt("Digite um número decimal (digite 0 para sair):"));
    if ( valorD !== 0 ){
    soma += valorD;
    i++;
    }
}while ( valorD !== 0 );

if ( i !== 0 ){
    let media = soma / i;
    console.log("A média dos valores é:", media);
}else{
    console.log("O valor inserido é inválido!");
}
