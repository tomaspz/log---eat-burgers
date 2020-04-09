// EXPRESS
var express = require("express");
var PORT = process.env.PORT || 3000;
var app = express();

//FAVICON
var favicon = require('serve-favicon')
var path = require('path');

// MIDDLEWARE
app.use(favicon(path.join(__dirname, 'favicon.ico')));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HANDLEBARS
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// ROUTES
var routes = require("./controllers/burgersController.js");
app.use(routes);

// LISTEN
app.listen(PORT, function() {
  console.log(`App listening at http://localhost:${PORT}`);
});
