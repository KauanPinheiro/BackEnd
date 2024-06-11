const express = require('express')
const router = express.Router();
const dbConnection = require('../models/dbConnection');


//GET 
router.get('/', (req,res) => {
    dbConnection.query('SELECT * FROM tbreceitas', (err,result) => {
        if(err) throw err;
        res.json(result);
    })
})

//GET pelo cod
router.get('/:codReceita', (req,res) => {
    const codReceita = req.params.codReceita;
    const query = `SELECT * FROM tbreceitas WHERE codReceita = ${codReceita} `;

    dbConnection.query(query, (err,result) => {
        if(err) throw err;
        res.json(result)
    })
})

//post
router.post('/', (req,res) => {
    const {rendePorcoes,nomeReceita,imagemDaReceita,codCliente} = req.body;
    const query = 'INSERT INTO tbreceitas(rendePorcoes,nomeReceita,imagemDaReceita,codCliente) VALUES (?,?,?,?) ';

    dbConnection.query(query, [rendePorcoes,nomeReceita,imagemDaReceita,codCliente], (err,result) => {
        if(err){
            res.status(500).json({
                mensagem: 'Erro ao adicionar receita'
            })
        }else{
            res.status(201).json({
                mensagem: 'Receita adicionada com sucesso!',
                codReceita: result.insertId,
                body: req.body


            })
        }
    })
})

//DELETE com cod COMO REFERÊNCIA
router.delete('/:codReceita', (req,res) => {
    const {codReceita} = req.params;
    const query = 'DELETE FROM tbreceitas WHERE codReceita = ?';

    dbConnection.query(query, {codReceita}, (err,result) => {
        if(err){
            res.status(500).json({
                mensagem: 'Erro ao deletar receita'
            })
        }else{
            res.status(201).json({
                mensagem: 'Receita deletada com sucesso!'
            })
        }
    })
})

//PUT
router.put('/:codReceita', (req,res) => {
    const {codReceita} = req.params;
    const {rendePorcoes,nomeReceita,imagemDaReceita} = req.body;
    const query = 'UPDATE tbreceitas SET rendePorcoes = ?, nomeReceita = ?, imagemDaReceita = ? WHERE codReceita = ?';

    dbConnection.query(query, [rendePorcoes,nomeReceita,imagemDaReceita,codReceita], (err,result) => {
       if(err) throw err;
       res.status(201).json({
        mensagem: 'Receita alterada com sucesso!',
            envio:{
                rendePorcoes: rendePorcoes,
                nomeReceita: nomeReceita,
                imagemDaReceita: imagemDaReceita

            }
       }) 
    })
})


module.exports = router;