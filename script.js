
//CALCULADORES
//CALCULAR EL PROCENTAJE DEL INTERES
function calcularPorcentajeInteres(cuotas){
    let porcentajeInteres = cuotas * 0.02
    return porcentajeInteres
};
//CALCULAR EL INTERES
function calcularInteres(monto, porcentajeInteres){
    let interes = monto * porcentajeInteres
    return interes
};
//CALCULAR EL PAGO MENSUAL
function calcularPagoMensual(monto, cuotas){
    let pagoMensual = monto/cuotas
    return pagoMensual
};


//CONTRUCTOR OBJETOS PRESTAMOS
function constructorPrestamo(montoSolicitado, cuotas){
    this.monto = montoSolicitado
    this.cuotas = cuotas
    this.interes = calcularInteres(montoSolicitado, calcularPorcentajeInteres(cuotas))
    this.total = this.monto + this.interes
    this.pagoMensual = calcularPagoMensual(this.total, cuotas)
};

//CREAR UN PRESTAMO
function crearPrestamo(){
    
    let monto;
    let cuotas;

    do{
        monto = parseFloat(prompt("Coloque el monto que quiera pedir"));

        if( isNaN(monto) || monto <= 0){
            alert("Por favor elija un numero valido");
        };
    }while( isNaN(monto) || monto <= 0);
    do{
        cuotas = parseInt(prompt("Coloque en cuantas cuotas quieres pagar /maximo 12 cuotas/"));

        if(isNaN(cuotas) || cuotas > 12 || cuotas <= 0){
            alert("Por favor elija un numero valido")
        };
    }while(isNaN(cuotas) || cuotas > 12 || cuotas <= 0);


    let prestamo = new constructorPrestamo(monto, cuotas);
    
    historial.push(prestamo);

    console.log(".")

    console.log("Usted solicito: ", prestamo.monto);
    console.log("Cantidad de cuotas: ", prestamo.cuotas);
    console.log("Intereses: ", prestamo.interes);
    console.log("Total a pagar: ", prestamo.total);
    console.log("Debera pagar por mes: ", prestamo.pagoMensual);

    console.log(".")

    console.log("Si desea crear otro prestamo escriba: crearPrestamo()")
    console.log("Si desea revisar su historial de prestamos escriba: mostrarHistorial(historial)")
};

//MOSTRAR HISTORIAL
function mostrarHistorial (){

    let tamanioHistorial = historial.length;

    for(i = 0; i < tamanioHistorial; i++ ){
        console.log(".")
        console.log("Prestamo ", i + 1)
        console.log("Usted solicito: ", historial[i].monto);
        console.log("Cantidad de cuotas: ", historial[i].cuotas);
        console.log("Intereses: ", historial[i].interes);
        console.log("Total a pagar: ", historial[i].total);
        console.log("Debera pagar por mes: ", historial[i].pagoMensual);
        console.log(".")
    };

};

function eliminarHistorial(){
    
    let tamanioHistorial = historial.length

    if(tamanioHistorial > 0){
        console.log("El historial se borro con exito")
        historial = []
    }else{
        console.log("No se encontro ningun elemento para borrar")
    }  
}

let historial = []


console.log("Bienvenido/a al sistema")
console.log("Si desea solicitar su prestamo escriba: crearPrestamo()")