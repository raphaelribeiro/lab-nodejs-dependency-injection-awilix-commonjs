const express = require('express');
const { scopePerRequest } = require('awilix-express');

const container = require('./container.js')

module.exports = ({
  start: () => {    
    const app = express();

    app.use(scopePerRequest(container));

    app.get('/get', container.cradle.dependencyInjectionController.execute);

    app.listen(3000, () => {
      console.log('----- server ok!');
    });
  }
});
