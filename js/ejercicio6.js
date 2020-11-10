'use strict';

let sueldoNorma = 0;
let sueldoExtra = 0;
let horas;
let horasExtra;

const valorHora = 400;
const valorExtra = 500;


document.getElementById("valorSalario").style.display="none";

function calcular() {
    document.getElementById("valorSalario").style.display='block';
    document.getElementById("horas").style.display='none';
 horas = Number(document.getElementById("cantidadHora").value);
 salario(horas);    
}

function salario(horas) {
    if(horas <= 40){
        sueldoNorma = horas * valorHora;
        document.getElementById("valorDom").value=sueldoNorma;
        document.getElementById("valorextra").value=0;
        document.getElementById("total").value=sueldoNorma;
    } else{
        horasExtra =horas - 40;
        sueldoNorma = (40 * valorHora);
        sueldoExtra = horasExtra * valorExtra;
        document.getElementById("valorDom").value=sueldoNorma;
        document.getElementById("valorextra").value=horasExtra * valorExtra;
        document.getElementById("total").value=sueldoNorma + sueldoExtra;

    }
    
}




