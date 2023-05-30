
console.log("Bienvenido/a")

let monto;
let cuotas;
let pago_total;

//CONSTRUCTOR
function prestamo(prestamoSolicitado, intereses){

    this.prestamo = prestamoSolicitado
    this.interes = intereses
    this.total = intereses + prestamoSolicitado

}

//ELIMINAR ARRAY
function eliminar(array){

    array = []

}


//CACLULA EL PORCENTAJE DE INTERES QUE SE APLICARA
function calcular_interes_porcentaje(cuotas){

    let total_intereses = cuotas * 0.02
    return total_intereses

}

//CALCULA LOS INTERESES
function calcular_interes(monto, calcular_interes_porcentaje){

    let interes = monto * calcular_interes_porcentaje(cuotas)
    return interes

}

//CALCULA EL PAGOPOR MES
function calcularPagoMes(pago_total, cuotas){

    let pago_mes = pago_total/cuotas
    return pago_mes

}

while ( monto != "FIN" ) {

    //MONTO
    monto = prompt("Ingrese el monto que desee pedir o FIN para finalizar");

    if( monto == "FIN"){
        
        console.log("Usted Termino");
        break;

    }else if( isNaN(monto) ){

        alert("Por favor elija un numero valido")
        continue;

    };
    monto = parseInt(monto)
    

    //CANTIDAD DE CUOTAS
    while( isNaN(cuotas) ){

        cuotas = prompt("Elija la cantidad de cuotas que desee (maximo 18)")
        

        if( cuotas > 18 ){

            cuotas = NaN
            alert("Porfavor coloque un numero menor a 19")
            continue;

        };

        cuotas = parseInt(cuotas)

    };


    //TOTAL A PAGAR
    let interes = calcular_interes(monto, calcular_interes_porcentaje)
    pago_total = monto + interes;

    let objPrestamo = new prestamo(monto,interes)

    //HISTORIAL
    let historial = []
    historial.push(objPrestamo)
    console.log("Si desea eliminar el historial escriba: eliminar(historial)")
        

   

    
    //IMPRIMIENDO LOS DATOS EN LA CONSOLA
    console.log("Usted solicito: ",monto);
    console.log("Cantidad de cuotas: ",cuotas);
    console.log("Intereses: ", calcular_interes(monto, calcular_interes_porcentaje));
    console.log("Total a pagar: ",pago_total);
    console.log("Debera pagar por mes: ",calcularPagoMes(pago_total, cuotas));
};
