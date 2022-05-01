//NO ES RECOMENDABLE USAR VAR -> MEJOR USAR LET y definirlas dentro de una función
var numero = 10;
var nombre = "edgar"
var esJueves = true;
var decimal = 10.4
//El uso del ";" es OPCIONAL al terminar una sentencia (a menos que se quiera definir 2 sentencias en una misma linea)

var numeroString = "10"
numero = parseInt(numeroString)

function f1() {
    let numero2 = 10
    let nombre2 = "Edgar"
    let esMiercoles = true;
    let decimal2 = 10.4;
    //Se usa "const" para constantes (son de mejor performance)
    const diaSemana = "Jueves"
    const dias = ["Lunes",17,true]
    

    //OBJETOS JAVASCRIPT
    const persona = {
        nombre : "Edgard",
        edad : 27
    }
    console.log(persona.nombre)

    //Aunque las variables (persona [diccionario] y dias [arreglo]) sean constantes
    //Se puede modificar su contenido
    dias[0] = "Martes"
}
// OBJETOS TIPO FUNCIÓN

/*PRIORIZA esta sintaxis para declarar funciones ->*/const f2 = function()
{
    console.log("F2!")
}

function f3(numero,f) {
    console.log("F3!:" +  numero)
    f()
}

//NULL
let variable = null
variable = 10

//undefined
let variable2 = undefined
let variable3;




//Llamada a la función 
f3(236,f2)

 