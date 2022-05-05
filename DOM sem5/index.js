const butOnClick =function(event) { //El parametro event sirve para representar el evento general
    console.log("butOnClick")
    //location.href = "https://google.com"
    window.alert("No deben utilizarme!!!")
    const butClickeado = event.target /*Se obtiene info de lo que fue clickeado*/
    console.log(butClickeado.innerText) /*Se obtiene el texto/valor de lo que fue clickeado */
    /*Ejecutar de manera continua un bloque de codigo*/
    //-----------↕
    window.setInterval(function(){
        console.log("hola")
    },3000)
    //window.setTimeout (parecido dijo)
}

const butOnClick2 = function(){
    console.log("butOnClick2")
    const butClickeado = this /*LO MISMO QUE LO DE EVENT PERO MUCHOOOO MAS FACIL */
    console.log(butClickeado.innerText)
}


const main = function(){
    const but = document.getElementById("ok")
    
    /*but.onclick = butOnClick
    but.onclick = butOnClick2 //No se ejecutan ambas funciones pq se está 
                             //chancando el código (solo se queda el último)*/
    
    //MANERA CORRECTA:
    but.addEventListener("click",butOnClick)
    but.addEventListener("click",butOnClick2)

} 

//Arrow notation
//const "nombre de la función" = "parametros" => "cuerpo de la funcion"
const funcionFlecha1 = a => console.log(a*a)
const funcionFlecha2 = (a,b) => console.log(a+b) 
funcionFlecha1(5)
funcionFlecha2("Hola"," Mundo")

window.onload = main