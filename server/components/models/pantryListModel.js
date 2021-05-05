var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PantrySchema = new Schema({
  pantry_name: {
    type: String,
    Required: 'Enter Pantry Name'
  },
 pantry_type: {
    type: String,
    Required: 'Enter Pantry Type'
},
   slot_number: {
    type: Number,
    Required: 'Enter Slot Number'
},
});

module.exports = mongoose.model('Pantrys', PantrySchema);
