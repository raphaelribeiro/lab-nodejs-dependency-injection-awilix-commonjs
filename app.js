class App {
    constructor({ server }) {
        this.server = server;
    }

    start() {
        this.server.start();
    }
}

module.exports = App;