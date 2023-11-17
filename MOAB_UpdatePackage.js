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
	time: 70
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
	SelText = SelText + ' -p slideStateX 2 -p slideStateY 2'
	SelText = SelText + ' -pi setupPlayer_MOAB'
	SelText = SelText + ' -d'
	SelText = SelText + ';'
	
	//Bush Controller
	SelText = SelText + 'GameObject';
	SelText = SelText + ' -u bushControllerUpdate'
	SelText = SelText + ' -pi setupBushController'
	SelText = SelText + ' -p waitFrames 0'
	SelText = SelText + ' -d'
	SelText = SelText + ';'
	
	//Bush
	SelText = SelText + 'GameObject -x 76 -y 546';
	SelText = SelText + ' -rp 0 0 30'
	SelText = SelText + ' -lu bushUpdate'
	SelText = SelText + ' -pi setupBush'
	SelText = SelText + ' -p waitFrames 0'
	SelText = SelText + ' -p throwTrash 0'
	SelText = SelText + ' -p bushid 0'
	SelText = SelText + ' -d'
	SelText = SelText + ';'
	
	//Bush
	SelText = SelText + 'GameObject -x 182 -y 546';
	SelText = SelText + ' -rp 0 0 30'
	SelText = SelText + ' -lu bushUpdate'
	SelText = SelText + ' -pi setupBush'
	SelText = SelText + ' -p waitFrames 0'
	SelText = SelText + ' -p throwTrash 0'
	SelText = SelText + ' -p bushid 1'
	SelText = SelText + ' -d'
	SelText = SelText + ';'
	
	//Bush
	SelText = SelText + 'GameObject -x 288 -y 546';
	SelText = SelText + ' -rp 0 0 30'
	SelText = SelText + ' -lu bushUpdate'
	SelText = SelText + ' -pi setupBush'
	SelText = SelText + ' -p waitFrames 0'
	SelText = SelText + ' -p throwTrash 0'
	SelText = SelText + ' -p bushid 2'
	SelText = SelText + ' -d'
	SelText = SelText + ';'
	
	//Bush
	SelText = SelText + 'GameObject -x 394 -y 546';
	SelText = SelText + ' -rp 0 0 30'
	SelText = SelText + ' -lu bushUpdate'
	SelText = SelText + ' -pi setupBush'
	SelText = SelText + ' -p waitFrames 0'
	SelText = SelText + ' -p throwTrash 0'
	SelText = SelText + ' -p bushid 3'
	SelText = SelText + ' -d'
	SelText = SelText + ';'
	
	//Bush
	SelText = SelText + 'GameObject -x 500 -y 546';
	SelText = SelText + ' -rp 0 0 30'
	SelText = SelText + ' -lu bushUpdate'
	SelText = SelText + ' -pi setupBush'
	SelText = SelText + ' -p waitFrames 0'
	SelText = SelText + ' -p throwTrash 0'
	SelText = SelText + ' -p bushid 4'
	SelText = SelText + ' -d'
	SelText = SelText + ';'
	
	//Bush
	SelText = SelText + 'GameObject -x 606 -y 546';
	SelText = SelText + ' -rp 0 0 30'
	SelText = SelText + ' -lu bushUpdate'
	SelText = SelText + ' -pi setupBush'
	SelText = SelText + ' -p waitFrames 0'
	SelText = SelText + ' -p throwTrash 0'
	SelText = SelText + ' -p bushid 5'
	SelText = SelText + ' -d'
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

function UploadMOAB() {
	GameTitle.innerHTML = "Man On A Billboard";
	oHandler.resetCamera();
	oHandler.removeAllObjects();
	
	startMOAB();
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
		}
	}
}

function controlledMovement_MOAB(gameObj) {
	
	if((keys.left || GamePadButtons.leftPressed) && gameObj.properties.slideStateY != 0) {
		gameObj.properties.xv = -7;
		
		if(gameObj.properties.slideStateY == 1) {
			gameObj.properties.slideStateY = 2;
		}
		
	}
	
	
	if((keys.right || GamePadButtons.rightPressed) && gameObj.properties.slideStateY != 1) {
		gameObj.properties.xv = 7;
		
		if(gameObj.properties.slideStateY == 0) {
			gameObj.properties.slideStateY = 2;
		}
		
	}
	
	if(keys.m && gameObj.properties.slideStateX != 0 && gameObj.properties.climbMode == 0) {
		//console.log('up');
		if(gameObj.properties.jumps > 0 && BossRushGlobals.keyTracker.properties.mDown == false) {
			gameObj.properties.jumps--;
			gameObj.properties.yv = -10;
			
			if(gameObj.properties.slideStateX == 1) {
				gameObj.properties.slideStateX = 2;
			}
			
			if(gameObj.currAnimation == 0 || gameObj.currAnimation == 2) {
				gameObj.currAnimation = 4;
			} else if(gameObj.currAnimation == 1 || gameObj.currAnimation == 3) {
				gameObj.currAnimation = 5;
			}
		}
	} 
		
	if((keys.up || GamePadButtons.Clock6Pressed) && gameObj.properties.slideStateX != 0 && gameObj.properties.climbMode == 0) {
		//console.log('up');
		if(gameObj.properties.jumps > 0 && BossRushGlobals.keyTracker.properties.upDown == false) {
			gameObj.properties.jumps--;
			gameObj.properties.yv = -10;
			
			if(gameObj.properties.slideStateX == 1) {
				gameObj.properties.slideStateX = 2;
			}
			
			if(gameObj.currAnimation == 0 || gameObj.currAnimation == 2) {
				gameObj.currAnimation = 4;
			} else if(gameObj.currAnimation == 1 || gameObj.currAnimation == 3) {
				gameObj.currAnimation = 5;
			}
		}
	} else if(keys.up && gameObj.properties.slideStateX != 0 && gameObj.properties.climbMode == 1) {
		gameObj.properties.yv = -7;
			
		if(gameObj.properties.climbing == 0) {
			gameObj.properties.climbing = 1;
		}
			
		if(gameObj.currAnimation != PlatformerAnimationStates.Climb) {
			//Reset prev animation
			gameObj.animations[gameObj.currAnimation].keyFrames[gameObj.animations[gameObj.currAnimation].currKeyFrame].currFrame = 1;
				
			gameObj.currAnimation = PlatformerAnimationStates.Climb;
			gameObj.animations[gameObj.currAnimation].currKeyFrame = 0;
		}
	}
		
	if(keys.down || GamePadButtons.downPressed) {
		gameObj.animations[gameObj.currAnimation].keyFrames[gameObj.animations[gameObj.currAnimation].currKeyFrame].currFrame = 1;

		if(gameObj.properties.looking == 'right') {
			gameObj.currAnimation = PlatformerAnimationStates.DuckingRight;
		} else if(gameObj.properties.looking == 'left') {
			gameObj.currAnimation = PlatformerAnimationStates.DuckingLeft;
		}
		gameObj.animations[gameObj.currAnimation].currKeyFrame = 0;
		
		gameObj.vertices[0].offY = 52; 
		gameObj.vertices[1].offY = 52; 
		
		gameObj.radialPoints[0].offY = 70;
		gameObj.radialPoints.splice(1);
		
		if(gameObj.properties.standingOn == 'plat') {
			gameObj.position.y = gameObj.position.y + 2;
		}
	}
		
	if(keys.down && gameObj.properties.climbMode == 0) {
			
	} else if(keys.down && gameObj.properties.climbMode == 1) {
		gameObj.properties.yv = 7;
		
		if(gameObj.properties.climbing == 0) {
			gameObj.properties.climbing = 1;
		}
			
		if(gameObj.currAnimation != PlatformerAnimationStates.Climb) {
			//Reset prev animation
			gameObj.animations[gameObj.currAnimation].keyFrames[gameObj.animations[gameObj.currAnimation].currKeyFrame].currFrame = 1;
			
			gameObj.currAnimation = PlatformerAnimationStates.Climb;
			gameObj.animations[gameObj.currAnimation].currKeyFrame = 0;
		}
	}
	
	if((keys.space || GamePadButtons.Clock9Pressed) && gameObj.properties.state != 'scraping') {
		
		gameObj.properties.state = 'scraping';
	
	} else {
		
	}
		
	/*
	if(gameObj.animations[gameObj.currAnimation].Done) {
		if(gameObj.currAnimation == 6) {
			gameObj.currAnimation = 0;
		} else if(gameObj.currAnimation == 7) {
			gameObj.currAnimation = 1;
		} else if(gameObj.currAnimation == PlatformerAnimationStates.Swing2Right) {
			gameObj.currAnimation = 0;
		} else if(gameObj.currAnimation == PlatformerAnimationStates.Swing2Left) {
			gameObj.currAnimation = 1;
		}
	}
	*/
}

function scrapeAction_MOAB(gameObj) {
	if(gameObj.properties.scraper == null) {
		var SelText = '';
		SelText = SelText + 'GameObject -x '+(gameObj.position.x + 25)+' -y '+(gameObj.position.y + 25)+'';
		SelText = SelText + ' -v 0 0 -v 0 0'
		SelText = SelText + ' -t scraper'
		SelText = SelText + ' -p state 0'
		SelText = SelText + ' -d'
		SelText = SelText + ';'
		
		var GOObjT1 = createGOFromString(SelText);
	
		gameObj.properties.scraper = GOObjT1;
	
		gameObj.handler.addObject(GOObjT1);
	} else {
		if(gameObj.properties.scraper.properties.state == 0) {
			gameObj.properties.scraper.vertices[1].offY = gameObj.properties.scraper.vertices[1].offY - 7;
			
			if(gameObj.properties.scraper.vertices[1].offY <= -174) {
				gameObj.properties.scraper.properties.state = 1;
				gameObj.properties.scraper.radialPoints.push({offX: 0, offY: gameObj.properties.scraper.vertices[1].offY, radius: 15})
			}
		} else if(gameObj.properties.scraper.properties.state == 1) {
			gameObj.properties.scraper.vertices[1].offY = gameObj.properties.scraper.vertices[1].offY + 7;
			gameObj.properties.scraper.radialPoints[0].offY = gameObj.properties.scraper.radialPoints[0].offY + 7;
			if(gameObj.properties.scraper.vertices[1].offY >= 25) {
				gameObj.handler.removeObjectSafe(gameObj.properties.scraper,this);
				gameObj.properties.scraper = null;
				gameObj.properties.state = 'controlled';
			}
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
					SelText = SelText + ' -cf stainCollision'
					SelText = SelText + ' -d'
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
	SelText = SelText + ' -d'
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
		var destX = Math.floor(Math.random() * (490 - 150) + 150);
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
		SelText = SelText + ' -rp 0 0 6'
		SelText = SelText + ' -v 0 0'
		SelText = SelText + ' -u trashUpdate'
		SelText = SelText + ' -cf trashCollision'
		SelText = SelText + ' -t trash'
		SelText = SelText + ' -d'
		SelText = SelText + ''
	
		enterObjects(SelText);
		
		this.properties.throwTrash = 0;
	}
	//} else {
	//	this.properties.waitFrames++;
	//}
}

function setupBushController() {
	MOABGlobals.BushController = this;
	this.properties.bushes = [];
}

function bushControllerUpdate() {
	if(this.properties.waitFrames == 60) {
		this.properties.waitFrames = 0;
		
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
		
		for(var i = 1; i <= runs; i++) {
			var opt = Math.floor(Math.random() * (totalOptions - 0 + 1) + 0);
			this.properties.bushes[bushOptions[opt]].properties.throwTrash = 1;
			totalOptions--;
			//console.log(bushOptions);
			console.log('arrayindex: ' + opt);
			console.log('bush: ' + bushOptions[opt]);
			console.log(this.properties.bushes[bushOptions[opt]]);
			bushOptions.splice(opt,1);
			//console.log(bushOptions);
		}
		
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
	
	enterObjects(SelText);
}

function setupFinalScoreBoard() {
	var TextText2 = 'TextObject -x 0 -y 0 -t "Final Score: '+MOABGlobals.score+'" -c black;';
	
	var TOJ2 = createTOJsonFromString(TextText2);
	var TOObj2 = createTOFromJSON(TOJ2);
	this.properties.scoreChild = TOObj2;
	this.handler.addTextObject(TOObj2);
}

function finalScoreBoardUpdate() {
	this.position.x = this.handler.CameraX + 10;
	this.position.y = this.handler.CameraY + 10;
	
	this.properties.scoreChild.textContent = 'Final Score: '+MOABGlobals.score+''
	this.properties.scoreChild.position.x = this.position.x + 10;
	this.properties.scoreChild.position.y = this.position.y + 10;
}