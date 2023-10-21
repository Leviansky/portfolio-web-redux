const postRoute = require('express').Router();
const { PostController } = require('../controllers');
const {authUser} = require('../middlewares/authentication')

postRoute.get('/',  authUser, PostController.getPosted);
postRoute.post('/', authUser, PostController.create);
postRoute.put('/:id', authUser, PostController.edit)
postRoute.get('/all',  authUser, PostController.getAllPost);
postRoute.post('/change/:id',  authUser, PostController.changeStatusPosting);

module.exports = postRoute;