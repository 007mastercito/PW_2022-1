import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

//https://mcuapi.herokuapp.com/api/v1/movies/1 (Se usa el id de la pelicula en el ultimo "/")

/*PASAR DATA ENTRE PAGINAS
1. SessionStorage (Objeto del DOM)
2. History state (Objeto del DOM)
3. react-router (path)
*/

const DetailMoviePage = () => {
    const pathParams = useParams()

    //variables de estado
    const [peliculaSeleccionada,setPeliculaSeleccionada] = useState({})

    useEffect(() => {
        const dataFetch = async () => {
            const resp = await fetch(`https://mcuapi.herokuapp.com/api/v1/movies/${pathParams.movieId}`)
            const data = await resp.json()
            setPeliculaSeleccionada(data) 
            console.log(data)
        }
        dataFetch()
    },[])

    return <div>
        <h1>Pagina detalles</h1>
        <Link className="btn btn-primary" to={"/movies"}>
            Regresar
        </Link>
    </div>
}

export default DetailMoviePage