const Model = require('../models/Sector');

function get(req, res) {
  res.json({
    'true': 'it works'
  });
}

function store(req, res) {
  const data = {
    name: req.body.name
  }

  new Model(data).save()
    .then(model => res.status(200).json(model));
}

module.exports = { get, store };
