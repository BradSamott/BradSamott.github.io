var ScoreGlobals = {
	scoreJSON: null,
	postScoreJSON: null
}

function GetScores(gameArg) {
	ScoreGlobals.scoreJSON = null;
	
	const xhr = new XMLHttpRequest();
	//xhr.open("GET", "http://ec2-3-86-107-79.compute-1.amazonaws.com:3000/scores?game=SmallGame0");
	xhr.open("GET", "http://ec2-44-218-172-188.compute-1.amazonaws.com/scores?game=SmallGame0");
	
	xhr.responseType = "json";
	xhr.onload = () => {
	  console.log(xhr.response);
	  ScoreGlobals.scoreJSON = xhr.response;
	};
	
	xhr.send();
	
}

function PostScores(gameArg,gameScore,gameUser) {
	ScoreGlobals.postScoreJSON = null;
	
	const xhr = new XMLHttpRequest();
	//xhr.open("POST", "http://ec2-3-86-107-79.compute-1.amazonaws.com:3000/upload/score");
	xhr.open("POST", "http://ec2-44-218-172-188.compute-1.amazonaws.com/upload/score");
	
	xhr.setRequestHeader("Accept", "application/json");
	xhr.setRequestHeader("Content-Type", "application/json");
	
	xhr.onreadystatechange = function () {
	  if (xhr.readyState === 4) {
		console.log(xhr.status);
		console.log(xhr.responseText);
		ScoreGlobals.postScoreJSON = JSON.parse(xhr.responseText);
	  }
    };
	
	let dataJ = {
		game: gameArg,
		score: gameScore,
		user: gameUser
	};
	
	var data = JSON.stringify(dataJ);
	
	xhr.send(data);
	
}

//GetScores('SmallGame0');

//PostScores('SmallGame0');