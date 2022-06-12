const MenuLateral = (props) => {

    const cambiarModoTabla = () => {
        props.cambiarModo(1)
    }

    const cambiarModoCard = () => {
        props.cambiarModo(2)
    }

    return <div className="nav flex-column nav-pills" id="v-pills-tab" 
    role="tablist" aria-orientation="vertical">
        <a className={props.modo === 1 ? "nav-link active" : "nav-link"} id="v-pills-tabla-tab" 
        data-toggle="pill" href="#v-pills-tabla" role="tab" 
        aria-controls="v-pills-tabla" aria-selected="true"
        onClick={cambiarModoTabla}>
            Tabla
        </a>
        <a className={props.modo === 2 ? "nav-link active" : "nav-link"} id="v-pills-card-tab" 
        data-toggle="pill" href="#v-pills-card" 
        role="tab" aria-controls="v-pills-card" aria-selected="false"
        onClick={cambiarModoCard}>
            Card
        </a>
    </div>

    /* if (props.modo === 1) {
        return <div className="nav flex-column nav-pills" id="v-pills-tab" 
            role="tablist" aria-orientation="vertical">
                <a className="nav-link active" id="v-pills-tabla-tab" 
                data-toggle="pill" href="#v-pills-tabla" role="tab" 
                aria-controls="v-pills-tabla" aria-selected="true"
                onClick={cambiarModoTabla}>
                    Tabla
                </a>
                <a className="nav-link" id="v-pills-card-tab" 
                data-toggle="pill" href="#v-pills-card" 
                role="tab" aria-controls="v-pills-card" aria-selected="false"
                onClick={cambiarModoCard}>
                    Card
                </a>
            </div>
    } else {
        return <div className="nav flex-column nav-pills" id="v-pills-tab" 
                role="tablist" aria-orientation="vertical">
                <a className="nav-link" id="v-pills-tabla-tab" 
                data-toggle="pill" href="#v-pills-tabla" role="tab" 
                aria-controls="v-pills-tabla" aria-selected="true"
                onClick={cambiarModoTabla}>
                    Tabla
                </a>
                <a className="nav-link active" id="v-pills-card-tab" 
                data-toggle="pill" href="#v-pills-card" 
                role="tab" aria-controls="v-pills-card" aria-selected="false"
                onClick={cambiarModoCard}>
                    Card
                </a>
            </div>
    } */
}

export default MenuLateral