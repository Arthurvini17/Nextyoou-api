const jwt = require('jsonwebtoken')
require('dotenv').config();
const express = require('express');


function authToken(req, res, next) {

    //o parametro next é caso der certo a requisição
    //para o middleware caso, seja feito a auth


    //pegando o header do postman 
    const authHeader = req.headers['authorization'];

    //significa que o token vai ser o 2 parametro da url
    const token = authHeader?.split(' ')[1]

    if (!token) {
        return res.sendStatus(401);
    }

    //verifica se o token está correto na chave do .env
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(401);

        //salva as informações do usuario
        req.user = user

        //continua caso der certo
        next()
    })
}

module.exports = authToken;
