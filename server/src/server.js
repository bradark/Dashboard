const http = require('http');
//const fs = require('fs');

const app = require('./app');

const PORT = 3000;

/*
const httpsCredentials = {
    key: fs.readFileSync(('./src/selfsigned.key')),
    cert: fs.readFileSync(('./src/selfsigned.crt'))
}
*/

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Dashboard Server Listening on PORT:${PORT}`);
})