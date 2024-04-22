const prompt = require("prompt-sync")();
const temperatureCelsius = prompt('Digite em ºC a temperatura que deseja converter ..: ');
const showTemperature = (parseFloat(temperatureCelsius)*9/5+32).toFixed(2);
const messageError = 'Digite um numero decimal válido.:';
const messageFarenheit = `${temperatureCelsius} °C equivale a ${showTemperature} ºF`;
isNaN(temperatureCelsius) ? console.log(messageError) : console.log(messageFarenheit);
