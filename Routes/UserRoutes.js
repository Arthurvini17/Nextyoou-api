const express = require('express');
const router = express.Router();

const UserController = require('../Controllers/UserController');

router.get('/', UserController.getAllUsers);
router.post('/', UserController.createUser);

module.exports = router;
