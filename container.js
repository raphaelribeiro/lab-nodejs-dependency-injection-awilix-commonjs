const { createContainer, asFunction, asValue, asClass } = require('awilix');
const { scopePerRequest } = require('awilix-express');

const router = require('./router.js');
const server = require('./server.js');
const app = require('./app.js');

const container = createContainer();

container.register({
  router: asFunction(router),
  server: asClass(server),
  app: asClass(app),
  containerMiddleware: asValue(scopePerRequest(container))
});

container.loadModules(
  [
    'src/controllers/*.js',
    'src/services/*.js',
    'src/repositories/*.js'
  ],
  {
    formatName: 'camelCase'
  }
);

module.exports = container;
