let numero = 100;
let contCinquenta = 0;

while (numero >= 100 && contCinquenta < 50) {
    let cPlusPlus = 2;    
    const vetorResult = [];
    while( cPlusPlus <= Math.sqrt(numero) ) {         
        vetorResult.push(numero%cPlusPlus);
        cPlusPlus++;
    }
    const resultado = vetorResult.find(element=>element==0);
    if (resultado===undefined) {
        contCinquenta++;
        console.log(`${contCinquenta} - Numero Primo Encontrado-> ${numero}`);                  
    }
    numero++;    
}