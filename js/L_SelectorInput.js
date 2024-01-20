'use strict'

var GameTitle = document.getElementById("GameTitle");

var codeScriptElem = null;
var animScriptElem = null;

function enterObjects(inputText) {

	var inputArr = inputText.replaceAll('\n','').split(';');
	
	console.log(inputArr);
	
	for(var i = 0; i < inputArr.length; i++) {
		var ArgumentArr = inputArr[i].split(' ');
		console.log(ArgumentArr[0]);
		if(ArgumentArr[0] == 'GameObject') {
			var GOJ = createGOJsonFromString(inputArr[i]);
			var GOObj = createGOFromJSON(GOJ,0);
			oHandler.addObject(GOObj);			
		} else if(ArgumentArr[0] == 'CanvasEdit') {
			var CEJ = createCanvasArgJSONFromString(inputArr[i]);
			EditCanvasFromJSON(CEJ);
		} else if(ArgumentArr[0] == 'TextObject') {
			var GOJ = createTOJsonFromString(inputArr[i]);
			var GOObj = createTOFromJSON(GOJ);
			oHandler.addTextObject(GOObj);
		} else if(ArgumentArr[0] == 'Run') {
			var functArgs = '';
			for(var j = 2; j < ArgumentArr.length; j++) {
				if(functArgs == '') {
					functArgs = ArgumentArr[j];
				} else {
					functArgs = functArgs + ',' + ArgumentArr[j];
				}
			}
			
			eval(ArgumentArr[1] + "("+functArgs+");");
		} else if(ArgumentArr[0] == 'AreaSize') {
		
		} else {
			console.log('Argument Not Recognized');
		}
	}

}

function enterObjectsDev(inputText) {

	var inputArr = inputText.replaceAll('\n','').split(';');
	
	for(var i = 0; i < inputArr.length; i++) {
		var ArgumentArr = inputArr[i].split(' ');
		console.log(ArgumentArr[0]);
		if(ArgumentArr[0] == 'GameObject') {
			var GOJ = createGOJsonFromString(inputArr[i]);
			var GOObj = createGOFromJSON(GOJ,1);
			oHandlerDev.addObject(GOObj);			
		} else if(ArgumentArr[0] == 'CanvasEdit') {
			var CEJ = createCanvasArgJSONFromString(inputArr[i]);
			EditCanvasFromJSON(CEJ);
		} else if(ArgumentArr[0] == 'TextObject') {
			var GOJ = createTOJsonFromString(inputArr[i]);
			var GOObj = createTOFromJSON(GOJ);
			oHandlerDev.addTextObject(GOObj);
		} else if(ArgumentArr[0] == 'Run') {
			var functArgs = '';
			for(var j = 2; j < ArgumentArr.length; j++) {
				if(functArgs == '') {
					functArgs = ArgumentArr[j];
				} else {
					functArgs = functArgs + ',' + ArgumentArr[j];
				}
			}
			
			eval(ArgumentArr[1] + "("+functArgs+");");
		} else if(ArgumentArr[0] == 'AreaSize') {
		
		} else {
			console.log('Argument Not Recognized');
		}
	}

}