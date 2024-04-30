const prompt = require("prompt-sync")();

let i = 0;
let tipoNumero = "";
while (i === 0) { 
    const numeroInteiro = parseInt(prompt('Digite um numero inteiro.: '));

    if (numeroInteiro > 0 && numeroInteiro!==null && !isNaN(numeroInteiro)) {

        tipoNumero = numeroInteiro%2===0 ? 'par' : 'impar' ;      
        console.log(`O numero ${numeroInteiro} é ${tipoNumero} .`);        
    } else {
        i = 1;
        console.log('Saindo do programa ...');
    }
    console.log('Digite QQ tecla para sair, para continuar digite um proximo número');        
}
