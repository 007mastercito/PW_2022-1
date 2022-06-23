import Express from "express";
import data from "./resources/data.js";
import cors from "cors"

const app = Express()

const PORT = 5000

//Configuro para recibir cualquier petición de cualquier cliente
app.use(cors())
//Configuro el directorio assets para que tenga archivos estaticos
app.use(Express.static("assets"))

//ENDPOINT; GET /movies
//http://localhost:5000/movies?fase=1
app.get("/movies",(req ,resp) =>{
    const fase = req.query.fase
    const listaPeliculas = data.data

    if (fase != null) {
        //listaPeliculas.filter() :c
        const resultado = []
        listaPeliculas.forEach(pel=> {
            if (pel.phase == fase) {
               resultado.push(pel) 
            }
        })  
        resp.send(JSON.stringify({data: resultado}))
    } 
    else {
        resp.send(JSON.stringify({data: listaPeliculas}))
    }
    //Transformar la data en texto (string)
    
})

app.get("")

app.listen(PORT,()=>{
    console.log(`Servidor iniciado en el puerto ${PORT}`)
})

