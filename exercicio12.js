let numero = 1000;
while (numero <= 1999) {
    if (numero % 11 === 5) {
        console.log(`O numero ${numero} dividido por 11 sobra 5.`);  
        cont++;      
    }
    numero++;
}