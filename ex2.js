// Escreva um algoritmo para ler o número de eleitores de um município, o número de
// votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
// em relação ao total de eleitores.

const prompt = require('prompt-sync')();

let totalEleitores = parseInt(prompt("Insira a quantidade de eleitores do município:"));
let votosBrancos = parseInt(prompt("Insira a quantidade de votos brancos: "));
let votosNulos = parseInt(prompt("Insira a quantidade de votos nulos: "));
let votosValidos = parseInt(prompt("Insira a quantidade de votos válidos: "));

// let porcentagemB = ( votosBrancos / totalEleitores ) * 100;
// let porcentagemN = ( votosNulos / totalEleitores ) * 100;
// let porcentagemV = ( votosValidos / totalEleitores ) * 100;

console.log( ( votosBrancos / totalEleitores ) * 100 + "% (percentual de votos brancos)");
console.log( ( votosNulos / totalEleitores ) * 100 + "% (percentual de votos nulos)");
console.log( ( votosValidos / totalEleitores ) * 100 + "% (percentual de votos validos)");




    
