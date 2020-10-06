module.exports = (router) => {
    
    const deltasController = require('../controllers/delta.controller');

    router.get('/deltas', deltasController.findAll);

}