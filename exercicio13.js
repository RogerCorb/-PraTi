const prompt = require("prompt-sync")();

const vetorVariavelN = new Array(5);

vetorVariavelN[0] = parseInt(prompt('Digite o primeiro numero inteiro.: '));
vetorVariavelN[1] = parseInt(prompt('Digite o segundo numero inteiro.: '));
vetorVariavelN[2] = parseInt(prompt('Digite o terceiro numero inteiro.: '));
vetorVariavelN[3] = parseInt(prompt('Digite o quarto numero inteiro.: '));
vetorVariavelN[4] = parseInt(prompt('Digite o quarto numero inteiro.: '));

let variavelN = 0; 
for (let i = 0; i < vetorVariavelN.length; i++) {
    variavelN = vetorVariavelN[i];
    console.log(`**** Tabuada de ${variavelN} ****`)
    for (let j = 1; j <= variavelN; j++) {
        console.log(`${j} x ${variavelN} = ${j*variavelN}`);
    }
}