const prompt = require("prompt-sync")();

const vetor = new Array(2);

vetor[0]=vetor[1]=0;

while ( vetor[0] === vetor[1] ) { 

    vetor[0] = parseInt(prompt('Digite um numero inteiro.: '));
    vetor[1] = parseInt(prompt('Digite outro numero inteiro.:'));

    if(vetor[0] === vetor[1]) { 
        console.log('Por favor digite numeros diferentes...');
    } else { 
        if (vetor[0] < vetor[1]) {
            console.log(vetor[0] , vetor[1]);
        } else { 
            console.log(vetor[1] , vetor[0]);
        }        
    }
}