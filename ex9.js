// Escreva um algoritmo que leia o código de origem de um produto e imprima a região
// do mesmo, conforme a tabela 
// 1=sul, 2=norte, 3=leste, 4=oeste, 5 ou 6=nordeste, 7,8 ou 9 = sudeste, 10 até 20=centro-oeste, 25 até 50=nordeste 
// fora desses intervalos= produto importado

const prompt = require('prompt-sync')();

// let codProduto = parseInt(prompt("Insira o código de origem do produto: "));
// let regiao;


// if ( codProduto >= 1 && codProduto <=9 ){
//  switch (codProduto){
//     case 1:
//         regiao = "Sul";
//         break;
//     case 2:
//         regiao = "Norte";
//         break;
//     case 3:
//         regiao = "Leste";
//         break;
//     case 4:
//         regiao = "Oeste";
//         break;
//     case 5: case 6:
//         regiao = "Nordeste";
//         break;
//     case 7: case 8: case 9:
//         regiao = "Sudeste";
//         break;
//     }
    
// }else if ( codProduto >=10 && codProduto <=20 ){
//     regiao = "Centro-Oeste";
// }else if (codProduto >=25 && codProduto <=50 ){
//     regiao = "Nordeste";
// }else{
//     regiao = "Produto importado";
// }   
 
// console.log(regiao);

// function codigo_produto(codigo){

//     if ( codigo >= 1 && codigo <=9 ){

//         switch(codigo){
//             case 1:
//                 regiao = "Sul";
//                 break;
//             case 2:
//                 regiao = "Norte";
//                 break;
//             case 3:
//                 regiao = "Leste";
//                 break;
//             case 4:
//                 regiao = "Oeste";
//                 break;
//             case 5: case 6:
//                 regiao = "Nordeste"
//                 break;
//             case 7: case 8: case 9:
//                 regiao = "Sudeste"
//                 break;
//         }
//     }else if (codigo >= 10 && codigo <=20){
//         regiao = "Centro-Oeste";
//     }else if (codigo >= 25 && codigo <=50){
//         regiao = "Nordeste";
//     }else{
//         return "O produto é importado";
//     }
//  return regiao;   
// }

// function main(){

//     let codigo = parseInt(prompt("Insira o código de origem do produto: "));

//     cod_pro = codigo_produto(codigo);
//     console.log("A região do produto é:", cod_pro);
// }

// main();


function codigo_produto(codigo){

    regiao = {1: "Sul",
              2: "Norte",
              3: "Leste",
              4: "Oeste",
              5: "Nordeste", 6: "Nordeste",
              7: "Sudeste", 8: "Sudeste", 9: "Sudeste"   
             };
    if ( codigo >= 10 && codigo <= 20){
        regiao = "Centro-Oeste";
    }else if ( codigo >= 25 && codigo <= 50){
        regiao = "Nordeste";
    }else if (codigo in regiao){
        return regiao[codigo];
    }else{
        return "Produto importado!";
    }
    return regiao;
}


function main(){

    let codigo = parseInt(prompt("Insira o código de origem do produto: "));

    cod_pro = codigo_produto(codigo);
    console.log("A região do produto é:", cod_pro);
}

main();