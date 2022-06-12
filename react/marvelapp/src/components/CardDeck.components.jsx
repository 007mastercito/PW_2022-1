import CardPelicula from "./CardPelicula.component"

const CardDeck = (props) => {
    const armarCardPeliculas = (peliculas) => {
        const listaCardDecks = []
        let cards = []
        peliculas.forEach((pelicula, index) => {
            if (index % 2 == 0 && index > 0) {
                listaCardDecks.push(
                    <div classNameName="card-deck">
                        {cards}
                    </div>
                )
                cards = []
            }
            const card = <CardPelicula pelicula = {pelicula}/>
            cards.push(card)
        })
        if (cards.length != 0) {
            listaCardDecks.push(
                <div classNameName="card-deck">
                    {cards}
                </div>)
        }
        return listaCardDecks
    }


    return <>
        {
            /*props.peliculas.map((pelicula,index) => {
                
            })  LA FUNCION MAP DEVUELVE UNA LISTA CON LOS RESULTADOS DE LA FUNCION */
            // La funcion forEach no devulve nada pero se ejecuta por cada elemento
            armarCardPeliculas(props.peliculas)
        }
    </>
}

export default CardDeck