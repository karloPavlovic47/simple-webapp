const express = require('express');
const { PUBLIC_DIR } = require('./config/paths');
const { initializeStorage } = require('./services/storage');
const apiRouter = require('./routes/api');

function createApp() {
  const app = express();

  initializeStorage();

  app.use(express.static(PUBLIC_DIR));
  app.use(express.json());

  app.use('/api', apiRouter);

  return app;
}

module.exports = {
  createApp,
};
