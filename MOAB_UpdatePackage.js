/*
SEARCH TERMS:

GLOBALS
STARTSET
PLAYER
KEYTRACK
TRASH
BUSH
*/

/*
GLOBALS
start
*/
MOABGlobals = {
	score: 0,
	time: 70,
	trashThrown: 0
}
/*
GLOBALS
end
*/

/*
STARTSET
start
*/
function startMOAB() {
	var backgroundCanvas = document.getElementById("canvasBG");
	backgroundCanvas.style = "background-color: white;"
	
	var SelText = ''
	
	SelText = SelText + 'GameObject -x 100 -y 286 -v 0 0 -v 440 0 -t wall -d;'; //Bottom wall
	SelText = SelText + 'GameObject -x 150 -y 86 -v 0 0 -v 0 400 -t wall  -d;' //left wall
	SelText = SelText + 'GameObject -x 490 -y 86 -v 0 0 -v 0 400 -t wall  -d;' //right wall
	SelText = SelText + 'GameObject -x 150 -y 86 -v 0 0 -v 340 0 -t wall -d;' //top wall
	
	//Player
	SelText = SelText + 'GameObject -x 295 -y 235';
	SelText = SelText + ' -v 0 0 topleft -v 50 0 topright -v 50 50 bottomright -v 0 50 bottomleft'
	SelText = SelText + ' -rp 25 25 25'
	SelText = SelText + ' -u playerMovement_MOAB'
	SelText = SelText + ' -cf playerCollision_MOAB'
	SelText = SelText + ' -p xv 0 -p yv 0'
	SelText = SelText + ' -p maxSpeed 7'
	SelText = SelText + ' -p scrapeSpeed 7'
	SelText = SelText + ' -p slideStateX 2 -p slideStateY 2'
	SelText = SelText + ' -pi setupPlayer_MOAB'
	SelText = SelText + ' -a ManAnimationPackage'
	SelText = SelText + ' -ca 0'
	//SelText = SelText + ' -d'
	SelText = SelText + ';'
	
	//Bush Controller
	SelText = SelText + 'GameObject';
	SelText = SelText + ' -u bushControllerUpdate'
	SelText = SelText + ' -pi setupBushController'
	SelText = SelText + ' -p waitFrames 0'
	//SelText = SelText + ' -d'
	SelText = SelText + ';'
	
	//Bush
	SelText = SelText + 'GameObject -x 76 -y 546';
	SelText = SelText + ' -rp 0 0 30'
	SelText = SelText + ' -lu bushUpdate'
	SelText = SelText + ' -pi setupBush'
	SelText = SelText + ' -p waitFrames 0'
	SelText = SelText + ' -p throwTrash 0'
	SelText = SelText + ' -p bushid 0'
	SelText = SelText + ' -a BushAnimationPackage'
	SelText = SelText + ' -ca 0'
	//SelText = SelText + ' -d'
	SelText = SelText + ';'
	
	//Bush
	SelText = SelText + 'GameObject -x 182 -y 546';
	SelText = SelText + ' -rp 0 0 30'
	SelText = SelText + ' -lu bushUpdate'
	SelText = SelText + ' -pi setupBush'
	SelText = SelText + ' -p waitFrames 0'
	SelText = SelText + ' -p throwTrash 0'
	SelText = SelText + ' -p bushid 1'
	SelText = SelText + ' -a BushAnimationPackage'
	SelText = SelText + ' -ca 0'
	//SelText = SelText + ' -d'
	SelText = SelText + ';'
	
	//Bush
	SelText = SelText + 'GameObject -x 288 -y 546';
	SelText = SelText + ' -rp 0 0 30'
	SelText = SelText + ' -lu bushUpdate'
	SelText = SelText + ' -pi setupBush'
	SelText = SelText + ' -p waitFrames 0'
	SelText = SelText + ' -p throwTrash 0'
	SelText = SelText + ' -p bushid 2'
	SelText = SelText + ' -a BushAnimationPackage'
	SelText = SelText + ' -ca 0'
	//SelText = SelText + ' -d'
	SelText = SelText + ';'
	
	//Bush
	SelText = SelText + 'GameObject -x 394 -y 546';
	SelText = SelText + ' -rp 0 0 30'
	SelText = SelText + ' -lu bushUpdate'
	SelText = SelText + ' -pi setupBush'
	SelText = SelText + ' -p waitFrames 0'
	SelText = SelText + ' -p throwTrash 0'
	SelText = SelText + ' -p bushid 3'
	SelText = SelText + ' -a BushAnimationPackageRev'
	SelText = SelText + ' -ca 0'
	//SelText = SelText + ' -d'
	SelText = SelText + ';'
	
	//Bush
	SelText = SelText + 'GameObject -x 500 -y 546';
	SelText = SelText + ' -rp 0 0 30'
	SelText = SelText + ' -lu bushUpdate'
	SelText = SelText + ' -pi setupBush'
	SelText = SelText + ' -p waitFrames 0'
	SelText = SelText + ' -p throwTrash 0'
	SelText = SelText + ' -p bushid 4'
	SelText = SelText + ' -a BushAnimationPackageRev'
	SelText = SelText + ' -ca 0'
	//SelText = SelText + ' -d'
	SelText = SelText + ';'
	
	//Bush
	SelText = SelText + 'GameObject -x 606 -y 546';
	SelText = SelText + ' -rp 0 0 30'
	SelText = SelText + ' -lu bushUpdate'
	SelText = SelText + ' -pi setupBush'
	SelText = SelText + ' -p waitFrames 0'
	SelText = SelText + ' -p throwTrash 0'
	SelText = SelText + ' -p bushid 5'
	SelText = SelText + ' -a BushAnimationPackageRev'
	SelText = SelText + ' -ca 0'
	//SelText = SelText + ' -d'
	SelText = SelText + ';'
	
	//Bush Controller
	
	//Hud
	SelText = SelText + 'GameObject -x 0 -y 0';
	SelText = SelText + ' -pi setupHUD_MOAB'
	SelText = SelText + ' -lu HUDUpdate'
	SelText = SelText + ';'
	
	//Score Keeper
	SelText = SelText + 'GameObject';
	SelText = SelText + ' -u scoreKeeperUpdate'
	SelText = SelText + ' -p waitFrames 0'
	SelText = SelText + ';'
	
	//Timer
	SelText = SelText + 'GameObject';
	SelText = SelText + ' -u timerUpdate'
	SelText = SelText + ' -p waitFrames 0'
	SelText = SelText + ';'
	
	//Billboard
	SelText = SelText + 'GameObject';
	SelText = SelText + ' -pi setupBillBoard'
	SelText = SelText + ';'
	
	//key Tracker
	SelText = SelText + 'GameObject';
	SelText = SelText + ' -pi setupKeyTracker_MOAB'
	SelText = SelText + ' -u keyTrackerUpdate_MOAB'
	SelText = SelText + ';'
	
	enterObjects(SelText);
}

function startButtonUpdate() {
	
	var triggered = false;
	
	this.properties.wordChild.position.x = this.position.x + 10;
	this.properties.wordChild.position.y = this.position.y + 20;
	
	if(this.vertices.length < 4) {
		return;
	}
		
	for(var i = 0; i < this.handler.cBuff.length; i++) {
	
		if(this.handler.cBuff[i].x + this.handler.CameraX > this.position.x 
		   && this.handler.cBuff[i].x + this.handler.CameraX < this.position.x + this.vertices[1].offX) 
		{
			if(this.handler.cBuff[i].y + this.handler.CameraY > this.position.y
			   && this.handler.cBuff[i].y + this.handler.CameraY < this.position.y + this.vertices[2].offY) {
				
				if(triggered == false) {
					//console.log('pressed');
					triggered = true;
					
					this.handler.removeAllObjects();
					
					MOABGlobals.score = 0;
					MOABGlobals.time = 70;
					MOABGlobals.trashThrown = 0;
					
					startMOAB();
				}
				
			}
		}
		
	}	
}

function storeClick(e) {
	var mousepos = getMousePos(canvasUserInterface,e);
	MOABGlobals.currHandler.cBuff.push(mousepos);
}

function addClickOption_MOAB() {
	MOABGlobals.currHandler = this.handler;
	canvasUserInterface.addEventListener('click', storeClick, false);
}

function setupStartButton() {
	var TextText = 'TextObject -x 0 -y 0 -t "'+this.properties.wordLabel+'" -c black;';
	
	var TOJ = createTOJsonFromString(TextText);
	var TOObj = createTOFromJSON(TOJ);
	this.properties.wordChild = TOObj;
	console.log(this.properties.wordChild);
	this.handler.addTextObject(TOObj);
}

function startMenu() {
	var SelText = ''
	
	//Start Button
	SelText = SelText + 'GameObject -x 220 -y 188 -v 0 0 -v 100 0 -v 100 100 -v 0 100';
	SelText = SelText + ' -p wordLabel Start'
	SelText = SelText + ' -u startButtonUpdate -pi setupStartButton'
	SelText = SelText + ' -d'
	SelText = SelText + ';'
	
	//Click Handler
	SelText = SelText + 'GameObject -pi addClickOption_MOAB;';
	
	enterObjects(SelText);
}

function UploadMOAB() {
	GameTitle.innerHTML = "Man On A Billboard";
	oHandler.resetCamera();
	oHandler.removeAllObjects();
	
	var backgroundCanvas = document.getElementById("canvasBG");
	backgroundCanvas.style = "background-color: white;"
	
	//startMOAB();
	startMenu();
}

/*
STARTSET
end
*/

/*
PLAYER
start
*/
function WallCollisionBehavior_MOAB(gameObj,colObj,verIndex,intersection,colVer1,colVer2) {
	//console.log('Wall Collide');
	var origX = gameObj.position.x;
	var origY = gameObj.position.y;
	
	var newPosition = {};
	newPosition.x = gameObj.position.x - (((gameObj.position.x + gameObj.vertices[verIndex].offX) - intersection[0]));
	newPosition.y = gameObj.position.y - (((gameObj.position.y + gameObj.vertices[verIndex].offY) - intersection[1]));
			
	if((gameObj.position.x - gameObj.delta.dx) > gameObj.position.x) {
		newPosition.x++;
		if(colObj.position.x + colObj.vertices[colVer1].offX == colObj.position.x + colObj.vertices[colVer2].offX) {
			gameObj.properties.slideStateY = 0;
		}
	} else if((gameObj.position.x - gameObj.delta.dx) < gameObj.position.x) {
		newPosition.x--;
		if(colObj.position.x + colObj.vertices[colVer1].offX == colObj.position.x + colObj.vertices[colVer2].offX) {
			gameObj.properties.slideStateY = 1;
		}
	}
			
	if((gameObj.position.y - gameObj.delta.dy) > gameObj.position.y) {
		
		if(colObj.position.x + colObj.vertices[colVer1].offX != colObj.position.x + colObj.vertices[colVer2].offX) {
			//console.log('Pressing Down');
			newPosition.y++;
		}
				
		gameObj.properties.yv = 0;
		if(colObj.position.y + colObj.vertices[colVer1].offY == colObj.position.y + colObj.vertices[colVer2].offY) {
			gameObj.properties.slideStateX = 0;
		}
	} else if((gameObj.position.y - gameObj.delta.dy) < gameObj.position.y) {
	
		if(colObj.position.x + colObj.vertices[colVer1].offX != colObj.position.x + colObj.vertices[colVer2].offX) {
			//console.log('Pressing Up');
			newPosition.y--;
		}
				
		gameObj.properties.yv = 0;
		if(colObj.position.y + colObj.vertices[colVer1].offY == colObj.position.y + colObj.vertices[colVer2].offY) {
			gameObj.properties.slideStateX = 1;
		}
				
		var newjumpVectorPosition = {x: newPosition.x, y: newPosition.y + gameObj.properties.height + 1};
		gameObj.properties.jumpVector.setPosition(newjumpVectorPosition);
		gameObj.properties.jumpVector.setPosition({x: gameObj.properties.jumpVector.position.x, y: gameObj.properties.jumpVector.position.y + 500});
				
		if(gameObj.currAnimation == PlatformerAnimationStates.JumpRight) {
			gameObj.animations[gameObj.currAnimation].keyFrames[gameObj.animations[gameObj.currAnimation].currKeyFrame].currFrame = 1;
			gameObj.currAnimation = PlatformerAnimationStates.IdleRight;
			gameObj.animations[gameObj.currAnimation].currKeyFrame = 0;
		} else if(gameObj.currAnimation == PlatformerAnimationStates.JumpLeft) {
			gameObj.animations[gameObj.currAnimation].keyFrames[gameObj.animations[gameObj.currAnimation].currKeyFrame].currFrame = 1;
			gameObj.currAnimation = PlatformerAnimationStates.IdleLeft;
			gameObj.animations[gameObj.currAnimation].currKeyFrame = 0;
		}
	}
	
	gameObj.appendPosition(newPosition);
}

function playerCollision_MOAB(colObj,verIndex,intersection,colVer1,colVer2) {
	
	if(colObj.tag != null) {
		if(colObj.tag == 'wall') {
			WallCollisionBehavior_MOAB(this,colObj,verIndex,intersection,colVer1,colVer2);
		} else if(colObj.tag == 'trash') {
			if(colObj.properties.zPart <= 0) {
				this.handler.removeObjectSafe(colObj.properties.trashChild,this);
				this.handler.removeObjectSafe(colObj,this);
			}
		} else if(colObj.tag == 'reflectTrash') {
			if(this.properties.state == 'tennis') {
				if(colObj.properties.reflected != 1) {
					colObj.properties.xv = colObj.properties.xv * -1;
					colObj.properties.yv = colObj.properties.yv * -1;
					colObj.properties.reflected = 1;
					this.handler.removeObjectSafe(colObj.properties.trashChild,this);
					
					var SelText = '';
					SelText = SelText + 'GameObject -x '+(this.position.x)+' -y '+(this.position.y - 50)+'';
					SelText = SelText + ' -v 0 0'
					SelText = SelText + ' -rp -10 0 10 -rp 0 0 10 -rp 10 0 10'
					SelText = SelText + ' -t powerUp'
					SelText = SelText + ' -u powerUpUpdate'
					SelText = SelText + ' -cf powerUpCollision'
					SelText = SelText + ' -a PowerUpAnimationPackage'
					SelText = SelText + ' -ca 0'
					SelText = SelText + ' -p waitFrames 0'
					SelText = SelText + ' -p yv -5'
					
					if(this.position.x >= 320) {
						SelText = SelText + ' -p xv -5'
					} else {
						SelText = SelText + ' -p xv 5'
					}
					
					//SelText = SelText + ' -d'
					SelText = SelText + ';'
					
					var GOObjT1 = createGOFromString(SelText);
				
					this.handler.addObject(GOObjT1);
				}
			} else {
				if(colObj.properties.zPart <= 0) {
					this.handler.removeObjectSafe(colObj.properties.trashChild,this);
					this.handler.removeObjectSafe(colObj,this);
				}
			}
		} else if(colObj.tag == 'powerUp') {
			if(colObj.properties.waitFrames > 60) {
				var opt = Math.floor(Math.random() * (2 - 0 + 1) + 0);
				if(opt == 0) {
					this.properties.scrapeSpeed++;
				} else if(opt == 1) {
					this.properties.maxSpeed++;
				} else if(opt == 2) {
					for(var i = 0; i < this.handler.Objects.length; i++) {
						if(this.handler.Objects[i].tag == 'stain') {
							this.handler.removeObjectSafe(this.handler.Objects[i],this);
							MOABGlobals.BillBoard.properties.stains--;
							i--;
						}
					}
				}
				this.handler.removeObjectSafe(colObj,this);
			}
		}
	}
}

function controlledMovement_MOAB(gameObj) {
	
	if((keys.left || GamePadButtons.leftPressed) && gameObj.properties.slideStateY != 0) {
		gameObj.properties.xv = gameObj.properties.maxSpeed * -1;
		
		if(gameObj.properties.slideStateY == 1) {
			gameObj.properties.slideStateY = 2;
		}
		
		if(gameObj.currAnimation != ManAnimationStates.WalkLeft) {
			gameObj.animations[gameObj.currAnimation].keyFrames[gameObj.animations[gameObj.currAnimation].currKeyFrame].currFrame = 1;
			gameObj.currAnimation = ManAnimationStates.WalkLeft;
			gameObj.animations[gameObj.currAnimation].currKeyFrame = 0;
		}
		
	}
	
	
	if((keys.right || GamePadButtons.rightPressed) && gameObj.properties.slideStateY != 1) {
		gameObj.properties.xv = gameObj.properties.maxSpeed;
		
		if(gameObj.properties.slideStateY == 0) {
			gameObj.properties.slideStateY = 2;
		}
		
		if(gameObj.currAnimation != ManAnimationStates.WalkRight) {
			gameObj.animations[gameObj.currAnimation].keyFrames[gameObj.animations[gameObj.currAnimation].currKeyFrame].currFrame = 1;
			gameObj.currAnimation = ManAnimationStates.WalkRight;
			gameObj.animations[gameObj.currAnimation].currKeyFrame = 0;
		}
		
	}
	
	if(!(keys.right || GamePadButtons.rightPressed) && !(keys.left || GamePadButtons.leftPressed)) {
		if(gameObj.currAnimation == ManAnimationStates.WalkRight) {
			gameObj.animations[gameObj.currAnimation].keyFrames[gameObj.animations[gameObj.currAnimation].currKeyFrame].currFrame = 1;
			gameObj.currAnimation = ManAnimationStates.IdleRight;
			gameObj.animations[gameObj.currAnimation].currKeyFrame = 0;
		} else if(gameObj.currAnimation == ManAnimationStates.WalkLeft) {
			gameObj.animations[gameObj.currAnimation].keyFrames[gameObj.animations[gameObj.currAnimation].currKeyFrame].currFrame = 1;
			gameObj.currAnimation = ManAnimationStates.IdleLeft;
			gameObj.animations[gameObj.currAnimation].currKeyFrame = 0;
		}
	}
	
	console.log(gameObj.currAnimation);
	
	if((keys.space || GamePadButtons.Clock9Pressed) && gameObj.properties.state != 'scraping') {
		gameObj.properties.state = 'scraping';
		gameObj.animations[gameObj.currAnimation].keyFrames[gameObj.animations[gameObj.currAnimation].currKeyFrame].currFrame = 1;
		gameObj.currAnimation = ManAnimationStates.Scraping;
		gameObj.animations[gameObj.currAnimation].currKeyFrame = 0;
	} else if((keys.c || GamePadButtons.Clock12Pressed) && gameObj.properties.state != 'tennis') {
		gameObj.properties.state = 'tennis';
		gameObj.animations[gameObj.currAnimation].keyFrames[gameObj.animations[gameObj.currAnimation].currKeyFrame].currFrame = 1;
		gameObj.currAnimation = ManAnimationStates.Racket;
		gameObj.animations[gameObj.currAnimation].currKeyFrame = 0;
	}
		
}

function scrapeAction_MOAB(gameObj) {
	if(gameObj.properties.scraper == null) {
		var SelText = '';
		SelText = SelText + 'GameObject -x '+(gameObj.position.x + 25)+' -y '+(gameObj.position.y + 25)+'';
		SelText = SelText + ' -v 0 0 -v 0 0'
		SelText = SelText + ' -t scraper'
		SelText = SelText + ' -p state 0'
		SelText = SelText + ' -a StickAnimationPackage'
		SelText = SelText + ' -ca 0'
		//SelText = SelText + ' -d'
		SelText = SelText + ';'
		
		var GOObjT1 = createGOFromString(SelText);
	
		gameObj.properties.scraper = GOObjT1;
	
		gameObj.handler.addObject(GOObjT1);
		
		SelText = '';
		SelText = SelText + 'GameObject -x '+(gameObj.position.x + 25)+' -y '+(gameObj.position.y + 25)+'';
		SelText = SelText + ' -v 0 0 -v 0 0'
		//SelText = SelText + ' -t scraper'
		SelText = SelText + ' -a StickAnimationPackage'
		SelText = SelText + ' -ca 0'
		//SelText = SelText + ' -d'
		SelText = SelText + ';'
		
		var GOObjT2 = createGOFromString(SelText);
	
		gameObj.properties.scraperTip = GOObjT2;
	
		gameObj.handler.addObject(GOObjT2);
		
		GOObjT2.animations[GOObjT2.currAnimation].keyFrames[GOObjT2.animations[GOObjT2.currAnimation].currKeyFrame].drawOffX = -15;
		GOObjT2.animations[GOObjT2.currAnimation].keyFrames[GOObjT2.animations[GOObjT2.currAnimation].currKeyFrame].length = 2;
		GOObjT2.animations[GOObjT2.currAnimation].keyFrames[GOObjT2.animations[GOObjT2.currAnimation].currKeyFrame].width = 30;
	} else {
		if(gameObj.properties.scraper.properties.state == 0) {
			gameObj.properties.scraper.vertices[1].offY = gameObj.properties.scraper.vertices[1].offY - gameObj.properties.scrapeSpeed;
			gameObj.properties.scraper.animations[gameObj.properties.scraper.currAnimation].keyFrames[gameObj.properties.scraper.animations[gameObj.properties.scraper.currAnimation].currKeyFrame].drawOffY = gameObj.properties.scraper.animations[gameObj.properties.scraper.currAnimation].keyFrames[gameObj.properties.scraper.animations[gameObj.properties.scraper.currAnimation].currKeyFrame].drawOffY - gameObj.properties.scrapeSpeed;
			gameObj.properties.scraper.animations[gameObj.properties.scraper.currAnimation].keyFrames[gameObj.properties.scraper.animations[gameObj.properties.scraper.currAnimation].currKeyFrame].length = gameObj.properties.scraper.animations[gameObj.properties.scraper.currAnimation].keyFrames[gameObj.properties.scraper.animations[gameObj.properties.scraper.currAnimation].currKeyFrame].length + gameObj.properties.scrapeSpeed;
			
			gameObj.properties.scraperTip.position.y = gameObj.properties.scraperTip.position.y - gameObj.properties.scrapeSpeed;
			
			if(gameObj.properties.scraper.vertices[1].offY <= -174) {
				gameObj.properties.scraper.properties.state = 1;
				gameObj.properties.scraper.radialPoints.push({offX: 0, offY: gameObj.properties.scraper.vertices[1].offY, radius: 15})
			}
		} else if(gameObj.properties.scraper.properties.state == 1) {
			gameObj.properties.scraper.vertices[1].offY = gameObj.properties.scraper.vertices[1].offY + gameObj.properties.scrapeSpeed;
			gameObj.properties.scraper.animations[gameObj.properties.scraper.currAnimation].keyFrames[gameObj.properties.scraper.animations[gameObj.properties.scraper.currAnimation].currKeyFrame].drawOffY = gameObj.properties.scraper.animations[gameObj.properties.scraper.currAnimation].keyFrames[gameObj.properties.scraper.animations[gameObj.properties.scraper.currAnimation].currKeyFrame].drawOffY + gameObj.properties.scrapeSpeed;
			gameObj.properties.scraper.animations[gameObj.properties.scraper.currAnimation].keyFrames[gameObj.properties.scraper.animations[gameObj.properties.scraper.currAnimation].currKeyFrame].length = gameObj.properties.scraper.animations[gameObj.properties.scraper.currAnimation].keyFrames[gameObj.properties.scraper.animations[gameObj.properties.scraper.currAnimation].currKeyFrame].length - gameObj.properties.scrapeSpeed;
			
			gameObj.properties.scraperTip.position.y = gameObj.properties.scraperTip.position.y + gameObj.properties.scrapeSpeed;
			
			gameObj.properties.scraper.radialPoints[0].offY = gameObj.properties.scraper.radialPoints[0].offY + gameObj.properties.scrapeSpeed;
			if(gameObj.properties.scraper.vertices[1].offY >= 25) {
				
				gameObj.handler.removeObjectSafe(gameObj.properties.scraper,this);
				gameObj.properties.scraper = null;
				gameObj.handler.removeObjectSafe(gameObj.properties.scraperTip,this);
				gameObj.properties.scraperTip = null;
				
				gameObj.properties.state = 'controlled';
				gameObj.animations[gameObj.currAnimation].keyFrames[gameObj.animations[gameObj.currAnimation].currKeyFrame].currFrame = 1;
				gameObj.currAnimation = ManAnimationStates.IdleRight;
				gameObj.animations[gameObj.currAnimation].currKeyFrame = 0;
			}
		}
	}
}

function tennisAction_MOAB(gameObj) {
	if(gameObj.properties.tennisRacket == null) {
		var SelText = '';
		SelText = SelText + 'GameObject -x '+(gameObj.position.x + 25)+' -y '+(gameObj.position.y - 25)+'';
		//SelText = SelText + ' -v 0 0 -v 0 0'
		SelText = SelText + ' -rp 0 0 20'
		SelText = SelText + ' -t tennisRacket'
		SelText = SelText + ' -cf tennisCollision'
		SelText = SelText + ' -p state 0'
		//SelText = SelText + ' -d'
		SelText = SelText + ';'
		
		var GOObjT1 = createGOFromString(SelText);
	
		gameObj.properties.tennisRacket = GOObjT1;
	
		gameObj.handler.addObject(GOObjT1);
	} else {
		if(gameObj.properties.tennisRacket.position.y > gameObj.position.y + 45) {
			gameObj.handler.removeObjectSafe(gameObj.properties.tennisRacket,this);
			gameObj.properties.tennisRacket = null;
			gameObj.properties.state = 'controlled';
			gameObj.animations[gameObj.currAnimation].keyFrames[gameObj.animations[gameObj.currAnimation].currKeyFrame].currFrame = 1;
			gameObj.currAnimation = ManAnimationStates.IdleRight;
			gameObj.animations[gameObj.currAnimation].currKeyFrame = 0;
		} else {
			var newPosition = {x: gameObj.properties.tennisRacket.position.x + 0, y: gameObj.properties.tennisRacket.position.y + 7};
			gameObj.properties.tennisRacket.setPosition(newPosition);
		}
	}
}

function tennisCollision(colObj,verIndex,intersection,colVer1,colVer2) {
	if(colObj.tag != null) {
		if(colObj.tag == 'reflectTrash') {
			if(colObj.properties.reflected != 1) {
				colObj.properties.xv = colObj.properties.xv * -1;
				colObj.properties.yv = colObj.properties.yv * -1;
				colObj.properties.reflected = 1;
				this.handler.removeObjectSafe(colObj.properties.trashChild,this);
				
				var SelText = '';
				SelText = SelText + 'GameObject -x '+(this.position.x)+' -y '+(this.position.y - 50)+'';
				SelText = SelText + ' -v 0 0'
				SelText = SelText + ' -rp -10 0 10 -rp 0 0 10 -rp 10 0 10'
				SelText = SelText + ' -t powerUp'
				SelText = SelText + ' -u powerUpUpdate'
				SelText = SelText + ' -cf powerUpCollision'
				SelText = SelText + ' -a PowerUpAnimationPackage'
				SelText = SelText + ' -ca 0'
				SelText = SelText + ' -p waitFrames 0'
				SelText = SelText + ' -p yv -5'
				
				if(this.position.x >= 320) {
					SelText = SelText + ' -p xv -5'
				} else {
					SelText = SelText + ' -p xv 5'
				}
				
				//SelText = SelText + ' -d'
				SelText = SelText + ';'
				
				var GOObjT1 = createGOFromString(SelText);
			
				this.handler.addObject(GOObjT1);
			}
		} else if(colObj.tag == 'trash') {
			//this.handler.removeObjectSafe(colObj,this);
		}
	}
}

function playerMovement_MOAB() {
	if(this.properties == null) {
		//console.log('No Prop');
		return;
	}
	
	if(this.position.x == null) {
		//console.log('No Prop');
		return;
	}
	
	if(this.position.y == null) {
		//console.log('No Prop');
		return;
	}
	
	if(this.properties.xv == null) {
		//console.log('No Prop');
		return;
	}
	
	if(this.properties.yv == null) {
		//console.log('No Prop');
		return;
	}
	
	if(this.properties.gravity == null) {
		//console.log('No Prop');
		//return;
	}
	
	if(this.properties.suspend == 1) {
		return;
	}
	
	if(this.properties.preVector != null) {
		var newpreVectorPosition = {x: this.position.x, y: this.position.y + this.properties.height + 1};
		this.properties.preVector.setPosition(newpreVectorPosition);
		this.properties.preVector.setPosition({x: this.properties.preVector.position.x, y: this.properties.preVector.position.y + 500});
		this.properties.preVector.properties.hit = 0;
	}
	
	if(this.properties.state == 'scraping') {
		scrapeAction_MOAB(this);
	} else if(this.properties.state == 'tennis') {
		tennisAction_MOAB(this);
	} else {
		controlledMovement_MOAB(this);
	}
	
	/*
	if(this.properties.inStun == 0 && this.properties.inControl == 1) {
		controlledMovement_MOAB(this);
	} else if(this.properties.inStun == 1) {
		if(this.currAnimation == PlatformerAnimationStates.HurtRight && this.properties.climbing != 1) {
			this.properties.xv = -1 * this.properties.xHitTraj;
		} else if(this.currAnimation == PlatformerAnimationStates.HurtLeft && this.properties.climbing != 1) {
			this.properties.xv = this.properties.xHitTraj;
		} else if(this.currAnimation == PlatformerAnimationStates.HurtLeft && this.properties.climbing == 1) {
			this.properties.xv = 0;
		}
		
		this.properties.stunCounter++;
		if(this.properties.stunCounter == this.properties.maxStunFrames) {
			this.properties.inStun = 0;
			if(this.currAnimation == PlatformerAnimationStates.HurtRight) {
				this.currAnimation = PlatformerAnimationStates.IdleRight;
			} else if(this.currAnimation == PlatformerAnimationStates.HurtLeft) {
				this.currAnimation = PlatformerAnimationStates.IdleLeft;
			}
		}
	}
	*/
	
	var newPosition = {x: this.position.x + this.properties.xv, y: this.position.y + this.properties.yv};
	this.setPosition(newPosition);
		
	if(this.properties.jumpVector != null) {
		var newjumpVectorPosition = {x: this.position.x, y: this.position.y + this.properties.height + 1};
		this.properties.jumpVector.setPosition(newjumpVectorPosition);
		this.properties.jumpVector.setPosition({x: this.properties.jumpVector.position.x, y: this.properties.jumpVector.position.y + 500});
		this.properties.jumpVector.properties.hit = 0;
	}
		
	this.properties.xv = 0;
		
	if(this.properties.climbing == 1) {
		this.properties.yv = 0;
	}
	
	if(this.properties.iFrames != -1) {
		this.properties.iFrames++;
	}
	if(this.properties.iFrames == this.properties.maxStunFrames + 20) {
		this.properties.iFrames = -1;
	}
}

function setupPlayer_MOAB() {
	MOABGlobals.player = this;
}

/*
PLAYER
start
*/

/*
POWERUP
start
*/
function powerUpUpdate() {
	this.properties.waitFrames++;
	
	var newPosition = {x: this.position.x + this.properties.xv, y: this.position.y + this.properties.yv};
	this.setPosition(newPosition);
}

function powerUpCollision(colObj,verIndex,intersection,colVer1,colVer2) {
	if(colObj.tag != null) {
		if(colObj.tag == 'wall') {
			
			var origX = this.position.x;
			var origY = this.position.y;
			
			var newPosition = {};
			newPosition.x = this.position.x - (((this.position.x + this.vertices[verIndex].offX) - intersection[0]));
			newPosition.y = this.position.y - (((this.position.y + this.vertices[verIndex].offY) - intersection[1]));
					
			if((this.position.x - this.delta.dx) > this.position.x) {
				newPosition.x++;
			} else if((this.position.x - this.delta.dx) < this.position.x) {
				newPosition.x--;
			}
					
			if((this.position.y - this.delta.dy) > this.position.y) {
				
				if(colObj.position.x + colObj.vertices[colVer1].offX != colObj.position.x + colObj.vertices[colVer2].offX) {
					//console.log('Pressing Down');
					newPosition.y++;
				}
						
			} else if((this.position.y - this.delta.dy) < this.position.y) {
			
				if(colObj.position.x + colObj.vertices[colVer1].offX != colObj.position.x + colObj.vertices[colVer2].offX) {
					//console.log('Pressing Up');
					newPosition.y--;
				}
				
			}
			
			this.appendPosition(newPosition);
			
			if(colObj.position.y + colObj.vertices[colVer1].offY == colObj.position.y + colObj.vertices[colVer2].offY) {
				this.properties.yv = this.properties.yv * -1;
			}
			if(colObj.position.x + colObj.vertices[colVer1].offX == colObj.position.x + colObj.vertices[colVer2].offX) {
				this.properties.xv = this.properties.xv * -1;
			}
		}
	}
}
/*
POWERUP
end
*/

/*
TRASH
start
*/

function trashUpdate() {
	
	var newPosition = {x: this.position.x + this.properties.xv, y: this.position.y + this.properties.yv};
	this.setPosition(newPosition);
	
	this.properties.zPart = this.properties.zPart - 7;
}

function trashCollision(colObj,verIndex,intersection,colVer1,colVer2) {
	
	if(colObj.tag != null) {
		if(colObj.tag == 'target') {
			if(colObj == this.properties.trashChild) {
				if(this.properties.zPart <= 0) {
					this.handler.removeObjectSafe(colObj,this);
					this.handler.removeObjectSafe(this,this);
					
					var SelText = '';
					SelText = SelText + 'GameObject -x '+this.properties.destX+' -y '+this.properties.destY+'';
					SelText = SelText + ' -v -10 -10 -v 10 -10 -v 10 10 -v -10 10'
					SelText = SelText + ' -rp 0 0 10'
					SelText = SelText + ' -t stain'
					SelText = SelText + ' -a StainAnimationPackage'
					SelText = SelText + ' -ca 0'
					SelText = SelText + ' -cf stainCollision'
					//SelText = SelText + ' -d'
					SelText = SelText + ';'
					
					var GOObjT1 = createGOFromString(SelText);
					
					MOABGlobals.BillBoard.properties.stains++;
					
					this.handler.addObject(GOObjT1);
				}
			}
		} else if(colObj.tag == 'trash') {
			//this.handler.removeObjectSafe(colObj,this);
		}
	}
}

function setupTrash() {
	var SelText = ''
		
	SelText = SelText + 'GameObject -x '+this.properties.destX+' -y '+this.properties.destY+'';
	//SelText = SelText + ' -v -25 -25 -v 25 -25 -v 25 25 -v -25 25'
	SelText = SelText + ' -v -25 0 -v 25 0'
	SelText = SelText + ' -t target'
	SelText = SelText + ' -a TargetAnimationPackage'
	SelText = SelText + ' -ca 0'
	//SelText = SelText + ' -d'
	SelText = SelText + ';'
	
	var GOObjT1 = createGOFromString(SelText);
	
	this.properties.trashChild = GOObjT1;
	
	this.handler.addObject(GOObjT1);
}

/*
TRASH
end
*/

function stainCollision(colObj,verIndex,intersection,colVer1,colVer2) {
	if(colObj.tag != null) {
		if(colObj.tag == 'scraper') {
			this.handler.removeObjectSafe(this,this);
			MOABGlobals.BillBoard.properties.stains--;
		} else if(colObj.tag == 'trash') {
			//this.handler.removeObjectSafe(colObj,this);
		}
	}
}

/*
BUSH
start
*/

function setupBush() {
	MOABGlobals.BushController.properties.bushes.push(this);
}

function bushUpdate() {
	//if(this.properties.waitFrames == 180) {
	//	this.properties.waitFrames = 0;
	if(this.properties.throwTrash == 1) {
		console.log('throwing: ' + this.properties.bushid);
		var destX = Math.floor(Math.random() * (480 - 160) + 160);
		var destY = Math.floor(Math.random() * (286 - 86) + 86);
		
		//console.log(destX);
		//console.log(destY);
		
		var dx = destX - this.position.x;
		var dy = destY - this.position.y;
		var hyp = Math.sqrt( (dx*dx) + (dy*dy) );
		
		var zPart = Math.ceil(hyp / 7);
		
		//console.log('hyp: ' + hyp);
		//console.log('zPart: ' + zPart);
		
		var SelText = ''
		
		SelText = SelText + 'GameObject -x '+this.position.x+' -y '+this.position.y+'';
		SelText = SelText + ' -p xv '+((dx/hyp) * 7)+''
		SelText = SelText + ' -p yv '+((dy/hyp) * 7)+''
		SelText = SelText + ' -p destX '+destX+''
		SelText = SelText + ' -p destY '+destY+''
		SelText = SelText + ' -p zPart '+zPart+''
		SelText = SelText + ' -pi setupTrash'
		//SelText = SelText + ' -rp 0 0 6'
		SelText = SelText + ' -v 0 0'
		SelText = SelText + ' -u trashUpdate'
		SelText = SelText + ' -cf trashCollision'
		//SelText = SelText + ' -t trash'
		//SelText = SelText + ' -t reflectTrash'
		
		if(MOABGlobals.trashThrown % 6 == 5) {
			SelText = SelText + ' -rp 0 0 8'
			SelText = SelText + ' -t reflectTrash'
			SelText = SelText + ' -a BentCanAnimationPackage'
			SelText = SelText + ' -ca 0'
		} else {
			SelText = SelText + ' -rp 0 0 6'
			SelText = SelText + ' -t trash'
			SelText = SelText + ' -a RottenTomatoCanAnimationPackage'
			SelText = SelText + ' -ca 0'
		}
		
		//SelText = SelText + ' -d'
		SelText = SelText + ''
	
		enterObjects(SelText);
		
		this.properties.throwTrash = 0;
		MOABGlobals.trashThrown++;
	}
	//} else {
	//	this.properties.waitFrames++;
	//}
}

function setupBushController() {
	MOABGlobals.BushController = this;
	this.properties.bushes = [];
	this.properties.Opts = [];
}

function newAnim(gameObj,nextAnimation) {
	gameObj.animations[gameObj.currAnimation].keyFrames[gameObj.animations[gameObj.currAnimation].currKeyFrame].currFrame = 1;
	gameObj.currAnimation = nextAnimation;
	gameObj.animations[gameObj.currAnimation].currKeyFrame = 0;
	
}

function bushControllerUpdate() {
	if(this.properties.waitFrames == 20) {
		//this.properties.waitFrames = 0;
		
		var bushOptions = [0,1,2,3,4,5];
		var runs = 0;
		var totalOptions = 5;
		if(MOABGlobals.time > 60) {
			runs = 1;
		} else if(MOABGlobals.time > 50) {
			runs = 2;
		} else if(MOABGlobals.time > 40) {
			runs = 3;
		} else if(MOABGlobals.time > 30) {
			runs = 4;
		} else if(MOABGlobals.time > 20) {
			runs = 5;
		} else if(MOABGlobals.time > 10) {
			runs = 6;
		} else {
			runs = 6;
		}
		
		this.properties.Opts = [];
		for(var i = 1; i <= runs; i++) {
			var opt = Math.floor(Math.random() * (totalOptions - 0 + 1) + 0);
			//this.properties.bushes[bushOptions[opt]].properties.throwTrash = 1;
			this.properties.Opts.push(bushOptions[opt]);
			newAnim(this.properties.bushes[bushOptions[opt]],BushAnimationStates.Throw);
			
			totalOptions--;
			
			bushOptions.splice(opt,1);
		}
		this.properties.waitFrames++;
	} else if(this.properties.waitFrames == 40) {
		for(var i = 0; i < this.properties.Opts.length; i++) {
			this.properties.bushes[this.properties.Opts[i]].properties.throwTrash = 1;
		}
		this.properties.waitFrames++;
	} else if(this.properties.waitFrames == 60) {
		this.properties.waitFrames = 0;
		newAnim(this.properties.bushes[0],BushAnimationStates.Bush);
		newAnim(this.properties.bushes[1],BushAnimationStates.Bush);
		newAnim(this.properties.bushes[2],BushAnimationStates.Bush);
		newAnim(this.properties.bushes[3],BushAnimationStates.Bush);
		newAnim(this.properties.bushes[4],BushAnimationStates.Bush);
		newAnim(this.properties.bushes[5],BushAnimationStates.Bush);
	} else {
		this.properties.waitFrames++;
	}
}

/*
BUSH
end
*/

/*
HUD
start
*/
function setupHUD_MOAB() {
	var TextText2 = 'TextObject -x 0 -y 0 -t "Score: '+MOABGlobals.score+'" -c black;';
	
	var TOJ2 = createTOJsonFromString(TextText2);
	var TOObj2 = createTOFromJSON(TOJ2);
	this.properties.scoreChild = TOObj2;
	this.handler.addTextObject(TOObj2);
	
	var TextText3 = 'TextObject -x 0 -y 0 -t "Time: '+MOABGlobals.time+'" -c black;';
	
	var TOJ3 = createTOJsonFromString(TextText3);
	var TOObj3 = createTOFromJSON(TOJ3);
	this.properties.timeChild = TOObj3;
	this.handler.addTextObject(TOObj3);
}

function HUDUpdate() {
	this.position.x = this.handler.CameraX + 10;
	this.position.y = this.handler.CameraY + 10;
	
	this.properties.scoreChild.textContent = 'Score: '+MOABGlobals.score+''
	this.properties.scoreChild.position.x = this.position.x + 10;
	this.properties.scoreChild.position.y = this.position.y + 10;
	
	this.properties.timeChild.textContent = 'Time: '+MOABGlobals.time+''
	this.properties.timeChild.position.x = this.position.x + 10;
	this.properties.timeChild.position.y = this.position.y + 20;
}
/*
HUD
end
*/

function scoreKeeperUpdate() {
	if(this.properties.waitFrames == 5) {
		if(MOABGlobals.BillBoard.properties.stains == 0) {
			MOABGlobals.score = MOABGlobals.score + 5;
		} else if(MOABGlobals.BillBoard.properties.stains == 1) {
			MOABGlobals.score = MOABGlobals.score + 4;
		} else if(MOABGlobals.BillBoard.properties.stains == 2) {
			MOABGlobals.score = MOABGlobals.score + 3;
		} else if(MOABGlobals.BillBoard.properties.stains == 3) {
			MOABGlobals.score = MOABGlobals.score + 2;
		} else if(MOABGlobals.BillBoard.properties.stains == 4) {
			MOABGlobals.score = MOABGlobals.score + 1;
		}
		this.properties.waitFrames = 0;
	} else {
		this.properties.waitFrames++;
	}
}

function timerUpdate() {
	if(this.properties.waitFrames == 55) {
		MOABGlobals.time--;
		if(MOABGlobals.time <= 0) {
			endGame_MOAB(this);
		}
		this.properties.waitFrames = 0;
	} else {
		this.properties.waitFrames++;
	}
}

function setupBillBoard() {
	MOABGlobals.BillBoard = this;
	this.properties.stains = 0;
	
	var BillText = 'TextObject -x 160 -y 126 -t "New Vigenere Soda!" -c black -s 25;';
	
	var TOJ = createTOJsonFromString(BillText);
	var TOObj = createTOFromJSON(TOJ);
	this.properties.displayChild = TOObj;
	this.handler.addTextObject(TOObj);
	
	var BillText = 'TextObject -x 200 -y 176 -t "Use Promo Key [cherry] for a DISCOUNT" -c black -s 15;';
	
	var TOJ = createTOJsonFromString(BillText);
	var TOObj = createTOFromJSON(TOJ);
	this.properties.displayChild = TOObj;
	this.handler.addTextObject(TOObj);
}

/*
KEYTRACK
start
*/
function setupKeyTracker_MOAB() {
	MOABGlobals.keyTracker = this
	this.properties.upDown = false;
	this.properties.zDown = false;
	this.properties.spaceDown = false;
}

function keyTrackerUpdate_MOAB() {
	if(keys.up && !this.properties.upDown) {
		this.properties.upDown = true;
	}
	
	if(keys.z && !this.properties.zDown) {
		this.properties.zDown = true;
	}
	
	if(keys.space && !this.properties.spaceDown) {
		this.properties.spaceDown = true;
	}
	
	if(!keys.up) {
		this.properties.upDown = false;
	}
	
	if(!keys.z) {
		this.properties.zDown = false;
	}
	
	if(!keys.space) {
		this.properties.spaceDown = false;
	}
}
/*
KEYTRACK
end
*/

function endGame_MOAB(gameObj) {
	gameObj.handler.removeAllObjects();
	
	var SelText = '';
	
	//Final Scoreboard
	SelText = SelText + 'GameObject';
	SelText = SelText + ' -u finalScoreBoardUpdate'
	SelText = SelText + ' -pi setupFinalScoreBoard'
	SelText = SelText + ';'
	
	//Start Button
	SelText = SelText + 'GameObject -x 220 -y 188 -v 0 0 -v 100 0 -v 100 100 -v 0 100';
	SelText = SelText + ' -p wordLabel Retry'
	SelText = SelText + ' -u startButtonUpdate -pi setupStartButton'
	SelText = SelText + ' -d'
	SelText = SelText + ';'
	
	enterObjects(SelText);
}

function setupFinalScoreBoard() {
	var TextText2 = 'TextObject -x 0 -y 0 -t "Final Score: '+MOABGlobals.score+'" -c black;';
	
	var TOJ2 = createTOJsonFromString(TextText2);
	var TOObj2 = createTOFromJSON(TOJ2);
	this.properties.scoreChild = TOObj2;
	this.handler.addTextObject(TOObj2);
	
	var TextText3 = '';
	
	if(MOABGlobals.score >= 800) {
		TextText3 = 'TextObject -x 0 -y 0 -t "JVPPJNKYMK" -c black;';
	} else {
		TextText3 = 'TextObject -x 0 -y 0 -t "Try to Beat 799" -c black;';
	}
	
	var TOJ3 = createTOJsonFromString(TextText3);
	var TOObj3 = createTOFromJSON(TOJ3);
	this.properties.scoreChild2 = TOObj3;
	this.handler.addTextObject(TOObj3);
}

function finalScoreBoardUpdate() {
	this.position.x = this.handler.CameraX + 10;
	this.position.y = this.handler.CameraY + 10;
	
	this.properties.scoreChild.textContent = 'Final Score: '+MOABGlobals.score+''
	this.properties.scoreChild.position.x = this.position.x + 10;
	this.properties.scoreChild.position.y = this.position.y + 10;
	
	this.properties.scoreChild2.position.x = this.position.x + 10;
	this.properties.scoreChild2.position.y = this.position.y + 20;
}