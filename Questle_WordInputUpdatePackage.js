'use strict'

function storeVertices(gObj) {
	if(gObj.vertices != null) {
		if(gObj.properties.storedVertices == null) {
			gObj.properties.storedVertices = [];
		}
		
		for(var i = gObj.vertices.length - 1; i >= 0; i--) {
			gObj.properties.storedVertices[i] = gObj.vertices[i];
			gObj.vertices.pop();
		}
	}
} 

function shiftKeys(direction) {
	if(direction == 'down') {
		for(var i = 0; i < QuestleGlobals.WordChecker.handler.Objects.length; i++) {
			if(QuestleGlobals.WordChecker.handler.Objects[i].tag == 'KeyButton') {
				QuestleGlobals.WordChecker.handler.Objects[i].position.y = QuestleGlobals.WordChecker.handler.Objects[i].position.y + 700;
			}
		}
	} else if(direction == 'up') {
		for(var i = 0; i < QuestleGlobals.WordChecker.handler.Objects.length; i++) {
			if(QuestleGlobals.WordChecker.handler.Objects[i].handler.Objects[i].tag == 'KeyButton') {
				QuestleGlobals.WordChecker.handler.Objects[i].position.y = QuestleGlobals.WordChecker.handler.Objects[i].position.y - 700;
			}
		}
	} else {
		for(var i = 0; i < QuestleGlobals.WordChecker.handler.Objects.length; i++) {
			if(QuestleGlobals.WordChecker.handler.Objects[i].handler.Objects[i].tag == 'KeyButton') {
				QuestleGlobals.WordChecker.handler.Objects[i].position.y = QuestleGlobals.WordChecker.handler.Objects[i].position.y + 700;
			}
		}
	}
}

function setupKey() {

	var TextText = 'TextObject -x 0 -y 0 -t '+this.properties.letter+' -c black;';
	
	var TOJ = createTOJsonFromString(TextText);
	var TOObj = createTOFromJSON(TOJ);
	this.properties.wordChild = TOObj;
	this.handler.addTextObject(TOObj);
	
	for(var i = 0; i < this.handler.Objects.length; i++) {
		if(this.handler.Objects[i].tag == 'WordChecker') {
			this.properties.parentWordChecker = this.handler.Objects[i];
		}
	}
}

function KeyUpdate() {
	this.properties.wordChild.position.x = this.position.x + 10;
	this.properties.wordChild.position.y = this.position.y + 20;
	
	if(this.properties.parentWordChecker.properties.Active) {
	
		if(this.vertices.length < 4) {
			return;
		}
		
		for(var i = 0; i < this.handler.cBuff.length; i++) {
		
			if(this.handler.cBuff[i].x + this.handler.CameraX > this.position.x 
			   && this.handler.cBuff[i].x + this.handler.CameraX < this.position.x + this.vertices[1].offX) 
			{
				if(this.handler.cBuff[i].y + this.handler.CameraY > this.position.y
				   && this.handler.cBuff[i].y + this.handler.CameraY < this.position.y + this.vertices[2].offY) {
					//console.log(this.properties.letter);
					if(this.properties.parentWordChecker.properties.Slot1Child.properties.letter == '') {
						this.properties.parentWordChecker.properties.Slot1Child.properties.letter = this.properties.letter;
					} else if(this.properties.parentWordChecker.properties.Slot2Child.properties.letter == '') {
						this.properties.parentWordChecker.properties.Slot2Child.properties.letter = this.properties.letter;
					} else if(this.properties.parentWordChecker.properties.Slot3Child.properties.letter == '') {
						this.properties.parentWordChecker.properties.Slot3Child.properties.letter = this.properties.letter;
					}
				}
			}
			
		}
	
	}
}

function BackUpdate() {
	this.properties.wordChild.position.x = this.position.x + 10;
	this.properties.wordChild.position.y = this.position.y + 20;
	
	if(this.properties.parentWordChecker.properties.Active) {
	
		if(this.vertices.length < 4) {
			return;
		}
		
		for(var i = 0; i < this.handler.cBuff.length; i++) {
		
			if(this.handler.cBuff[i].x + this.handler.CameraX > this.position.x 
			   && this.handler.cBuff[i].x + this.handler.CameraX < this.position.x + this.vertices[1].offX) 
			{
				if(this.handler.cBuff[i].y + this.handler.CameraY > this.position.y
				   && this.handler.cBuff[i].y + this.handler.CameraY < this.position.y + this.vertices[2].offY) {
					console.log(this.properties.letter);
					if(this.properties.parentWordChecker.properties.Slot3Child.properties.letter != '') {
						this.properties.parentWordChecker.properties.Slot3Child.properties.letter = '';
					} else if(this.properties.parentWordChecker.properties.Slot2Child.properties.letter != '') {
						this.properties.parentWordChecker.properties.Slot2Child.properties.letter = '';
					} else if(this.properties.parentWordChecker.properties.Slot1Child.properties.letter != '') {
						this.properties.parentWordChecker.properties.Slot1Child.properties.letter = '';
					}
				}
			}
			
		}
	
	}
}

function EnterUpdate() {
	this.properties.wordChild.position.x = this.position.x + 10;
	this.properties.wordChild.position.y = this.position.y + 20;
	
	if(this.properties.parentWordChecker.properties.Active) {
	
		if(this.vertices.length < 4) {
			return;
		}
		
		for(var i = 0; i < this.handler.cBuff.length; i++) {
		
			if(this.handler.cBuff[i].x + this.handler.CameraX > this.position.x 
			   && this.handler.cBuff[i].x + this.handler.CameraX < this.position.x + this.vertices[1].offX) 
			{
				if(this.handler.cBuff[i].y + this.handler.CameraY > this.position.y
				   && this.handler.cBuff[i].y + this.handler.CameraY < this.position.y + this.vertices[2].offY) {
					//console.log(this.properties.letter);
					if(this.properties.parentWordChecker.properties.Slot1Child.properties.letter != '' 
					   && this.properties.parentWordChecker.properties.Slot2Child.properties.letter != '' 
					   && this.properties.parentWordChecker.properties.Slot3Child.properties.letter != '') {
						   
						/*
						var newWord = this.properties.parentWordChecker.properties.Slot1Child.properties.letter
									  + this.properties.parentWordChecker.properties.Slot2Child.properties.letter 
									  + this.properties.parentWordChecker.properties.Slot3Child.properties.letter
									  
						var NewText = 'TextObject -x 0 -y 0 -t '+newWord+';';
		
						var TOJ = createTOJsonFromString(NewText);
						var TOObj = createTOFromJSON(TOJ);
						this.handler.addTextObject(TOObj);
						this.properties.parentWordChecker.properties.wordList.properties.words.push(TOObj);
						*/
						
						var newWordA = [];
						
						var pos1Greened = false;
						var pos1Yellowed = false;
						
						var pos2Greened = false;
						var pos2Yellowed = false;
						
						var pos3Greened = false;
						var pos3Yellowed = false;
						
						//check 1
						var resColor1 = 'black';
						if(this.properties.parentWordChecker.properties.Slot1Child.properties.letter == this.properties.parentWordChecker.properties.answer.charAt(0)) {
							resColor1 = 'green';
							pos1Greened = true;
						}
						
						//check 2
						var resColor2 = 'black';
						if(this.properties.parentWordChecker.properties.Slot2Child.properties.letter == this.properties.parentWordChecker.properties.answer.charAt(1)) {
							resColor2 = 'green';
							pos2Greened = true;
						}
						
						//check 3
						var resColor3 = 'black';
						if(this.properties.parentWordChecker.properties.Slot3Child.properties.letter == this.properties.parentWordChecker.properties.answer.charAt(2)) {
							resColor3 = 'green';
							pos3Greened = true;
						}
						
						if(this.properties.parentWordChecker.properties.Slot1Child.properties.letter == this.properties.parentWordChecker.properties.answer.charAt(1)
						&& !pos2Greened && !pos2Yellowed) {
							resColor1 = 'yellow';
							pos2Yellowed = true;
						} else if(this.properties.parentWordChecker.properties.Slot1Child.properties.letter == this.properties.parentWordChecker.properties.answer.charAt(2)
						&& !pos3Greened && !pos3Yellowed) {
							resColor1 = 'yellow';
							pos3Yellowed = true;
						}
						
						if(this.properties.parentWordChecker.properties.Slot2Child.properties.letter == this.properties.parentWordChecker.properties.answer.charAt(0)
						&& !pos1Greened && !pos1Yellowed) {
							resColor2 = 'yellow';
							pos1Yellowed = true;
						} else if(this.properties.parentWordChecker.properties.Slot2Child.properties.letter == this.properties.parentWordChecker.properties.answer.charAt(2)
						&& !pos3Greened && !pos3Yellowed) {
							resColor2 = 'yellow';
							pos3Yellowed = true;
						}
						
						if(this.properties.parentWordChecker.properties.Slot3Child.properties.letter == this.properties.parentWordChecker.properties.answer.charAt(0)
						&& !pos1Greened && !pos1Yellowed) {
							resColor3 = 'yellow';
							pos1Yellowed = true;
						} else if(this.properties.parentWordChecker.properties.Slot3Child.properties.letter == this.properties.parentWordChecker.properties.answer.charAt(1)
						&& !pos2Greened && !pos2Yellowed) {
							resColor3 = 'yellow';
							pos2Yellowed = true;
						}
						
						var NewText1 = 'TextObject -x 0 -y 0 -t '+this.properties.parentWordChecker.properties.Slot1Child.properties.letter+' -c '+resColor1+';';
						var TOJ1 = createTOJsonFromString(NewText1);
						var TOObj1 = createTOFromJSON(TOJ1);
						this.handler.addTextObject(TOObj1);
						newWordA.push(TOObj1);
						
						var NewText2 = 'TextObject -x 0 -y 0 -t '+this.properties.parentWordChecker.properties.Slot2Child.properties.letter+' -c '+resColor2+';';
						var TOJ2 = createTOJsonFromString(NewText2);
						var TOObj2 = createTOFromJSON(TOJ2);
						this.handler.addTextObject(TOObj2);
						newWordA.push(TOObj2);
						
						var NewText3 = 'TextObject -x 0 -y 0 -t '+this.properties.parentWordChecker.properties.Slot3Child.properties.letter+' -c '+resColor3+';';
						var TOJ3 = createTOJsonFromString(NewText3);
						var TOObj3 = createTOFromJSON(TOJ3);
						this.handler.addTextObject(TOObj3);
						newWordA.push(TOObj3);
						
						console.log(QuestleGlobals.MenuObject.properties.battleActive);
						for(var lI = 0; lI < LevelSetups.Levels[this.properties.parentWordChecker.properties.LevelNum].traps.length; lI++) {
							if(LevelSetups.Levels[this.properties.parentWordChecker.properties.LevelNum].traps[lI].Letter == this.properties.parentWordChecker.properties.Slot1Child.properties.letter
							   && !QuestleGlobals.CurrLevelData.traps[lI].Sprung) {
								console.log('Trapped');
								QuestleGlobals.MenuObject.position.y = 396;
								QuestleGlobals.MenuObject.properties.battleActive = 1;
								
								var animpackageName = this.properties.parentWordChecker.properties.Slot1Child.properties.letter.toLowerCase() + 'AnimationPackage';
								
								var GOObjE1 = createGOFromString('GameObject -x 150 -y -100 -d -a '+animpackageName+' -ca 0 -p intro 0 -p introFrames 0 -u enemyUpdate -p hp 10 -p name '+LevelSetups.Levels[this.properties.parentWordChecker.properties.LevelNum].traps[lI].Letter+';');
								GOObjE1.properties.recovered = 1;
								GOObjE1.properties.recoveryFrames = 0;
								GOObjE1.properties.parentObj = QuestleGlobals.MenuObject;
								console.log(JSON.parse(JSON.stringify(EnemyBaseCharacters[LevelSetups.Levels[this.properties.parentWordChecker.properties.LevelNum].traps[lI].Letter])));
								GOObjE1.properties.Attributes = JSON.parse(JSON.stringify(EnemyBaseCharacters[LevelSetups.Levels[this.properties.parentWordChecker.properties.LevelNum].traps[lI].Letter]));
								GOObjE1.properties.Attributes.Level = LevelSetups.Levels[this.properties.parentWordChecker.properties.LevelNum].traps[lI].Level;
								ApplyEnemyGrowth(GOObjE1.properties.Attributes,LevelSetups.Levels[this.properties.parentWordChecker.properties.LevelNum].traps[lI].Letter);
								console.log(GOObjE1.properties.Attributes);
								GOObjE1.properties.Attributes.currHP = GOObjE1.properties.Attributes.MaxHP;
								GOObjE1.properties.buffList = [];
								
								var TOJE1 = createTOFromString('TextObject -x 0 -y 0 -t test -c black;');
								TOJE1.textContent = '' + GOObjE1.properties.Attributes.currHP + '/' + GOObjE1.properties.Attributes.MaxHP;
								console.log(TOJE1.textContent);
								oHandler.addTextObject(TOJE1);
								GOObjE1.properties.healthCounter = TOJE1;
								
								var TOJE1H = createTOFromString('TextObject -x 0 -y 0 -t test -c black;');
								TOJE1H.textContent = 'LV: ' + GOObjE1.properties.Attributes.Level;
								console.log(TOJE1H.textContent);
								oHandler.addTextObject(TOJE1H);
								GOObjE1.properties.levelCounter = TOJE1H;
								
								QuestleGlobals.MenuObject.properties.enemies.push(GOObjE1);
								QuestleGlobals.CurrTraps.push(lI);
								oHandler.addObject(GOObjE1);
								
							}
							
							if(LevelSetups.Levels[this.properties.parentWordChecker.properties.LevelNum].traps[lI].Letter == this.properties.parentWordChecker.properties.Slot2Child.properties.letter
							   && !QuestleGlobals.CurrLevelData.traps[lI].Sprung) {
								console.log('Trapped');
								QuestleGlobals.MenuObject.position.y = 396;
								QuestleGlobals.MenuObject.properties.battleActive = 1;
								
								var animpackageName = this.properties.parentWordChecker.properties.Slot2Child.properties.letter.toLowerCase() + 'AnimationPackage';
								
								var GOObjE2 = createGOFromString('GameObject -x 300 -y -100 -d -a '+animpackageName+' -ca 0 -p intro 0 -p introFrames 0 -u enemyUpdate -p hp 10 -p name '+LevelSetups.Levels[this.properties.parentWordChecker.properties.LevelNum].traps[lI].Letter+';');
								GOObjE2.properties.recovered = 1;
								GOObjE2.properties.recoveryFrames = 0;
								GOObjE2.properties.parentObj = QuestleGlobals.MenuObject;
								console.log(JSON.parse(JSON.stringify(EnemyBaseCharacters[LevelSetups.Levels[this.properties.parentWordChecker.properties.LevelNum].traps[lI].Letter])));
								GOObjE2.properties.Attributes = JSON.parse(JSON.stringify(EnemyBaseCharacters[LevelSetups.Levels[this.properties.parentWordChecker.properties.LevelNum].traps[lI].Letter]));
								GOObjE2.properties.Attributes.Level = LevelSetups.Levels[this.properties.parentWordChecker.properties.LevelNum].traps[lI].Level;
								ApplyEnemyGrowth(GOObjE2.properties.Attributes,LevelSetups.Levels[this.properties.parentWordChecker.properties.LevelNum].traps[lI].Letter);
								console.log(GOObjE2.properties.Attributes);
								GOObjE2.properties.Attributes.currHP = GOObjE2.properties.Attributes.MaxHP;
								GOObjE2.properties.buffList = [];
								
								var TOJE2 = createTOFromString('TextObject -x 0 -y 0 -t test -c black;');
								TOJE2.textContent = '' + GOObjE2.properties.Attributes.currHP + '/' + GOObjE2.properties.Attributes.MaxHP;
								console.log(TOJE2.textContent);
								oHandler.addTextObject(TOJE2);
								GOObjE2.properties.healthCounter = TOJE2;
								
								var TOJE2H = createTOFromString('TextObject -x 0 -y 0 -t test -c black;');
								TOJE2H.textContent = 'LV: ' + GOObjE2.properties.Attributes.Level;
								console.log(TOJE2H.textContent);
								oHandler.addTextObject(TOJE2H);
								GOObjE2.properties.levelCounter = TOJE2H;
								
								QuestleGlobals.MenuObject.properties.enemies.push(GOObjE2);
								QuestleGlobals.CurrTraps.push(lI);
								oHandler.addObject(GOObjE2);
								
							}
							
							if(LevelSetups.Levels[this.properties.parentWordChecker.properties.LevelNum].traps[lI].Letter == this.properties.parentWordChecker.properties.Slot3Child.properties.letter
							   && !QuestleGlobals.CurrLevelData.traps[lI].Sprung) {
								console.log('Trapped');
								QuestleGlobals.MenuObject.position.y = 396;
								QuestleGlobals.MenuObject.properties.battleActive = 1;
								
								var animpackageName = this.properties.parentWordChecker.properties.Slot3Child.properties.letter.toLowerCase() + 'AnimationPackage';
								
								var GOObjE3 = createGOFromString('GameObject -x 450 -y -100 -d -a '+animpackageName+' -ca 0 -p intro 0 -p introFrames 0 -u enemyUpdate -p hp 10 -p name '+LevelSetups.Levels[this.properties.parentWordChecker.properties.LevelNum].traps[lI].Letter+';');
								GOObjE3.properties.recovered = 1;
								GOObjE3.properties.recoveryFrames = 0;
								GOObjE3.properties.parentObj = QuestleGlobals.MenuObject;
								console.log(JSON.parse(JSON.stringify(EnemyBaseCharacters[LevelSetups.Levels[this.properties.parentWordChecker.properties.LevelNum].traps[lI].Letter])));
								GOObjE3.properties.Attributes = JSON.parse(JSON.stringify(EnemyBaseCharacters[LevelSetups.Levels[this.properties.parentWordChecker.properties.LevelNum].traps[lI].Letter]));
								GOObjE3.properties.Attributes.Level = LevelSetups.Levels[this.properties.parentWordChecker.properties.LevelNum].traps[lI].Level;
								ApplyEnemyGrowth(GOObjE3.properties.Attributes,LevelSetups.Levels[this.properties.parentWordChecker.properties.LevelNum].traps[lI].Letter);
								console.log(GOObjE3.properties.Attributes);
								GOObjE3.properties.Attributes.currHP = GOObjE3.properties.Attributes.MaxHP;
								GOObjE3.properties.buffList = [];
								
								var TOJE3 = createTOFromString('TextObject -x 0 -y 0 -t test -c black;');
								TOJE3.textContent = '' + GOObjE3.properties.Attributes.currHP + '/' + GOObjE3.properties.Attributes.MaxHP;
								console.log(TOJE3.textContent);
								oHandler.addTextObject(TOJE3);
								GOObjE3.properties.healthCounter = TOJE3;
								
								var TOJE3H = createTOFromString('TextObject -x 0 -y 0 -t test -c black;');
								TOJE3H.textContent = 'LV: ' + GOObjE3.properties.Attributes.Level;
								console.log(TOJE3H.textContent);
								oHandler.addTextObject(TOJE3H);
								GOObjE3.properties.levelCounter = TOJE3H;
								
								QuestleGlobals.MenuObject.properties.enemies.push(GOObjE3);
								QuestleGlobals.CurrTraps.push(lI);
								oHandler.addObject(GOObjE3);
								
							}
							
							
						}
						
						console.log(QuestleGlobals.MenuObject.properties.battleActive);
						if(QuestleGlobals.MenuObject.properties.battleActive == 1) {
							shiftKeys('down');
							EnemySelectSetup();
							GenerateTurnOrder();
							
							QuestleGlobals.turnRotation = 0;
							console.log(QuestleGlobals.MenuObject.properties.turnOrder[0].type);
							if(QuestleGlobals.MenuObject.properties.turnOrder[0].type == 'E') {
								//QuestleGlobals.CurrAttacker = QuestleGlobals.MenuObject.properties.enemies[QuestleGlobals.MenuObject.properties.turnOrder[0].index];
								EnemyAttackPhase();
							} else if(QuestleGlobals.MenuObject.properties.turnOrder[0].type == 'P') {
								//console.log(QuestleGlobals.MenuObject.properties.turnOrder[0].index);
								QuestleGlobals.CurrAttacker = QuestleGlobals.MenuObject.properties.players[QuestleGlobals.MenuObject.properties.turnOrder[0].index];
							}
							//QuestleGlobals.CurrAttacker = QuestleGlobals.MenuObject.properties.players[0];
								
							QuestleGlobals.WordToBePushed = newWordA;
							this.properties.parentWordChecker.properties.Slot1Child.properties.letter = '';
							this.properties.parentWordChecker.properties.Slot2Child.properties.letter = '';
							this.properties.parentWordChecker.properties.Slot3Child.properties.letter = '';
							this.properties.parentWordChecker.properties.Active = false;
							this.properties.parentWordChecker.properties.Slot1Child.position.y = -100;
							this.properties.parentWordChecker.properties.Slot2Child.position.y = -100;
							this.properties.parentWordChecker.properties.Slot3Child.position.y = -100;
							return;
						}
						
						this.properties.parentWordChecker.properties.wordList.properties.words.push(newWordA);
						
						this.properties.parentWordChecker.properties.Slot1Child.properties.letter = '';
						this.properties.parentWordChecker.properties.Slot2Child.properties.letter = '';
						this.properties.parentWordChecker.properties.Slot3Child.properties.letter = '';
						
						if(pos1Greened && pos2Greened && pos3Greened) {
							var SelText = 'GameObject -x 500 -y 96 -v 0 0 -v 60 0 -v 60 60 -v 0 60 -d -u ReturnToLevelSelectUpdate;';
							
							for(var i = 0; i < this.handler.Objects.length; i++) {
								if(this.handler.Objects[i].tag == 'KeyButton') {
									storeVertices(this.handler.Objects[i]);
								}
							}
							
							enterObjects(SelText);
						}
						
					} 
				}
			}
			
		}
	
	}
}

function setupWordList() {
	
	this.properties.words = [];
	
}

function WordListUpdate() {
	for(var i = 0; i < this.properties.words.length; i++) {
		for(var j = 0; j < this.properties.words[i].length; j++) {
			this.properties.words[i][j].position.x = this.position.x + (10 * j);
			this.properties.words[i][j].position.y = this.position.y + (10 * i);
		}
	}
}