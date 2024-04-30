const prompt = require("prompt-sync")();

let numberOne=numberTwo=0;// const //vetor = new Array(2);

while ( numberOne === numberTwo ) { 

    numberOne = parseInt(prompt('Digite um numero inteiro.: '));
    numberTwo = parseInt(prompt('Digite outro numero inteiro.:'));

    if( numberOne === numberTwo ) { 
        console.log('Por favor digite numeros diferentes...');
    } else { 
        if ( numberOne < numberTwo ) {
            console.log( numberOne , numberTwo );
        } else { 
            console.log( numberTwo , numberOne );
        }        
    }
}