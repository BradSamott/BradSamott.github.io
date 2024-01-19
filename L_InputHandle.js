'use strict'

var inputBox = document.getElementById("inputBox");
var submitButton = document.getElementById("submitButton");
var clearButton = document.getElementById("clearButton");
var clearObjectsButton = document.getElementById("clearObjectsButton");
//var objectViewer = document.getElementById("objectViewer");
//var debugObjectList = [];

var DevObjects = document.getElementById("DevObjects");
var CurrSkeletonTable = document.getElementById("CurrSkeletonTable");

var createObjectButton = document.getElementById("createObjectButton");
var vertexModeButton = document.getElementById("vertexModeButton");
var radialPointModeButton = document.getElementById("radialPointModeButton");
var refreshDevObjectTableButton = document.getElementById("refreshDevObjectTableButton");
var PrintSkeletonButton = document.getElementById("PrintSkeletonButton");
var PrintAnimationButton = document.getElementById("PrintAnimationButton");

var currentFocusedObject = null;

createObjectButton.onclick = function() {
	if(DefaultDevGlobals.currNewObject == null) {
		var GOJ = createGOJsonFromString('GameObject -d');
		var GOObj = createGOFromJSON(GOJ,1);
		oHandlerDev.addObject(GOObj);
		
		DefaultDevGlobals.currNewObject = GOObj;
		
		//console.log(DefaultDevGlobals.currNewObject);
	} else {
		DefaultDevGlobals.currNewObject = null;
	}
}

vertexModeButton.onclick = function() {
	DefaultDevGlobals.mode = 'vertex';
}

radialPointModeButton.onclick = function() {
	DefaultDevGlobals.mode = 'radialPoint';
}

refreshDevObjectTableButton.onclick = function() {
	var tbodyRef = document.createElement('tbody');
	
	var tbodyRef_Old = DevObjects.getElementsByTagName('tbody')[0];
	for(var i = 0; i < oHandlerDev.Objects.length; i++) {
		//console.log(oHandlerDev.Objects[i]);
		
		var generativeText = 'GameObject ';
		
		var newRow = tbodyRef.insertRow();
		
		if(oHandlerDev.Objects[i].position.x != null) {
			var newCellX = newRow.insertCell();
			var newTextX = document.createTextNode('x: ' + oHandlerDev.Objects[i].position.x);
			newCellX.appendChild(newTextX);
			
			generativeText = generativeText + '-x ' + oHandlerDev.Objects[i].position.x + ' '
		}
		
		if(oHandlerDev.Objects[i].position.y != null) {
			var newCellY = newRow.insertCell();
			var newTextY = document.createTextNode('y: ' + oHandlerDev.Objects[i].position.y);
			newCellY.appendChild(newTextY);
			
			generativeText = generativeText + '-y ' + oHandlerDev.Objects[i].position.y + ' '
		}
		
		var vertexCellText = '';
		if(oHandlerDev.Objects[i].vertices != null) {
			for(var j = 0; j < oHandlerDev.Objects[i].vertices.length; j++) {
				console.log(oHandlerDev.Objects[i].vertices);
				vertexCellText = vertexCellText + 'v' + j + ': ('+ oHandlerDev.Objects[i].vertices[j].offX + ',' + oHandlerDev.Objects[i].vertices[j].offY + ') '
				generativeText = generativeText + '-v ' + oHandlerDev.Objects[i].vertices[j].offX + ' ' + oHandlerDev.Objects[i].vertices[j].offY + ' '
			}
		}
		if(oHandlerDev.Objects[i].radialPoints != null) {
			for(var j = 0; j < oHandlerDev.Objects[i].radialPoints.length; j++) {
				//console.log(oHandlerDev.Objects[i].vertices);
				//vertexCellText = vertexCellText + 'v' + j + ': ('+ oHandlerDev.Objects[i].vertices[j].offX + ',' + oHandlerDev.Objects[i].vertices[j].offY + ') '
				generativeText = generativeText + '-rp ' + oHandlerDev.Objects[i].radialPoints[j].offX + ' ' + oHandlerDev.Objects[i].radialPoints[j].offY + ' ' + oHandlerDev.Objects[i].radialPoints[j].radius + ' '
			}
		}
		var newCellV = newRow.insertCell();
		var newTextV = document.createTextNode(vertexCellText);
		newCellV.appendChild(newTextV);
		
		var newCellGT = newRow.insertCell();
		var newTextGT = document.createTextNode(generativeText);
		newCellGT.appendChild(newTextGT);
		
		var newCellSel = newRow.insertCell();
		var newTextSel = document.createTextNode('Select');
		newCellSel.onclick = focusOnObject;
		newCellSel.appendChild(newTextSel);
	}
	
	tbodyRef_Old.parentNode.replaceChild(tbodyRef, tbodyRef_Old)
}

var storedAnimation = [];

PrintSkeletonButton.onclick = function() {
	for(var i = 0; i < oHandlerDev.Objects.length; i++) {
		if(oHandlerDev.Objects[i].skeletalJoints.length > 0) {
			var jointText = '';
			for(var j = 0; j < oHandlerDev.Objects[i].skeletalJoints.length; j++) {
				if(jointText == '') {
					jointText = '{offX: '+oHandlerDev.Objects[i].skeletalJoints[j].offX+', offY: '+oHandlerDev.Objects[i].skeletalJoints[j].offY+'}'
				} else {
					jointText = jointText + '\n' + ',{offX: '+oHandlerDev.Objects[i].skeletalJoints[j].offX+', offY: '+oHandlerDev.Objects[i].skeletalJoints[j].offY+'}'
				}
			}
			
			console.log('{ ' + '\n' + 'jointOffsets: [' + '\n' + jointText + '\n' + ']' + '\n' + ', Duration: 10' + '\n' + ', LocalCounter: 0' + '\n' + '}');
			storedAnimation.push('{ ' + '\n' + 'jointOffsets: [' + '\n' + jointText + '\n' + ']' + '\n' + ', Duration: 10' + '\n' + ', LocalCounter: 0' + '\n' + '}');
		}
	}
}

PrintAnimationButton.onclick = function() {
	var resultText = ''
	for(var i = 0; i < storedAnimation.length; i++) {
		resultText = resultText + '\n' + storedAnimation[i];
	}
	console.log(resultText);
}

function focusOnObject() {
	console.log('SELECT');
	console.log(this.parentNode.rowIndex);
	
	var currObj = this.parentNode.rowIndex;
	
	var tbodyRef = document.createElement('tbody');
	
	var tbodyRef_Old = CurrSkeletonTable.getElementsByTagName('tbody')[0];
	
	currentFocusedObject = oHandlerDev.Objects[currObj];
	
	for(var i = 0; i < oHandlerDev.Objects[currObj].skeletalJoints.length; i++) {
		var newRow = tbodyRef.insertRow();
	
		var newCellIndex = newRow.insertCell();
		var newTextIndex = document.createTextNode(i);
		newCellIndex.appendChild(newTextIndex);
		
		var newCelloffX = newRow.insertCell();
		var newTextoffX = document.createTextNode(oHandlerDev.Objects[currObj].skeletalJoints[i].offX);
		newCelloffX.appendChild(newTextoffX);
		
		var newCelloffY = newRow.insertCell();
		var newTextoffY = document.createTextNode(oHandlerDev.Objects[currObj].skeletalJoints[i].offY);
		newCelloffY.appendChild(newTextoffY);
		
		var newCellUp = newRow.insertCell();
		var newTextUp = document.createTextNode('Up');
		newCellUp.onclick = moveJointUp;
		newCellUp.appendChild(newTextUp);
		
		var newCellDown = newRow.insertCell();
		var newTextDown = document.createTextNode('Down');
		newCellDown.onclick = moveJointDown;
		newCellDown.appendChild(newTextDown);
		
		var newCellLeft = newRow.insertCell();
		var newTextLeft = document.createTextNode('Left');
		newCellLeft.onclick = moveJointLeft;
		newCellLeft.appendChild(newTextLeft);
		
		var newCellRight = newRow.insertCell();
		var newTextRight = document.createTextNode('Right');
		newCellRight.onclick = moveJointRight;
		newCellRight.appendChild(newTextRight);
	}
		
	tbodyRef_Old.parentNode.replaceChild(tbodyRef, tbodyRef_Old)	
	
}

function moveJointUp() {
	console.log(this.parentNode.rowIndex);
	
	var currJoint = this.parentNode.rowIndex;
	
	currentFocusedObject.skeletalJoints[currJoint].offY = currentFocusedObject.skeletalJoints[currJoint].offY - 1;
}

function moveJointDown() {
	console.log(this.parentNode.rowIndex);
	
	var currJoint = this.parentNode.rowIndex;
	
	currentFocusedObject.skeletalJoints[currJoint].offY = currentFocusedObject.skeletalJoints[currJoint].offY + 1;
}

function moveJointLeft() {
	console.log(this.parentNode.rowIndex);
	
	var currJoint = this.parentNode.rowIndex;
	
	currentFocusedObject.skeletalJoints[currJoint].offX = currentFocusedObject.skeletalJoints[currJoint].offX - 1;
}

function moveJointRight() {
	console.log(this.parentNode.rowIndex);
	
	var currJoint = this.parentNode.rowIndex;
	
	currentFocusedObject.skeletalJoints[currJoint].offX = currentFocusedObject.skeletalJoints[currJoint].offX + 1;
}

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

clearButton.onclick = function() {
	//alert(inputBox.value);
	
	inputBox.value = "";
}

clearObjectsButton.onclick = function() {
	//alert(inputBox.value);
	
	for(var i = 0; i < oHandlerDev.Objects.length; i++) {
		if(oHandlerDev.Objects[i].tag != 'debugger') {
			oHandlerDev.removeObjectSafe(oHandlerDev.Objects[i],oHandlerDev.Objects[i]);
		}
	}
	
}

//canvasBackground.style.background = '#000000'