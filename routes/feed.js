const express = require('express');

const router = express.Router();

const feedController = require('../controllers/feed');

//GET /feed/post
router.get('/post', feedController.getPost);
// POST /feed/post
router.post('/post', feedController.createPost);

module.exports = router;
