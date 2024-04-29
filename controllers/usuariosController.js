const express = require('express')
const router = express.Router();
const dbConnection = require('../models/dbConnection');

//Get
router.get('/', (req,res) => {
    dbConnection.query('SELECT * FROM tbusuarios',(err,result) => {
        if(err) throw err;
        res.json(result)
    })
});

//Get pelo cod
router.get('/:codUsuario', (req,res) => {
    const codUsuario = req.params.codUsuario;
    const query = `SELECT * FROM tbusuarios WHERE codUsuario = ${codUsuario}`
    dbConnection.query(query, (err,result) => {
        if(err) throw err;
        res.json(result)
    })
})

//Post
router.post('/', (req,res) => {
    const {datanasc,endereco,cidade,bairro,cep,nome,cpf,email,telCel,senha} = req.body;
    const query = 'INSERT INTO tbusuarios (datanasc,endereco,cidade,bairro,cep,nome,cpf,email,telCel,senha) VALUES (?,?,?,?,?,?,?,?,?,?)'

    dbConnection.query(query, [datanasc,endereco,cidade,bairro,cep,nome,cpf,email,telCel,senha], (err,result) => {
        if(err){
            res.status(500).json({mensagem: 'Erro ao adicionar usuário'});
        }else{
            res.status(201).json({
                mensagem: 'Usuário adiconado com sucesso!',
                codUsuario: result.insertId,
                body: req.body
            })
        }
    })
})


//Delete pelo cod como refência 
router.delete('/:codUsuario', (req,res) => {
    const {codUsuario} = req.params;
    const query = 'DELETE FROM tbusuarios WHERE codUsuario = ?';

    dbConnection.query(query, {codUsuario}, (err,result) => {
        if(err) {
            res.status(500).json({
                mensagem: 'Erro ao deletar usuário'
            })
        }else{
            res.status(201).json({
                mensagem: `Usuário de codUsuário: ${codUsuario}, deletado com sucesso!`
            })
        }
        
    })
})

//Put com cod como refência 
router.put('/:codUsuario', (req,res) => {
    const {codUsuario} = req.params;
    const {datanasc,endereco,cidade,bairro,cep,nome,cpf,email,telCel,senha} = req.body;
    const query = ` UPDATE tbusuarios SET datanasc = ?, endereco = ?, cidade = ?, bairro = ?, cep = ?, nome = ?, cpf = ?, email = ?, telCel = ?, senha = ? where codUsuario = ?`

    dbConnection.query(query,[datanasc,endereco,cidade,bairro,cep,nome,cpf,email,telCel,senha,codUsuario], (err) => {
        if(err) throw err;
        res.status(201).json({
            mensagem: 'Alteração aplicada com sucesso!',
                envio:{
                    datanasc: datanasc,
                    endereco: endereco,
                    cidade: cidade,
                    bairro: bairro,
                    cep: cep,
                    nome: nome,
                    cpf: cpf,
                    email: email,
                    telCel: telCel,
                    senha: senha
                }
        })
    })
})




module.exports = router;