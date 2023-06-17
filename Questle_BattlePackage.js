'use strict'

var MenuLayerMap = {
	ActionSelect: 0,
	MoveSelect0: 1,
	MoveSelect1: 2,
	MoveSelect2: 3,
	EnemySelect: 4,
	ItemSelect: 5
}

function InitalizeMenu() {
	var TOObj = createTOFromString('TextObject -x -100 -y 0 -t Attack;');
	oHandler.addTextObject(TOObj);
	
	var TOObj2 = createTOFromString('TextObject -x -100 -y 0 -t Item;');
	oHandler.addTextObject(TOObj2);

	var TOObj3 = createTOFromString('TextObject -x -100 -y 0 -t Defend;');
	oHandler.addTextObject(TOObj3);

	var GOObjP = createGOFromString('GameObject -x -100 -y 0 -v 0 0 -v 10 5 -v 0 10 -d');
	oHandler.addObject(GOObjP);
	QuestleGlobals.MenuObject.properties.pointerChild = GOObjP;
	
	QuestleGlobals.MenuObject.properties.options = [
		[{title: TOObj, selectFunction: AttackSelect, localPointers: {test1: 'tester'}},{title: TOObj2},{title: TOObj3}],
		[],
		[],
		[],
		[],
		[]
	];
	
	QuestleGlobals.MenuObject.properties.enemies = [];
	
	QuestleGlobals.MenuObject.properties.players = [];
	populatePlayers();
	
	QuestleGlobals.MenuObject.properties.rightDown = false;
	QuestleGlobals.MenuObject.properties.leftDown = false;
	QuestleGlobals.MenuObject.properties.upDown = false;
	QuestleGlobals.MenuObject.properties.downDown = false;
	QuestleGlobals.MenuObject.properties.enterDown = false;
	
	QuestleGlobals.MenuObject.properties.control = true;
	
	QuestleGlobals.MenuObject.properties.turnOrder = [];
	
	QuestleGlobals.turnDone = false;
	QuestleGlobals.turnRotation = 0;
	
	var DialogQObj = createTOFromString('TextObject -x -100 -y 0 -t Temp;');
	oHandler.addTextObject(DialogQObj);
	QuestleGlobals.MenuObject.properties.currDialogQ = DialogQObj;
	
	QuestleGlobals.MenuObject.properties.DialogQ = [];
	QuestleGlobals.MenuObject.properties.DialogPos = 0;
	QuestleGlobals.MenuObject.properties.EventQ = [];
	
	QuestleGlobals.MenuObject.properties.battleActive = 0

	ListPlayerAttacks();
}

function populatePlayers() {
	for(var i = 0; i < CurrParty.length; i++) {
		if(PartyCharacters[CurrParty[i]] != null) {
			var GOObjP = createGOFromString('GameObject -x 350 -y -100 -d -a PlatformerAnimationPackage -ca 0 -p hp 10 -p name Knight;');
			console.log(JSON.parse(JSON.stringify(PartyCharacters[CurrParty[i]])));
			GOObjP.properties.Attributes = JSON.parse(JSON.stringify(PartyCharacters[CurrParty[i]]));
			ApplyPlayerGrowth(GOObjP.properties.Attributes,CurrParty[i]);
			console.log(GOObjP.properties.Attributes);
			GOObjP.properties.Attributes.currHP = GOObjP.properties.Attributes.MaxHP;
			QuestleGlobals.MenuObject.properties.players.push(GOObjP);
			oHandler.addObject(GOObjP);
		}
	}
}

function ListPlayerAttacks() {
	
	QuestleGlobals.MenuObject.properties.options[MenuLayerMap.MoveSelect0] = [];
	QuestleGlobals.MenuObject.properties.options[MenuLayerMap.MoveSelect1] = [];
	QuestleGlobals.MenuObject.properties.options[MenuLayerMap.MoveSelect1] = [];
	
	if(QuestleGlobals.MenuObject.properties.players[0] != null) {
		for(var i = 0; i < QuestleGlobals.MenuObject.properties.players[0].properties.Attributes.Moves.length; i++) {	
			var TOObj = createTOFromString('TextObject -x -100 -y 0 -t '+QuestleGlobals.MenuObject.properties.players[0].properties.Attributes.Moves[i].Name+';');
			oHandler.addTextObject(TOObj);
			var newOpt = {title: TOObj, selectFunction: MoveSelect}
			QuestleGlobals.MenuObject.properties.options[MenuLayerMap.MoveSelect0].push(newOpt);
		}
	}
	
	if(QuestleGlobals.MenuObject.properties.players[1] != null) {
		for(var i = 0; i < QuestleGlobals.MenuObject.properties.players[1].properties.Attributes.Moves.length; i++) {	
			var TOObj = createTOFromString('TextObject -x -100 -y 0 -t '+QuestleGlobals.MenuObject.properties.players[1].properties.Attributes.Moves[i].Name+';');
			oHandler.addTextObject(TOObj);
			var newOpt = {title: TOObj, selectFunction: MoveSelect}
			QuestleGlobals.MenuObject.properties.options[MenuLayerMap.MoveSelect1].push(newOpt);
		}
	}
	
	if(QuestleGlobals.MenuObject.properties.players[2] != null) {
		for(var i = 0; i < QuestleGlobals.MenuObject.properties.players[2].properties.Attributes.Moves.length; i++) {	
			var TOObj = createTOFromString('TextObject -x -100 -y 0 -t '+QuestleGlobals.MenuObject.properties.players[2].properties.Attributes.Moves[i].Name+';');
			oHandler.addTextObject(TOObj);
			var newOpt = {title: TOObj, selectFunction: MoveSelect}
			QuestleGlobals.MenuObject.properties.options[MenuLayerMap.MoveSelect2].push(newOpt);
		}
	}
}

function CreateEnemySelection() {
	if(this.properties.enemies != null) {
		for(var i = 0; i < this.properties.enemies.length; i++) {
			var TestTObj0 = createTOFromString('TextObject -x -100 -y 0 -t '+this.properties.enemies[i].properties.name+';');
			oHandler.addTextObject(TestTObj0);
			
			var newEnemy = {title: TestTObj0, selectFunction: getAttacked, localPointers: {target: this.properties.enemies[i]}}
			this.properties.options[MenuLayerMap.EnemySelect].push(newEnemy);
		}
	}
}

function TakeDamage() {
	this.target.properties.Attributes.currHP = this.target.properties.Attributes.currHP - this.amount;
	this.target.properties.recovered = 0;
	
	if(this.target.properties.Attributes.currHP < 0) {
		this.target.properties.Attributes.currHP = 0;
	}
	
	console.log(this.target.properties.Attributes.currHP);
}

function getAttacked() {
	
	var DmgAmt = 0;
	
	if(QuestleGlobals.CurrAttacker.properties.Attributes.Moves[QuestleGlobals.currMove].Attr == 'Atk') {
		DmgAmt = QuestleGlobals.CurrAttacker.properties.Attributes.Moves[QuestleGlobals.currMove].BasePower 
				 + Math.floor(QuestleGlobals.CurrAttacker.properties.Attributes.Atk / 2)
				 - Math.floor(this.localPointers.target.properties.Attributes.Def / 4);
	} else if(QuestleGlobals.CurrAttacker.properties.Attributes.Moves[QuestleGlobals.currMove].Attr == 'MagAtk') {
		DmgAmt = QuestleGlobals.CurrAttacker.properties.Attributes.Moves[QuestleGlobals.currMove].BasePower 
				 + Math.floor(QuestleGlobals.CurrAttacker.properties.Attributes.MagAtk / 2)
				 - Math.floor(this.localPointers.target.properties.Attributes.MagDef / 4);
	}
	
	QuestleGlobals.MenuObject.properties.DialogQ.push('Enemy Takes '+DmgAmt+' Damage');
	QuestleGlobals.MenuObject.properties.EventQ.push({battleEvent: TakeDamage, target: this.localPointers.target, amount: DmgAmt});
	
	QuestleGlobals.turnDone = true;
	
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

function EnemySelectSetup() {
	for(var i = 0; i < QuestleGlobals.MenuObject.properties.enemies.length; i++) {
		var TestTObj0 = createTOFromString('TextObject -x -100 -y 0 -t '+QuestleGlobals.MenuObject.properties.enemies[i].properties.name+';');
		oHandler.addTextObject(TestTObj0);
		
		var newEnemy = {title: TestTObj0, selectFunction: getAttacked, localPointers: {target: QuestleGlobals.MenuObject.properties.enemies[i]}}
		QuestleGlobals.MenuObject.properties.options[MenuLayerMap.EnemySelect].push(newEnemy);
	}
}

function GenerateTurnOrder() {
	QuestleGlobals.MenuObject.properties.turnOrder = [];
	for(var i = 0; i < QuestleGlobals.MenuObject.properties.players.length; i++) {
		var newOrderJ = {
			type: 'P',
			index: i,
			speed: QuestleGlobals.MenuObject.properties.players[i].properties.Attributes.Spd
		}
		QuestleGlobals.MenuObject.properties.turnOrder.push(newOrderJ);
	}
	for(var i = 0; i < QuestleGlobals.MenuObject.properties.enemies.length; i++) {
		var newOrderJ = {
			type: 'E',
			index: i,
			speed: QuestleGlobals.MenuObject.properties.enemies[i].properties.Attributes.Spd
		}
		QuestleGlobals.MenuObject.properties.turnOrder.push(newOrderJ);
	}
	console.log(QuestleGlobals.MenuObject.properties.turnOrder);
}

function EnemyAttackPhase() {
	QuestleGlobals.CurrAttacker = QuestleGlobals.MenuObject.properties.enemies[QuestleGlobals.MenuObject.properties.turnOrder[QuestleGlobals.turnRotation].index];
	
	QuestleGlobals.currMove = Math.floor(Math.random() * QuestleGlobals.CurrAttacker.properties.Attributes.Moves.length);
	
	var currTarget = QuestleGlobals.MenuObject.properties.players[0];
	
	var DmgAmt = 0;
	
	if(QuestleGlobals.CurrAttacker.properties.Attributes.Moves[QuestleGlobals.currMove].Attr == 'Atk') {
		DmgAmt = QuestleGlobals.CurrAttacker.properties.Attributes.Moves[QuestleGlobals.currMove].BasePower 
	             + Math.floor(QuestleGlobals.CurrAttacker.properties.Attributes.Atk / 2)
		         - Math.floor(currTarget.properties.Attributes.Def / 4);
	} else if(QuestleGlobals.CurrAttacker.properties.Attributes.Moves[QuestleGlobals.currMove].Attr == 'MagAtk') {
		DmgAmt = QuestleGlobals.CurrAttacker.properties.Attributes.Moves[QuestleGlobals.currMove].BasePower 
				 + Math.floor(QuestleGlobals.CurrAttacker.properties.Attributes.MagAtk / 2)
				 - Math.floor(currTarget.properties.Attributes.MagDef / 4);
	}
	
	QuestleGlobals.MenuObject.properties.DialogQ.push('Enemy Uses '+QuestleGlobals.CurrAttacker.properties.Attributes.Moves[QuestleGlobals.currMove].Name+'');
	QuestleGlobals.MenuObject.properties.EventQ.push(null);
	
	QuestleGlobals.MenuObject.properties.DialogQ.push('Player Takes '+DmgAmt+' Damage');
	QuestleGlobals.MenuObject.properties.EventQ.push({battleEvent: TakeDamage, target: currTarget, amount: DmgAmt});
	
	QuestleGlobals.turnDone = true;
}

function ExitToKeyBoard() {
	QuestleGlobals.MenuObject.position.y = -700;
	QuestleGlobals.MenuObject.properties.battleActive = 0;
	
	QuestleGlobals.MenuObject.properties.enemies = [];
	
	QuestleGlobals.MenuObject.properties.pointerChild.position.x = -100;
	QuestleGlobals.MenuObject.properties.currDialogQ.position.x = -100;
	
	QuestleGlobals.MenuObject.properties.DialogQ = [];
	QuestleGlobals.MenuObject.properties.EventQ = [];
	QuestleGlobals.MenuObject.properties.DialogPos = 0;
	
	QuestleGlobals.MenuObject.properties.options[4] = [];
	QuestleGlobals.MenuObject.properties.options[5] = [];
	
	QuestleGlobals.MenuObject.properties.currLayer = 0;
	QuestleGlobals.MenuObject.properties.currSel = 0;
	
	QuestleGlobals.WordChecker.properties.Active = true;
	QuestleGlobals.WordChecker.properties.Slot1Child.position.y = 0;
	QuestleGlobals.WordChecker.properties.Slot2Child.position.y = 0;
	QuestleGlobals.WordChecker.properties.Slot3Child.position.y = 0;
	
	if(QuestleGlobals.WordToBePushed != null) {
		QuestleGlobals.WordChecker.properties.wordList.properties.words.push(QuestleGlobals.WordToBePushed);
		if(QuestleGlobals.WordToBePushed[0].color == 'green' && QuestleGlobals.WordToBePushed[1].color == 'green' && QuestleGlobals.WordToBePushed[1].color == 'green') {
			var SelText = 'GameObject -x 500 -y 96 -v 0 0 -v 60 0 -v 60 60 -v 0 60 -d -u ReturnToLevelSelectUpdate;';

			for(var i = 0; i < this.handler.Objects.length; i++) {
				if(this.handler.Objects[i].tag == 'KeyButton') {
					storeVertices(this.handler.Objects[i]);
				}
			}

			enterObjects(SelText);
		}
		QuestleGlobals.WordToBePushed = null;
	}
}

function menuUpdate() {
	
	if(this.properties.battleActive == 1) {
	
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
					if(this.properties.battleActive == 0) {
						return;
					}
					
					var AllDead = true;
					for(var eI = 0; eI < this.properties.enemies.length; eI++) {
						if(this.properties.enemies[eI].properties.Attributes.currHP > 0) {
							AllDead = false;
						}
					}
					
					if(AllDead) {
						QuestleGlobals.MenuObject.properties.DialogQ.push('You Win');
						//QuestleGlobals.MenuObject.properties.EventQ.push(null);
						QuestleGlobals.MenuObject.properties.EventQ.push({battleEvent: ExitToKeyBoard});
					}
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
						console.log(QuestleGlobals.turnRotation);
						if(this.properties.turnOrder[QuestleGlobals.turnRotation].type == 'P') {
							console.log('Player');
							QuestleGlobals.CurrAttacker = this.properties.players[this.properties.turnOrder[QuestleGlobals.turnRotation].index];
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

function AttackSelect() {
	//console.log('attack');
	//console.log(this.localPointers.test1)
	//console.log(QuestleGlobals.MenuObject.properties.control);
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
	
	QuestleGlobals.MenuObject.properties.currLayer = MenuLayerMap.EnemySelect;
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
	
	this.properties.healthCounter.textContent = '' + this.properties.Attributes.currHP + '/' + this.properties.Attributes.MaxHP
	
	this.properties.healthCounter.position.x = this.position.x;
	this.properties.healthCounter.position.y = this.position.y - 10;
}

function StartBattle() {
	//var GOObjM = createGOFromString('GameObject -t menu -x 0 -y 0 -v 0 0 -v 300 0 -v 300 300 -v 0 300 -d -u menuUpdate -pi menuSetup -p currLayer 0 -p currSel 0 -p battleActive 0;');
	//QuestleGlobals.MenuObject = GOObjM;
	//oHandler.addObject(GOObjM);
	
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