import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
const MoviesPage = _ => {
    return <div className="container">
        <h1>Marvel Cinematic Universe (MCU)</h1>
        <div className="row">
        <div className="col-3">
            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a className="nav-link active" id="v-pills-tabla-tab" data-toggle="pill" href="#v-pills-tabla" role="tab" aria-controls="v-pills-tabla" aria-selected="true">
                    Tabla
                </a>
                <a className="nav-link" id="v-pills-card-tab" data-toggle="pill" href="#v-pills-card" role="tab" aria-controls="v-pills-card" aria-selected="false">
                    Card
                </a>
            </div>
        </div>
        <div className="col-9">
            <div className="tab-content" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-tabla" role="tabpanel" aria-labelledby="v-pills-tabla-tab">
                    <table className="table">
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
                        </tbody>

                    </table>
                </div>
                <div className="tab-pane fade" id="v-pills-card" role="tabpanel" aria-labelledby="v-pills-card-tab">
                    
                </div>
            </div>
        </div>
    </div>
    </div>
}

export default MoviesPage