const express = require('express')
const query = require('./database')

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


app.get('/mostrar_usuarios', async (request, response)=>{
    try {
        const results = await query('SELECT * FROM users')
        return response.json(results)
    }catch(error){
        return response.json(error)
    }

    /*query('SELECT * FROM movies')
    .then((results)=>{
        console.log(results)
        return response.json(results)
    })
    .catch((error)=>{
        return response.json(error)
    })*/
})

app.post('/crear_usuario', async(request, response)=>{
    const usuario = request.body;
    try {
        const results = await query('INSERT INTO users (username, pass_word) VALUES(?,?)', [usuario.username, usuario.password])
        return response.json(results)
    }catch(error){
        return response.json(error)
    }

})



app.delete('/eliminar_usuario', async(request, response)=>{
    const usuario = request.body;
    try {
        const results = await query('DELETE FROM users WHERE username = ?', [usuario.username])
        return response.json(results)
    }catch(error){
        return response.json(error)
    }

})

