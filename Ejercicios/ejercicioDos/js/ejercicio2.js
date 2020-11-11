'use strict'
let eda;
eda = Number(prompt("Ingrese su edad"));
if(eda >0 && eda <= 10){
    document.write("<h2>Menor de 10 años</h2>");
} else if(eda >10 && eda <= 15){
    document.write("<h2>Preadolescente de 11 a 15 años</h2>");
} else if(eda >15 && eda <=18){
    document.write("<h2>adolescente de 16 a 18 años</h2>");
} else if(eda > 18 && eda <= 50){
    document.write("<h2>adulto de 18 a 50 años</h2>");    
} else if(eda > 50 && eda <= 110){
    document.write("<h2>adulto Mayor de 50 años</h2>");
}else {
    document.write("<h2>Edad no Válida</h2>");
}