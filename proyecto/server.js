const express = require('express')

const app = express()

app.get('/saludo', (peticion, respuesta)=>{
    //Proceso
    console.log(peticion)
    return respuesta.send("Hola Mundo")
})

app.post('/saludo', (peticion, respuesta)=>{
    //Proceso
    console.log(peticion)
    return respuesta.send("Hola Mundo, por post")
})

app.listen(4000, function(){
    console.log("Funcionando,....... http://localhost:4000")
})