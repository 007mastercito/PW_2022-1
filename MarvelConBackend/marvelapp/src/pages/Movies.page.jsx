import { useEffect, useState } from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import ContenedorTabs from "../components/ContenedorTabs.component"
import MenuLateral from "../components/MenuLateral.component"
//import data from "../resources/data"
const MoviesPage = _ => {
    //VARIABLES DE ESTADO y FUNCION PARA MODIFICARLA
    const [modoVisualizacion,setModoVisualizacion] = useState(1)
    const [listaPeliculas, setListaPeliculas] = useState([])
    const [faseSeleccionada,setFaseSeleccionada] = useState(0)


    useEffect(() => {
        const dataFetch = async () => {
            let URL = "http://localhost:5000/movies"
            if (faseSeleccionada > 0) {
                URL += `?fase=${faseSeleccionada}`
            }
            const resp = await fetch(URL)
            const data = await resp.json()
            console.log(data)
            console.log(resp)
            setListaPeliculas(data.data)
            return data
        }
        dataFetch()
    },[faseSeleccionada])

    const onFaseSeleccionadaChange = (evt) => {
        setFaseSeleccionada(evt.target.value)
    }


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
            <div className="mb-3">
                <label className="form-label fw-bold fs-3" htmlFor="selectFase">Elija la fase:</label>
                <select value={faseSeleccionada} onChange={onFaseSeleccionadaChange} className="form-select" id="selectFase">
                    <option value={"0"}>Todas las fases</option>
                    <option value={"1"}>1</option>
                    <option value={"2"}>2</option>
                    <option value={"3"}>3</option>
                    <option value={"4"}>4</option>
                </select>
            </div>
            <ContenedorTabs fase={faseSeleccionada} modo = {modoVisualizacion} 
            peliculas= {listaPeliculas}/>
        </div>
    </div>
    </div>
}

export default MoviesPage