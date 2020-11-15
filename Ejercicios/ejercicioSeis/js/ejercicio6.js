/*Crear un algoritmo que le permita al usuario ingresar el tipo de trabajador (FIJO o TEMPORAL) 
y con base en esto pueda imprimir el nombre y el salario neto, sabiendo que si es FIJO debe leer 
el nombre, el número de horas trabajadas, el salario básico hora, el total de deducciones 
y el total de bonificaciones 
y si es TEMPORAL solo debe leer el nombre y el número de horas trabajadas; 
estos trabajadores tienen un salario básico hora fijo de $6.000 y no tienen deducciones ni bonificaciones.
*/

let trabajador="";
let nombreTrabajador ="si";
let salarioNeto;
let numeroHorasTrababadas;
const salarioBasicoHora=6000;
let totalDeduciones;
let totalBonificaciones;
let tipoTrabajador = "";
let trabajadorTemporal = "F";
let salarioBruto=0;
let valorHora;

document.getElementById("fijo").style.display="none"; 
document.getElementById("tempo").style.display="none";
//trabajador = documendocument.getElementById("recibo").style.display="nonet.getElementById("tip1").value;
//nombreTrabajador = document.getElementById("trabajador").value; 
//numeroHorasTrababadas = parseFloat(document.getElementById("hora-trabajada").value);  
//totalDeduciones = Number(document.getElementById("deducciones").value);
//totalBonificaciones = Number(document.getElementById("bonificacion").value); 

function consultar() {
    tipoTrabajador=document.getElementById("tip1").value;
			tipoDeFijoTempo(tipoTrabajador.toUpperCase());
		//	document.getElementById("entrada").style.display="none"; 
    //document.getElementById("rec 
    
    
    //document.getElementById("tip2").value=tipoTrabajador;
    //tipoDeFijoTempo(tipoTrabajador.toUpperCase());
    nombreTrabajador = document.getElementById("trabajador").value;
    document.getElementById("trabajador2").value=nombreTrabajador;
    numeroHorasTrababadas = Number(document.getElementById("hora1").value);
    valorHora = Number(document.getElementById("hora2").value);
	document.getElementById("neto1").value=valorHora;		
    //totalDeduciones = Number(document.getElementById("deducciones").value);
    //totalBonificaciones = Number(document.getElementById("bonificacion").value);
    //document.getElementById("nombre-trabajador").value=nombreTrabajador;
    //document.getElementById("horas-trabajadas").value=numeroHorasTrababadas * salarioBasicoHora;
    //salarioBruto= calcular1();
    //document.getElementById("bruto1").value;
    
    //salarioNeto = (salarioBruto - totalDeduciones) + totalBonificaciones;
  
   
    //salarioNeto= salarioBruto(numeroHorasTrababadas);
    
    

    //document.getElementById("entrada").style.display="none"; 
    
    //placaBus = document.getElementById("placa").value;
    //numPasajeros = Number(document.getElementById("pasajeros").value);
    //ruta = document.getElementById("ruta").value;
    //liquidar = cuadreCuenta(numPasajeros,ruta.toUpperCase()); 
    
    //document.getElementById("numeroPlaca").value=placaBus;
    //document.getElementById("ingresoTotal").value=liquidar;  
    return 1;    
}


function tipoDeFijoTempo(p1) {
    if (p1 == "F") {
							document.getElementById("entrada").style.display="none";
							document.getElementById("tempo").style.display="none";
        document.getElementById("fijo").style.display="block"; 
        return 1;    
    }else{
        return 2;
    }
    
}
/*
function consultar1() {
     
    document.getElementById("neto1").value=valorHora;
			return 0;
    
}*/




