const prompt = require("prompt-sync")();

let i = 1;
let cont = 0;
let somaDecimais = 0;

while (i === 1) {
    let numberDecimal = Number(prompt('Digite um numero decimal ou (0) para sair.: '));
    if (isNaN(numberDecimal)) {
        console.log(`Por favor digite um decimal com (.)ex.: 0.35`);

    } else {
        if (numberDecimal === 0) {
            i = 0;
        } else {
            cont++;
            somaDecimais += numberDecimal;
        }        
    }
}
if ( somaDecimais != 0 ) {   
  console.log(`A média do numeros digitados foi ${(somaDecimais / cont).toFixed(2)}`);
} else { 
  console.log('Encerrando o programa !');
}