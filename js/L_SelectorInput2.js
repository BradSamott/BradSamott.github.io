'use strict'

var Game = document.getElementById("Game");
var playButton = document.getElementById("playButton");

var runnableList = [
	{
		id: 'steamboatbubbly',
		runnable: runsteamboatbubbly
	}
];

playButton.onclick = function() {
	var enteredGame = Game.value;
	enteredGame = enteredGame.replaceAll(' ','');
	enteredGame = enteredGame.toLowerCase();
	//enteredGame = 'run' + enteredGame;
	console.log('Entered: ' + enteredGame);
	
	for(var i = 0; i < runnableList.length; i++) {
		if(enteredGame == runnableList[i].id) {
			runnableList[i].runnable();
		}
	}
}