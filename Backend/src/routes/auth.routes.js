const { Router } = require('express');
const authRouter = Router();
const { registerUser, loginUser, getMe, logoutUser } = require('../controllers/auth.controller.js');
const { verifyToken } = require('../middlewares/auth.middleware.js');

//POST - /api/auth/register
authRouter.post('/register', registerUser);

//POST - /api/auth/login
authRouter.post('/login', loginUser);

//GET - /api/auth/me
authRouter.get('/me', verifyToken, getMe);

//GET - /api/auth/logout
authRouter.get('/logout', verifyToken, logoutUser);

module.exports = authRouter;