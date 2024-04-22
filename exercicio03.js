const prompt = require("prompt-sync")();

const vetor = new Array(4);

vetor[0] = Number(prompt('Digite o primeiro numero inteiro.: '));
vetor[1] = Number(prompt('Digite o segundo numero inteiro.: '));
vetor[2] = Number(prompt('Digite o terceiro numero inteiro.: '));
vetor[3] = Number(prompt('Digite o quarto numero inteiro.: '));
let soma = 0; 
for (let i = 0; i < vetor.length-1; i++) {
    soma+= vetor[i];
    if (i==0) {
        vetor[i]+=25;        
    } else if (i==1) {
        vetor[i]=vetor[i]*3;        
    } else { 
        vetor[i]=vetor[i]*0.12;   
    }
}   
vetor[3]=soma;
console.log(`O resultado do exercicio é [${vetor}]`);