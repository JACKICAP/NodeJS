const modulo=require("./calcularIMC")  // Hace el llamado a la funcion exportado

const pesoPrueba=97;
const alturaPrueba=1.71;

//VERSION 1.00
console.log("IMC Versión 1.0");
const instructor=modulo.caclularIMC_1_0(pesoPrueba,alturaPrueba);
console.log(`el IMC V1.0 es: ${instructor.toFixed(2)}`);

//VERSION 2.0
console.log("IMC Versión 2.0");
const instructor2=modulo.calcularIMC_2_0(pesoPrueba,alturaPrueba);
console.log(`El IMC V2 es: ${instructor2.toFixed(2)}`);

//Tienda 
console.log("\n");
modulo.Tienda("boleta");
console.log("\n");
modulo.Tienda("factura");
console.log("\n");

//VERSION 3.0
console.log("\n");
console.log("IMC Versión 3.0");
modulo.calcularIMC_3_0(pesoPrueba,alturaPrueba);
