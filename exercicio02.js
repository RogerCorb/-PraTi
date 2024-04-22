const prompt = require("prompt-sync")();
const eleitoresMunicipio = prompt('Digite o numero de eleitores do municipio.: ');
const votosEmBranco = prompt('Digite a quantidade de votos em branco.: ');
const votosNulos = prompt('Digite a quantidade de votos nulos.: ');
const votosValidos = prompt('Digite a quantidade de votos validos.: ');

if ( votosValidos > eleitoresMunicipio ) {
    console.log('Votos válidos não pode ser maior que eleitores do município'); 
} else { 
    console.log(`O percentual de votos em branco foi de.: ${votosEmBranco/eleitoresMunicipio*100}%`);
    console.log(`O percentual de votos nulos foi de.: ${votosNulos/eleitoresMunicipio*100}%`);
    console.log(`O percentual de votos válidos foi de.: ${votosValidos/eleitoresMunicipio*100}%`);
}



