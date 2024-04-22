const prompt = require("prompt-sync")();

const notaA1 = parseFloat(prompt('Digite a nota da primeira avaliação A1.: '));
const notaA2 = parseFloat(prompt('Digite a nota da segunda avaliação A2.: '));
if (!isNaN(notaA1) && !isNaN(notaA2)) {
    const mediaSemestre = (notaA1 + notaA2) / 2;
    console.log(`A sua média no semestre foi ${mediaSemestre.toFixed(2)}`);
    if (mediaSemestre >= 6) {
        console.log(`PARABÉNS! Voce foi aprovado !`);        
    }
} else { 
    console.log(`Notas digitadas inválidas`);
}