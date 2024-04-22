const prompt = require("prompt-sync")();

const numeroInteiro = parseInt(prompt('Digite um numero inteiro.: '));
let i = 0;
while (i < 10) { 
    console.log(`Imprimindo ${i+1} -> ${numeroInteiro}`);
    i++;
}
