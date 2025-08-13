const express = require('express');
const router = express.Router();

const UserController = require('../Controllers/UserController');

router.get('/', UserController.getAllUsers);
router.post('/', UserController.createUser);
router.get('/:id', UserController.getUser);
router.delete('/:id', UserController.deleteUser);

module.exports = router;
