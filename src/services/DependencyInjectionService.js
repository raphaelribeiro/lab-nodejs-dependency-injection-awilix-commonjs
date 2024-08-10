module.exports = ({ dependencyInjectionRepository }) => ({
  execute: () => {
    console.log('----- service!');
    dependencyInjectionRepository.execute();
  }
});
