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
                codPasso: result.insertId,
                body: req.body


            })
        }
    })
})

module.exports = router;