// Escreva um algoritmo que gere os números de 1000 a 1999 e escreva aqueles que,
// divididos por 11, dão resto igual a 5.

// let contador = 1000;

// for ( let contador = 1000; contador <= 1999; contador++){

//     if( contador % 11 === 5 ){
//         console.log(contador)
//     }
// }

function diviseis(){

    for ( let i = 1000; i < 2000; i++){
        if ( (i % 11) === 5 ){
            console.log(i);
        }
    }
}

diviseis();