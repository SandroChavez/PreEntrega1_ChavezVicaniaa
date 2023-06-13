//ESTILOS
let estiloH3 = "h3";
let estiloH2 = "h2";



//CALCULADORES
//CALCULAR EL PROCENTAJE DEL INTERES
function calcularPorcentajeInteres(cuotas){
    let porcentajeInteres = cuotas * 0.02;
    return porcentajeInteres;
};
//CALCULAR EL INTERES
function calcularInteres(monto, porcentajeInteres){
    let interes = monto * porcentajeInteres;
    return interes;
};
//CALCULAR EL PAGO MENSUAL
function calcularPagoMensual(monto, cuotas){
    let pagoMensual = monto/cuotas;
    pagoMensual = Math.round(pagoMensual)
    return pagoMensual;
};


//CONTRUCTOR OBJETOS PRESTAMOS
function constructorPrestamo(montoSolicitado, cuotas){
    
    let tamanioHistorial = historial.length
    
    this.id = tamanioHistorial + 1
    this.monto = montoSolicitado
    this.cuotas = cuotas
    this.interes = calcularInteres(montoSolicitado, calcularPorcentajeInteres(cuotas))
    this.total = this.monto + this.interes
    this.pagoMensual = calcularPagoMensual(this.total, cuotas)
};


//GENEREADOR HTML
function prestamoHTML(prestamo){
    let resultadoImprimir = `
    <div class="card-prestamo">
        <h3 class=${estiloH3}>prestamo: <strong>${prestamo.id}</strong></h3>
        <div>monto solicitado: ${prestamo.monto}</div>
        <div>cuotas: ${prestamo.cuotas}</div>
        <div>interes: ${prestamo.interes}</div>
        <div>total a pagar: ${prestamo.total}</div>
        <div>pago mensual: ${prestamo.pagoMensual}</div>
    </div>`;
    return resultadoImprimir;
};

//MOSTRAR HISTORIAL
function mostrarHistorial (){

    let tamanioHistorial = historial.length;
    let prestamoHTMLcompleto;

    if(tamanioHistorial == 0){
        resultado.innerHTML = `<h2 class=${estiloH2}>El historial esta vacio</h2>`;
        return;
    };
    prestamoHTMLcompleto = `<h2 class=${estiloH2}>Historial</h2>`;
    

    for(elementoHistorial of historial){
        prestamoHTMLcompleto += prestamoHTML(elementoHistorial);
    };
    resultado.innerHTML = prestamoHTMLcompleto;
};

//ELIMINAR HISTORAL
function eliminarHistorial(texto){

    let tamanioHistorial = historial.length;

    if(tamanioHistorial > 0){
        resultado.innerHTML = `<h2 class=${estiloH2}>El historial se borro con exito</h2>`;
        historial = [];
        return;
    }else{
        texto.innerHTML = `<h2 class=${estiloH2}>No se encontro ningun elemento para borrar</h2>`;
    };
};

//REINICIAR TEXTO
function eliminarTexto(texto){
    texto.innerHTML = `<h2 class=${estiloH2}><strong>Se elimino el texto</h2>`
};

//CREAR UN PRESTAMO
function crearPrestamo(){
    
    let prestamo;
    let monto = document.getElementById("monto");
    let cuotas = document.getElementById("cuotas");
    
    monto = parseFloat(monto.value);
    cuotas = parseFloat(cuotas.value);
    
    //comprueba si el monto es valido
    if( isNaN(monto) || monto <= 0){
        resultado.innerHTML = `<h2 class=${estiloH2}><strong>Por favor elija un monto valido</strong></h2>`;
        return;
    };

    //comprueba si las cuoatas son validas
    if(isNaN(cuotas) || cuotas > 12 || cuotas <= 0){
        resultado.innerHTML = `<h2 class=${estiloH2}><strong>Por favor elija un numero de cuotas valido(max. 12)</strong></h2>`;
        return;
    };


    prestamo = new constructorPrestamo(monto, cuotas);
    
    historial.push(prestamo);

    resultado.innerHTML = prestamoHTML(prestamo);
    
};
let historial = [];

let resultado = document.getElementById("resultado");