const Model = require('../models/Sector');

const get = (req, res) => {
  let query = req.query;

  Model.find(query)
    .then(models => res.status(200).json(models))
    .catch(err => res.status(400).json(err.message));
};

const store = (req, res) => {
  new Model(req.body).save()
    .then(model => res.status(200).json(model));
};

const update = (req, res) => {
  console.log(req.body)
  const { id, ...data } = req.body;

  Model.findByIdAndUpdate(id, data, {new: true})
    .then(model => res.status(200).json(model))
    .catch(err => res.status(400).json(err.message));
};

// const destroy = (req, res) => {  };

module.exports = { get, store, update };
