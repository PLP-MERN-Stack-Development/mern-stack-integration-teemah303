const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');
const { auth } = require('../middleware/auth');
const upload = require('../middleware/upload');
const { postValidation } = require('../utils/validators');

router.get('/', postsController.getPosts);
router.get('/:id', postsController.getPost);
router.post('/', auth, upload.single('featuredImage'), postValidation, postsController.createPost);
router.put('/:id', auth, upload.single('featuredImage'), postValidation, postsController.updatePost);
router.delete('/:id', auth, postsController.deletePost);

module.exports = router;
