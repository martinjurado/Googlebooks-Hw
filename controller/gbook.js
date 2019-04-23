const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Gbook.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Gbook.find(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Gbook.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Gbook.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log(err));
  },
  remove: function(req, res) {
    db.Gbook.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
