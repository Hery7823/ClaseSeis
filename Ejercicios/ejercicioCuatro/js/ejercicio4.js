let num_placa1;
let num_pasajeros1;
let val_pasaje1;
let num_placa2;
let num_pasajeros2;
let val_pasaje2;
let liquidacion1;
let liquidacion2;


num_placa1 = prompt("Ingrese Numero de la placa del bus # 1:");
num_pasajeros1 = Number(prompt("Ingrese Numero de pasajeros del bus: " + num_placa1));
val_pasaje1 = Number(prompt("Ingrese valor del pasaje del bus : " + num_placa1));
num_placa2 = prompt("Ingrese Numero de la placa del bus # 2:");
num_pasajeros2 = Number(prompt("Ingrese Numero de pasajeros del bus: " + num_placa2));
val_pasaje2 = Number(prompt("Ingrese valor del pasaje del bus : " + num_placa2));


liquidacion1 = num_pasajeros1 * val_pasaje1;
liquidacion2 = num_pasajeros2 * val_pasaje2;



if(liquidacion1 > liquidacion2){
    document.write(`<h2>Numero de placa que Mayor dinero obtuvo: ${num_placa1}</h2>`);

} else {
    document.write(`<h2>Numero de placa que Mayor dinero obtuvo: ${num_placa2}</h2>`);  
}



