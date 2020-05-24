const express = require('express');
const sectorRouter = require('./api/sectors');
const parishRouter = require('./api/parishes');
const noveltyRouter = require('./api/novelties');
const applicationRouter = require('./api/applications');
const communityRouter = require('./api/communities');
const userRouter = require('./api/users');

module.exports = (app) => {
  app.use(express.json());
  app.use('/api/sectors', sectorRouter);
  app.use('/api/applications', applicationRouter);
  app.use('/api/novelties', noveltyRouter);
  app.use('/api/parishes', parishRouter);
  app.use('/api/communities', communityRouter);
  app.use('/api/users', userRouter);
};
