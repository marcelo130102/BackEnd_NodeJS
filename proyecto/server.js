const express = require('express')

const app = express()

app.use(express.text())
app.use(express.json())

app.get('/saludo', (peticion, respuesta)=>{
    //Proceso
    console.log(peticion)
    return respuesta.send("Hola Mundo")
})

app.post('/saludo', (peticion, respuesta)=>{
    //Proceso
    const nombre = peticion.body;
    console.log(nombre)
    const mensaje = "Por post, hola " + nombre + " un gusto saludarte"
    return respuesta.send(mensaje)
})

app.post('/saludo_json', (peticion, respuesta)=>{
    //Proceso
    const persona = peticion.body;
    console.log(persona)
    const mensaje = "Por post, hola " + persona.nombre + " un gusto saludarte, tienes " + persona.edad + " años"
    return respuesta.send(mensaje)
})

app.listen(4000, function(){
    console.log("Funcionando,....... http://localhost:4000")
})