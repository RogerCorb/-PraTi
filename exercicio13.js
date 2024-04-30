const prompt = require("prompt-sync")();

const numberOne = parseInt(prompt('Digite o primeiro numero inteiro.: '));
const numberTwo  = parseInt(prompt('Digite o segundo numero inteiro.: '));
const numberThree = parseInt(prompt('Digite o terceiro numero inteiro.: '));
const numberFour  = parseInt(prompt('Digite o quarto numero inteiro.: '));
const numberFive  = parseInt(prompt('Digite o quinto numero inteiro.: '));

for (let i = 0; i < 5; i++) {
    if(i == 0) { 
        console.log(`**** Tabuada de ${ numberOne } ****`);
        for (let j = 1; j <= numberOne; j++) {
            console.log(`${j} x ${numberOne} = ${ j*numberOne }`);
        }
    } else if(i == 1) { 
        console.log(`**** Tabuada de ${ numberTwo } ****`);
        for (let j = 1; j <= numberTwo; j++) {
            console.log(`${j} x ${ numberTwo } = ${ j*numberTwo }`);
        }
    } else if(i == 2) { 
        console.log(`**** Tabuada de ${ numberThree } ****`);
        for (let j = 1; j <= numberThree; j++) {
            console.log(`${j} x ${ numberThree } = ${ j*numberThree }`);
        }
    } else if(i == 3) { 
        console.log(`**** Tabuada de ${ numberFour } ****`);
        for (let j = 1; j <= numberFour; j++) {
            console.log(`${j} x ${numberFour} = ${ j*numberFour }`);
        }
    } else if(i == 4) { 
        console.log(`**** Tabuada de ${ numberFive } ****`);
        for (let j = 1; j <= numberFive; j++) {
            console.log(`${j} x ${numberFive} = ${ j*numberFive }`);
        }
    } 
}