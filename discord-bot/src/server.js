const http = require('http');

const app = require('./app');

const PORT = 3003;

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Dashboard Server Listening on PORT:${PORT}`);
})