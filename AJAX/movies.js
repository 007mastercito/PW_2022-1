const crearFilaPeliculas = pelicula => {
    //Crear tr y tds hijos con data de una pela
    const tr = document.createElement("tr")
    const tdId = document.createElement("td")
    const tdTitulo = document.createElement("td")
    const tdFechaLanzamiento = document.createElement("td")
    const tdRecaudacion = document.createElement("td")
    const tdFase = document.createElement("td")
    const tdPostCreditos = document.createElement("td")
    const tdAcciones = document.createElement("td")

    tdId.innerText = pelicula.id
    tdTitulo.innerText = pelicula.title
    tdFechaLanzamiento.innerText = pelicula.release_date

    const recaudacionFormateada = parseInt(pelicula.box_office).toLocaleString()
    tdRecaudacion.innerText = recaudacionFormateada


    tdFase.innerText = pelicula.phase
    tdPostCreditos.innerText = pelicula.post_credit_scenes

    
    const a = document.createElement("a")
    a.setAttribute("href","#")
    a.innerText = "Seleccionar"
    tdAcciones.appendChild(a)
    
    tr.appendChild(tdId)
    tr.appendChild(tdTitulo)
    tr.appendChild(tdFechaLanzamiento)
    tr.appendChild(tdRecaudacion)
    tr.appendChild(tdFase)
    tr.appendChild(tdPostCreditos)
    tr.appendChild(tdAcciones)

    return tr
}

const crearTablaPeliculas = (listaPeliculas) => {
    const tbody = document.getElementById("dataPeliculas")
    for(let pelicula of listaPeliculas) {
        const tr = crearFilaPeliculas(pelicula)
        tbody.appendChild(tr)
    }
}

const crearCard = (pelicula) => {

    //Creamos el card de la pela
    const divCard = document.createElement("div")
    divCard.setAttribute("class","card")

    //Creamos la imagen de la pela (SOLO SI TIENE) y la agregamos al card 
    if (pelicula.cover_url != null) {
        const img = document.createElement("img")
        img.setAttribute("src", pelicula.cover_url)
        img.setAttribute("class","card-img-top")
        divCard.appendChild(img)
    }

    //Creamos el Card-body para añadirle los componentes
    const divCardBody = document.createElement("div")
    divCardBody.setAttribute("class","card-body")

    //Creamos los componentes del cardBody y los agregamos al divCardBody
    const h3 = document.createElement("h3")
    h3.setAttribute("class","card-title")
    h3.innerText = pelicula.title
    divCardBody.appendChild(h3)

    const p = document.createElement("p")
    p.setAttribute("class","card-text")
    p.innerText = pelicula.overview
    divCardBody.appendChild(p)

    //Creo la fila del director 
    const divRowDirector = document.createElement("div")
    divRowDirector.setAttribute("class","row")
    //Creo las columnas y las agrego a las filas
    //Col 1
    const divColDirector = document.createElement("div")
    divColDirector.setAttribute("class","col-4")
    divColDirector.innerText = "Director: "
    divRowDirector.appendChild(divColDirector)
    //Col 2
    const divColNombreDirector = document.createElement("div")
    divColNombreDirector.setAttribute("class","col-4")
    divColNombreDirector.innerText = pelicula.directed_by
    divRowDirector.appendChild(divColNombreDirector)

    //Creo la fila de la saga
    const divRowSaga = document.createElement("div")
    divRowSaga.setAttribute("class","row")
    //Creo las columnas y las agrego a las filas
    //Col 1
    const divColSaga =  document.createElement("div")
    divColSaga.setAttribute("class","col-4")
    divColSaga.innerText = "Saga: "
    divRowSaga.appendChild(divColSaga)
    //Col 2
    const divColNombreSaga =  document.createElement("div")
    divColNombreSaga.setAttribute("class","col-4")
    divColNombreSaga.innerText = pelicula.saga
    divRowSaga.appendChild(divColNombreSaga)

    //Agrego la fila de director y saga
    divCardBody.appendChild(divRowDirector)
    divCardBody.appendChild(divRowSaga)

    //Crear y agrega boton select
    const btn = document.createElement("button")
    btn.setAttribute("type","button")
    btn.setAttribute("class","btn btn-primary mt-3")
    btn.innerText = "Seleccionar"
    btn.addEventListener("click",()=>{
        console.log(`ID: ${pelicula.id}`)
        sessionStorage.setItem("pelicula_id",pelicula.id)
        location.href = "/movie_detail.html"
    })
    divCardBody.appendChild(btn)

    divCard.appendChild(divCardBody)

    return divCard
}

const crearSetCardsPeliculas = (listaPeliculas) => {
    const divCardsContainer = document.getElementById("v-pills-card")
    let divCardDeck;
    //for(let i = 0; i < listaPeliculas.length;i++)
    for (let i in listaPeliculas) {
            const pelicula = listaPeliculas[i]
            if (i%2 == 0) {
                //1.Crear un card deck
                divCardDeck = document.createElement("div")
                divCardDeck.setAttribute("class","card-deck")
                divCardsContainer.appendChild(divCardDeck)
            }
            //2.Agregar el card al cardDeck 
            const divCard = crearCard(pelicula)
            divCardDeck.appendChild(divCard)
    }
}
// IMPORTANTE el await solo se puede usar dentro de funciones async (asincronas)
const obtenerDataPeliculas = async function() {
    //Promises
    /* fetch("https://mcuapi.herokuapp.com/api/v1/movies").then(function(response){
        return response.json()
    }).then(function(datos) {
        const listaPeliculas = datos.data
        crearTablaPeliculas(listaPeliculas)  
        crearSetCardsPeliculas(listaPeliculas)      
    }) */

    //async wait
    const response = await fetch("https://mcuapi.herokuapp.com/api/v1/movies")
    const datos = await response.json()
    const listaPeliculas = datos.data
    crearTablaPeliculas(listaPeliculas)  
    crearSetCardsPeliculas(listaPeliculas)  


    //const req = new XMLHttpRequest();
    //req.addEventListener("load",function(event) {
    //    document.write(event.target.responseText)
    //})
    //req.open("GET","https://mcuapi.herokuapp.com/api/v1/movies")
    //req.send()
}


const main = function() {
    obtenerDataPeliculas()
}

window.addEventListener("load",main)