// Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
//  Some 25 ao primeiro inteiro;
//  Triplique o valor do segundo inteiro;
//  Modifique o valor do terceiro inteiro para 12% do valor original;
//  Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
// dos primeiros três inteiros.

const prompt = require('prompt-sync')();

let n1 = parseInt(prompt("Insira o primeiro numero inteiro: "));
let n2 = parseInt(prompt("Insira o segundo numero inteiro: "));
let n3 = parseInt(prompt("Insira o terceiro numero inteiro: "));
let n4 = parseInt(prompt("Insira o terceiro numero inteiro: "));

n4 = n1 + n2 + n3;

console.log("Resultado da primeira operação:", n1 + 25 );
console.log("Resultado da segunda operação:", n2 * 3 );
console.log("Resultado da terceira operação:", n3 * 0.12 );
console.log("Resultado da quarta operação:", n4 );
