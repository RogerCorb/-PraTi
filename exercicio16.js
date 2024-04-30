let numero = 100;
let contCinquenta = 0;
let achou;

while (numero >= 100 && contCinquenta < 50) {
    let cPlusPlus = 2;    
    let resultado; 
    while( cPlusPlus <= Math.sqrt(numero) ) {         
      resultado = numero%cPlusPlus;
      cPlusPlus++;
      achou = resultado === 0 ? false : true ; 
      if(!achou){ break }      
    }  
    if(achou) { 
        contCinquenta++;
        console.log(`${contCinquenta} - Numero Primo Encontrado-> ${numero}`);        
    }
    numero++;    
}