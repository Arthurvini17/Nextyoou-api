require('dotenv').config();

const AuthService = require('../Services/AuthService');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

module.exports = {

    auth: async (req, res) => {
        //pegando os dados pelo body
        const { email, password } = req.body;

        try {

            //fazendo a query do service, buscando o usuario
            const authenticated = await AuthService.auth(email, password);

            if (!authenticated) {
                return res.status(401).json({ message: 'credenciais invalidas' })
            }

            //se o usuario for valido, gera um token jwt
            // o payload contm o id do usuario
            //expires in define que o token expira em 1 hora
            const token = jwt.sign({ id: authenticated.id }, process.env.JWT_SECRET, { expiresIn: '1h' })

            //retorna o token no body
            res.json({ token })
        } catch (error) {
            res.status(500).json({ message: 'error', error })
        }
    },

    protected: async (req, res) => {
        res.json({ message: "voce acessou aqui" })
    }


}