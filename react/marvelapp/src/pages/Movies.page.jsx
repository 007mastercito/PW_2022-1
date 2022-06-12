import { useEffect, useState } from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import ContenedorTabs from "../components/ContenedorTabs.component"
import MenuLateral from "../components/MenuLateral.component"
//import data from "../resources/data"
const MoviesPage = _ => {
    //VARIABLES DE ESTADO y FUNCION PARA MODIFICARLA
    const [modoVisualizacion,setModoVisualizacion] = useState(1)
    const [listaPeliculas, setListaPeliculas] = useState([])


    useEffect(() => {
        const dataFetch = async () => {
            const resp = await fetch("https://mcuapi.herokuapp.com/api/v1/movies")
            const data = await resp.json()
            setListaPeliculas(data.data)
            return data
        }
        dataFetch()
    },[])


    //const listaPeliculas = data.data
    //TEMPORAL
    /* const listaPeliculas = [
        {
            id: 1,
            nombre: "Iron Man",
            fecha: "2008-05-02",
            recaudacion: "585,171,547",
            fase: 1, 
            postcreditos: 1,
        },
        {
            id: 2,
            nombre: "The Incredible Hulk",
            fecha: "2008-06-13",
            recaudacion: "265,573,859",
            fase: 1, 
            postcreditos: 1,
        }
    ] */


    return <div className="container">
        <h1>Marvel Cinematic Universe (MCU)</h1>
        <div className="row">
        <div className="col-3">
            <MenuLateral cambiarModo = {setModoVisualizacion} modo = {modoVisualizacion}/>
        </div>
        <div className="col-9">
            <ContenedorTabs modo = {modoVisualizacion} 
            peliculas= {listaPeliculas}/>
        </div>
    </div>
    </div>
}

export default MoviesPage