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
	var TOObj = createTOFromString('TextObject -x -100 -y 0 -t Attack -c black;');
	oHandler.addTextObject(TOObj);
	
	var TOObj2 = createTOFromString('TextObject -x -100 -y 0 -t Item -c black;');
	oHandler.addTextObject(TOObj2);

	var TOObj3 = createTOFromString('TextObject -x -100 -y 0 -t Defend -c black;');
	oHandler.addTextObject(TOObj3);

	var GOObjP = createGOFromString('GameObject -x -100 -y 0 -v 0 0 -v 10 5 -v 0 10 -d');
	oHandler.addObject(GOObjP);
	QuestleGlobals.MenuObject.properties.pointerChild = GOObjP;
	
	QuestleGlobals.MenuObject.properties.options = [
		[
			{title: TOObj, selectFunction: AttackSelect, localPointers: {test1: 'tester'}},
			{title: TOObj2, selectFunction: ItemMenuSelect, localPointers: {test1: 'tester'}},
			{title: TOObj3, selectFunction: PlayerDefend}
		],
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
	
	var DialogQObj = createTOFromString('TextObject -x -100 -y 0 -t Temp -c black;');
	oHandler.addTextObject(DialogQObj);
	QuestleGlobals.MenuObject.properties.currDialogQ = DialogQObj;
	
	QuestleGlobals.MenuObject.properties.DialogQ = [];
	QuestleGlobals.MenuObject.properties.DialogPos = 0;
	QuestleGlobals.MenuObject.properties.EventQ = [];
	
	QuestleGlobals.MenuObject.properties.battleActive = 0

	ListPlayerAttacks();
	ListItemOptions();
}

function populatePlayers() {
	for(var i = 0; i < CurrParty.length; i++) {
		if(PartyCharacters[CurrParty[i]] != null) {
			var GOObjP = createGOFromString('GameObject -x '+((i+1) * 150)+' -y 340 -d -a PlatformerAnimationPackage -ca 0 -p hp 10 -p name Knight -u playerUpdate;');
			console.log(JSON.parse(JSON.stringify(PartyCharacters[CurrParty[i]])));
			GOObjP.properties.Attributes = JSON.parse(JSON.stringify(PartyCharacters[CurrParty[i]]));
			ApplyPlayerGrowth(GOObjP.properties.Attributes,CurrParty[i]);
			console.log(GOObjP.properties.Attributes);
			GOObjP.properties.Attributes.currHP = GOObjP.properties.Attributes.MaxHP;
			GOObjP.properties.Type = CurrParty[i];
			GOObjP.properties.buffList = [];
			QuestleGlobals.MenuObject.properties.players.push(GOObjP);
			
			var TOJP = createTOFromString('TextObject -x 0 -y 0 -t test -c black;');
			TOJP.textContent = '' + GOObjP.properties.Attributes.currHP + '/' + GOObjP.properties.Attributes.MaxHP;
			console.log(TOJP.textContent);
			oHandler.addTextObject(TOJP);
			GOObjP.properties.healthCounter = TOJP;
			
			var TOJPL = createTOFromString('TextObject -x 0 -y 0 -t test -c black;');
			TOJPL.textContent = '' + GOObjP.properties.Attributes.Level;
			console.log(TOJPL.textContent);
			oHandler.addTextObject(TOJPL);
			GOObjP.properties.levelCounter = TOJPL;
			
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
			var TOObj = createTOFromString('TextObject -x -100 -y 0 -t "'+QuestleGlobals.MenuObject.properties.players[0].properties.Attributes.Moves[i].Name+'" -c black;');
			oHandler.addTextObject(TOObj);
			var newOpt = {title: TOObj, selectFunction: MoveSelect}
			QuestleGlobals.MenuObject.properties.options[MenuLayerMap.MoveSelect0].push(newOpt);
		}
	}
	
	if(QuestleGlobals.MenuObject.properties.players[1] != null) {
		for(var i = 0; i < QuestleGlobals.MenuObject.properties.players[1].properties.Attributes.Moves.length; i++) {	
			var TOObj = createTOFromString('TextObject -x -100 -y 0 -t "'+QuestleGlobals.MenuObject.properties.players[1].properties.Attributes.Moves[i].Name+'" -c black;');
			oHandler.addTextObject(TOObj);
			var newOpt = {title: TOObj, selectFunction: MoveSelect}
			QuestleGlobals.MenuObject.properties.options[MenuLayerMap.MoveSelect1].push(newOpt);
		}
	}
	
	if(QuestleGlobals.MenuObject.properties.players[2] != null) {
		for(var i = 0; i < QuestleGlobals.MenuObject.properties.players[2].properties.Attributes.Moves.length; i++) {	
			var TOObj = createTOFromString('TextObject -x -100 -y 0 -t "'+QuestleGlobals.MenuObject.properties.players[2].properties.Attributes.Moves[i].Name+'" -c black;');
			oHandler.addTextObject(TOObj);
			var newOpt = {title: TOObj, selectFunction: MoveSelect}
			QuestleGlobals.MenuObject.properties.options[MenuLayerMap.MoveSelect2].push(newOpt);
		}
	}
	
	var TOObjB0 = createTOFromString('TextObject -x -100 -y 0 -t "Back" -c black;');
	oHandler.addTextObject(TOObjB0);
	var newOpt0 = {title: TOObjB0, selectFunction: ReturnToActionSelection}
	QuestleGlobals.MenuObject.properties.options[MenuLayerMap.MoveSelect0].push(newOpt0);
	
	var TOObjB1 = createTOFromString('TextObject -x -100 -y 0 -t "Back" -c black;');
	oHandler.addTextObject(TOObjB1);
	var newOpt1 = {title: TOObjB1, selectFunction: ReturnToActionSelection}
	QuestleGlobals.MenuObject.properties.options[MenuLayerMap.MoveSelect1].push(newOpt1);
	
	var TOObjB2 = createTOFromString('TextObject -x -100 -y 0 -t "Back" -c black;');
	oHandler.addTextObject(TOObjB2);
	var newOpt2 = {title: TOObjB2, selectFunction: ReturnToActionSelection}
	QuestleGlobals.MenuObject.properties.options[MenuLayerMap.MoveSelect2].push(newOpt2);
}

function ListItemOptions() {
	QuestleGlobals.MenuObject.properties.options[MenuLayerMap.ItemSelect] = [];
	
	for(var i = 0; i < partyItems.length; i++) {
		console.log('Adding Item');
		var TOObj = createTOFromString('TextObject -x -100 -y 0 -t "'+ItemOptions[partyItems[i]].Name+'" -c black;');
		oHandler.addTextObject(TOObj);
		var newOpt = {title: TOObj, selectFunction: ItemOptions[partyItems[i]].ItemAction, localPointers: {itemIndex: i}}
		QuestleGlobals.MenuObject.properties.options[MenuLayerMap.ItemSelect].push(newOpt);
	}
	
	var TOObjB = createTOFromString('TextObject -x -100 -y 0 -t "Back" -c black;');
	oHandler.addTextObject(TOObjB);
	var newOpt = {title: TOObjB, selectFunction: ReturnToActionSelection}
	QuestleGlobals.MenuObject.properties.options[MenuLayerMap.ItemSelect].push(newOpt);
}

function ReturnToActionSelection() {
	MenuTransition();
	
	QuestleGlobals.MenuObject.properties.currLayer = MenuLayerMap.ActionSelect;
	QuestleGlobals.MenuObject.properties.currSel = 0;
}

function CreateEnemySelection() {
	if(this.properties.enemies != null) {
		for(var i = 0; i < this.properties.enemies.length; i++) {
			var TestTObj0 = createTOFromString('TextObject -x -100 -y 0 -t '+this.properties.enemies[i].properties.name+' -c black;');
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

function RestoreHealth() {
	this.target.properties.Attributes.currHP = this.target.properties.Attributes.currHP + this.amount;
	if(this.target.properties.Attributes.currHP > this.target.properties.Attributes.MaxHP) {
		this.target.properties.Attributes.currHP = this.target.properties.Attributes.MaxHP;
	}
}

function CheckStaleBuffs(GameObj) {
	for(var i = GameObj.properties.buffList.length - 1; i >= 0; i--) {
		GameObj.properties.buffList[i].RoundsLeft--;
		if(GameObj.properties.buffList[i].RoundsLeft <= 0) {
			GameObj.properties.buffList.splice(i, 1);
		}
	}
}

function getAttacked() {
	
	CheckStaleBuffs(QuestleGlobals.CurrAttacker);
	
	var DmgAmt = 0;
	
	var AtkBuff = 0;
	var MagAtkBuff = 0;
	for(var i = 0; i < QuestleGlobals.CurrAttacker.properties.buffList.length; i++) {
		if(QuestleGlobals.CurrAttacker.properties.buffList[i].Type == 'Atk') {
			AtkBuff = AtkBuff + QuestleGlobals.CurrAttacker.properties.buffList[i].Amount;
		} else if(QuestleGlobals.CurrAttacker.properties.buffList[i].Type == 'MagAtk') {
			MagAtkBuff = MagAtkBuff + QuestleGlobals.CurrAttacker.properties.buffList[i].Amount;
		}
	}
	
	var DefBuff = 0;
	var MagDefBuff = 0;
	console.log(this.localPointers.target.properties.buffList);
	for(var i = 0; i < this.localPointers.target.properties.buffList.length; i++) {
		console.log(this.localPointers.target.properties.buffList[i]);
		if(this.localPointers.target.properties.buffList[i].Type == 'Def') {
			console.log('Def Buffed');
			DefBuff = DefBuff + this.localPointers.target.properties.buffList[i].Amount;
		} else if(this.localPointers.target.properties.buffList[i].Type == 'MagDef') {
			MagDefBuff = MagDefBuff + this.localPointers.target.properties.buffList[i].Amount;
		}
	}
	
	if(QuestleGlobals.CurrAttacker.properties.Attributes.Moves[QuestleGlobals.currMove].Attr == 'Atk') {
		DmgAmt = QuestleGlobals.CurrAttacker.properties.Attributes.Moves[QuestleGlobals.currMove].BasePower 
				 + Math.floor((QuestleGlobals.CurrAttacker.properties.Attributes.Atk + AtkBuff) / 2)
				 - Math.floor((this.localPointers.target.properties.Attributes.Def + DefBuff)/ 4);
	} else if(QuestleGlobals.CurrAttacker.properties.Attributes.Moves[QuestleGlobals.currMove].Attr == 'MagAtk') {
		DmgAmt = QuestleGlobals.CurrAttacker.properties.Attributes.Moves[QuestleGlobals.currMove].BasePower 
				 + Math.floor((QuestleGlobals.CurrAttacker.properties.Attributes.MagAtk + MagAtkBuff) / 2)
				 - Math.floor((this.localPointers.target.properties.Attributes.MagDef + MagDefBuff) / 4);
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
		var TestTObj0 = createTOFromString('TextObject -x -100 -y 0 -t '+this.properties.enemies[i].properties.name+' -c black;');
		oHandler.addTextObject(TestTObj0);
		
		var newEnemy = {title: TestTObj0, selectFunction: getAttacked, localPointers: {target: this.properties.enemies[i]}}
		this.properties.options[MenuLayerMap.EnemySelect].push(newEnemy);
	}
}

function EnemySelectSetup() {
	for(var i = 0; i < QuestleGlobals.MenuObject.properties.enemies.length; i++) {
		var TestTObj0 = createTOFromString('TextObject -x -100 -y 0 -t '+QuestleGlobals.MenuObject.properties.enemies[i].properties.name+' -c black;');
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
		for(var j = QuestleGlobals.MenuObject.properties.turnOrder.length - 2; j >= 0; j--) {
			if(QuestleGlobals.MenuObject.properties.turnOrder[j + 1].speed > QuestleGlobals.MenuObject.properties.turnOrder[j].speed) {
				var temp = QuestleGlobals.MenuObject.properties.turnOrder[j];
				QuestleGlobals.MenuObject.properties.turnOrder[j] = QuestleGlobals.MenuObject.properties.turnOrder[j + 1];
				QuestleGlobals.MenuObject.properties.turnOrder[j + 1] = temp;
			} else {
				break;
			}
		}
	}
	for(var i = 0; i < QuestleGlobals.MenuObject.properties.enemies.length; i++) {
		var newOrderJ = {
			type: 'E',
			index: i,
			speed: QuestleGlobals.MenuObject.properties.enemies[i].properties.Attributes.Spd
		}
		QuestleGlobals.MenuObject.properties.turnOrder.push(newOrderJ);
		for(var j = QuestleGlobals.MenuObject.properties.turnOrder.length - 2; j >= 0; j--) {
			if(QuestleGlobals.MenuObject.properties.turnOrder[j + 1].speed > QuestleGlobals.MenuObject.properties.turnOrder[j].speed) {
				var temp = QuestleGlobals.MenuObject.properties.turnOrder[j];
				QuestleGlobals.MenuObject.properties.turnOrder[j] = QuestleGlobals.MenuObject.properties.turnOrder[j + 1];
				QuestleGlobals.MenuObject.properties.turnOrder[j + 1] = temp;
			} else {
				break;
			}
		}
	}
	console.log(QuestleGlobals.MenuObject.properties.turnOrder);
}

function EnemyAttackPhase() {
	console.log('Enemy Attacking');
	QuestleGlobals.CurrAttacker = QuestleGlobals.MenuObject.properties.enemies[QuestleGlobals.MenuObject.properties.turnOrder[QuestleGlobals.turnRotation].index];
	
	QuestleGlobals.currMove = Math.floor(Math.random() * QuestleGlobals.CurrAttacker.properties.Attributes.Moves.length);
	
	var currTarget = QuestleGlobals.MenuObject.properties.players[0];
	
	var DmgAmt = 0;
	
	var AtkBuff = 0;
	var MagAtkBuff = 0;
	for(var i = 0; i < QuestleGlobals.CurrAttacker.properties.buffList.length; i++) {
		if(QuestleGlobals.CurrAttacker.properties.buffList[i].Type == 'Atk') {
			AtkBuff = AtkBuff + QuestleGlobals.CurrAttacker.properties.buffList[i].Amount;
		} else if(QuestleGlobals.CurrAttacker.properties.buffList[i].Type == 'MagAtk') {
			MagAtkBuff = MagAtkBuff + QuestleGlobals.CurrAttacker.properties.buffList[i].Amount;
		}
	}
	
	var DefBuff = 0;
	var MagDefBuff = 0;
	console.log(currTarget.properties.buffList);
	for(var i = 0; i < currTarget.properties.buffList.length; i++) {
		console.log(currTarget.properties.buffList[i]);
		if(currTarget.properties.buffList[i].Type == 'Def') {
			console.log('Def Buffed');
			DefBuff = DefBuff + currTarget.properties.buffList[i].Amount;
		} else if(currTarget.properties.buffList[i].Type == 'MagDef') {
			console.log('Mag Def Buffed');
			MagDefBuff = MagDefBuff + currTarget.properties.buffList[i].Amount;
		}
	}
	
	if(QuestleGlobals.CurrAttacker.properties.Attributes.Moves[QuestleGlobals.currMove].Attr == 'Atk') {
		DmgAmt = QuestleGlobals.CurrAttacker.properties.Attributes.Moves[QuestleGlobals.currMove].BasePower 
	             + Math.floor((QuestleGlobals.CurrAttacker.properties.Attributes.Atk + AtkBuff) / 2)
		         - Math.floor((currTarget.properties.Attributes.Def + DefBuff) / 4);
	} else if(QuestleGlobals.CurrAttacker.properties.Attributes.Moves[QuestleGlobals.currMove].Attr == 'MagAtk') {
		DmgAmt = QuestleGlobals.CurrAttacker.properties.Attributes.Moves[QuestleGlobals.currMove].BasePower 
				 + Math.floor((QuestleGlobals.CurrAttacker.properties.Attributes.MagAtk + MagAtkBuff) / 2)
				 - Math.floor((currTarget.properties.Attributes.MagDef + MagDefBuff) / 4);
	}
	
	//QuestleGlobals.MenuObject.properties.DialogQ.push('Enemy Uses '+QuestleGlobals.CurrAttacker.properties.Attributes.Moves[QuestleGlobals.currMove].Name+'');
	QuestleGlobals.MenuObject.properties.DialogQ.push(QuestleGlobals.CurrAttacker.properties.name+' Uses '+QuestleGlobals.CurrAttacker.properties.Attributes.Moves[QuestleGlobals.currMove].Name+'');
	QuestleGlobals.MenuObject.properties.EventQ.push(null);
	
	QuestleGlobals.MenuObject.properties.DialogQ.push('Player Takes '+DmgAmt+' Damage');
	QuestleGlobals.MenuObject.properties.EventQ.push({battleEvent: TakeDamage, target: currTarget, amount: DmgAmt});
	
	QuestleGlobals.turnDone = true;
}

function SetPlayerLevel(Player) {
	if(Player.properties.Attributes.Exp >= 1 && Player.properties.Attributes.Exp <= 3) {
		Player.properties.Attributes.Level = 2;
		var tempPlayer = JSON.parse(JSON.stringify(PartyCharacters[Player.properties.Type]));
		tempPlayer.Level = Player.properties.Attributes.Level;
		ApplyPlayerGrowth(tempPlayer,Player.properties.Type);
		Player.properties.Attributes.Atk = tempPlayer.Atk;
		Player.properties.Attributes.Def = tempPlayer.Def;
		Player.properties.Attributes.MagAtk = tempPlayer.MagAtk;
		Player.properties.Attributes.MagDef = tempPlayer.MagDef;
		Player.properties.Attributes.Spd = tempPlayer.Spd;
		Player.properties.Attributes.MaxHP = tempPlayer.MaxHP;
	}
}

function ExitToKeyBoard() {
	QuestleGlobals.MenuObject.position.y = -700;
	QuestleGlobals.MenuObject.properties.battleActive = 0;
	
	for(var eI = 0; eI < QuestleGlobals.MenuObject.properties.enemies.length; eI++) {
		for(var pI = 0; pI < QuestleGlobals.MenuObject.properties.players.length; pI++) {
			QuestleGlobals.MenuObject.properties.players[pI].properties.Attributes.Exp = QuestleGlobals.MenuObject.properties.players[pI].properties.Attributes.Exp + 1;
			SetPlayerLevel(QuestleGlobals.MenuObject.properties.players[pI]);
		}
		
		oHandler.removeTextObject(QuestleGlobals.MenuObject.properties.enemies[eI].properties.healthCounter);
		oHandler.removeTextObject(QuestleGlobals.MenuObject.properties.enemies[eI].properties.levelCounter);
		oHandler.removeObject(QuestleGlobals.MenuObject.properties.enemies[eI]);
	}
	
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

			for(var i = 0; i < oHandler.Objects.length; i++) {
				if(oHandler.Objects[i].tag == 'KeyButton') {
					storeVertices(oHandler.Objects[i]);
				}
			}

			enterObjects(SelText);
		}
		QuestleGlobals.WordToBePushed = null;
	}
	
	QuestleGlobals.CurrTraps = [];
}

function LossExitToLevelSelect() {
	QuestleGlobals.MenuObject.handler.removeAllObjects();
	BackToLevelSelect();
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
		
		if(this.properties.control && this.properties.DialogQ.length == 0 && this.properties.turnOrder[QuestleGlobals.turnRotation].type == 'P') { //Dialog done and players turn
		
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
				this.properties.options[cLayer][(SelGroup * 4) + 2].title.position.y = this.position.y + 50;
			}
			
			if(this.properties.options[cLayer][(SelGroup * 4) + 3] != null) {
				this.properties.options[cLayer][(SelGroup * 4) + 3].title.position.x = this.position.x + 210;
				this.properties.options[cLayer][(SelGroup * 4) + 3].title.position.y = this.position.y + 50;
			}
			
			if(cSel % 4 == 0) {
				this.properties.pointerChild.position.x = this.position.x + 10;
				this.properties.pointerChild.position.y = this.position.y + 10;
			} else if(cSel % 4 == 1) {
				this.properties.pointerChild.position.x = this.position.x + 210;
				this.properties.pointerChild.position.y = this.position.y + 10;
			} else if(cSel % 4 == 2) {
				this.properties.pointerChild.position.x = this.position.x + 10;
				this.properties.pointerChild.position.y = this.position.y + 50;
			} else if(cSel % 4 == 3) {
				this.properties.pointerChild.position.x = this.position.x + 210;
				this.properties.pointerChild.position.y = this.position.y + 50;
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
		} else if(this.properties.control && this.properties.DialogQ.length == 0 && this.properties.turnOrder[QuestleGlobals.turnRotation].type == 'E') { //enemy turn concluded but did not add dialog
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
					console.log('Player ' + QuestleGlobals.turnRotation);
					QuestleGlobals.CurrAttacker = this.properties.players[this.properties.turnOrder[QuestleGlobals.turnRotation].index];
				} else if(this.properties.turnOrder[QuestleGlobals.turnRotation].type == 'E') {
					console.log('Enemy ' + QuestleGlobals.turnRotation);
					if(QuestleGlobals.MenuObject.properties.enemies[QuestleGlobals.MenuObject.properties.turnOrder[QuestleGlobals.turnRotation].index].properties.Attributes.currHP > 0) {
						EnemyAttackPhase();
					} else {
						QuestleGlobals.turnDone = true;
					}
				}
						
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
						shiftKeys('up');
						return;
					}
					
					var AllPlayersDead = true;
					for(var pI = 0; pI < this.properties.players.length; pI++) {
						if(this.properties.players[pI].properties.Attributes.currHP > 0) {
							AllPlayersDead = false;
						}
					}
					
					var AllDead = true;
					for(var eI = 0; eI < this.properties.enemies.length; eI++) {
						if(this.properties.enemies[eI].properties.Attributes.currHP > 0) {
							AllDead = false;
						} else {
							QuestleGlobals.CurrLevelData.traps[QuestleGlobals.CurrTraps[eI]].Sprung = true;
						}
					}
					
					if(AllPlayersDead) {
						QuestleGlobals.MenuObject.properties.DialogQ.push('Game Over');
						//QuestleGlobals.MenuObject.properties.EventQ.push(null);
						QuestleGlobals.MenuObject.properties.EventQ.push({battleEvent: LossExitToLevelSelect});
					} else if(AllDead) {
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
							console.log('Player ' + QuestleGlobals.turnRotation);
							QuestleGlobals.CurrAttacker = this.properties.players[this.properties.turnOrder[QuestleGlobals.turnRotation].index];
						} else if(this.properties.turnOrder[QuestleGlobals.turnRotation].type == 'E') {
							console.log('Enemy ' + QuestleGlobals.turnRotation);
							if(QuestleGlobals.MenuObject.properties.enemies[QuestleGlobals.MenuObject.properties.turnOrder[QuestleGlobals.turnRotation].index].properties.Attributes.currHP > 0) {
								EnemyAttackPhase();
							} else {
								QuestleGlobals.turnDone = true;
							}
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
			
			if(QuestleGlobals.CurrAttacker == QuestleGlobals.MenuObject.properties.players[0]) {
				oHandler.Objects[i].properties.currLayer = MenuLayerMap.MoveSelect0;
			} else if(QuestleGlobals.CurrAttacker == QuestleGlobals.MenuObject.properties.players[1]) {
				oHandler.Objects[i].properties.currLayer = MenuLayerMap.MoveSelect1;
			} else if(QuestleGlobals.CurrAttacker == QuestleGlobals.MenuObject.properties.players[2]) {
				oHandler.Objects[i].properties.currLayer = MenuLayerMap.MoveSelect2;
			} else {
				oHandler.Objects[i].properties.currLayer = 1;
			}
			
		}
	}
}

function PlayerDefend() {
	
	CheckStaleBuffs(QuestleGlobals.CurrAttacker);
	
	QuestleGlobals.CurrAttacker.properties.buffList.push({Type: 'Def', Amount: 3, RoundsLeft: 1});
	QuestleGlobals.CurrAttacker.properties.buffList.push({Type: 'MagDef', Amount: 3, RoundsLeft: 1});
	
	QuestleGlobals.MenuObject.properties.DialogQ.push('Player Defends');
	QuestleGlobals.MenuObject.properties.EventQ.push(null);
	
	QuestleGlobals.turnDone = true;
	
	MenuTransition();
	
	QuestleGlobals.MenuObject.properties.currLayer = 0;
	QuestleGlobals.MenuObject.properties.currSel = 0;
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

function ItemMenuSelect() {
	
	MenuTransition();
	
	QuestleGlobals.MenuObject.properties.currLayer = MenuLayerMap.ItemSelect;
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
		this.currAnimation = LetterAnimationStates.Hurt;
		this.properties.recoveryFrames++;
		
		if(this.properties.recoveryFrames == 30) {
			this.properties.recovered = 1;
			this.properties.parentObj.properties.control = true;
			this.properties.recoveryFrames = 0;
			this.currAnimation = LetterAnimationStates.Normal;
		}
	}
	
	this.properties.healthCounter.textContent = '' + this.properties.Attributes.currHP + '/' + this.properties.Attributes.MaxHP
	
	this.properties.healthCounter.position.x = this.position.x;
	this.properties.healthCounter.position.y = this.position.y - 10;
	
	this.properties.levelCounter.textContent = 'LV: ' + this.properties.Attributes.Level
	
	this.properties.levelCounter.position.x = this.position.x;
	this.properties.levelCounter.position.y = this.position.y + 110;
}

function playerUpdate() {
	this.properties.healthCounter.textContent = '' + this.properties.Attributes.currHP + '/' + this.properties.Attributes.MaxHP
	
	this.properties.healthCounter.position.x = this.position.x;
	this.properties.healthCounter.position.y = this.position.y - 10;
	
	this.properties.levelCounter.textContent = 'LV: ' + this.properties.Attributes.Level;
	
	this.properties.levelCounter.position.x = this.position.x;
	this.properties.levelCounter.position.y = this.position.y + 60;
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