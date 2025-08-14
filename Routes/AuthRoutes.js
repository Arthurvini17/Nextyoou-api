const express = require('express');
const router = express.Router();

const AuthController = require('../Controllers/AuthController');
const authToken = require('../middlewares/authToken')

//enviando o token
router.post('/', AuthController.auth);
router.get('/protegida', authToken, AuthController.protected)


module.exports = router;   