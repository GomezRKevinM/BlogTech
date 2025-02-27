const express = require('express');
const cors = require('cors');


const app = express();
const port = 3000;

const mysql = require('mysql')
const usuarios = "SELECT * FROM usuarios"
let query;

let conexion = mysql.createConnection({
    host:"bmbyloffayp6set7ymmr-mysql.services.clever-cloud.com",
    user:"u5terylf4a51mtq8",
    password:"vNPpNsder73L70ThQYzy",
    port:"3306",
    database:"bmbyloffayp6set7ymmr"
})

conexion.connect((err)=>{
    if(err){
        throw err;
        conexion.end()
    }else{
        console.log("Conexión exitosa")
    }
})

function selecionarDatos(tabla,tipo,columna,id){
    return new Promise((resolve,reject)=>{
        switch (tipo){
            case "Normal":
                query="SELECT * FROM "+tabla;
                break;
            case "Columna":
                query="SELET '"+columna+"' FROM"+tabla;
                break;
            case "Unico":
                query="SELECT * FROM "+tabla+" WHERE "+columna+"="+id;
                break;
        }
        conexion.query(query,(error,lista)=>{
            if(error){
                reject(error)
            }else{
                resolve(lista)
            }
        }) 
    })
}

app.use(cors());

// Ruta API para obtener datos
app.get('/api/users', (req, res) => {
    selecionarDatos("usuarios", "Normal", "*", 0)
        .then(data => res.json(data))
        .catch(err => res.status(500).send(err));
});
app.get('/api/coments',(req,res)=>{
    selecionarDatos("comentarios","Normal","*",0)
        .then(data => res.json(data))
        .catch(err => res.status(500).send(err))
})

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
