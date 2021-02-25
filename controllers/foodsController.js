const db = require("../models");

// Defining methods for the FoodsController
module.exports = {
  findAll: function(req, res) {
    db.Food
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Food
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Food
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Food
     .findOneAndUpdate({ _id: req.params.id }, 
        {$set:{name: req.body.name, reservation: req.body.reservation, notes: req.body.notes}}, {new: true})
     .then(dbModel => res.json(dbModel)) 
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Food
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
