const express = require('express');
const router = express.Router();


router.get('/', PostsController.getPost);

module.exports = router