// As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

// const prompt = require('prompt-sync')();

// let maca = parseInt(prompt("Insira a quantidade de maças que foram compradas: "));
// let calculo;

// if ( maca >= 12 ){
//     calculo = maca * 0.25;
//     console.log("O valor total da compra foi de:", calculo + "R$");
// }else{
//     calculo = maca * 0.30;
//     console.log("O valor total da compra foi de:", calculo + "R$");
// }


const prompt = require('prompt-sync')();

function cal_maca(maca){

    if ( maca < 12 ){
       let preco = 0.30 * maca;
       console.log("O preço das maças é de:",preco,"R$") 
    }else{
        let preco = 0.25 * maca;
        console.log("O preço das maças é de:",preco,"R$")
    }

}

function main(){

    let qtd_maca = parseInt(prompt("Insira a quantidade de maças compradas: "));

    cal_maca(qtd_maca);
}

main();
