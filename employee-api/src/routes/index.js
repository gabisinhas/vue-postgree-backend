// Arquivo responsável pela chamada de API no lado do BackEnd

const express = require('express');
const router = express.Router();

router.get('/api',(req,res) =>{
    res.status(200).send({
        success:'true',
        message:'Seja Bem vindo',
        version: '1.0.0'
    })
})

module.exports = router;