const _ = require('lodash');
const debug = require('debug')('email:server');

const normalizePort = (val) => {
  const port = parseInt(val, 10);

  if (_.isNaN(port)) return val;
  if (port >= 0) return port;

  return false;
};

const onError = (port) => {
  return (error) => {
    if (error.syscall !== 'listen') {
      throw error;
    }

    const bind = typeof port === 'string'
      ? `Pipe ${port}`
      : `Port ${port}`;

    switch (error.code) {
      case 'EACCES':
        debug(`${bind} requires elevated privileges`);
        process.exit(1);
        break;
      case 'EADDRINUSE':
        debug(`${bind} is already in use`);
        process.exit(1);
        break;
      default:
        throw error;
    }
  };
};

const onListening = (server) => {
  return () => {
    const addr = server.address();
    const bind = typeof addr === 'string'
      ? `pipe ${addr}`
      : `port ${addr.port}`;
    console.log(`Listening on ${bind}`);
  };
};

module.exports = {
  normalizePort,
  onError,
  onListening,
};
