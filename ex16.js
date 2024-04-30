// Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
// Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.

// let contadorPrimos = 0;
// let numeroAtual = 101;

// do {
//     let divisor = 2;
//     let primo = true;

//     do {
//         if (numeroAtual % divisor === 0 && divisor < numeroAtual) {
//             primo = false;
//             break;
//         }
//         divisor++;
//     } while (divisor < numeroAtual);

//     if (primo) {
//         console.log(numeroAtual);
//         contadorPrimos++;
//     }

//     numeroAtual++;
// } while (contadorPrimos < 50);

function eh_primo(num){

    for ( let i=2; i <= Math.sqrt(num); i++){
        if ( num % i === 0){
            return false;
        }
    }
    return true;
}

function primos_depois101(){

    let primos = [];
    let num = 101;

    while (primos.length < 50){

        if (eh_primo(num)){
            primos.push(num);
            console.log(num);
        }
      num ++;
    } 
}

primos_depois101();




