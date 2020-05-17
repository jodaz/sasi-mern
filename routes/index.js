const express = require('express');
const sectorRouter = require('./api/sectors');

module.exports = function(app) {
  app.use(express.json());
  app.use('/api/sectors', sectorRouter);
}
