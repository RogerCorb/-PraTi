const prompt = require("prompt-sync")();

const vetorDecimal = new Array();
let i = 1;
let cont = 0;
let somaDecimais = 0;

while (i === 1) {
    vetorDecimal[cont] = Number(prompt('Digite um numero decimal ou (0) para sair.: '));
    if (isNaN(vetorDecimal[cont])) {
        console.log(`Por favor digite um decimal com (.)ex.: 0.35`);

    } else {
        if (Number(vetorDecimal[cont]) === 0) {
            i = 0;
        } else {
            cont++;
        }
    }
}
while (i < vetorDecimal.length) {
    somaDecimais += vetorDecimal[i];
    i++;
}
console.log(`A média do numeros digitados foi ${(somaDecimais / cont).toFixed(3)}`)