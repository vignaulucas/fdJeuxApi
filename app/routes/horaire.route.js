const controller = require('../controllers/horaire.controller');
const { isLoggedIn, isAdmin } = require('../middleware/auth');

module.exports = app => {
    const router = require('express').Router();
    
    router.get('/',isLoggedIn,controller.getAllHoraire);
    
    router.get('/:id/:idPlanning', isLoggedIn,controller.getbyJourId);

    router.post('/', isLoggedIn,controller.create);

    router.put('/:id', isLoggedIn,controller.modifyHoraire);
    
    router.put('/heuredebut', isLoggedIn,controller.modifyHeureDebut);

    router.put('/heurefin', isLoggedIn, controller.modifyHeureFin);
    
    router.delete('/:id', isLoggedIn, controller.deleteById);
    
    router.delete('/deletebyjour/:id', isLoggedIn, controller.deleteByJourId);
    
    app.use('/horaire', router);
    }
