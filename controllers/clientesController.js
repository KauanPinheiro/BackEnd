const express = require('express')
const router = express.Router();
const dbConnection = require('../models/dbConnection');

//GET
router.get('/', (req,res) => {
    dbConnection.query('SELECT * FROM tbclientes', (err,result) => {
        if(err) throw err;
        res.json(result);
    })
})

//Get pelo cod
router.get('/:codCliente', (req,res) => {
    const codCliente = req.params.codCliente;
    const query = `SELECT * FROM tbclientes WHERE codCliente = ${codCliente}`
    dbConnection.query(query, (err,result) => {
        if(err) throw err;
        res.json(result)
    })
})

//POST
router.post('/', (req,res) => {
    const {nome,sobrenome,senha,datanasc,cpf,email,codUsuario} = req.body;
    const query = 'INSERT INTO tbclientes(nome,sobrenome,senha,datanasc,cpf,email,codUsuario) values (?,?,?,?,?,?,?)'

    dbConnection.query(query, [nome,sobrenome,senha,datanasc,cpf,email,codUsuario], (err,result) => {
        if(err){
            res.status(500).json({
                mensagem: 'Erro ao adicionar cliente'
            })
        }else{
            res.status(201).json({
                mensagem: 'Cliente adicionado com sucesso!',
                codCliente: result.insertId,
                body: req.body
            })
        }
    })
})

//DELETE COM cod COMO REFÊNCIA
router.delete('/:codCliente', (req,res) => {
    const {codCliente} = req.params;
    const query = `DELETE FROM tbclientes WHERE codCliente = ?`;

    dbConnection.query(query, {codCliente}, (err,result) =>{
        if(err){
            res.status(500).json({
                mensagem: 'Erro ao deletar cliente'
            })
        }else{
            res.status(201).json({
                mensagem: "Cliente deletado com sucesso!"
            })
        }
    })
})

//PUt
router.put('/:codCliente', (req,res) => {
    const {codCliente} = req.params;
    const {nome,sobrenome,senha,datanasc,cpf,email} = req.body;
    const query = `UPDATE tbclientes SET nome = ?, sobrenome = ?, senha = ?, datanasc = ?, cpf=?, email= ? WHERE codCliente = ? `;

    dbConnection.query(query, [nome,sobrenome,senha,datanasc,cpf,email,codCliente], (err,result) => {
        if(err){
            res.status(500).json({
                mensagem: 'Erro ao alterar dados do cliente'
            })
        }else{
            res.status(201).json({
                mensagem: 'Alteração feita com sucesso!',
                codCliente: codCliente,
                nome: nome,
                sobrenome: sobrenome,
                datanasc: datanasc,
                cpf: cpf,
                email: email
            })
        }
    })

})





module.exports = router;