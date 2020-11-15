
/*
Elaborar un algoritmo donde el usuario ingrese la placa de un bus, el número de pasajeros transportados 
y la ruta donde prestó el servicio (A o B) 
el computador le debe mostrar el dinero que recolectó sabiendo que 
en la ruta A el pasaje es a $1.200 y en la B a $1.000.
*/

let placaBus;
let numPasajeros;
let ruta="";
let liquidar; 
let rutaA="A"


document.getElementById("recibo").style.display="none"; 
function calcular() {
    document.getElementById("recibo").style.display="block"; 
    document.getElementById("entrada").style.display="none"; 
    
    placaBus = document.getElementById("placa").value;
    numPasajeros = Number(document.getElementById("pasajeros").value);
    ruta = document.getElementById("ruta").value;
    liquidar = cuadreCuenta(numPasajeros,ruta.toUpperCase()); 
    
    document.getElementById("numeroPlaca").value=placaBus;
    document.getElementById("ingresoTotal").value=liquidar;
      
}

function cuadreCuenta(p1,p2) {
    if (p2 == rutaA) {
        return p1 * 1200;        
    }
    else
    {
        return p1 * 1000;
    }
   
}
