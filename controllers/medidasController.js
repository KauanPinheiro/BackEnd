const express = require('express');
const router = express.Router();
const dbConnection = require('../models/dbConnection');

//GET
router.get('/', (req,res) => {
    dbConnection.query('SELECT * FROM tbmedidas', (err,result) => {
        if(err) throw err;
        res.json(result);
    })
})

//GET com cod referência 
router.get('/:codMedida', (req,res) => {
    const codMedida = req.params.codMedida;
    const query = `SELECT * FROM tbmedidas WHERE codMedida = ${codMedida}`
    dbConnection.query(query, (err,result) => {
        if(err) throw err;
        res.json(result)
    })

})

//POST
router.post('/', (req,res) => {
    const {grama,quilograma,mililitro,codIngrediente } = req.body;
    const query = 'INSERT INTO tbmedidas (grama,quilograma,mililitro,codIngrediente) VALUES (?,?,?,?)';

    dbConnection.query(query, [grama,quilograma,mililitro,codIngrediente], (err,result) => {
        if(err){
            res.status(500).json({
                mensagem: 'Erro ao adicionar medida'
            })
        }else{
            res.status(201).json({
                mensagem: 'Medida adiconada com sucesso!',
                codMedida: result.insertId,
                body: req.body
            })
        }
    })
})

//DELETE COM cod COMO REFERÊNCIA
router.delete('/:codMedida', (req,res) => {
    const {codMedida} = req.params;
    const query = 'DELETE FROM tbmedidas WHERE codMedida = ?';

    dbConnection.query(query, {codMedida}, (err,result) => {
        if(err){
            res.status(500).json({
                mensagem: 'Erro ao deletar medida'
            })
        }else{
            res.status(201).json({
                mensagem: 'Medida deletada com sucesso!'
            })
        }
    })
})

//PUT
router.put('/:codMedida', (req,res) => {
    const {codMedida} = req.params;
    const {grama,quilograma,mililitro} = req.body;
    const query = 'UPDATE tbmedidas SET grama = ?, quilograma = ?, mililitro = ?  WHERE codMedida = ?';

    dbConnection.query(query, [grama,quilograma,mililitro,codMedida], (err,result) => {
        if(err) throw err;
            res.status(201).json({
                mensagem: 'Medida alterada com sucesso!',
                    envio:{
                        grama: grama,
                        quilograma: quilograma,
                        mililitro: mililitro

                    }
            })
    })
})





module.exports = router;