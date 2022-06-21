import Express from "express";

const app = Express()
const port = 5000
//Endpoints
//Reciba peticiones GET
app.get("/",(req,resp) => {
    //req = HTTP request(solicitud del cliente) 
    //resp = HTTP response (respuesta del server)
    resp.send("Esto es mi primer Endpoint HTTP")
})

//path parameters
app.get("/alumno/:codigo/:nombre",(req,resp) => {
    const codigo = req.params.codigo
    const nombre = req.params.nombre
    resp.send(`<h1>Codigo: ${codigo}</h1><h2>Nombre: ${nombre}</h2>`)
})

//query parameters
// ?codigo=...&nombre=...
app.get("/alumno2",(req,resp) => {
    const codigo = req.query.codigo
    const nombre = req.query.nombre
    resp.send(`<h1>Codigo: ${codigo}</h1><h2>Nombre: ${nombre}</h2>`)
})

app.listen(port,()=>{
    console.log("Servidor iniciado en el puerto", port)
})
