let numeroIngresado = 0;
let numeroOperando = 0;
const botonDigitalOnClick = function(digito) {
    //Obteniendo una referencia al input (elemento HTML)
    const inputNumeros = document.getElementById("txt_numeros")

    if (numeroIngresado == 0)
    {
        inputNumeros.value = digito
    } 
    else {
        inputNumeros.value += digito 
    }
    numeroIngresado = parseInt(inputNumeros.value)
}

const botonOperacionOnClick = function(tipoOperacion){
    const inputNumeros = document.getElementById("txt_numeros")
    if (tipoOperacion == "C") {
        //BORRAR
        inputNumeros.value = "0"
        numeroIngresado = 0
    }
    else if (tipoOperacion == "=") {
        //IGUAL
        const resultado = numeroOperando + numeroIngresado
        inputNumeros.value = resultado
        numeroIngresado = 0
        numeroOperando = resultado
    }
    else if (tipoOperacion == "+") {
        //SUMAR
        numeroOperando = numeroIngresado
        numeroIngresado = 0
    }
}