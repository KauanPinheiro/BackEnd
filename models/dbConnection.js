//Importando módulo MYSQL
const mysql = require('mysql2')

//Conexão com o banco 
const connection =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dbcleanfood'
})

connection.connect((err) => {
    if(err){
        console.log("Erro ao conectar com o banco ", err);
        return(err);
        return;
    }
    console.log("Banco conectado");

});

module.exports = connection;

