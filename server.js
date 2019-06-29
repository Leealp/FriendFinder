var express = require("express");
var app = express();
// var path = require("path");		//The Path module provides a way of working with directories and file paths
var bodyParser = require('body-parser') //Parse incoming request bodies in a middleware before your handlers, available under the req.body property. 
										//This body-parser module parses the JSON, buffer, string and URL encoded data submitted using HTTP POST request.

var PORT = process.env.PORT || 3001; // let the port be set by heroku or use port 3000
 
// create application/json parser. bodyParser.json returns middleware that only parses json
// var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: true })) //Returns middleware that only parses urlencoded bodies
 
// parse various different custom JSON types as JSON
// app.use(bodyParser.json({ type: 'application/*+json' }))
 
// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
 
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))


require("./app/routing/apiRoutes.js")(app);  // this includes the api route file in the server.js file
require("./app/routing/htmlRoutes.js")(app); // this includes the html route file in the server.js file

app.listen(PORT, function(){
	console.log("App listening on PORT: "+ PORT);


})










