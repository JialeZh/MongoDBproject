module.exports = function(app) {
  var pantry_list = require('../controllers/pantryListController');


  app.route('/pantrys')
    .get(pantry_list.list_all_pantrys)
    .post(pantry_list.create_a_pantry);

  app.route('/pantrys/:pantryId')
    .get(pantry_list.read_a_pantry)
    .delete(pantry_list.delete_a_pantry);

};
