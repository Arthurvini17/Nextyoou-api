const express = require('express');
const authToken = require('../middlewares/authToken');
const PostsController = require('../Controllers/PostsController');
const router = express.Router();


router.get('/:id', PostsController.getPost);
router.post('/', authToken, PostsController.createPost)
router.put('/', authToken, PostsController.editPost)

module.exports = router