const prompt = require("prompt-sync")();

const matriz = new Array();

matriz[0] = [1, "Sul"];
matriz[1] = [2, "Norte"];
matriz[2] = [3, "leste"];
matriz[3] = [4, "Oeste"];
matriz[4] = [5, 6, "Nordeste"];
matriz[5] = [7, 8, 9, "Sudeste"];
matriz[6] = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, "Centro-Oeste"];
matriz[7] = [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, "Nordeste"];

const codigoProduto = parseInt(prompt('Digite o codigo de Origem.: '));
let index;
let regiaoEncontrada = '';
let achou = false;

if (codigoProduto > 20 && codigoProduto < 25 || codigoProduto > 50) {
    console.log('Fora dos Intervalos, Produto Importado');

} else {

    for (const vetorIterator of matriz) {
        if (achou) {
            break;
        }
        index = vetorIterator.find(element=>element===codigoProduto) 
        if (index) {
            achou = true; 
            regiaoEncontrada = vetorIterator[vetorIterator.length-1];
        } 
    }   
    console.log(regiaoEncontrada);
}