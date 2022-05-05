const refranes = [
    "A CABALLO REGALADO NO SE LE MIRA EL DIENTE",
    "AL QUE MADRUGA DIOS LE AYUDA",
    "CAMARON QUE SE DUERME SE LO LLEVA LA CORRIENTE"
]

const main = _ => {
    const indice = Math.floor(Math.random() * (refranes.length))
    const refran = refranes[parseInt(indice)]
    console.log(indice)
    const divRefran = document.getElementById("divRefran")
    divRefran.innerText = refran

}
window.addEventListener("load", main)