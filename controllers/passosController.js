const express = require('express');
const router = express.Router();
const dbConnection = require('../models/dbConnection');

//GET
router.get('/', (req,res) => {
    dbConnection.query('SELECT * FROM tbpassos', (err,result) => {
        if(err) throw err;
        res.json(result);
    })
})

//GET pelo cod como referência 
router.get('/:codPasso', (req,res) => {
    const codPasso = req.params.codPasso;
    const query = `SELECT * FROM tbpassos WHERE codPasso = ${codPasso}`
    dbConnection.query(query, (err,result) => {
        if(err) throw err;
        res.json(result)
    })
})

//POST
router.post('/', (req,res) => {
    const {mododePreparo,tempodePreparo,codReceita,descricao} = req.body;
    const query = 'INSERT INTO tbpassos (mododePreparo,tempodePreparo,codReceita,descricao) VALUES (?,?,?,?)'

    dbConnection.query(query, [mododePreparo,tempodePreparo,codReceita,descricao], (err,result) => {
        if(err){
            res.status(500).json({
                mensagem:'Erro ao adicionar passos'
            })
        }else{
            res.status(201).json({
                mensagem: 'Passos adicionado com sucesso!',
                codPasso : result.insertId,
                body: req.body
            })
        }
    })
})

//DELETE pelo cod como referência
router.delete('/:codPasso', (req,res) => {
    const {codPasso} = req.params;
    const query = `DELETE FROM tbpassos WHERE codPasso = ?`;

    dbConnection.query(query, {codPasso}, (err,result) => {
        if(err){
            res.status(500).json({
                mensagem: 'Erro ao deletar passos'
            })
        }else{
            res.status(201).json({
                mensagem: 'Passos deletado com sucesso!'
            })
        }
    })
})

//PUT
router.put('/:codPasso', (req,res) => {
    const {codPasso} = req.params;
    const {mododePreparo,tempodePreparo,descricao} = req.body;
    const query = 'UPDATE tbpassos SET  mododePreparo = ?, tempodePreparo= ?, descricao = ? where codPasso = ?';

    dbConnection.query(query, [mododePreparo,tempodePreparo,descricao,codPasso], (err,result) => {
        if(err){
            res.status(500).json({
                mensagem: 'Erro ao atualizar passos'
            })
        }else{
            res.status(201).json({
                mensagem: "Alteração feita com sucesso!",
                codPasso: codPasso,
                mododePreparo: mododePreparo,
                tempodePreparo: tempodePreparo,
                descricao: descricao
            })
        }
    })
})

module.exports = router;