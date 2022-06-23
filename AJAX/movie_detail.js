const main = () => {
    const idPelicula = sessionStorage.getItem("pelicula_id")
    console.log(idPelicula)
}

window.addEventListener("load",main)