const { Pool } = require('pg')
const  pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'desafiolatam279',
    database: 'likeme',
    allowExitOnIdle: true
})

/*const getDate = async () => {
    const result = await pool.query("SELECT NOW()")
    console.log(result)
}*/

const obtenerPosts = async () => {
    const {rows} = await pool.query("SELECT * FROM posts")
    console.log(rows)
    return rows
}

const agregarPosts = async (titulo, img, descripcion) => {
    const consulta = 'insert into posts values(default, $1, $2, $3)'
    const values = [titulo, img, descripcion]
    const result = await pool.query(consulta, values)
    console.log('post agregado con exito')
}

module.exports = { obtenerPosts, agregarPosts }