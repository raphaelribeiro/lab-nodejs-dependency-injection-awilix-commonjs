const { createContainer } = require('awilix');

const container = createContainer({
  strict: true
});

container.loadModules(
  ['src/controllers/*.js', 'src/services/*.js', 'src/repositories/*.js'],
  {
    formatName: 'camelCase'
  }
);

module.exports = container;
