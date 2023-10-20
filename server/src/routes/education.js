const educationRoute = require('express').Router();
const { EducationController } = require('../controllers');
const {authUser} = require('../middlewares/authentication')

educationRoute.post('/', authUser, EducationController.create);
educationRoute.get('/',  authUser, EducationController.getEducations);
educationRoute.put('/:id', authUser, EducationController.edit)
educationRoute.delete('/:id',  authUser, EducationController.delete);

module.exports = educationRoute;