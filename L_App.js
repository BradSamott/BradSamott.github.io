'use strict'

//Canvas Used for background images
var canvasBackground = document.getElementById("canvasBG");
var ctxBackground = canvasBackground.getContext("2d");

//Canvas Used for in play areas
var canvasPlay = document.getElementById("canvasPL");
var ctxPlay = canvasPlay.getContext("2d");

//Canvas Used for foreground images
var canvasForeground = document.getElementById("canvasFG");
var ctxForeground = canvasForeground.getContext("2d");

//Canvas Used for the grid
var canvasGrid = document.getElementById("canvasGD");
var ctxGrid = canvasGrid.getContext("2d");

//Canvas Used for a clickable UI
var canvasUserInterface = document.getElementById("canvasUI");
var ctxUserInterface = canvasUserInterface.getContext("2d");

var oHandler = new ObjectHandler();

var paused = false;

function gameLoop() {
	/*
	ctxPlay.clearRect(0, 0, canvasPlay.width, canvasPlay.height);
	oHandler.tickObjects();
	oHandler.checkBoundaries();
	oHandler.checkCollision();
	oHandler.renderObjects(ctxPlay);
	
	ctxGrid.clearRect(0, 0, canvasGrid.width, canvasGrid.height);
	oHandler.renderGrid(ctxGrid);
	*/
	//console.log('ticking');
	if(!paused) {
		oHandler.tickObjects();
		oHandler.checkCollisions();
		oHandler.renderObjects(ctxPlay,canvasPlay);
		oHandler.renderTextObjects();
	}
	oHandler.systemTick();
}

// Adding the event listeners
document.addEventListener("keydown",keydown);
document.addEventListener("keyup",keyup);

//Function used to see where on a canvas was clicked
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}

//Setting the loop function to run again and again
//setInterval(gameLoop,22);
setInterval(gameLoop,33);