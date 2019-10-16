const _ = require('lodash');

const { env } = process;

const config = {
  logLevel: 'warn',
  apiUrl: 'https://awc-production.appspot.com/',
  apiToken: '50f98674afc937a33de54821463e1adcdc83847f',
  mongodb: {
    host: '104.154.92.189',
    username: 'prod',
    password: _.get(env, 'MONGODB_PASSWORD'),
  },
  email: {
    apiKey: '44022a6821f4a0c886efe5545452f630c215e9a6',
  },
};

module.exports = config;
