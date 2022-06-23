import FilaPelicula from "./FilaPelicula.component"

const TablaPeliculas = (props) => {
    return <table className="table">
        <thead>
            <tr>
                <th>Id.</th>
                <th>Título</th>
                <th>Fecha de Lanzamiento</th>
                <th>Recaudación</th>
                <th>Fase MCU</th>
                <th># escenas postcréditos</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody id="dataPeliculas">
            {
                props.peliculas.map((pelicula) => {
                    return <FilaPelicula pelicula = {pelicula}
                    key={`pelicula_${pelicula.id}`}/>
                })
            }
        </tbody>
    </table>
}

export default TablaPeliculas