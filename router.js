const { Router } = require('express');

module.exports = ({ dependencyInjectionController }) => {
    const router = Router();
    
    router.get('/get', dependencyInjectionController.execute);

    return router;
}

