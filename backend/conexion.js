const mysql = require('mysql')
let query;
let id;
let usuario;
let nombre;

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
                console.log(lista)
                resolve(lista)
            }
        }) 
    })
}

selecionarDatos("usuarios","Unico","id",1)
    .then(datos =>{
        id = datos[0].id;
        usuario = datos[0].usuario;
        nombre = datos[0].nombre;

        console.log('ID:', id);
        console.log('Usuario:', usuario);
        console.log('Nombre:', nombre);
    })
    .catch(error =>{
        console.error('Error al seleccionar datos',error)
    })



conexion.end()