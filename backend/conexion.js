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
            throw error
        }else{
            console.log(lista)
            return lista
        }
    }) 
}

selecionarDatos("usuarios","Normal","*",0);
selecionarDatos("comentarios","Normal","*",0);

conexion.end()