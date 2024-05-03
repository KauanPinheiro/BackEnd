const express = require('express');
const router = express.Router();
const dbConnection = require('../models/dbConnection');


//GET
router.get('/', (req,res) => {
    dbConnection.query('SELECT * FROM tbavaliacoes', (err,result) => {
        if(err) throw err;
        res.json(result);
    })
})

//GET com cod de refêrencia
router.get('/:codAvaliacao', (req,res) => {
    const codAvaliacao = req.params.codAvaliacao;
    const query = `SELECT * FROM tbavaliacoes WHERE codAvaliacao = ${codAvaliacao}`
    dbConnection.query(query, (err,result) => {
        if(err) throw err;
        res.json(result)
    })
})

//POST com erro na hora de enviar os dados
router.post('/', (req,res) => {
    const {comentario,dataComentario,codReceita} = req.body;
    const query = 'INSERT INTO tbavaliacoes (comentario,dataComentario,codReceita) VALUES (?,?,?)';

    dbConnection.query(query, [comentario,dataComentario,codReceita], (err,result) => {
        if(err){
            res.status(500).json({
                mensagem: 'Erro ao adicionar avaliação'
            })
        }else{
            res.status(201).json({
                mensagem: 'Avaliação adicionada com sucesso!',
                codAvaliacao: result.insertId,
                body: req.body
            })
        }
    })
})

//DELETE COM cod COMO REFERÊNCIA 
router.delete('/:codAvaliacao', (req,res) => {
    const {codAvaliacao} = req.params;
    const query = 'DELETE FROM tbavaliacoes WHERE codAvaliacao = ?';

    dbConnection.query(query, {codAvaliacao}, (err,result) => {
        if(err){
            res.status(500).json({
                mensagem: 'Erro ao deletar avaliação'
            })
        }else{
            res.status(201).json({
                mensagem: 'Avaliação deletada com sucesso!'
            })
        }
    })
})

//PUT
router.put('/:codAvaliacao', (req,res) => {
    const {codAvaliacao} = req.params;
    const {comentario,dataComentario} = req.body;
    const query = 'UPDATE tbavaliacoes SET comentario = ?, dataComentario = ? WHERE codAvaliacao = ?';

    
})
module.exports = router;