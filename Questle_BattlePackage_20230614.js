'use strict'

var QuestleGlobals = {}

var PlayerCharacters = {
	Knight: {
		Atk: 4,
		Def: 4,
		MagAtk: 2,
		MagDef: 2,
		Spd: 4,
		MaxHP: 50,
		
		Moves: [
			{
				Name: 'Attack',
				BasePower: 4,
				MaxUses: 999
			}
		]
		
	}
}

var TestEnemies = {
	TestEnemy1: {
		Atk: 4,
		Def: 4,
		MagAtk: 2,
		MagDef: 2,
		Spd: 3,
		MaxHP: 50,
		
		Moves: [
			{
				Name: 'Attack',
				BasePower: 4,
				MaxUses: 999
			}
		]
	}
}

function TakeDamage() {
	this.target.properties.hp = this.target.properties.hp - this.amount;
	this.target.properties.recovered = 0;
	
	console.log(this.target.properties.hp);
}

function getAttacked() {
	//this.localPointers.target.properties.recovered = 0;
	//this.localPointers.target.properties.hp--;
	
	var DmgAmt = QuestleGlobals.CurrAttacker.properties.Attributes.Moves[QuestleGlobals.currMove].BasePower 
	             + Math.floor(QuestleGlobals.CurrAttacker.properties.Attributes.Atk / 2)
				 - Math.floor(this.localPointers.target.properties.Attributes.Def / 4);
	
	QuestleGlobals.MenuObject.properties.DialogQ.push('Enemy Takes '+DmgAmt+' Damage');
	QuestleGlobals.MenuObject.properties.EventQ.push({battleEvent: TakeDamage, target: this.localPointers.target, amount: DmgAmt});
	
	QuestleGlobals.turnDone = true;
	
	//console.log(this.localPointers.target.properties.hp);
	
	MenuTransition();
	
	QuestleGlobals.MenuObject.properties.currLayer = 0;
	QuestleGlobals.MenuObject.properties.currSel = 0;
}

function menuSetup() {
	for(var i = 0; i < this.properties.enemies.length; i++) {
		var TestTObj0 = createTOFromString('TextObject -x -100 -y 0 -t '+this.properties.enemies[i].properties.name+';');
		oHandler.addTextObject(TestTObj0);
		
		var newEnemy = {title: TestTObj0, selectFunction: getAttacked, localPointers: {target: this.properties.enemies[i]}}
		this.properties.options[MenuLayerMap.EnemySelect].push(newEnemy);
	}
}

function EnemyAttackPhase() {
	QuestleGlobals.CurrAttacker = QuestleGlobals.MenuObject.properties.enemies[0];
	QuestleGlobals.currMove = 0;
	
	var currTarget = QuestleGlobals.MenuObject.properties.players[0];
	
	var DmgAmt = QuestleGlobals.CurrAttacker.properties.Attributes.Moves[QuestleGlobals.currMove].BasePower 
	             + Math.floor(QuestleGlobals.CurrAttacker.properties.Attributes.Atk / 2)
				 - Math.floor(currTarget.properties.Attributes.Def / 4);
				 
	QuestleGlobals.MenuObject.properties.DialogQ.push('Player Takes '+DmgAmt+' Damage');
	QuestleGlobals.MenuObject.properties.EventQ.push({battleEvent: TakeDamage, target: currTarget, amount: DmgAmt});
	
	QuestleGlobals.turnDone = true;
}

function menuUpdate() {
	
	if(this.properties.battleActive = 1) {
	
		var cLayer = this.properties.currLayer;
		var cSel = this.properties.currSel;
		
		for(var sI = 0; sI < this.properties.options[cLayer].length; sI++) {
			this.properties.options[cLayer][sI].title.position.x = -100;
			this.properties.options[cLayer][sI].title.position.y = 0;
		}
		
		this.properties.currDialogQ.position.x = -100;
		this.properties.currDialogQ.position.y = 0;
		
		var SelGroup = Math.floor(cSel / 4);
		
		if(this.properties.control && this.properties.DialogQ.length == 0) {
		
			//console.log(cLayer);
			if(this.properties.options[cLayer][(SelGroup * 4) + 0] != null) {
				this.properties.options[cLayer][(SelGroup * 4) + 0].title.position.x = this.position.x + 10;
				this.properties.options[cLayer][(SelGroup * 4) + 0].title.position.y = this.position.y + 10;
			}
			
			if(this.properties.options[cLayer][(SelGroup * 4) + 1] != null) {
				this.properties.options[cLayer][(SelGroup * 4) + 1].title.position.x = this.position.x + 210;
				this.properties.options[cLayer][(SelGroup * 4) + 1].title.position.y = this.position.y + 10;
			}
			
			if(this.properties.options[cLayer][(SelGroup * 4) + 2] != null) {
				this.properties.options[cLayer][(SelGroup * 4) + 2].title.position.x = this.position.x + 10;
				this.properties.options[cLayer][(SelGroup * 4) + 2].title.position.y = this.position.y + 210;
			}
			
			if(this.properties.options[cLayer][(SelGroup * 4) + 3] != null) {
				this.properties.options[cLayer][(SelGroup * 4) + 3].title.position.x = this.position.x + 210;
				this.properties.options[cLayer][(SelGroup * 4) + 3].title.position.y = this.position.y + 210;
			}
			
			if(cSel % 4 == 0) {
				this.properties.pointerChild.position.x = this.position.x + 10;
				this.properties.pointerChild.position.y = this.position.y + 10;
			} else if(cSel % 4 == 1) {
				this.properties.pointerChild.position.x = this.position.x + 210;
				this.properties.pointerChild.position.y = this.position.y + 10;
			} else if(cSel % 4 == 2) {
				this.properties.pointerChild.position.x = this.position.x + 10;
				this.properties.pointerChild.position.y = this.position.y + 210;
			} else if(cSel % 4 == 3) {
				this.properties.pointerChild.position.x = this.position.x + 210;
				this.properties.pointerChild.position.y = this.position.y + 210;
			}
			
			if(keys.enter && !this.properties.enterDown) {
				if(this.properties.options[cLayer][cSel].selectFunction != null) {
					this.properties.options[cLayer][cSel].selectFunction();
				}
				this.properties.enterDown = true;
			} else if(keys.right && !this.properties.rightDown) {
				//console.log('right');
				if(this.properties.currSel % 2 == 0) { //on left
					if(this.properties.options[cLayer][this.properties.currSel + 1] != null) {
						this.properties.currSel++;
					}
				} else { //on right
					if(this.properties.options[cLayer][this.properties.currSel - 1] != null) {
						this.properties.currSel--;
					}
				}
				this.properties.rightDown = true;
			} else if(keys.left && !this.properties.leftDown) {
				//console.log('left');
				if(this.properties.currSel % 2 == 0) { //on left
					if(this.properties.options[cLayer][this.properties.currSel + 1] != null) {
						this.properties.currSel++;
					}
				} else { //on right
					if(this.properties.options[cLayer][this.properties.currSel - 1] != null) {
						this.properties.currSel--;
					}
				}
				this.properties.leftDown = true;
			} else if(keys.up && !this.properties.upDown) {
				//console.log('up');
				if(this.properties.currSel - 2 >= 0) {
					if(this.properties.options[cLayer][this.properties.currSel - 2] != null) {
						this.properties.currSel = this.properties.currSel - 2;
					}
				}
				this.properties.upDown = true;
			} else if(keys.down && !this.properties.downDown) {
				//console.log('down');
				if(this.properties.currSel + 2 < this.properties.options[cLayer].length) {
					if(this.properties.options[cLayer][this.properties.currSel + 2] != null) {
						this.properties.currSel = this.properties.currSel + 2;
					}
				}
				this.properties.downDown = true;
			}
		} else if(this.properties.control && this.properties.DialogPos < this.properties.DialogQ.length) {
			this.properties.currDialogQ.textContent = this.properties.DialogQ[this.properties.DialogPos];
			
			this.properties.currDialogQ.position.x = this.position.x + 10;
			this.properties.currDialogQ.position.y = this.position.y + 10;
			
			if(keys.enter && !this.properties.enterDown) {
				if(this.properties.EventQ[this.properties.DialogPos] != null) {
					console.log('battle event');
					this.properties.EventQ[this.properties.DialogPos].battleEvent();
				}
				this.properties.DialogPos++;
				if(this.properties.DialogPos >= this.properties.DialogQ.length) {
					this.properties.DialogQ = [];
					this.properties.EventQ = [];
					this.properties.DialogPos = 0;
					if(QuestleGlobals.turnDone) {
						console.log('Turn Done');
						QuestleGlobals.turnDone = false;
						QuestleGlobals.turnRotation++;
						if(QuestleGlobals.turnRotation >= this.properties.turnOrder.length) {
							QuestleGlobals.turnRotation = 0;
						}
						if(this.properties.turnOrder[QuestleGlobals.turnRotation].type == 'P') {
							console.log('Player');
							QuestleGlobals.CurrAttacker = this.properties.players[0];
						} else if(this.properties.turnOrder[QuestleGlobals.turnRotation].type == 'E') {
							console.log('Enemy');
							EnemyAttackPhase();
						}
						
					}
				}
				this.properties.enterDown = true;
			}
		}
		
		if(!keys.right) {
			this.properties.rightDown = false;
		}
		
		if(!keys.left) {
			this.properties.leftDown = false;
		}
		
		if(!keys.up) {
			this.properties.upDown = false;
		}
		
		if(!keys.down) {
			this.properties.downDown = false;
		}
		
		if(!keys.enter) {
			this.properties.enterDown = false;
		}
	
	}
}

function InitializeMenu(mObj) {
	
}

function AttackSelect() {
	console.log('attack');
	console.log(this.localPointers.test1)
	console.log(QuestleGlobals.MenuObject.properties.control);
	for(var i = 0; i < oHandler.Objects.length; i++) {
		if(oHandler.Objects[i].tag == 'menu') {
			var cLayer = oHandler.Objects[i].properties.currLayer;
			
			if(oHandler.Objects[i].properties.options[cLayer][0] != null) {
				oHandler.Objects[i].properties.options[cLayer][0].title.position.x = -100;
				oHandler.Objects[i].properties.options[cLayer][0].title.position.y = 0;
			}
			
			if(oHandler.Objects[i].properties.options[cLayer][1] != null) {
				oHandler.Objects[i].properties.options[cLayer][1].title.position.x = -100;
				oHandler.Objects[i].properties.options[cLayer][1].title.position.y = 0;
			}
			
			if(oHandler.Objects[i].properties.options[cLayer][2] != null) {
				oHandler.Objects[i].properties.options[cLayer][2].title.position.x = -100;
				oHandler.Objects[i].properties.options[cLayer][2].title.position.y = 0;
			}
			
			if(oHandler.Objects[i].properties.options[cLayer][3] != null) {
				oHandler.Objects[i].properties.options[cLayer][3].title.position.x = -100;
				oHandler.Objects[i].properties.options[cLayer][3].title.position.y = 0;
			}
			
			oHandler.Objects[i].properties.currLayer = 1;
		}
	}
}

function MenuTransition() {
	var cLayer = QuestleGlobals.MenuObject.properties.currLayer;
	var cSel = QuestleGlobals.MenuObject.properties.currSel;
	
	var SelGroup = Math.floor(cSel / 4);
	
	if(QuestleGlobals.MenuObject.properties.options[cLayer][(SelGroup * 4) + 0] != null) {
		QuestleGlobals.MenuObject.properties.options[cLayer][(SelGroup * 4) + 0].title.position.x = -100;
		QuestleGlobals.MenuObject.properties.options[cLayer][(SelGroup * 4) + 0].title.position.y = 0;
	}
	
	if(QuestleGlobals.MenuObject.properties.options[cLayer][(SelGroup * 4) + 1] != null) {
		QuestleGlobals.MenuObject.properties.options[cLayer][(SelGroup * 4) + 1].title.position.x = -100;
		QuestleGlobals.MenuObject.properties.options[cLayer][(SelGroup * 4) + 1].title.position.y = 0;
	}
	
	if(QuestleGlobals.MenuObject.properties.options[cLayer][(SelGroup * 4) + 2] != null) {
		QuestleGlobals.MenuObject.properties.options[cLayer][(SelGroup * 4) + 2].title.position.x = -100;
		QuestleGlobals.MenuObject.properties.options[cLayer][(SelGroup * 4) + 2].title.position.y = 0;
	}
	
	if(QuestleGlobals.MenuObject.properties.options[cLayer][(SelGroup * 4) + 3] != null) {
		QuestleGlobals.MenuObject.properties.options[cLayer][(SelGroup * 4) + 3].title.position.x = -100;
		QuestleGlobals.MenuObject.properties.options[cLayer][(SelGroup * 4) + 3].title.position.y = 0;
	}
}

function MoveSelect() {
	
	QuestleGlobals.currMove = QuestleGlobals.MenuObject.properties.currSel;
	
	MenuTransition();
	
	QuestleGlobals.MenuObject.properties.currLayer = 2;
	QuestleGlobals.MenuObject.properties.currSel = 0;
}

function enemyUpdate() {
	if(this.properties.intro == 0) {
		this.properties.parentObj.properties.control = false;
		this.position.y = this.position.y + 5;
		this.properties.introFrames++;
		
		if(this.properties.introFrames == 60) {
			this.properties.intro = 1;
			this.properties.parentObj.properties.control = true;
			this.properties.introFrames = 0;
		}
	}
	
	if(this.properties.recovered == 0) {
		this.properties.parentObj.properties.control = false;
		this.currAnimation = 8;
		this.properties.recoveryFrames++;
		
		if(this.properties.recoveryFrames == 30) {
			this.properties.recovered = 1;
			this.properties.parentObj.properties.control = true;
			this.properties.recoveryFrames = 0;
			this.currAnimation = 0;
		}
	}
}

var MenuLayerMap = {
	ActionSelect: 0,
	MoveSelect: 1,
	EnemySelect: 2
}

function GrabKnightStats() {
	console.log('K Stats');
	this.properties.Attributes = JSON.parse(JSON.stringify(PlayerCharacters.Knight));
	this.properties.Attributes.currHP = this.properties.Attributes.MaxHP;
}

function GrabTestStats() {
	this.properties.Attributes = JSON.parse(JSON.stringify(TestEnemies.TestEnemy1));
	this.properties.Attributes.currHP = this.properties.Attributes.MaxHP;
}

function ListAttacks() {
	
	QuestleGlobals.MenuObject.properties.options[MenuLayerMap.MoveSelect] = [];
	
	for(var i = 0; i < QuestleGlobals.CurrAttacker.properties.Attributes.Moves.length; i++) {	
		var TOObj = createTOFromString('TextObject -x -100 -y 0 -t '+QuestleGlobals.CurrAttacker.properties.Attributes.Moves[i].Name+';');
		oHandler.addTextObject(TOObj);
		var newOpt = {title: TOObj, selectFunction: MoveSelect}
		QuestleGlobals.MenuObject.properties.options[MenuLayerMap.MoveSelect].push(newOpt);
	}
}

function StartBattle() {
	var GOObjM = createGOFromString('GameObject -t menu -x 0 -y 0 -v 0 0 -v 300 0 -v 300 300 -v 0 300 -d -u menuUpdate -pi menuSetup -p currLayer 0 -p currSel 0 -p battleActive 0;');

	var TOObj = createTOFromString('TextObject -x -100 -y 0 -t Attack;');
	oHandler.addTextObject(TOObj);
	
	var TOObj2 = createTOFromString('TextObject -x -100 -y 0 -t Item;');
	oHandler.addTextObject(TOObj2);

	var TOObj3 = createTOFromString('TextObject -x -100 -y 0 -t Defend;');
	oHandler.addTextObject(TOObj3);
	
	var objText = 'GameObject -x -100 -y 0 -v 0 0 -v 10 5 -v 0 10 -d';
	var GOJP = createGOJsonFromString(objText);
	var GOObjP = createGOFromJSON(GOJP);
	oHandler.addObject(GOObjP);
	
	GOObjM.properties.pointerChild = GOObjP;
	
	var GOObjE = createGOFromString('GameObject -x 350 -y -20 -d -a PlatformerAnimationPackage -ca 0 -p intro 1 -p introFrames 0 -p recovered 1 -p recoveryFrames 0 -u enemyUpdate -p hp 10 -p name Enem1 -pi GrabTestStats;');
	GOObjE.properties.parentObj = GOObjM;
	
	oHandler.addObject(GOObjE);
	GOObjM.properties.enemies = [GOObjE];
	
	var GOObjP = createGOFromString('GameObject -x 350 -y -20 -d -a PlatformerAnimationPackage -ca 0 -p intro 1 -p introFrames 0 -p hp 10 -p name Knight -pi GrabKnightStats;');
	oHandler.addObject(GOObjP);
	GOObjM.properties.players = [GOObjP];
	
	GOObjM.properties.rightDown = false;
	GOObjM.properties.leftDown = false;
	GOObjM.properties.upDown = false;
	GOObjM.properties.downDown = false;
	GOObjM.properties.enterDown = false;
	
	GOObjM.properties.control = true;
	
	GOObjM.properties.turnOrder = [{type: 'P', index: 0}, {type: 'E', index: 0}];
	
	QuestleGlobals.CurrAttacker = GOObjM.properties.players[0];
	QuestleGlobals.turnDone = false;
	QuestleGlobals.turnRotation = 0;
	
	/*
	var TestTObj0 = createTOFromString('TextObject -x -100 -y 0 -t Option0;');
	oHandler.addTextObject(TestTObj0);
	
	var TestTObj1 = createTOFromString('TextObject -x -100 -y 0 -t Option1;');
	oHandler.addTextObject(TestTObj1);
	
	var TestTObj2 = createTOFromString('TextObject -x -100 -y 0 -t Option2;');
	oHandler.addTextObject(TestTObj2);
	
	var TestTObj3 = createTOFromString('TextObject -x -100 -y 0 -t Option3;');
	oHandler.addTextObject(TestTObj3);
	
	var TestTObj4 = createTOFromString('TextObject -x -100 -y 0 -t Option4;');
	oHandler.addTextObject(TestTObj4);
	
	var TestTObj5 = createTOFromString('TextObject -x -100 -y 0 -t Option5;');
	oHandler.addTextObject(TestTObj5);
	
	var TestTObj6 = createTOFromString('TextObject -x -100 -y 0 -t Option6;');
	oHandler.addTextObject(TestTObj6);
	
	var TestTObj7 = createTOFromString('TextObject -x -100 -y 0 -t Option7;');
	oHandler.addTextObject(TestTObj7);
	
	var TestTObj8 = createTOFromString('TextObject -x -100 -y 0 -t Option8;');
	oHandler.addTextObject(TestTObj8);
	
	var TestTObj9 = createTOFromString('TextObject -x -100 -y 0 -t Option9;');
	oHandler.addTextObject(TestTObj9);
	
	var TestTObj10 = createTOFromString('TextObject -x -100 -y 0 -t Option10;');
	oHandler.addTextObject(TestTObj10);
	*/
	
	var DialogQObj = createTOFromString('TextObject -x -100 -y 0 -t Temp;');
	oHandler.addTextObject(DialogQObj);
	
	
	
	GOObjM.properties.currDialogQ = DialogQObj;
	GOObjM.properties.DialogQ = ['Test'];
	GOObjM.properties.DialogPos = 0;
	GOObjM.properties.EventQ = [null];
	
	QuestleGlobals.MenuObject = GOObjM;
	

	GOObjM.properties.options = [
		[{title: TOObj, selectFunction: AttackSelect, localPointers: {test1: 'tester'}},{title: TOObj2},{title: TOObj3}],
		//[{title: TestTObj0},{title: TestTObj1, selectFunction: MoveSelect},{title: TestTObj2},{title: TestTObj3},{title: TestTObj4},{title: TestTObj5},{title: TestTObj6},{title: TestTObj7},{title: TestTObj8},{title: TestTObj9}],
		[],
		[]
	];
	
	ListAttacks();

	oHandler.addObject(GOObjM);
	
	/*
	var GOObjLSel = createGOFromString('GameObject -x 600 -y 500 -v 0 0 -v 60 0 -v 60 60 -v 0 60 -d -p level 0 -u EngageBattle;');
	oHandler.addObject(GOObjLSel);
	*/
	
	//var ClickObj = createGOFromString('GameObject -u showClickPosition -pi addClickOption;');
	//oHandler.addObject(ClickObj);
	
}

function EngageBattle() {
	for(var i = 0; i < this.handler.cBuff.length; i++) {
		if(this.handler.cBuff[i].x + this.handler.CameraX > this.position.x 
		   && this.handler.cBuff[i].x + this.handler.CameraX < this.position.x + this.vertices[1].offX) 
		{
			if(this.handler.cBuff[i].y + this.handler.CameraY > this.position.y
		       && this.handler.cBuff[i].y + this.handler.CameraY < this.position.y + this.vertices[2].offY) {
				QuestleGlobals.MenuObject.properties.battleActive = 1;
				QuestleGlobals.MenuObject.properties.enemies[0].properties.intro = 0;
				
				for(var i = 0; i < this.handler.Objects.length; i++) {
					if(this.handler.Objects[i].tag == 'KeyButton') {
						storeVertices(this.handler.Objects[i]);
					}
				}
			}
		}
	}
}