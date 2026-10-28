function caclularIMC(peso,altura)
{
    const imc=peso/(altura*altura);
    return imc;
}

//Implementación de la función calcularIMC v2
function caclularIMCV2(peso,altura)
{
    if(peso===undefined || altura===undefined)
        {
            console.log("Error, es obligatorio el peso y la altura");
            return;
        }

    if(typeof peso!=='number' || typeof altura !=='number')
        {
            console.log("Error, los valores para peso y altura deben ser numericos");
        }
    const imc=peso/(altura*altura);
    return imc;
}

//Implementación del procedimiento calcularIMC v3
function caclularIMCV3(peso,altura)
{
    if(peso===undefined || altura===undefined)
        {
            console.log("Error, es obligatorio el peso y la altura");
            return;
        }

    if(typeof peso!=='number' || typeof altura !=='number')
        {
            console.log("Error, los valores para peso y altura deben ser numericos");
        }
    const imc=peso/(altura*altura);
    console.log(`El IMC V3 es: ${imc.toFixed(2)}`);

    clasificadorIMC(imc);
}

function clasificadorIMC(imc)
{
    var clasificacion="";
    switch(true)
    {
        case imc<18.5:
            clasificacion="Bajo peso";
            break;

        case imc>=18.5 && imc<=24.9:
            clasificacion="Peso Ideal";
            break;

        case imc>=25 && imc<=29.9:
            clasificacion="Sobrepeso";
            break;
        
        case imc>=30:
            clasificacion="Obesidad";
            break;

        default:
            clasificacion = "Valor no válido";
            break;
    }
    console.log(clasificacion);
}



















//Funciones para Tarea de tienda

function Tienda(tipoComprobante) {
    if (tipoComprobante === "boleta") {
        const unidadesBoleta = 100;
        const costoUnidad = 0.10;
        const totalBoleta = unidadesBoleta * costoUnidad; 

        console.log("------------Boleta-------------");
        console.log("-------------------------------");
        console.log("Tornillos ----> 100 und s/0.10");
        console.log("Monto a cancelar: S/", totalBoleta.toFixed(2));
        
    } else {
        const montototal = 100; 
        
        const facturaf = montototal / 1.18; 
        const igv = montototal - facturaf;  

        console.log("-----------Factura-------------");
        console.log("------------------------------");
        console.log("Tornillos ----> 1000 und s/0.10");
        console.log("Subtotal ----------> S/", facturaf.toFixed(2));
        console.log("IGV (18%) ---------> S/", igv.toFixed(2));
        console.log("Monto a pagar ----> S/", montototal.toFixed(2));
    }
}










//Exportar funcionalidades del archivo calcular IMC.js (modalidad antigua)
//module.exports.caclularIMC=caclularIMC;
//module.exports.caclularIMCV2=caclularIMCV2;
//module.exports.Tienda=Tienda;
//module.exports.caclularIMCV3=caclularIMCV3;

//Nueva forma de exportar Funcionalidades
module.exports = 
{
    caclularIMC_1_0:caclularIMC,
    calcularIMC_2_0:caclularIMCV2,
    calcularIMC_3_0:caclularIMCV3,
    Tienda:Tienda
}