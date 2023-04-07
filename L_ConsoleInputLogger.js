'use strict'

var ConsoleButtons = document.getElementById("ConsoleButtons");

var rightConsoleButton = document.getElementById("rightConsoleButton");
var leftConsoleButton = document.getElementById("leftConsoleButton");
var upConsoleButton = document.getElementById("upConsoleButton");
var downConsoleButton = document.getElementById("downConsoleButton");
var aConsoleButton = document.getElementById("aConsoleButton");
var bConsoleButton = document.getElementById("bConsoleButton");
var enterConsoleButton = document.getElementById("enterConsoleButton");

//rightConsoleButton.onclick = function() {
//	keys.right = true;
//}

ConsoleButtons.addEventListener("touchstart", StopDefault);

function StopDefault(evt) {
	evt.preventDefault();
}

//RIGHT BUTTON
rightConsoleButton.onmousedown = function() {
	keys.right = true;
}

rightConsoleButton.onmouseup = function() {
	keys.right = false;
}

rightConsoleButton.onmouseleave = function() {
	keys.right = false;
}

rightConsoleButton.ontouchstart = function() {
	keys.right = true;
}

rightConsoleButton.ontouchend = function() {
	keys.right = false;
}


//LEFT BUTTON
leftConsoleButton.onmousedown = function() {
	keys.left = true;
}

leftConsoleButton.onmouseup = function() {
	keys.left = false;
}

leftConsoleButton.onmouseleave = function() {
	keys.left = false;
}

leftConsoleButton.ontouchstart = function() {
	keys.left = true;
}

leftConsoleButton.ontouchend = function() {
	keys.left = false;
}


//UP BUTTON
upConsoleButton.onmousedown = function() {
	keys.up = true;
}

upConsoleButton.onmouseup = function() {
	keys.up = false;
}

upConsoleButton.onmouseleave = function() {
	keys.up = false;
}

upConsoleButton.ontouchstart = function() {
	keys.up = true;
}

upConsoleButton.ontouchend = function() {
	keys.up = false;
}


//A BUTTON
aConsoleButton.onmousedown = function() {
	keys.up = true;
}

aConsoleButton.onmouseup = function() {
	keys.up = false;
}

aConsoleButton.onmouseleave = function() {
	keys.up = false;
}

aConsoleButton.ontouchstart = function() {
	keys.up = true;
}

aConsoleButton.ontouchend = function() {
	keys.up = false;
}

//B BUTTON
bConsoleButton.onmousedown = function() {
	keys.space = true;
}

bConsoleButton.onmouseup = function() {
	keys.space = false;
}

bConsoleButton.onmouseleave = function() {
	keys.space = false;
}

bConsoleButton.ontouchstart = function() {
	keys.space = true;
}

bConsoleButton.ontouchend = function() {
	keys.space = false;
}

//DOWN BUTTON
downConsoleButton.onmousedown = function() {
	keys.down = true;
}

downConsoleButton.onmouseup = function() {
	keys.down = false;
}

downConsoleButton.onmouseleave = function() {
	keys.down = false;
}

downConsoleButton.ontouchstart = function() {
	keys.down = true;
}

downConsoleButton.ontouchend = function() {
	keys.down = false;
}

//ENTER BUTTON
enterConsoleButton.onmousedown = function() {
	keys.enter = true;
}

enterConsoleButton.onmouseup = function() {
	keys.enter = false;
}

enterConsoleButton.onmouseleave = function() {
	keys.enter = false;
}

enterConsoleButton.ontouchstart = function() {
	keys.enter = true;
}

enterConsoleButton.ontouchend = function() {
	keys.enter = false;
}

