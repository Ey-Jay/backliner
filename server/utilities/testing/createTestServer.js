const { create } = require('../../models/Band');

function createTestServer() {
  const express = require('express');
  const app = express();

  app.use(express.json());
  app.use('/', require('./testAuth'));
  app.use('/', require('../../routes/v2'));
  app.use(require('../../middleware/error'));

  return app;
}

module.exports = createTestServer;
