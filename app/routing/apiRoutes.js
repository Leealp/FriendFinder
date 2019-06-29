var friends = require("../data/friends.js");

module.exports = function(app){

	app.get("/api/friends", function(req,res){
		res.json(friends);
	});


	app.post("/api/friends", function(req,res){
		var bestMatch = {
			name: "",
			photo: "",
			friendDifference: 1000
		};

		//we take the result from the user's survey then we POST and parse it
		var userData = req.body;
		var userScores = userData.scores;

		//we use this variable to calculate the difference between the user's scores and the scores of each potential friend in the database.
		var totalDifference = 0;

		//we loop through all the potential friends in the database
		for(var i = 0; i<friends.length; i++){
			// console.log(friends[i]);

			//then we loop through all the scores of the potential friends
			for(var j = 0; j < friends.length; j++){

				//here we calculate the difference between the scores and add them into totalDifference
				totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
				if(totalDifference <= bestMatch.friendDifference){
					//reset the bestMatch to be the new friend.
					bestMatch.name = friends[i].name;
					bestMatch.photo = friends[i].photo;
					bestMatch.friendDifference = totalDifference;

				}

			}
		}
		res.json(bestMatch);

		//save the user's data into the database
		friends.push(userData);








	});




}





































