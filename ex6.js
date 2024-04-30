// Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

// const prompt = require('prompt-sync')();

// let ladoA = parseInt(prompt("Insira o primeiro do triângulo: "));
// let ladoB = parseInt(prompt("Insira o segundo do triângulo: "));
// let ladoC = parseInt(prompt("Insira o terceiro do triângulo: "));

// if ( ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB ){
//     console.log("É possível formar um triângulo");

//     if (ladoA === ladoB && ladoA === ladoC) {
//         console.log("É um triângulo equilátero");
//     } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
//         console.log("É um triângulo isósceles");
//     } else {
//         console.log("É um triângulo escaleno");
//     }
// } else {
//     console.log("Não é possível formar um triângulo com essas medidas!");
// }

// TRABALHANDO COM FUNÇÕES

const prompt = require('prompt-sync')();

function lados_triangulo(){
    let lado_1 = parseInt(prompt("Insira o valor do lado do triângulo: "));
    let lado_2 = parseInt(prompt("Insira o valor do lado do triângulo: "));
    let lado_3 = parseInt(prompt("Insira o valor do lado do triângulo: "));

    return [lado_1, lado_2, lado_3];
}

function forma_triangulo( lado_1, lado_2, lado_3){
    return lado_1 < lado_2 + lado_3 && lado_2 < lado_1 + lado_3 && lado_3 < lado_1 + lado_2

}

function tipo_triangulo( lado_1, lado_2, lado_3){

    if ( lado_1 === lado_2 && lado_1 === lado_3 ){
        console.log("É um triângulo equilatero!");
    }else if ( lado_1 === lado_2 || lado_1 === lado_3 || lado_2 === lado_3 ){
        console.log("É um triângulo isosceles!");
    }else{
        console.log("É um triângulo escaleno!");
    }

}

function main(){

    let [lado_1, lado_2, lado_3] = lados_triangulo();

    if (forma_triangulo(lado_1, lado_2, lado_3)){
        console.log("É possível fazer um triângulo!");
        tipo_triangulo(lado_1, lado_2, lado_3);

    }else{
        console.log("Não é possível formar um triângulo!");
    }
}
main();