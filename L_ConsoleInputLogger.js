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

/*
ConsoleButtons.addEventListener("touchstart", StopDefault);

function StopDefault(evt) {
	evt.preventDefault();
}
*/

//WHOLE CONSOLE Area
ConsoleButtons.onmousedown = function(e) {
	e.preventDefault();
}

ConsoleButtons.onmouseup = function(e) {
	e.preventDefault();
}

ConsoleButtons.onmouseleave = function(e) {
	e.preventDefault();
}

ConsoleButtons.ontouchstart = function(e) {
	e.preventDefault();
}

ConsoleButtons.ontouchend = function(e) {
	e.preventDefault();
}

//RIGHT BUTTON
rightConsoleButton.onmousedown = function(e) {
	e.preventDefault();
	keys.right = true;
}

rightConsoleButton.onmouseup = function(e) {
	e.preventDefault();
	keys.right = false;
}

rightConsoleButton.onmouseleave = function(e) {
	e.preventDefault();
	keys.right = false;
}

rightConsoleButton.ontouchstart = function(e) {
	e.preventDefault();
	keys.right = true;
}

rightConsoleButton.ontouchend = function(e) {
	e.preventDefault();
	keys.right = false;
}


//LEFT BUTTON
leftConsoleButton.onmousedown = function(e) {
	e.preventDefault();
	keys.left = true;
}

leftConsoleButton.onmouseup = function(e) {
	e.preventDefault();
	keys.left = false;
}

leftConsoleButton.onmouseleave = function(e) {
	e.preventDefault();
	keys.left = false;
}

leftConsoleButton.ontouchstart = function(e) {
	e.preventDefault();
	keys.left = true;
}

leftConsoleButton.ontouchend = function(e) {
	e.preventDefault();
	keys.left = false;
}


//UP BUTTON
upConsoleButton.onmousedown = function(e) {
	e.preventDefault();
	keys.up = true;
}

upConsoleButton.onmouseup = function(e) {
	e.preventDefault();
	keys.up = false;
}

upConsoleButton.onmouseleave = function(e) {
	e.preventDefault();
	keys.up = false;
}

upConsoleButton.ontouchstart = function(e) {
	e.preventDefault();
	keys.up = true;
}

upConsoleButton.ontouchend = function(e) {
	e.preventDefault();
	keys.up = false;
}


//A BUTTON
aConsoleButton.onmousedown = function(e) {
	e.preventDefault();
	keys.up = true;
}

aConsoleButton.onmouseup = function(e) {
	e.preventDefault();
	keys.up = false;
}

aConsoleButton.onmouseleave = function(e) {
	e.preventDefault();
	keys.up = false;
}

aConsoleButton.ontouchstart = function(e) {
	e.preventDefault();
	keys.up = true;
}

aConsoleButton.ontouchend = function(e) {
	e.preventDefault();
	keys.up = false;
}

//B BUTTON
bConsoleButton.onmousedown = function(e) {
	e.preventDefault();
	keys.space = true;
}

bConsoleButton.onmouseup = function(e) {
	e.preventDefault();
	keys.space = false;
}

bConsoleButton.onmouseleave = function(e) {
	e.preventDefault();
	keys.space = false;
}

bConsoleButton.ontouchstart = function(e) {
	e.preventDefault();
	keys.space = true;
}

bConsoleButton.ontouchend = function(e) {
	e.preventDefault();
	keys.space = false;
}

//DOWN BUTTON
downConsoleButton.onmousedown = function(e) {
	e.preventDefault();
	keys.down = true;
}

downConsoleButton.onmouseup = function(e) {
	e.preventDefault();
	keys.down = false;
}

downConsoleButton.onmouseleave = function(e) {
	e.preventDefault();
	keys.down = false;
}

downConsoleButton.ontouchstart = function(e) {
	e.preventDefault();
	keys.down = true;
}

downConsoleButton.ontouchend = function(e) {
	e.preventDefault();
	keys.down = false;
}

//ENTER BUTTON
enterConsoleButton.onmousedown = function(e) {
	e.preventDefault();
	keys.enter = true;
}

enterConsoleButton.onmouseup = function(e) {
	e.preventDefault();
	keys.enter = false;
}

enterConsoleButton.onmouseleave = function(e) {
	e.preventDefault();
	keys.enter = false;
}

enterConsoleButton.ontouchstart = function(e) {
	e.preventDefault();
	keys.enter = true;
}

enterConsoleButton.ontouchend = function(e) {
	e.preventDefault();
	keys.enter = false;
}

