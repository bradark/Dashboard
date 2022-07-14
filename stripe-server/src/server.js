//* Stripe Server *//
const https = require('https');
const fs = require('fs');
var path = require('path');

const app = require('./app');

const PORT = 3002;

const httpsCredentials = {
    key: fs.readFileSync(path.resolve('./src/selfsigned.key')),
    cert: fs.readFileSync(path.resolve('./src/selfsigned.crt'))
}

const server = https.createServer(httpsCredentials, app);

server.listen(PORT, () => {
    console.log(`Dashboard Server Listening on PORT:${PORT}`);
})