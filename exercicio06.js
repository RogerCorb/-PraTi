const prompt = require("prompt-sync")();

const ladoA = parseInt(prompt('Digite a medida do lado A do triangulo.: '));
const ladoB = parseInt(prompt('Digite a medida do lado B do triangulo.: '));
const ladoC = parseInt(prompt('Digite a medida do lado C do triangulo.: '));

const isTriangulo = (ladoA < ladoB + ladoC) && (ladoB < ladoA + ladoC) && (ladoC < ladoA + ladoB);

if ( isTriangulo ) {
    if (ladoA == ladoB && ladoB == ladoC) { 
        console.log('Este é um triângulo Equilátero.');
    } else if (ladoA !== ladoB && ladoB !== ladoC) { 
        console.log('Este é um triângulo Escaleno.');
    } else { 
        console.log('Este é um triângulo Isósceles.');
    }
} else { 
    console.log('Estas medidas informadas não formam um triangulo.');
}