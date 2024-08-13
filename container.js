const { createContainer, asFunction, asValue, asClass } = require('awilix');
const { scopePerRequest } = require('awilix-express');

const router = require('./router.js');
const server = require('./server.js');

const container = createContainer({
  strict: true
});

container.loadModules(
  [
    './server.js',
    'src/controllers/*.js',
    'src/services/*.js',
    'src/repositories/*.js'
  ],
  {
    formatName: 'camelCase'
  }
);

container.register({
  router: asFunction(router),
  containerMiddleware: asValue(scopePerRequest(container))
});

module.exports = container;
