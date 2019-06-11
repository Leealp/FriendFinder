var path = require ("path");

module.exports = function(app){

	app.get("/survey", function(req, res){
		res.sendFile(path.join(_dirname + "/../public/survey.html"));
	});

	app.use(function(req, res){					//if the user is not on a predefine url, bring them to the home page
		res.sendFile(path.join(_dirname + "/../public/home.html"));
	});
}






















































