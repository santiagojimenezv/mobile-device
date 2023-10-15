const express = require('express')
const router = express.Router()
const postController = require('../controllers/post')

router.post('/new-post', postController.createPost)
router.get('/', postController.getAllPosts)
router.delete('/delete/:postId', postController.deletePost)

module.exports = router