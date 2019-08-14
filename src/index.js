const http = require('http');
const app = require('./app');

const { normalizePort, onError, onListening } = require('./helpers');

const port = normalizePort(process.env.PORT || '3001');
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError(port));
server.on('listening', onListening(server));
