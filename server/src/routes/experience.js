const experienceRoute = require('express').Router();
const { ExperienceController } = require('../controllers');
const {authUser} = require('../middlewares/authentication')

experienceRoute.post('/', authUser, ExperienceController.create);
experienceRoute.get('/',  authUser, ExperienceController.getExperiences);
experienceRoute.put('/:id', authUser, ExperienceController.edit)
experienceRoute.delete('/:id',  authUser, ExperienceController.delete);

module.exports = experienceRoute;