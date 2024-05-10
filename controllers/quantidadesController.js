const express = require('express');
const router = express.Router();
const dbConnection = require('../models/dbConnection');

router.get('/', (req,res) => {
    dbConnection.query('SELECT * FROM tbquantidades', (err,result) => {
        if(err) throw err;
        res.json(result);
    })
})

//GET com cod referência 
router.get('/:codQtde', (req,res) => {
    const codQtde = req.params.codQtde;
    const query = `SELECT * FROM tbquantidades WHERE codQtde = ${codQtde}`
    dbConnection.query(query, (err,result) => {
        if(err) throw err;
        res.json(result)
    })

})

//POST
router.post('/', (req,res) => {
    const {nomeQtde,qtdeIngrediente,codMedida} = req.body;
    const query = 'INSERT INTO tbquantidades (nomeQtde,qtdeIngrediente,codMedida) VALUES (?,?,?)';

    dbConnection.query(query, [nomeQtde,qtdeIngrediente,codMedida], (err,result) => {
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
router.delete('/:codQtde', (req,res) => {
    const {codQtde} = req.params;
    const query = 'DELETE FROM tbquantidades WHERE codQtde = ?';

    dbConnection.query(query, {codQtde}, (err,result) => {
        if(err){
            res.status(500).json({
                mensagem: 'Erro ao deletar quantidade'
            })
        }else{
            res.status(201).json({
                mensagem: 'Quantidade deletada com sucesso!'
            })
        }
    })
})

//PUT
router.put('/:codMedida', (req,res) => {
    const {codQtde} = req.params;
    const {nomeQtde,qtdeIngrediente} = req.body;
    const query = 'UPDATE tbquantidaes SET nomeQtde = ?, qtdeIngrediente = ? WHERE codQtde = ? ';

    dbConnection.query(query, [nomeQtde,qtdeIngrediente,codQtde], (err,result) => {
        if(err) throw err;
            res.status(201).json({
                mensagem: 'Quantidade alterada com sucesso!',
                    envio:{
                        nomeQtde: grama,
                        qtdeIngrediente: quilograma

                    }
            })
    })
})




module.exports = router;