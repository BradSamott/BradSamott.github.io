'use strict'

function setupkeyBoardPhy() {
	this.properties.aDown = false;
	this.properties.bDown = false;
	this.properties.cDown = false;
	this.properties.dDown = false;
	this.properties.eDown = false;
	this.properties.fDown = false;
	this.properties.gDown = false;
	this.properties.hDown = false;
	this.properties.iDown = false;
	this.properties.jDown = false;
	this.properties.kDown = false;
	this.properties.lDown = false;
	this.properties.mDown = false;
	this.properties.nDown = false;
	this.properties.oDown = false;
	this.properties.pDown = false;
	this.properties.qDown = false;
	this.properties.rDown = false;
	this.properties.sDown = false;
	this.properties.tDown = false;
	this.properties.uDown = false;
	this.properties.vDown = false;
	this.properties.wDown = false;
	this.properties.xDown = false;
	this.properties.yDown = false;
	this.properties.zDown = false;
	this.properties.enterDown = false;
}

function keyBoardPhyUpdate() {
	
	if(this.properties.parentWordChecker.properties.Active) {
		
		var usedLetter = '';
		
		if(keys.a && !this.properties.aDown) {
			usedLetter = 'A';
			this.properties.aDown = true;
		}

		else if(keys.b && !this.properties.bDown) {
			usedLetter = 'B';
			this.properties.bDown = true;
		}

		else if(keys.c && !this.properties.cDown) {
			usedLetter = 'C';
			this.properties.cDown = true;
		}

		else if(keys.d && !this.properties.dDown) {
			usedLetter = 'D';
			this.properties.dDown = true;
		}
		
		else if(keys.e && !this.properties.eDown) {
			usedLetter = 'E';
			this.properties.eDown = true;
		}
		
		else if(keys.f && !this.properties.fDown) {
			usedLetter = 'F';
			this.properties.fDown = true;
		}
		
		else if(keys.g && !this.properties.gDown) {
			usedLetter = 'G';
			this.properties.gDown = true;
		}
		
		else if(keys.h && !this.properties.hDown) {
			usedLetter = 'H';
			this.properties.hDown = true;
		}
		
		else if(keys.i && !this.properties.iDown) {
			usedLetter = 'I';
			this.properties.iDown = true;
		}
		
		else if(keys.j && !this.properties.jDown) {
			usedLetter = 'J';
			this.properties.jDown = true;
		}
		
		else if(keys.k && !this.properties.kDown) {
			usedLetter = 'K';
			this.properties.kDown = true;
		}
		
		else if(keys.l && !this.properties.lDown) {
			usedLetter = 'L';
			this.properties.lDown = true;
		}
		
		else if(keys.m && !this.properties.mDown) {
			usedLetter = 'M';
			this.properties.mDown = true;
		}
		
		else if(keys.n && !this.properties.nDown) {
			usedLetter = 'N';
			this.properties.nDown = true;
		}
		
		else if(keys.o && !this.properties.oDown) {
			usedLetter = 'O';
			this.properties.oDown = true;
		}
		
		else if(keys.p && !this.properties.pDown) {
			usedLetter = 'P';
			this.properties.pDown = true;
		}
		
		else if(keys.q && !this.properties.qDown) {
			usedLetter = 'Q';
			this.properties.qDown = true;
		}
		
		else if(keys.r && !this.properties.rDown) {
			usedLetter = 'R';
			this.properties.rDown = true;
		}
		
		else if(keys.s && !this.properties.sDown) {
			usedLetter = 'S';
			this.properties.sDown = true;
		}
		
		else if(keys.t && !this.properties.tDown) {
			usedLetter = 'T';
			this.properties.tDown = true;
		}
		
		else if(keys.u && !this.properties.uDown) {
			usedLetter = 'U';
			this.properties.uDown = true;
		}
		
		else if(keys.v && !this.properties.vDown) {
			usedLetter = 'V';
			this.properties.vDown = true;
		}
		
		else if(keys.w && !this.properties.wDown) {
			usedLetter = 'W';
			this.properties.wDown = true;
		}
		
		else if(keys.x && !this.properties.xDown) {
			usedLetter = 'X';
			this.properties.xDown = true;
		}
		
		else if(keys.y && !this.properties.yDown) {
			usedLetter = 'Y';
			this.properties.yDown = true;
		}
		
		else if(keys.z && !this.properties.zDown) {
			usedLetter = 'Z';
			this.properties.zDown = true;
		}

		else if(keys.enter && !this.properties.enterDown) {
			this.properties.enterDown = true;
		}
		
		if(usedLetter != '') {
			if(this.properties.parentWordChecker.properties.Slot1Child.properties.letter == '') {
				this.properties.parentWordChecker.properties.Slot1Child.properties.letter = usedLetter;
			} else if(this.properties.parentWordChecker.properties.Slot2Child.properties.letter == '') {
				this.properties.parentWordChecker.properties.Slot2Child.properties.letter = usedLetter;
			} else if(this.properties.parentWordChecker.properties.Slot3Child.properties.letter == '') {
				this.properties.parentWordChecker.properties.Slot3Child.properties.letter = usedLetter;
			}
		}
	}
	
	if(!keys.a) {
		this.properties.aDown = false;
	}

	if(!keys.b) {
		this.properties.bDown = false;
	}

	if(!keys.c) {
		this.properties.cDown = false;
	}

	if(!keys.d) {
		this.properties.dDown = false;
	}
	
	if(!keys.e) {
		this.properties.eDown = false;
	}
	
	if(!keys.f) {
		this.properties.fDown = false;
	}
	
	if(!keys.g) {
		this.properties.gDown = false;
	}
	
	if(!keys.h) {
		this.properties.hDown = false;
	}
	
	if(!keys.i) {
		this.properties.iDown = false;
	}
	
	if(!keys.j) {
		this.properties.jDown = false;
	}
	
	if(!keys.k) {
		this.properties.kDown = false;
	}
	
	if(!keys.l) {
		this.properties.lDown = false;
	}
	
	if(!keys.m) {
		this.properties.mDown = false;
	}
	
	if(!keys.n) {
		this.properties.nDown = false;
	}
	
	if(!keys.o) {
		this.properties.oDown = false;
	}
	
	if(!keys.p) {
		this.properties.pDown = false;
	}
	
	if(!keys.q) {
		this.properties.qDown = false;
	}
	
	if(!keys.r) {
		this.properties.rDown = false;
	}
	
	if(!keys.s) {
		this.properties.sDown = false;
	}
	
	if(!keys.t) {
		this.properties.tDown = false;
	}
	
	if(!keys.u) {
		this.properties.uDown = false;
	}
	
	if(!keys.v) {
		this.properties.vDown = false;
	}
	
	if(!keys.w) {
		this.properties.wDown = false;
	}
	
	if(!keys.x) {
		this.properties.xDown = false;
	}
	
	if(!keys.y) {
		this.properties.yDown = false;
	}
	
	if(!keys.z) {
		this.properties.zDown = false;
	}

	if(!keys.enter) {
		this.properties.enterDown = false;
	}
}

function setupWordChecker() {
	var Slot1 = 'GameObject -x 0 -y 0 -v 0 0 -v 60 0 -v 60 60 -v 0 60 -d -u SlotUpdate -pi setupSlot';
	var GOJ1 = createGOJsonFromString(Slot1);
	var GOObj1 = createGOFromJSON(GOJ1);
	this.properties.Slot1Child = GOObj1;
	GOObj1.properties.letter = '';
	this.handler.addObject(GOObj1);
	
	var Slot2 = 'GameObject -x 0 -y 0 -v 0 0 -v 60 0 -v 60 60 -v 0 60 -d -u SlotUpdate -pi setupSlot';
	var GOJ2 = createGOJsonFromString(Slot2);
	var GOObj2 = createGOFromJSON(GOJ2);
	this.properties.Slot2Child = GOObj2;
	GOObj2.properties.letter = '';
	this.handler.addObject(GOObj2);
	
	var Slot3 = 'GameObject -x 0 -y 0 -v 0 0 -v 60 0 -v 60 60 -v 0 60 -d -u SlotUpdate -pi setupSlot';
	var GOJ3 = createGOJsonFromString(Slot3);
	var GOObj3 = createGOFromJSON(GOJ3);
	this.properties.Slot3Child = GOObj3;
	GOObj3.properties.letter = '';
	this.handler.addObject(GOObj3);
	
	var wordList = 'GameObject -x 300 -y 50 -u WordListUpdate -pi setupWordList'
	var GOJL = createGOJsonFromString(wordList);
	var GOObjL = createGOFromJSON(GOJL);
	this.properties.wordList = GOObjL;
	GOObjL.properties.letter = '';
	this.handler.addObject(GOObjL);
	
	var keyBoardPhy = 'GameObject -x 0 -y 0 -u keyBoardPhyUpdate -pi setupkeyBoardPhy'
	var GOJK = createGOJsonFromString(keyBoardPhy);
	var GOObjK = createGOFromJSON(GOJK);
	this.properties.keyBoardPhy = GOObjK;
	GOObjK.properties.parentWordChecker = this;
	this.handler.addObject(GOObjK);
	
	this.properties.Active = true;
	
	QuestleGlobals.WordChecker = this;
}

function WordCheckerUpdate() {
	this.properties.Slot1Child.position.x = this.position.x + 0;
	//this.properties.Slot1Child.position.y = this.position.y + 0;
	
	this.properties.Slot2Child.position.x = this.position.x + 70;
	//this.properties.Slot2Child.position.y = this.position.y + 0;
	
	this.properties.Slot3Child.position.x = this.position.x + 140;
	//this.properties.Slot3Child.position.y = this.position.y + 0;
}

function setupSlot() {
	var TextText = 'TextObject -x 0 -y 0 -t '+this.properties.letter+';';
	
	var TOJ = createTOJsonFromString(TextText);
	var TOObj = createTOFromJSON(TOJ);
	this.properties.wordChild = TOObj;
	this.handler.addTextObject(TOObj);
}

function SlotUpdate() {
	this.properties.wordChild.position.x = this.position.x + 10;
	this.properties.wordChild.position.y = this.position.y + 20;
	
	this.properties.wordChild.textContent = this.properties.letter;
}
/*
var LevelSetups = {
	Levels: [{
		answer: 'KEY',
		traps: [
			{Letter: 'A', Level: 1}
		]
	},
	{
		answer: 'AND',
		traps: [
			{Letter: 'B', Level: 2}
		]
	}]
}
*/

function InitializeLevelData(Level) {
	QuestleGlobals.CurrLevelData = JSON.parse(JSON.stringify(LevelSetups.Levels[Level]));
	for(var i = 0; i < QuestleGlobals.CurrLevelData.traps.length; i++) {
		QuestleGlobals.CurrLevelData.traps[i].Sprung = false;
	}
	QuestleGlobals.CurrTraps = [];
}

function StartLevel(LevelNum,CurrHandler) {
	
	CurrHandler.removeAllObjects();
	
	var LevelText = '';
	
	LevelText = LevelText = 'GameObject -x 0 -y 0 -u WordCheckerUpdate -pi setupWordChecker -t WordChecker -p LevelNum '+LevelNum+' -p answer '+LevelSetups.Levels[LevelNum].answer+';';
	
	LevelText = LevelText + 'GameObject -x 21 -y 396 -v 0 0 -v 60 0 -v 60 60 -v 0 60 -d -p letter Q -u KeyUpdate -pi setupKey -t KeyButton;';
	LevelText = LevelText + 'GameObject -x 81 -y 396 -v 0 0 -v 60 0 -v 60 60 -v 0 60 -d -p letter W -u KeyUpdate -pi setupKey -t KeyButton;';
	LevelText = LevelText + 'GameObject -x 141 -y 396 -v 0 0 -v 60 0 -v 60 60 -v 0 60 -d -p letter E -u KeyUpdate -pi setupKey -t KeyButton;';
	LevelText = LevelText + 'GameObject -x 201 -y 396 -v 0 0 -v 60 0 -v 60 60 -v 0 60 -d -p letter R -u KeyUpdate -pi setupKey -t KeyButton;';
	LevelText = LevelText + 'GameObject -x 261 -y 396 -v 0 0 -v 60 0 -v 60 60 -v 0 60 -d -p letter T -u KeyUpdate -pi setupKey -t KeyButton;';
	LevelText = LevelText + 'GameObject -x 321 -y 396 -v 0 0 -v 60 0 -v 60 60 -v 0 60 -d -p letter Y -u KeyUpdate -pi setupKey -t KeyButton;';
	LevelText = LevelText + 'GameObject -x 381 -y 396 -v 0 0 -v 60 0 -v 60 60 -v 0 60 -d -p letter U -u KeyUpdate -pi setupKey -t KeyButton;';
	LevelText = LevelText + 'GameObject -x 441 -y 396 -v 0 0 -v 60 0 -v 60 60 -v 0 60 -d -p letter I -u KeyUpdate -pi setupKey -t KeyButton;';
	LevelText = LevelText + 'GameObject -x 501 -y 396 -v 0 0 -v 60 0 -v 60 60 -v 0 60 -d -p letter O -u KeyUpdate -pi setupKey -t KeyButton;';
	LevelText = LevelText + 'GameObject -x 561 -y 396 -v 0 0 -v 60 0 -v 60 60 -v 0 60 -d -p letter P -u KeyUpdate -pi setupKey -t KeyButton;';
	
	LevelText = LevelText + 'GameObject -x 51 -y 456 -v 0 0 -v 60 0 -v 60 60 -v 0 60 -d -p letter A -u KeyUpdate -pi setupKey -t KeyButton;';
	LevelText = LevelText + 'GameObject -x 111 -y 456 -v 0 0 -v 60 0 -v 60 60 -v 0 60 -d -p letter S -u KeyUpdate -pi setupKey -t KeyButton;';
	LevelText = LevelText + 'GameObject -x 171 -y 456 -v 0 0 -v 60 0 -v 60 60 -v 0 60 -d -p letter D -u KeyUpdate -pi setupKey -t KeyButton;';
	LevelText = LevelText + 'GameObject -x 231 -y 456 -v 0 0 -v 60 0 -v 60 60 -v 0 60 -d -p letter F -u KeyUpdate -pi setupKey -t KeyButton;';
	LevelText = LevelText + 'GameObject -x 291 -y 456 -v 0 0 -v 60 0 -v 60 60 -v 0 60 -d -p letter G -u KeyUpdate -pi setupKey -t KeyButton;';
	LevelText = LevelText + 'GameObject -x 351 -y 456 -v 0 0 -v 60 0 -v 60 60 -v 0 60 -d -p letter H -u KeyUpdate -pi setupKey -t KeyButton;';
	LevelText = LevelText + 'GameObject -x 411 -y 456 -v 0 0 -v 60 0 -v 60 60 -v 0 60 -d -p letter J -u KeyUpdate -pi setupKey -t KeyButton;';
	LevelText = LevelText + 'GameObject -x 471 -y 456 -v 0 0 -v 60 0 -v 60 60 -v 0 60 -d -p letter K -u KeyUpdate -pi setupKey -t KeyButton;';
	LevelText = LevelText + 'GameObject -x 531 -y 456 -v 0 0 -v 60 0 -v 60 60 -v 0 60 -d -p letter L -u KeyUpdate -pi setupKey -t KeyButton;';
	
	LevelText = LevelText + 'GameObject -x 81 -y 516 -v 0 0 -v 60 0 -v 60 60 -v 0 60 -d -p letter Z -u KeyUpdate -pi setupKey -t KeyButton;';
	LevelText = LevelText + 'GameObject -x 141 -y 516 -v 0 0 -v 60 0 -v 60 60 -v 0 60 -d -p letter X -u KeyUpdate -pi setupKey -t KeyButton;';
	LevelText = LevelText + 'GameObject -x 201 -y 516 -v 0 0 -v 60 0 -v 60 60 -v 0 60 -d -p letter C -u KeyUpdate -pi setupKey -t KeyButton;';
	LevelText = LevelText + 'GameObject -x 261 -y 516 -v 0 0 -v 60 0 -v 60 60 -v 0 60 -d -p letter V -u KeyUpdate -pi setupKey -t KeyButton;';
	LevelText = LevelText + 'GameObject -x 321 -y 516 -v 0 0 -v 60 0 -v 60 60 -v 0 60 -d -p letter B -u KeyUpdate -pi setupKey -t KeyButton;';
	LevelText = LevelText + 'GameObject -x 381 -y 516 -v 0 0 -v 60 0 -v 60 60 -v 0 60 -d -p letter N -u KeyUpdate -pi setupKey -t KeyButton;';
	LevelText = LevelText + 'GameObject -x 441 -y 516 -v 0 0 -v 60 0 -v 60 60 -v 0 60 -d -p letter M -u KeyUpdate -pi setupKey -t KeyButton;';
	
	LevelText = LevelText + 'GameObject -x 0 -y 516 -v 0 0 -v 80 0 -v 80 60 -v 0 60 -d -p letter Back -u BackUpdate -pi setupKey -t KeyButton;';
	
	LevelText = LevelText + 'GameObject -x 501 -y 516 -v 0 0 -v 80 0 -v 80 60 -v 0 60 -d -p letter Enter -u EnterUpdate -pi setupKey -t KeyButton;';
	
	//LevelText = LevelText + 'GameObject -u showClickPosition -pi addClickOption;';
	
	enterObjects(LevelText);
	
	var GOObjM = createGOFromString('GameObject -t menu -x 0 -y 700 -v 0 0 -v 300 0 -v 300 300 -v 0 300 -d -u menuUpdate -p currLayer 0 -p currSel 0 -p battleActive 0;');
	QuestleGlobals.MenuObject = GOObjM;
	InitalizeMenu();
	InitializeLevelData(LevelNum);
	
	oHandler.addObject(GOObjM);
	
}

function LevelOptionUpdate() {
	for(var i = 0; i < this.handler.cBuff.length; i++) {
	
		if(this.handler.cBuff[i].x + this.handler.CameraX > this.position.x 
		   && this.handler.cBuff[i].x + this.handler.CameraX < this.position.x + this.vertices[1].offX) 
		{
			if(this.handler.cBuff[i].y + this.handler.CameraY > this.position.y
		       && this.handler.cBuff[i].y + this.handler.CameraY < this.position.y + this.vertices[2].offY) {
				
				StartLevel(this.properties.level,this.handler);
				StartBattle();
			}
		}
		
	}
}

function ReturnToLevelSelectUpdate() {
	for(var i = 0; i < this.handler.cBuff.length; i++) {
	
		if(this.handler.cBuff[i].x + this.handler.CameraX > this.position.x 
		   && this.handler.cBuff[i].x + this.handler.CameraX < this.position.x + this.vertices[1].offX) 
		{
			if(this.handler.cBuff[i].y + this.handler.CameraY > this.position.y
		       && this.handler.cBuff[i].y + this.handler.CameraY < this.position.y + this.vertices[2].offY) {
				
				this.handler.removeAllObjects();
				BackToLevelSelect();
				
			}
		}
		
	}
}

function StartLevelSelect() {
	var SelText = 'GameObject -x 21 -y 296 -v 0 0 -v 60 0 -v 60 60 -v 0 60 -d -p level 0 -u LevelOptionUpdate;';
	SelText = SelText + 'GameObject -x 81 -y 296 -v 0 -v 60 0 -v 60 60 -v 0 60 -d -p level 1 -u LevelOptionUpdate;';
	
	SelText = SelText + 'GameObject -u showClickPosition -pi addClickOption;';
	
	enterObjects(SelText);
}

function BackToLevelSelect() {
	var SelText = 'GameObject -x 21 -y 296 -v 0 0 -v 60 0 -v 60 60 -v 0 60 -d -p level 0 -u LevelOptionUpdate;';
	SelText = SelText + 'GameObject -x 81 -y 296 -v 0 -v 60 0 -v 60 60 -v 0 60 -d -p level 1 -u LevelOptionUpdate;';
	
	enterObjects(SelText);
}