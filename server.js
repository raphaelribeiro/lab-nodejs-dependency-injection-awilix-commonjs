const express = require('express');

class Server {
  constructor({ router, containerMiddleware }) {
    this.router = router;
    this.containerMiddleware = containerMiddleware;
  }

  start() {
    const app = express();

    app.use(this.containerMiddleware);
    app.use(this.router);

    app.listen(3000, () => {
      console.log('----- server ok!');
    });
  }
}

module.exports = Server;
