var GameOption = document.getElementById("GameOption");
var DevelopOption = document.getElementById("DevelopOption");

var GameSetting = document.getElementById("GameSetting");
var DevSetting = document.getElementById("DevSetting");

GameOption.onclick= function() {
	GameSetting.style.display = "block";
	DevSetting.style.display = "none";
}

DevelopOption.onclick= function() {
	GameSetting.style.display = "none";
	DevSetting.style.display = "block";
}