const prompt = require("prompt-sync")();

const vetor = new Array(4);

let numberOne   = Number(prompt('Digite o primeiro numero inteiro.: ')); //vetor[0]
let numberTwo   = Number(prompt('Digite o segundo numero inteiro.: ')); // vetor[1]
let numberThree = Number(prompt('Digite o terceiro numero inteiro.: ')); // vetor[2]
let numberFour  = Number(prompt('Digite o quarto numero inteiro.: ')); //vetor[3]
let soma = 0;

numberOne += 25;
numberTwo = numberTwo * 3;
numberThree = numberThree *0.12;
soma = numberOne + numberTwo + numberThree ; 
numberFour = soma; 
console.log(`O resultado do exercicio é [${soma}]`);