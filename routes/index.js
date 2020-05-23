const express = require('express');
const sectorRouter = require('./api/sectors');
const parishRouter = require('./api/parishes');
const communityRouter = require('./api/communities');
const userRouter = require('./api/users');

module.exports = function(app) {
  app.use(express.json());
  app.use('/api/sectors', sectorRouter);
  app.use('/api/parishes', parishRouter);
  app.use('/api/communities', communityRouter);
  app.use('/api/users', userRouter);
}
