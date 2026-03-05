const express = require('express');
const songRouter = express.Router();
const { uploadSong, getSongs } = require('../controllers/song.controller.js');
const upload = require('../middlewares/upload.middleware.js');

// POST - /api/songs/ 
songRouter.post('/', upload.single('song'), uploadSong);

//GET - /api/songs/ 
songRouter.get('/', getSongs);

module.exports = songRouter;