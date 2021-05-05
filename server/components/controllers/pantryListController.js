
var mongoose = require('mongoose'),
  Pantry = mongoose.model('Pantrys');

exports.list_all_pantrys = function(req, res) {
  Pantry.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.create_a_pantry = function(req, res) {
  var new_pantry = new Pantry(req.body);
  new_pantry.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.delete_a_pantry = function(req, res) {
  Pantry.remove({
    _id: req.params.pantryId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ task: 'Pantry successfully deleted' });
  });
};



exports.read_a_pantry = function(req, res) {
  Pantry.findById(req.params.pantryId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

