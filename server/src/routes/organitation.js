const organitationRoute = require('express').Router();
const { OrganitationController } = require('../controllers');
const {authUser} = require('../middlewares/authentication')

organitationRoute.post('/', authUser, OrganitationController.create);
organitationRoute.get('/',  authUser, OrganitationController.getOrganitations);
organitationRoute.put('/:id', authUser, OrganitationController.edit)
organitationRoute.delete('/:id',  authUser, OrganitationController.delete);

module.exports = organitationRoute;