const userRoute = require('express').Router();
const { UserController } = require('../controllers');
const {authUser} = require('../middlewares/authentication')

userRoute.post('/register', UserController.register);
userRoute.post('/login', UserController.login);
userRoute.put('/edit', authUser, UserController.edit);
userRoute.get('/', authUser, UserController.detailUser);

module.exports = userRoute;