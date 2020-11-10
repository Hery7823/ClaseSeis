'use strict'

let nombreHermano1;
let nombreHermano2;
let edadHermano1;
let edadHermano2; 

nombreHermano1 = prompt("Ingrese el nombre del Primer hermano");
edadHermano1 = Number(prompt("Ingrese la edad de "+ nombreHermano1));
nombreHermano2 = prompt("Ingrese el nombre del Segundo hermano");
edadHermano2 = Number(prompt("Ingrese la edad de " + nombreHermano2));

if(edadHermano1 > edadHermano2){
    document.write(`<h3 id='fumi'>${nombreHermano1}</h3>` + "<h3> Es el hermano Mayor</h3>");
   } else {
    document.write(`<h3 id='fumi'>${nombreHermano2}</h3>` + "<h3> Es el hermano Mayor</h3");
   }
