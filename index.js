const { obtenerPosts, agregarPosts } = require('./consulta.js') 
const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.listen(3000, console.log("SERVIDOR ENCENDIDO"))

app.get("/posts", async (req, res) => {
    const posts = await obtenerPosts()
    res.json(posts)
})

app.post("/posts", async(req, res) => {
    const {titulo, img, descripcion} = req.body
    await agregarPosts(titulo, img, descripcion)
    res.send("Post agregado")
})
