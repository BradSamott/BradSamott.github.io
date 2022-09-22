console.log("Test Print");

var testcode = 'GameObject -p lastPStatus 0 -su uiLogger;'
testcode = testcode + 'GameObject -x 50 -y 300 -v 0 0 -v 600 0 -v 600 16 -v 0 16 -d -t wall;'
testcode = testcode + 'GameObject -x 50 -y 50 -v 0 0 -v 36 0 -v 36 54 -v 0 54 -p BatReady 1 -p xv 0 -p yv 0 -p jumpable 1 -p gravity 6 -p slideStateX 2 -p slideStateY 2 -p height 54 -d -u platformerPlayerMovement -cf platformerPlayerCollide -t player -i createPlatformVector -a PlatformerAnimationPackage -ca 0;'
testcode = testcode + 'GameObject -x 300 -y 250 -rp 18 18 18 -a SniffsAnimationPackage -d -ca 0 -t enemy;'

var inputArr = testcode.value.replaceAll('\n','').split(';')
	
for(var i = 0; i < inputArr.length; i++) {
	var ArgumentArr = inputArr[i].split(' ');
	console.log(ArgumentArr[0]);
	if(ArgumentArr[0] == 'GameObject') {
		var GOJ = createGOJsonFromString(inputArr[i]);
		var GOObj = createGOFromJSON(GOJ);
		oHandler.addObject(GOObj);
		
		debugObjectList.push(GOObj);
		
		var row = objectViewer.insertRow();
		
		var objCol = row.insertCell();
		var img = document.createElement("img");
		img.src = GOObj.defaultFrame;
		objCol.appendChild(img);
		
		var objInd = row.insertCell();
		objInd.innerHTML = "Delete";
		objInd.onclick = debugRemoveObject;
		
		var objStat = row.insertCell();
			
	} else if(ArgumentArr[0] == 'CanvasEdit') {
		var CEJ = createCanvasArgJSONFromString(inputArr[i]);
		EditCanvasFromJSON(CEJ);
	} else if(ArgumentArr[0] == 'TextObject') {
		var GOJ = createTOJsonFromString(inputArr[i]);
		var GOObj = createTOFromJSON(GOJ);
		oHandler.addTextObject(GOObj);
	} else if(ArgumentArr[0] == 'Run') {
		eval(ArgumentArr[1] + "();");
	} else if(ArgumentArr[0] == 'AreaSize') {
		
	} else {
		console.log('Argument Not Recognized');
	}
}