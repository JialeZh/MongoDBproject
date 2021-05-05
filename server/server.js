var express = require('express');
var cors = require('cors');
  app = express(),
  mongoose = require('mongoose'),
  Pantry = require('./components/models/pantryListModel'),
  bodyParser = require('body-parser');
  app.use(cors({origin:true,credentials: true}));

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/Pantrydbyt'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./components/routes/pantryListRoutes');
routes(app);



app.listen(3000, () => {
  console.log("http://localhost:3000")
})