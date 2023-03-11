'use strict'

var rightConsoleButton = document.getElementById("rightConsoleButton");
var leftConsoleButton = document.getElementById("leftConsoleButton");
var upConsoleButton = document.getElementById("upConsoleButton");
var aConsoleButton = document.getElementById("aConsoleButton");
var bConsoleButton = document.getElementById("bConsoleButton");

//rightConsoleButton.onclick = function() {
//	keys.right = true;
//}

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

