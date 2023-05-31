
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
    <li>
        <h3>prestamo: <strong>${prestamo.id}</strong></h3>
        <p>monto solicitado: ${prestamo.monto}</p>
        <p>cuotas: ${prestamo.cuotas}</p>
        <p>interes: ${prestamo.interes}</p>
        <p>total a pagar: ${prestamo.total}</p>
        <p>pago mensual: ${prestamo.pagoMensual}</p>
    </li>`;
    return resultadoImprimir;
};

//MOSTRAR HISTORIAL
function mostrarHistorial (){

    let tamanioHistorial = historial.length;
    let prestamoHTMLcompleto

    if(tamanioHistorial == 0){
        resultado.innerHTML = "<h3>El historial esta vacio</h3>"
        return;
    };
    prestamoHTMLcompleto = "<h2>Historial</h2>";
    

    for(i = 0; i < tamanioHistorial; i++ ){
        prestamoHTMLcompleto += prestamoHTML(historial[i]);
    };
    resultado.innerHTML = prestamoHTMLcompleto;
};

//ELIMINAR HISTORAL
function eliminarHistorial(){

    let tamanioHistorial = historial.length;

    if(tamanioHistorial > 0){
        resultado.innerHTML = "<h3>El historial se borro con exito</h3>";
        historial = [];
        return;
    }else{
        resultado.innerHTML = "<h3>No se encontro ningun elemento para borrar</h3>";
    };
};

//REINICIAR TEXTO
function eliminarTexto(texto){
    texto.innerHTML = ``
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
        resultado.innerHTML = `<p>Por favor elija un monto valido</p>`;
        return;
    };

    //comprueba si las cuoatas son validas
    if(isNaN(cuotas) || cuotas > 12 || cuotas <= 0){
        resultado.innerHTML = `<p>Por favor elija un numero valido</p>`;
        return;
    };


    prestamo = new constructorPrestamo(monto, cuotas);
    
    historial.push(prestamo);

    resultado.innerHTML = prestamoHTML(prestamo);
    
};

let historial = [];

let resultado = document.getElementById("resultado");