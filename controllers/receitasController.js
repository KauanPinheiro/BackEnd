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

module.exports = router;