const prompt = require("prompt-sync")();

const matriz = new Array();
let index = 1;
let somaPeso = 0;
let nota = 0;
let peso = 0;
let multiplica = 0; 

while (index === 1) {
    const elemento = [];
    const numeroDecimal = Number(prompt(`Digite um número decimal: `));
    const pesoDigitado = Number(prompt('Digite o peso para este numero: '));

    index = parseInt(prompt('Digite (0) para terminar ou QQ tecla para continuar.: '));
    if (isNaN(numeroDecimal) || isNaN(pesoDigitado)) {
        console.log(`Por favor digite um decimal com (.)ex.: 0.35`);
    } else {
        elemento.push(numeroDecimal);
        elemento.push(pesoDigitado);
        matriz.push(elemento);       
    }    
    if (index !== 0 || isNaN(index)) {
        index = 1;        
    }
}

while (index < matriz.length) {
    nota = matriz[index][0];
    peso = matriz[index][1];   
    somaPeso += peso;    
    multiplica += nota*peso;    
    index++;
}
console.log(`A soma dos produtos é ${multiplica.toFixed(2)} e a soma dos pesos é ${somaPeso}`);
console.log(`A média ponderada para os numeros digitados é ${(multiplica/somaPeso).toFixed(2)}`);