const ServerlessClient = require('serverless-postgres');

module.exports.client = new ServerlessClient({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "postgres",
    port: "5432",
    debug: true,
    delayMs: 3000,
});