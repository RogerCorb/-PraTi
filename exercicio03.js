const prompt = require("prompt-sync")();

let numberOne   = Number(prompt('Digite o primeiro numero inteiro.: ')); 
let numberTwo   = Number(prompt('Digite o segundo numero inteiro.: ')); 
let numberThree = Number(prompt('Digite o terceiro numero inteiro.: '));
let numberFour  = Number(prompt('Digite o quarto numero inteiro.: ')); 
let soma = 0;

numberOne += 25;
numberTwo = numberTwo * 3;
numberThree = numberThree *0.12;
soma = numberOne + numberTwo + numberThree ; 
numberFour = soma; 
console.log(`O resultado do exercicio é [${soma}]`);