import CardDeck from "./CardDeck.components"
import TablaPeliculas from "./TablaPeliculas.component"

const ContenedorTabs = (props) => {
    if (props.modo === 1) {
        //Tabla
        return <div className="tab-content" id="v-pills-tabContent">
        <div className="tab-pane fade show active" id="v-pills-tabla" role="tabpanel" aria-labelledby="v-pills-tabla-tab">
            <TablaPeliculas peliculas = {props.peliculas}/>
        </div>
        </div>
    } else {
        return <div className="tab-content" id="v-pills-tabContent">
            <div className="tab-pane fade show active" id="v-pills-card" role="tabpanel" aria-labelledby="v-pills-card-tab">
                <CardDeck peliculas = {props.peliculas}/>
            </div>
        </div>
    }
    
}

export default ContenedorTabs