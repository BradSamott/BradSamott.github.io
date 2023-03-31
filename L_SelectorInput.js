'use strict'

var GameTitle = document.getElementById("GameTitle");

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
	testcode = testcode + 'GameObject -x 300 -y 250 -rp 18 18 18 -a SniffsAnimationPackage -d -ca 0 -t enemy -v 0 0 -v 36 0 -v 36 36 -v 0 36;'
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
	
	/*
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
	testcode = testcode + 'GameObject -x 125 -y 1090 -v 0 0 topleft -v 36 0 topright -v 36 54 bottomright -v 0 54 bottomleft -rp 18 15 18 -p BatReady 1 -p xv 0 -p yv 0 -p jumpable 1 -p gravity 6 -p slideStateX 2 -p slideStateY 2 -p height 54 -d -u platformerPlayerMovement -cf platformerPlayerCollide -t player -pi createPlatformVector -a PlatformerAnimationPackage -ca 0 -p climbMode 0 -p climbing 0 -p health 5 -p iFrames -1 -p inControl 1 -p inStun 0 -p stunCounter 0;'
	testcode = testcode + 'GameObject -pi addClickOption -u showClickPosition;'
	
	testcode = testcode + 'GameObject -x 240 -y 1090 -t enemy -u MrSniffsUpdate -cf MrSniffCollide -p health 2 -d -rp 18 18 18 -a SniffsAnimationPackage -ca 0 -p trig floor1 -v 0 0 topleft -v 36 0 topright -v 36 36 bottomright -v 0 36 bottomleft -p gravity 0.6 -pi createPlatformVectorAndHitBox -p height 36 -p xv 3;'
	//testcode = testcode + 'GameObject -u Floor1Trigger -p pulled 0;'
	testcode = testcode + 'GameObject -u FloorNTrigger -pi createFloorChildren -p pulled 0 -p trigN floor1 -p side right -p ycoord 1000;'
	testcode = testcode + 'TextObject -x 130 -y 1077 -t "Hi Im Tom";'
	
	testcode = testcode + 'GameObject -x 140 -y 940 -t enemy -u MrSniffsUpdate -cf MrSniffCollide -p health 2 -d -rp 18 18 18 -a SniffsAnimationPackage -ca 0 -p trig floor2;'
	testcode = testcode + 'GameObject -x 240 -y 940 -t enemy -u MrSniffsUpdate -cf MrSniffCollide -p health 2 -d -rp 18 18 18 -a SniffsAnimationPackage -ca 0 -p trig floor2;'
	testcode = testcode + 'GameObject -u FloorNTrigger -pi createFloorChildren -p pulled 0 -p trigN floor2 -p side left -p ycoord 850;'
	
	testcode = testcode + 'GameObject -x 140 -y 790 -t enemy -u MrSniffsUpdate -cf MrSniffCollide -p health 5 -d -rp 18 18 18 -a SniffsAnimationPackage -ca 0 -p trig floor3;'
	testcode = testcode + 'GameObject -u FloorNTrigger -pi createFloorChildren -p pulled 0 -p trigN floor3 -p ycoord 699 -p side right;'
	
	testcode = testcode + 'GameObject -x 140 -y 640 -t enemy -u MrSniffsUpdate -cf MrSniffCollide -p health 5 -d -rp 18 18 18 -a SniffsAnimationPackage -ca 0 -p trig floor4;'
	testcode = testcode + 'GameObject -u FloorNTrigger -pi createFloorChildren -p pulled 0 -p trigN floor4 -p highest 1;'
	*/
	
	
	testcode = testcode + 'GameObject -x 69 -y 0 -a badPhoneAnimationPackage -ca 0 -d;'
	
	testcode = testcode + 'GameObject -x 119 -y 0 -t wall -v 0 0 -v 0 2000 -d;'
	testcode = testcode + 'GameObject -x 521 -y 0 -t wall -v 0 0 -v 0 2000 -d;'
	testcode = testcode + 'GameObject -x 120 -y 1150 -v 0 0 -v 400 0 -t wall -d;'
	testcode = testcode + 'GameObject -x 0 -y 700 -pi moveCameraPosition;'
	testcode = testcode + 'GameObject -pi setupFloorRandom ;';
	testcode = testcode + 'GameObject -x 125 -y 1090 -v 0 0 topleft -v 36 0 topright -v 36 54 bottomright -v 0 54 bottomleft -rp 18 15 18 -p BatReady 1 -p xv 0 -p yv 0 -p jumpable 1 -p gravity 6 -p slideStateX 2 -p slideStateY 2 -p height 54 -d -u platformerPlayerMovement -cf platformerPlayerCollide -t player -pi createPlatformVector -a PlatformerAnimationPackage -ca 0 -p climbMode 0 -p climbing 0 -p health 5 -p iFrames -1 -p inControl 1 -p inStun 0 -p stunCounter 0;'
	testcode = testcode + 'GameObject -p lastPStatus 0 -p lastRightStatus 0 -p lastSpaceStatus 0 -su uiLogger;'
	//testcode = testcode + 'GameObject -au ./Assets/Music/lifelike-126735.mp3 -pi playTrack -t musicPlayer'
	testcode = testcode + 'GameObject -au ./Assets/Music/Mimis_Delivery_Service.mp3 -pi playTrack -t musicPlayer'
	
	
	oHandler.removeAllObjects();
	enterObjects(testcode);
}

function UploadMimiGame() {
	
	GameTitle.innerHTML = "Mimi's Delivery Service";
	
	/*
	var testcode = '';
	
	testcode = testcode + 'GameObject -v 0 0 -v 50 0 -v 50 50 -v 0 50 -u MimiAirPlayerMovement -cf MimiAirPlayerCollide -d -t player -x 50 -y 50 -rp 25 25 25 -p slideStateX 2 -p slideStateY 2 ' //player
	testcode = testcode + '-a MimiAnimationPackage -pi MimiDefaults -p health 3 '
	testcode = testcode + ';'
	
	//testcode = testcode + 'GameObject -u CameraController;' //camera
	
	testcode = testcode + 'GameObject -d -x -12 -y -12 -v 0 0 -v 664 0 -d -t wall -p wallname top;' //top wall
	testcode = testcode + 'GameObject -d -x -12 -y -12 -v 0 0 -v 0 600 -d -t wall -p wallname left;' //left wall
	testcode = testcode + 'GameObject -d -x 652 -y -12 -v 0 0 -v 0 600 -d -t wall -p wallname right;' //right wall
	testcode = testcode + 'GameObject -d -x -12 -y 588 -v 0 0 -v 664 0 -d -t wall -p wallname bottom;' //bottom wall
	
	//testcode = testcode + 'GameObject -d -x 200 -y 100 -t hurtBall -rp 0 0 18;' //test hit box
	
	testcode = testcode + 'GameObject -p lastPStatus 0 -p lastRightStatus 0 -p lastSpaceStatus 0 -su uiLogger;'
	
	oHandler.removeAllObjects();
	enterObjects(testcode);
	*/
	
	var gameBooterCode = '';
	
	gameBooterCode = gameBooterCode + 'GameObject -u LoaderButtonUpdate;'
	
	gameBooterCode = gameBooterCode + 'TextObject -t "Press Enter to Start" -x 300 -y 200;'
	
	oHandler.removeAllObjects();
	enterObjects(gameBooterCode);
}