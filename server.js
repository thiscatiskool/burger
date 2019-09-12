var express = require("express");
var handbars = require("express-handlebars");
//var mysql = require("mysql");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app = express();
app.use(express.static(__dirname + "/public"));
var PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(methodOverride('_method'));

app.engine("handlebars", handbars({
    defaultLayout: "main"
}));

app.set("view engine", "handlebars");

var routes = require("./controllers/routes");

app.use("/", routes);

app.listen(PORT);
