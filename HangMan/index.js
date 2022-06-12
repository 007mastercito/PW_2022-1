const refranes = [
    "A CABALLO REGALADO NO SE LE MIRA EL DIENTE",
    "AL QUE MADRUGA DIOS LE AYUDA",
    "CAMARON QUE SE DUERME SE LO LLEVA LA CORRIENTE"
]

let refranSeleccionado = ""
let refranOcultado = ""
let errores = 0
let terminado = false
const seleccionarRefran = _ => {
    //Seleccionar
    const indice = Math.floor(Math.random() * (refranes.length))
    refranSeleccionado = refranes[parseInt(indice)]
    console.log(indice)
    //Mostrar
    //const divRefran = document.getElementById("divRefran")
    //divRefran.innerText = refranSeleccionado
}

const ocultarRefran = _ => {

    for(let letra of refranSeleccionado) {
        if (letra == " ") {
            refranOcultado += letra
        } else {
            refranOcultado += "_"
        }
    }

    document.getElementById("divRefran").innerText = refranOcultado
}

const buscarDescubrirCaracter = caracter => {
    let refranTemp = ""
    let encontrado = false
    for (let i in refranSeleccionado) {
        if (refranSeleccionado[i] == caracter) {
            //Se debe descubrir 
            encontrado = true
            refranTemp += refranSeleccionado[i]
        }
        else 
        {
            refranTemp += refranOcultado[i]
        }
    }
    refranOcultado = refranTemp
    document.getElementById("inputLetras").value += caracter
    document.getElementById("divRefran").innerText = refranOcultado 
    return encontrado
}

const onKeyPressed = event => {
    if(terminado) return
    const caracterSeleccionado = event.key
    
    const encontrado = buscarDescubrirCaracter(caracterSeleccionado.toUpperCase())

    if (!encontrado) {
        errores++
        //Modificar la imagen
        const imagen = document.getElementById("imagen")
        imagen.setAttribute("src",`/imagenes/Hangman-${errores}.png`)
        if (errores == 6) {
            //Perdio
            //const mensajePerdedor = document.getElementById("mensajePerdedor")
            //mensajePerdedor.setAttribute("class","alert alert-danger")
            const div = crearDivMensajePerdedor()
            const divPadre = document.getElementById("divMensajes")
            divPadre.appendChild(div)
            terminado = true
        }
    }
    else {
        if (refranOcultado == refranSeleccionado) {
            //Ganó
            //const mensajeGanador = document.getElementById("mensajeGanador")
            //mensajeGanador.setAttribute("class","alert alert-success")
            const div = crearDivMensajeGanador()
            const divPadre = document.getElementById("divMensajes")
            divPadre.appendChild(div)
            terminado = true
        }
    }
}

const crearDivMensajePerdedor = _ => {
    const div = document.createElement("div")
    div.setAttribute("class","alert alert-danger")
    div.innerText = "Perdió"
    return div
}
const crearDivMensajeGanador = _ => {
    const div = document.createElement("div")
    div.setAttribute("class","alert alert-success")
    div.innerText = "Ganó"
    return div
}
const main = _ => {
    seleccionarRefran()
    ocultarRefran()
    window.addEventListener("keypress",onKeyPressed)
}
window.addEventListener("load", main)