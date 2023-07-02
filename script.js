//CALCULADORES
//CALCULAR EL PROCENTAJE DEL INTERES
const calcularPorcentajeInteres = (cuotas) => cuotas * 0.02;

//CALCULAR EL INTERES
const calcularInteres = (monto,porcentajeIntereses) => Math.round(monto * porcentajeIntereses);

//CALCULAR EL PAGO MENSUAL
const calcularPagoMensual = (monto,cuotas) => Math.round(monto/cuotas);

// - - - - - - - -

//GUARDAR LOCAL STORE
const GuardarHistorialLocalStore = () => localStorage.setItem("historial", JSON.stringify(historial));


//REINICIAR TEXTO
const eliminarTexto = (texto) => texto.innerHTML = `<h2 class=${estiloH2}><strong>Se elimino el texto</strong></h2>`;


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
function eliminarHistorial(){

    let tamanioHistorial = historial.length;

    if(tamanioHistorial > 0){
        resultado.innerHTML = `<h2 class=${estiloH2}>El historial se borro con exito</h2>`;
        historial = [];
    }else{
        resultado.innerHTML = `<h2 class=${estiloH2}>No se encontro ningun elemento para borrar</h2>`;
    };

    localStorage.removeItem("historial")
};


//CONTRUCTOR OBJETOS PRESTAMOS
function constructorPrestamo(montoSolicitado, cuotas){
    
    let tamanioHistorial = historial.length;
    
    this.id = tamanioHistorial + 1;
    this.monto = montoSolicitado;
    this.cuotas = cuotas;
    this.interes = calcularInteres(montoSolicitado, calcularPorcentajeInteres(cuotas));
    this.total = this.monto + this.interes;
    this.pagoMensual = calcularPagoMensual(this.total, cuotas);
};


//GENEREADOR HTML
function prestamoHTML(prestamo){
    let resultadoImprimir = `
    <div class="card-prestamo">
        <div><h3 class=${estiloH3}>prestamo: <strong>${prestamo.id}</strong></h3></div>
        <div><p>monto solicitado: ${prestamo.monto}</p></div>
        <div><p>cuotas: ${prestamo.cuotas}</p></div>
        <div><p>interes: ${prestamo.interes}</p></div>
        <div><p>total a pagar: ${prestamo.total}</p></div>
        <div><p>pago mensual: ${prestamo.pagoMensual}</p></div>
    </div>`;
    return resultadoImprimir;
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
    
    //HISTORIAL 
    historial.push(prestamo);
    GuardarHistorialLocalStore();

    resultado.innerHTML = prestamoHTML(prestamo);
    
};
//HISTORIAL
let historial = localStorage.getItem("historial");

historial == undefined ? historial = []:historial = JSON.parse(historial)

let resultado = document.getElementById("resultado");

//ESTILOS
let estiloH3 = "h3";
let estiloH2 = "h2";