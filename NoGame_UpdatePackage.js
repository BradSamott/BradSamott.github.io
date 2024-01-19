function startNoGame() {
	var SelText = '';
	SelText = 'TextObject -x 100 -y 100 -t "No Game Found by That Name" -c black;'
	
	enterObjects(SelText);
}

function UploadNoGame() {
	GameTitle.innerHTML = "No Game Found";
	oHandler.resetCamera();
	oHandler.removeAllObjects();
	
	startNoGame();
}

//UploadNoGame();