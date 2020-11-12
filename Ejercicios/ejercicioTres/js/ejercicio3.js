let nombre1;
let salarioBruto1;
let deducion1;
let bonificacion1;
let nombre2;
let salarioBruto2;
let deducion2;
let bonificacion2;
let salarioNeto1;
let salarioNeto2;

nombre1 = prompt("Ingrese nombres del primer empleado:");
salarioBruto1 = parseInt(prompt("Igrese salario bruto de "+nombre1));
deducion1 = parseInt(prompt("Igrese las deduciones de "+nombre1));
bonificacion1 = parseInt(prompt("Igrese las bonificaciones de "+nombre1));
nombre2 = prompt("Ingrese nombres del segundo empleado:");
salarioBruto2 = parseInt(prompt("Igrese salario bruto de "+nombre2));
deducion2 = parseInt(prompt("Igrese las deduciones de "+nombre2));
bonificacion2 = parseInt(prompt("Igrese las bonificaciones de "+nombre2));

salarioNeto1 = (salarioBruto1 + bonificacion1) - (deducion1);
salarioNeto2 = (salarioBruto2 + bonificacion2) - (deducion2);

if(salarioNeto1 > salarioNeto2){
    document.write(`<h2>El nombre del Mayor salario neto lo obtuvo: ${nombre1}</h2>`);
} else {
    document.write(`<h2>El nombre del Mayor salario neto lo obtuvo: ${nombre2}</h2>`);  
}