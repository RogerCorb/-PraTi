const prompt = require("prompt-sync")();

const precoDaPromocao = 0.25;
const precoNormal = 0.30;
const quantidadeComprada = parseInt(prompt('Digite quantas maças vc vai comprar.: '));

let totalDaCompra=0;

if (quantidadeComprada < 12) {
    totalDaCompra = quantidadeComprada*precoNormal;
} else {
    totalDaCompra = quantidadeComprada*precoDaPromocao;
}
console.log(`O valor total da sua compra será de.: R$ ${totalDaCompra.toFixed(2)}`);