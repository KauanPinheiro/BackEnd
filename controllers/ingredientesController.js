const express = require('express')
const router = express.Router();
const dbConnection = require('../models/dbConnection');

//GET
router.get('/', (req,res) => {
    dbConnection.query('SELECT * FROM tbingredientes', (err,result) => {
        if(err) throw err;
        res.json(result);
    })
})

//Get pelo cod
router.get('/:codIngrediente', (req,res) => {
    const codIngrediente = req.params.codIngrediente;
    const query = `SELECT * FROM tbingredientes WHERE codIngrediente = ${codIngrediente}`
    dbConnection.query(query,(err,result) => {
        if(err) throw err;
        res.json(result)
    }) 
})

//POST
router.post('/', (req,res) => {
    const {nomeIngrediente,rendeMedidas,codReceita} = req.body;
    const query = 'INSERT INTO tbingredientes(nomeIngrediente,rendeMedidas,codReceita) values (?,?,?)';

    dbConnection.query(query, [nomeIngrediente,rendeMedidas,codReceita], (err,result) => {
        if(err){
            res.status(500).json({
                mensagem: 'Erro ao adicionar ingrediente'
            })
        }else{
            res.status(201).json({
            mensagem: 'Ingrediente adicionado com sucesso!',
            codIngrediente: result.insertId,
            body: req.body
            })
        }
    })
})

module.exports = router;