console.log("Test Print");

/*
var testcode = 'GameObject -p lastPStatus 0 -su uiLogger;'
testcode = testcode + 'GameObject -x 50 -y 300 -v 0 0 -v 450 0 -v 450 16 -v 0 16 -d -t wall;'
testcode = testcode + 'GameObject -x 50 -y 50 -v 0 0 -v 36 0 -v 36 54 -v 0 54 -p BatReady 1 -p xv 0 -p yv 0 -p jumpable 1 -p gravity 6 -p slideStateX 2 -p slideStateY 2 -p height 54 -d -u platformerPlayerMovement -cf platformerPlayerCollide -t player -pi createPlatformVector -a PlatformerAnimationPackage -ca 0;'
testcode = testcode + 'GameObject -x 300 -y 250 -rp 18 18 18 -a SniffsAnimationPackage -d -ca 0 -t enemy;'
testcode = testcode + 'GameObject -x 150 -y 250 -v 0 0 -v 100 0 -v 100 20 -v 0 20 -d -t platform;'
testcode = testcode + 'GameObject -x 250 -y 250 -v 0 0 -v 100 0 -d -t platform;'
testcode = testcode + 'GameObject -x 475 -y 370 -v 0 0 -v 100 0 -d -t platform;'

console.log(testcode);

var inputArr = testcode.replaceAll('\n','').split(';');
	
for(var i = 0; i < inputArr.length; i++) {
	var ArgumentArr = inputArr[i].split(' ');
	console.log(ArgumentArr[0]);
	if(ArgumentArr[0] == 'GameObject') {
		var GOJ = createGOJsonFromString(inputArr[i]);
		var GOObj = createGOFromJSON(GOJ);
		oHandler.addObject(GOObj);
		
		//debugObjectList.push(GOObj);
		
		//var row = objectViewer.insertRow();
		
		//var objCol = row.insertCell();
		//var img = document.createElement("img");
		//img.src = GOObj.defaultFrame;
		//objCol.appendChild(img);
		
		//var objInd = row.insertCell();
		//objInd.innerHTML = "Delete";
		//objInd.onclick = debugRemoveObject;
		
		//var objStat = row.insertCell();
			
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
*/