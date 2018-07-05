if (process.env.NODE_ENV = "dev") {
    require("babel-register")();
    const { bootstrap } = require("./src/bootstrap");
    bootstrap.then(server => server.start());
} else {
    const { bootstrap } = require("./app/bootstrap");
    bootstrap.then(server => server.start());
}   