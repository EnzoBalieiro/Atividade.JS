//DECLARAR AS VARIÁVEIS

let temperatura;
let convercao;
let resultado;

function conversor(){
    //Verificar se é uma conversão em Fahreint
    convercao = document.querySelector('#slcconvercao').value;
    
    //IF PARA FAHREINT
    if (convercao == '°F') {
        Fahrenheit();
    }
    
    //IF PARA CELSIUS
    if (convercao == '°C') {
        Celsius();
    }
    
}

function Fahrenheit(){

    temperatura = parseFloat(document.querySelector('#TXTtemperatura').value);
    resultado = temperatura * 1.8 + 32;
    document.querySelector('#lblResesultado').innerHTML = resultado;

}

function Celsius(){

    temperatura = parseFloat(document.querySelector('#TXTtemperatura').value);
    resultado = (temperatura - 32) / 1.8;
    document.querySelector('#lblResesultado').innerHTML = resultado;

}