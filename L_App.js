'use strict'

//Canvas Used for background images
var canvasBackground = document.getElementById("canvasBG");
var ctxBackground = canvasBackground.getContext("2d");

var canvasBackgroundDev = document.getElementById("canvasBGDev");
var ctxBackgroundDev = canvasBackgroundDev.getContext("2d");

//Canvas Used for in play areas
var canvasPlay = document.getElementById("canvasPL");
var ctxPlay = canvasPlay.getContext("2d");

var canvasPlayDev = document.getElementById("canvasPLDev");
var ctxPlayDev = canvasPlayDev.getContext("2d");

//Canvas Used for foreground images
var canvasForeground = document.getElementById("canvasFG");
var ctxForeground = canvasForeground.getContext("2d");

var canvasForegroundDev = document.getElementById("canvasFGDev");
var ctxForegroundDev = canvasForegroundDev.getContext("2d");

//Canvas Used for the grid
var canvasGrid = document.getElementById("canvasGD");
var ctxGrid = canvasGrid.getContext("2d");

var canvasGridDev = document.getElementById("canvasGDDev");
var ctxGridDev = canvasGridDev.getContext("2d");

//Canvas Used for a clickable UI
var canvasUserInterface = document.getElementById("canvasUI");
var ctxUserInterface = canvasUserInterface.getContext("2d");

var canvasUserInterfaceDev = document.getElementById("canvasUIDev");
var ctxUserInterfaceDev = canvasUserInterfaceDev.getContext("2d");

var oHandler = new ObjectHandler();

var oHandlerDev = new ObjectHandler();

var paused = false;
var frameFlip = false;

var GlobalVars = {};

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
		controllerInput();
		oHandler.tickObjects();
		oHandler.checkCollisions();
		oHandler.renderObjects(ctxPlay,canvasPlay, ctxBackground, canvasBackground, ctxForeground, canvasForeground, ctxUserInterface, canvasUserInterface);
		oHandler.renderTextObjects(ctxPlay,canvasPlay, ctxBackground, canvasBackground, ctxForeground, canvasForeground, ctxUserInterface, canvasUserInterface);
		oHandler.cBuff = [];
	} else if(frameFlip && paused) {
		controllerInput();
		oHandler.tickObjects();
		oHandler.checkCollisions();
		oHandler.renderObjects(ctxPlay,canvasPlay, ctxBackground, canvasBackground, ctxForeground, canvasForeground, ctxUserInterface, canvasUserInterface);
		oHandler.renderTextObjects(ctxPlay,canvasPlay, ctxBackground, canvasBackground, ctxForeground, canvasForeground, ctxUserInterface, canvasUserInterface);
		oHandler.cBuff = [];
		frameFlip = false;
	}
	oHandler.systemTick();
	
	if(!paused) {
		controllerInput();
		oHandlerDev.tickObjects();
		oHandlerDev.checkCollisions();
		oHandlerDev.renderObjects(ctxPlayDev,canvasPlayDev, ctxBackgroundDev, canvasBackgroundDev, ctxForegroundDev, canvasForegroundDev, ctxUserInterfaceDev, canvasUserInterfaceDev);
		oHandlerDev.renderTextObjects(ctxPlayDev,canvasPlayDev, ctxBackgroundDev, canvasBackgroundDev, ctxForegroundDev, canvasForegroundDev, ctxUserInterfaceDev, canvasUserInterfaceDev);
		oHandlerDev.cBuff = [];
	}
	oHandlerDev.systemTick();
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