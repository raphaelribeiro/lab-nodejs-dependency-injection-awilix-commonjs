const express = require('express');

module.exports = ({ router, containerMiddleware }) => ({
  start: () => {
    const app = express();

    app.use(containerMiddleware);
    app.use(router);

    app.listen(3000, () => {
      console.log('----- server ok!');
    });
  }
});
