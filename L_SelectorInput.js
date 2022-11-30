'use strict'

function enterObjects(inputText) {

	var inputArr = inputText.replaceAll('\n','').split(';');
	
	for(var i = 0; i < inputArr.length; i++) {
		var ArgumentArr = inputArr[i].split(' ');
		console.log(ArgumentArr[0]);
		if(ArgumentArr[0] == 'GameObject') {
			var GOJ = createGOJsonFromString(inputArr[i]);
			var GOObj = createGOFromJSON(GOJ);
			oHandler.addObject(GOObj);			
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

}

function UploadTestGame() {
	var testcode = 'GameObject -p lastPStatus 0 -su uiLogger;'
	testcode = testcode + 'GameObject -x 50 -y 300 -v 0 0 -v 450 0 -v 450 16 -v 0 16 -d -t wall;'
	testcode = testcode + 'GameObject -x 50 -y 50 -v 0 0 -v 36 0 -v 36 54 -v 0 54 -rp 18 15 18 -p BatReady 1 -p xv 0 -p yv 0 -p jumpable 1 -p gravity 6 -p slideStateX 2 -p slideStateY 2 -p height 54 -d -u platformerPlayerMovement -cf platformerPlayerCollide -t player -pi createPlatformVector -a PlatformerAnimationPackage -ca 0 -p climbMode 0 -p climbing 0;'
	testcode = testcode + 'GameObject -x 300 -y 250 -rp 18 18 18 -a SniffsAnimationPackage -d -ca 0 -t enemy;'
	testcode = testcode + 'GameObject -x 150 -y 250 -v 0 0 -v 100 0 -v 100 20 -v 0 20 -d -t platform;'
	testcode = testcode + 'GameObject -x 250 -y 250 -v 0 0 -v 100 0 -d -t platform;'
	testcode = testcode + 'GameObject -x 475 -y 370 -v 0 0 -v 100 0 -d -t platform;'
	testcode = testcode + 'GameObject -x 475 -y 230 -v 0 0 -v 100 0 -d -t wall;'
	testcode = testcode + 'GameObject -pi addClickOption -u showClickPosition;'
	testcode = testcode + 'GameObject -x 380 -y 0 -v 0 0 -v 50 0 -v 50 300 -v 0 300 -d -t ladder;'
	testcode = testcode + 'GameObject -x 405 -y -90 -rp 0 0 30 -d -t ladderStopper -cf ladderStopperAction;'
	testcode = testcode + 'GameObject -x 280 -y -5 -v 0 0 -v 300 0 -d -t platform;'
	testcode = testcode + 'GameObject -x 525 -y -350 -v 0 0 -v 50 0 -v 50 300 -v 0 300 -d -t ladder;'
	
	oHandler.removeAllObjects();
	enterObjects(testcode);
}

function UploadAntiGame() {
	var testcode = '';
	
	oHandler.removeAllObjects();
	enterObjects(testcode);
}

function UploadDoomScrollerGame() {
	var testcode = '';
	//testcode = testcode + 'GameObject -x 120 -y 850 -v 0 0 -v 50 0 -v 50 150 -v 0 150 -d -t ladder;'
	//testcode = testcode + 'GameObject -x 145 -y 760 -rp 0 0 30 -d -t ladderStopper -cf ladderStopperAction;'
	
	//testcode = testcode + 'GameObject -x 470 -y 1000 -v 0 0 -v 50 0 -v 50 150 -v 0 150 -d -t ladder;'
	//testcode = testcode + 'GameObject -x 495 -y 910 -rp 0 0 30 -d -t ladderStopper -cf ladderStopperAction;'
	
	testcode = testcode + 'GameObject -x 0 -y 700 -pi moveCameraPosition;'
	testcode = testcode + 'GameObject -x 119 -y 0 -t wall -v 0 0 -v 0 2000 -d;'
	testcode = testcode + 'GameObject -x 521 -y 0 -t wall -v 0 0 -v 0 2000 -d;'
	testcode = testcode + 'GameObject -x 120 -y 1150 -v 0 0 -v 400 0 -t wall -d;'
	//testcode = testcode + 'GameObject -x 120 -y 999 -v 0 0 -v 400 0 -t platform -d -pi createLadderAndStopper -p side right;'
	//testcode = testcode + 'GameObject -x 120 -y 849 -v 0 0 -v 400 0 -t platform -d -pi createLadderAndStopper -p side left;'
	testcode = testcode + 'GameObject -x 125 -y 1090 -v 0 0 -v 36 0 -v 36 54 -v 0 54 -rp 18 15 18 -p BatReady 1 -p xv 0 -p yv 0 -p jumpable 1 -p gravity 6 -p slideStateX 2 -p slideStateY 2 -p height 54 -d -u platformerPlayerMovement -cf platformerPlayerCollide -t player -pi createPlatformVector -a PlatformerAnimationPackage -ca 0 -p climbMode 0 -p climbing 0;'
	testcode = testcode + 'GameObject -pi addClickOption -u showClickPosition;'
	
	testcode = testcode + 'GameObject -x 140 -y 1090 -t enemy -u MrSniffsUpdate -cf MrSniffCollide -p health 5 -d -rp 18 18 18 -a SniffsAnimationPackage -ca 0 -p trig floor1;'
	testcode = testcode + 'GameObject -u Floor1Trigger -p pulled 0;'
	
	testcode = testcode + 'GameObject -x 140 -y 940 -t enemy -u MrSniffsUpdate -cf MrSniffCollide -p health 5 -d -rp 18 18 18 -a SniffsAnimationPackage -ca 0 -p trig floor2;'
	testcode = testcode + 'GameObject -x 240 -y 940 -t enemy -u MrSniffsUpdate -cf MrSniffCollide -p health 10 -d -rp 18 18 18 -a SniffsAnimationPackage -ca 0 -p trig floor2;'
	testcode = testcode + 'GameObject -u Floor2Trigger -p pulled 0;'
	
	testcode = testcode + 'GameObject -x 140 -y 790 -t enemy -u MrSniffsUpdate -cf MrSniffCollide -p health 5 -d -rp 18 18 18 -a SniffsAnimationPackage -ca 0 -p trig floor3;'
	testcode = testcode + 'GameObject -u FloorNTrigger -p pulled 0 -p trigN floor3 -p ycoord 699 -p side right;'
	
	testcode = testcode + 'GameObject -x 140 -y 640 -t enemy -u MrSniffsUpdate -cf MrSniffCollide -p health 5 -d -rp 18 18 18 -a SniffsAnimationPackage -ca 0 -p trig floor4;'
	testcode = testcode + 'GameObject -u FloorNTrigger -p pulled 0 -p trigN floor4 -p highest 1;'
	
	oHandler.removeAllObjects();
	enterObjects(testcode);
}