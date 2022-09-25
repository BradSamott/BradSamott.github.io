'use strict'

var inputBox = document.getElementById("inputBox");
var submitButton = document.getElementById("submitButton");
var clearButton = document.getElementById("clearButton");
var clearObjectsButton = document.getElementById("clearObjectsButton");
//var objectViewer = document.getElementById("objectViewer");
//var debugObjectList = [];

function debugRemoveObject() {
	console.log(this.closest('tr').rowIndex);
	
	var objectInd = this.closest('tr').rowIndex - 1;
	
	oHandler.removeObject(debugObjectList[objectInd]);
	
	//debugObjectList.splice(debugObjectList[objectInd], 1);
	
	//this.closest('tr').remove();
}

submitButton.onclick = function() {
	//alert(inputBox.value);
	
	var inputArr = inputBox.value.replaceAll('\n','').split(';')
	
	for(var i = 0; i < inputArr.length; i++) {
		var ArgumentArr = inputArr[i].split(' ');
		console.log(ArgumentArr[0]);
		if(ArgumentArr[0] == 'GameObject') {
			var GOJ = createGOJsonFromString(inputArr[i]);
			var GOObj = createGOFromJSON(GOJ,1);
			oHandlerDev.addObject(GOObj);
			
			/*
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
			*/
			
		} else if(ArgumentArr[0] == 'CanvasEdit') {
			var CEJ = createCanvasArgJSONFromString(inputArr[i]);
			EditCanvasFromJSON(CEJ);
		} else if(ArgumentArr[0] == 'TextObject') {
			var GOJ = createTOJsonFromString(inputArr[i]);
			var GOObj = createTOFromJSON(GOJ);
			oHandlerDev.addTextObject(GOObj);
		} else if(ArgumentArr[0] == 'Run') {
			eval(ArgumentArr[1] + "();");
		} else if(ArgumentArr[0] == 'AreaSize') {
			
		} else {
			console.log('Argument Not Recognized');
		}
	}
	
	//console.log(oHandler.Objects);
	//console.log(oHandler.textObjects);
}

clearButton.onclick = function() {
	//alert(inputBox.value);
	
	inputBox.value = "";
}

clearObjectsButton.onclick = function() {
	//alert(inputBox.value);
	
	oHandler.removeAllObjects();
	debugObjectList = [];
	console.log(objectViewer.rows.length);
	for(var i = objectViewer.rows.length - 1; i > 0; i--) {
		objectViewer.deleteRow(i);
	}
}

//canvasBackground.style.background = '#000000'