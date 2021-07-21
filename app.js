//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req,res){
  res.render("index");
});

app.get("/:pageName", function(req,res){
  res.render(req.params.pageName);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log("Server started on port " + PORT);
});
