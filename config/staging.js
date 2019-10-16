const _ = require('lodash');

const { env } = process;

const config = {
  logLevel: 'warn',
  mongodb: {
    password: _.get(env, 'MONGODB_PASSWORD'),
  },
};

module.exports = config;
