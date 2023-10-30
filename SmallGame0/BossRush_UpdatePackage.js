/*
SEARCH TERMS:

GLOBALS
STARTSET
PLAYER
KEYTRACK
BOSS
*/

/*
GLOBALS
start
*/
var BossRushGlobals = {
	canOut: false,
	canState: ''
}

/*
GLOBALS
end
*/

/*
STARTSET
start
*/

function StartBossRush() {
	
	var SelText = '';
	
	//floor
	SelText = SelText + 'GameObject -x -10 -y 500 -v 0 0 left -v 660 0 right -t wall'
	SelText = SelText + ' -d'
	SelText = SelText + ';'
	
	//left wall
	SelText = SelText + 'GameObject -x -10 -y 0 -v 0 0 left -v 0 500 right -t wall'
	SelText = SelText + ' -d'
	SelText = SelText + ';'
	
	//right wall
	SelText = SelText + 'GameObject -x 650 -y 0 -v 0 0 left -v 0 500 right -t wall'
	SelText = SelText + ' -d'
	SelText = SelText + ';'
	
	//player
	SelText = SelText + 'GameObject -x 10 -y 300';
	SelText = SelText + ' -v 0 0 topleft -v 72 0 topright -v 72 108 bottomright -v 0 108 bottomleft'
	SelText = SelText + ' -rp 36 30 36'
	SelText = SelText + ' -rp 36 80 20'
	SelText = SelText + ' -t player'
	SelText = SelText + ' -p xv 0 -p yv 0'
	SelText = SelText + ' -p jumpable 1 -p gravity 6 -p slideStateX 2 -p slideStateY 2 -p height 108'
	SelText = SelText + ' -p BatReady 1'
	SelText = SelText + ' -u playerMovement_BR'
	SelText = SelText + ' -cf playerCollision_BR'
	SelText = SelText + ' -pi setupPlayer'
	SelText = SelText + ' -a PlatformerAnimationPackage -ca 0'
	SelText = SelText + ' -p climbMode 0 -p climbing 0 -p health 5 -p iFrames -1 -p inControl 1 -p inStun 0 -p stunCounter 0'
	SelText = SelText + ' -p jumps 1'
	SelText = SelText + ' -p maxJumps 1'
	SelText = SelText + ' -p fireFrames 0'
	SelText = SelText + ' -p looking right'
	SelText = SelText + ' -xR 2'
	SelText = SelText + ' -yR 2'
	SelText = SelText + ' -p suspend 0'
	SelText = SelText + ' -d'
	SelText = SelText + ';'
	
	SelText = SelText + 'GameObject -x 0 -y 0';
	SelText = SelText + ' -pi setupKeyTracker_BR'
	SelText = SelText + ' -u keyTrackerUpdate'
	SelText = SelText + ';'
	
	//Boss
	SelText = SelText + 'GameObject -x 420 -y 45';
	SelText = SelText + ' -v 0 0 topleft -v 200 0 topright -v 200 454 bottomright -v 0 454 bottomleft'
	SelText = SelText + ' -rp 100 100 100'
	SelText = SelText + ' -rp 100 300 100'
	SelText = SelText + ' -rp 100 500 100'
	SelText = SelText + ' -u boss1Update'
	SelText = SelText + ' -cf boss1Collision'
	SelText = SelText + ' -pi boss1Setup'
	SelText = SelText + ' -t enemy'
	SelText = SelText + ' -p HitBoxActive 1'
	SelText = SelText + ' -p xv 0 -p yv 0'
	SelText = SelText + ' -p height 54'
	SelText = SelText + ' -p health 200'
	SelText = SelText + ' -p decidingFrames 0'
	SelText = SelText + ' -p bossState neutral'
	SelText = SelText + ' -p looking left'
	SelText = SelText + ' -p totalStun 60'
	SelText = SelText + ' -p corrective 1'
	SelText = SelText + ' -p yTrag -10'
	SelText = SelText + ' -p grabStage 1'
	SelText = SelText + ' -d'
	SelText = SelText + ';'
	
	//Hud
	SelText = SelText + 'GameObject -x 0 -y 0'
	SelText = SelText + ' -pi setupHUD_BR'
	SelText = SelText + ' -lu HUDUpdate_BR'
	SelText = SelText + ';'
	
	enterObjects(SelText);
}

/*
STARTSET
end
*/


/*
PLAYER
start
*/
function controlledMovement_BR(gameObj) {
	
	if(!keys.down && (gameObj.currAnimation == PlatformerAnimationStates.DuckingRight || gameObj.currAnimation == PlatformerAnimationStates.DuckingLeft)) {
		gameObj.animations[gameObj.currAnimation].keyFrames[gameObj.animations[gameObj.currAnimation].currKeyFrame].currFrame = 1;

		if(gameObj.currAnimation == PlatformerAnimationStates.DuckingRight) {
			gameObj.currAnimation = PlatformerAnimationStates.IdleRight;
		} else {
			gameObj.currAnimation = PlatformerAnimationStates.IdleLeft;
		}
		gameObj.animations[gameObj.currAnimation].currKeyFrame = 0;
		
		gameObj.vertices[0].offY = 0; 
		gameObj.vertices[1].offY = 0; 
		
		gameObj.radialPoints[0].offY = 30;
		gameObj.radialPoints.push({offX: 36, offY: 80, radius: 20});
	}
	
	if(keys.left && gameObj.properties.slideStateY != 0 && gameObj.properties.climbing == 0 
	&& gameObj.currAnimation != PlatformerAnimationStates.SwingRight 
	&& gameObj.currAnimation != PlatformerAnimationStates.SwingLeft
	&& gameObj.currAnimation != PlatformerAnimationStates.Swing2Right 
	&& gameObj.currAnimation != PlatformerAnimationStates.Swing2Left) {
		gameObj.properties.xv = -7;
		gameObj.properties.looking = 'left';
		if(gameObj.properties.slideStateY == 1) {
			gameObj.properties.slideStateY = 2;
		}
		if(gameObj.currAnimation != PlatformerAnimationStates.RunLeft && gameObj.currAnimation != PlatformerAnimationStates.JumpRight && gameObj.currAnimation != PlatformerAnimationStates.JumpLeft) {
			//Reset Last Animation
			gameObj.animations[gameObj.currAnimation].keyFrames[gameObj.animations[gameObj.currAnimation].currKeyFrame].currFrame = 1;
			
			gameObj.currAnimation = PlatformerAnimationStates.RunLeft;
			gameObj.animations[gameObj.currAnimation].currKeyFrame = 0;
		}
	}
	
	
	if(keys.right && gameObj.properties.slideStateY != 1 && gameObj.properties.climbing == 0 
	&& gameObj.currAnimation != PlatformerAnimationStates.SwingRight 
	&& gameObj.currAnimation != PlatformerAnimationStates.SwingLeft
	&& gameObj.currAnimation != PlatformerAnimationStates.Swing2Right 
	&& gameObj.currAnimation != PlatformerAnimationStates.Swing2Left) {
		gameObj.properties.xv = 7;
		gameObj.properties.looking = 'right';
		if(gameObj.properties.slideStateY == 0) {
			gameObj.properties.slideStateY = 2;
		}
		if(gameObj.currAnimation != PlatformerAnimationStates.RunRight && gameObj.currAnimation != PlatformerAnimationStates.JumpRight && gameObj.currAnimation != PlatformerAnimationStates.JumpLeft) {
			//Reset Last Animation
			gameObj.animations[gameObj.currAnimation].keyFrames[gameObj.animations[gameObj.currAnimation].currKeyFrame].currFrame = 1;

			gameObj.currAnimation = PlatformerAnimationStates.RunRight;
			gameObj.animations[gameObj.currAnimation].currKeyFrame = 0;
		}
	}
	
	if(gameObj.currAnimation == 2 && gameObj.properties.xv == 0) {
		gameObj.currAnimation = 0;
	} else if(gameObj.currAnimation == 3 && gameObj.properties.xv == 0) {
		gameObj.currAnimation = 1;
	}
		
	//console.log(keys.up);
	//if(keys.up) {
	//	console.log(gameObj.properties.slideStateX);
	//}
	
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
		
	if(keys.up && gameObj.properties.slideStateX != 0 && gameObj.properties.climbMode == 0) {
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
		
	if(keys.down) {
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
	
	if(keys.space) {
		if(gameObj.properties.fireFrames == 0) {
			createBullet(gameObj);
			gameObj.properties.fireFrames = 10;
		} else {
			gameObj.properties.fireFrames--;
		}
	}
		
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
}

function PlayerGetHitBehavior_BR(gameObj,colObj,verIndex,intersection,colVer1,colVer2) {
	//console.log('HIT');
	if(gameObj.properties.iFrames == -1 && colObj.properties.HitBoxActive == 1) {
		//console.log('From Health: ' + gameObj.properties.health);
		
		gameObj.vertices[0].offY = 0; 
		gameObj.vertices[1].offY = 0; 
		
		gameObj.radialPoints[0].offY = 15;
		
		if(gameObj.radialPoints[1] == null) {
			gameObj.radialPoints.push({offX: 18, offY: 40, radius: 10});
		}
		
		if(colObj.properties.damage != null) {
			gameObj.properties.health = gameObj.properties.health - colObj.properties.damage;
		} else {
			gameObj.properties.health--;
		}
		//console.log('To Health: ' + gameObj.properties.health);
				
		if(gameObj.properties.health == 0) {
			console.log('Death');
		}
				
		gameObj.properties.iFrames = 0;
		
		if(colObj.properties.corrective == 1) {
			if(colObj.properties.yTrag != null) {
				gameObj.properties.yv = colObj.properties.yTrag;
			}
			
			if(gameObj.position.x >= 320) {
				gameObj.currAnimation = PlatformerAnimationStates.HurtRight;
			} else {
				gameObj.currAnimation = PlatformerAnimationStates.HurtLeft;
			}
			
			if(colObj.properties.xTrag != null) {
				gameObj.properties.xHitTraj = colObj.properties.xTrag;
			} else {
				gameObj.properties.xHitTraj = 4;
			}
		} else {
			if(colObj.properties.yTrag != null) {
				gameObj.properties.yv = colObj.properties.yTrag;
			}
			
			if(colObj.properties.xTrag != null) {
				gameObj.properties.xHitTraj = colObj.properties.xTrag;
			} else {
				gameObj.properties.xHitTraj = 4;
			}
			
			if(gameObj.position.x <= colObj.position.x) {
				gameObj.currAnimation = PlatformerAnimationStates.HurtRight;
			} else {
				gameObj.currAnimation = PlatformerAnimationStates.HurtLeft;
			}
		}
				
		gameObj.properties.inStun = 1;
		gameObj.properties.stunCounter = 0;
		if(colObj.properties.totalStun == null) {
			gameObj.properties.maxStunFrames = 30;
		} else {
			gameObj.properties.maxStunFrames = colObj.properties.totalStun;
		}
		gameObj.properties.HitBoxActive = 0;
		
	}
}

function playerCollision_BR(colObj,verIndex,intersection,colVer1,colVer2) {
	
	if(colObj.tag != null) {
		if(colObj.tag == 'wall') {
			WallCollisionBehavior_SG0(this,colObj,verIndex,intersection,colVer1,colVer2);
		} else if(colObj.tag == 'coin') {
			//this.handler.removeObject(colObj);
			//SmallGame0Globals.score++;
		} else if(colObj.tag == 'platform') {
			PlatformCollisionBehavior_SG0(this,colObj,verIndex,intersection,colVer1,colVer2);
		} else if(colObj.tag == 'ladder') {
			
		} else if(colObj.tag == 'enemy') {
			if(verIndex == null) {
				//console.log(colObj.tag);
				PlayerGetHitBehavior_BR(this,colObj,verIndex,intersection,colVer1,colVer2);
				//if(this.properties.health <= 0) {
					
				//}
			}
		} else if(colObj.tag == 'enemyHitBox') {
			
		} else if(colObj.tag == 'reaper') {
			if(verIndex == null) {
				endLevel(false);
			}
		}
	}
}

function playerMovement_BR() {
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
		return;
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
	
	if(this.properties.inStun == 0 && this.properties.inControl == 1) {
		controlledMovement_BR(this);
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
	
	if(this.properties.climbing == 0) {
		this.properties.yv = this.properties.yv + this.properties.gravity
	} else {
		this.properties.yv = this.properties.yv;
	}
	
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

function createBullet(gameObj) {
	
	var bVel = 0;
	var xStartOff = 72;
	var yStartOff = 54;
	if(gameObj.properties.looking == 'right') {
		bVel = 17;
		xStartOff = 72;
	} else if(gameObj.properties.looking == 'left') {
		bVel = -17;
		xStartOff = 0;
	}
	
	if(gameObj.currAnimation == PlatformerAnimationStates.DuckingRight || gameObj.currAnimation == PlatformerAnimationStates.DuckingLeft) {
		yStartOff = 74;
	}
	
	var creatinString = ''
	creatinString = creatinString + 'GameObject -x ' + (gameObj.position.x + xStartOff) + ' -y ' + (gameObj.position.y + yStartOff) + '';
	creatinString = creatinString + ' -u bulletUpdate';
	creatinString = creatinString + ' -p xv '+bVel+'';
	creatinString = creatinString + ' -p yv 0';
	creatinString = creatinString + ' -rp 0 0 8';
	creatinString = creatinString + ' -t playerHitBox';
	creatinString = creatinString + ' -p HitBoxActive 1';
	creatinString = creatinString + ' -p damage 1';
	creatinString = creatinString + ' -d';
	
	var GOJ = createGOJsonFromString(creatinString);
	var GOObj = createGOFromJSON(GOJ);
	GOObj.properties.parentObj = gameObj;
	gameObj.handler.addObject(GOObj);
}

function bulletUpdate() {
	var newPosition = {x: this.position.x + this.properties.xv, y: this.position.y + this.properties.yv};
	this.setPosition(newPosition);
}

/*
PLAYER
end
*/

/*
KEYTRACK
start
*/

function setupKeyTracker_BR() {
	BossRushGlobals.keyTracker = this
	this.properties.upDown = false;
	this.properties.zDown = false;
	this.properties.spaceDown = false;
	
	this.properties.mDown = false;
}

/*
KEYTRACK
end
*/


/*
BOSS
start
*/

function boss1Setup() {
	BossRushGlobals.enemyDisplayed = this;
}

function boss1Collision(colObj,verIndex,intersection,colVer1,colVer2) {
	
	if(colObj.tag != null) {
		
		if(colObj.tag == 'testBall') {
		
		} else if(colObj.tag == 'platform') {
		
		} else if(colObj.tag == 'ladder') {
		
		} else if(colObj.tag == 'playerHitBox') {
			console.log('Hit');
			this.handler.removeObjectSafe(colObj,this);
			this.properties.health--;
			console.log(this.properties.health);
		} else if(colObj.tag == 'player') {
		
		}
	
	}
}

function grabberUpdate() {
	
	if(this.properties.parentObj.properties.looking == 'left') {
		if(this.position.x <= 0) {
			this.properties.xv = this.properties.xv * -1;
		}
	} else if(this.properties.parentObj.properties.looking == 'right') {
		if(this.position.x >= 544) {
			this.properties.xv = this.properties.xv * -1;
		}
	}
	
	var newPosition = {x: this.position.x + this.properties.xv, y: this.position.y + this.properties.yv};
	this.setPosition(newPosition);
	
	if(this.properties.parentObj.properties.looking == 'left') {
		if(this.position.x > this.properties.parentObj.position.x + 100) {
			console.log('Fin');
			this.properties.done = 1;
		}
	} else if(this.properties.parentObj.properties.looking == 'right') {
		if(this.position.x < this.properties.parentObj.position.x) {
			console.log('Fin');
			this.properties.done = 1;
		}
	}
}

function rocketCollide(colObj,verIndex,intersection,colVer1,colVer2) {
	if(colObj.tag != null) {
		
		if(colObj.tag == 'wall' || colObj.tag == 'player') {
			this.handler.removeObjectSafe(this.properties.childObj,this);
			this.handler.removeObjectSafe(this,this);
		} else if(colObj.tag == 'platform') {
		
		} else if(colObj.tag == 'ladder') {
		
		} else if(colObj.tag == 'playerHitBox') {
			
		} else if(colObj.tag == 'player') {
		
		}
	
	}
}

function rocketUpdate() {
	
	var newPosition = {x: this.position.x + this.properties.xv, y: this.position.y + this.properties.yv};
	this.setPosition(newPosition);
	
	if(this.position.y > -6 && this.properties.targetDown == 0) {
		var creatinString = ''
		creatinString = creatinString + 'GameObject -x ' + (this.position.x - 16) + ' -y 468';
		creatinString = creatinString + ' -v 0 0 -v 32 0 -v 32 32 -v 0 32';
		creatinString = creatinString + ' -d';
		
		var GOJ = createGOJsonFromString(creatinString);
		var GOObj = createGOFromJSON(GOJ);
		this.properties.childObj = GOObj;
		this.handler.addObject(GOObj);
		this.properties.targetDown = 1;
	}

}

function minionUpdate() {
	if(this.properties.health <= 0) {
		this.handler.removeObjectSafe(this,this);
		
		var creatinString = ''
		
		creatinString = creatinString + 'GameObject -x ' + (this.position.x) + ' -y 463';
		creatinString = creatinString + ' -u canUpdate';
		creatinString = creatinString + ' -cf canCollide';
		creatinString = creatinString + ' -v 0 0 -v 36 0 -v 36 36 -v 0 36';
		creatinString = creatinString + ' -rp 18 18 16';
		creatinString = creatinString + ' -t can';
		creatinString = creatinString + ' -p mode 0';
		creatinString = creatinString + ' -d';
		creatinString = creatinString + ';';
		
		BossRushGlobals.canState == 'can';
		
		enterObjects(creatinString);
	}
	
	var mid = this.properties.lowerBound + ((this.properties.upperBound - this.properties.lowerBound) / 2);
	var midDir = 1;
	if(this.position.x < mid) {
		midDir = 1;
	} else {
		midDir = -1;
	}
	
	this.properties.xv = this.properties.xv + (this.properties.acceleration * midDir);
	
	var newPosition = {x: this.position.x + this.properties.xv, y: this.position.y + this.properties.yv};
	this.setPosition(newPosition);
	
	if(this.position.x > this.properties.lowerBound && this.position.x < this.properties.upperBound) {
		this.properties.inBounds = 1
	}
	
	if(this.position.x <= this.properties.lowerBound && this.properties.inBounds == 1) {
		this.properties.xv = 1;
	}
	
	if(this.position.x >= this.properties.upperBound && this.properties.inBounds == 1) {
		this.properties.xv = -1;
	}
}

function minionCollide(colObj,verIndex,intersection,colVer1,colVer2) {
	if(colObj.tag != null) {
		
		if(colObj.tag == 'testBall') {
		
		} else if(colObj.tag == 'platform') {
		
		} else if(colObj.tag == 'ladder') {
		
		} else if(colObj.tag == 'playerHitBox') {
			console.log('Hit');
			this.handler.removeObjectSafe(colObj,this);
			this.properties.health--;
			console.log(this.properties.health);
		} else if(colObj.tag == 'enemy') {
			if(colObj.properties.bossState == 'charging') {
				
				BossRushGlobals.canState = 'rolling';
				if(colObj.properties.xv > 0) {
					console.log('changing to mode 5');
					
					var creatinString = ''
		
					creatinString = creatinString + 'GameObject -x ' + (this.position.x) + ' -y 463';
					creatinString = creatinString + ' -u canUpdate';
					creatinString = creatinString + ' -cf canCollide';
					creatinString = creatinString + ' -v 0 0 -v 36 0 -v 36 36 -v 0 36';
					creatinString = creatinString + ' -rp 18 18 16';
					creatinString = creatinString + ' -t can';
					creatinString = creatinString + ' -p mode 5';
					creatinString = creatinString + ' -p moveFrames 0';
					creatinString = creatinString + ' -d';
					creatinString = creatinString + ';';
					
					enterObjects(creatinString);
					
					this.handler.removeObjectSafe(this,this);
				} else {
					console.log('changing to mode 6');
					
					var creatinString = ''
		
					creatinString = creatinString + 'GameObject -x ' + (this.position.x) + ' -y 463';
					creatinString = creatinString + ' -u canUpdate';
					creatinString = creatinString + ' -cf canCollide';
					creatinString = creatinString + ' -v 0 0 -v 36 0 -v 36 36 -v 0 36';
					creatinString = creatinString + ' -rp 18 18 16';
					creatinString = creatinString + ' -t can';
					creatinString = creatinString + ' -p mode 6';
					creatinString = creatinString + ' -p moveFrames 0';
					creatinString = creatinString + ' -d';
					creatinString = creatinString + ';';
					
					enterObjects(creatinString);
					
					this.handler.removeObjectSafe(this,this);
				}
				
				
			}
		}
		
	}
}

function setupMinion() {
	BossRushGlobals.canState == 'enemy';
}

function canUpdate() {
	if(this.properties.mode != 0 && this.properties.mode != 4) {
		if(this.properties.moveFrames < 60) {
			var vel = 0;
			if(this.properties.mode == 1 || this.properties.mode == 5) {
				vel = -7;
			} else if(this.properties.mode == 2 || this.properties.mode == 6) {
				vel = 7;
			}
			
			if(this.position.x <= 0) {
				console.log('opening: ' + this.properties.mode);
				if(this.properties.mode == 1 || this.properties.mode == 2) {
					console.log('freeing');
					SmallGame0Globals.player.properties.suspend = 0;
					SmallGame0Globals.player.position.x = this.position.x;
					SmallGame0Globals.player.position.y = this.position.y - 200;
				}
				BossRushGlobals.canOut = false; 
				BossRushGlobals.canState = '';
				this.handler.removeObjectSafe(this,this);
			} else if(this.position.x >= 604) {
				console.log('opening: ' + this.properties.mode);
				if(this.properties.mode == 1 || this.properties.mode == 2) {
					console.log('freeing');
					SmallGame0Globals.player.properties.suspend = 0;
					SmallGame0Globals.player.position.x = this.position.x - 36;
					SmallGame0Globals.player.position.y = this.position.y - 200;
				}
				BossRushGlobals.canOut = false; 
				BossRushGlobals.canState = '';
				this.handler.removeObjectSafe(this,this);
			}
			
			var newPosition = {x: this.position.x + vel, y: this.position.y};
			this.setPosition(newPosition);
			
			this.properties.moveFrames++;
			
		} else {
			console.log('opening: ' + this.properties.mode);
			if(this.properties.mode == 1 || this.properties.mode == 2) {
				console.log('freeing');
				SmallGame0Globals.player.properties.suspend = 0;
				SmallGame0Globals.player.position.x = this.position.x;
				SmallGame0Globals.player.position.y = this.position.y - 200;
			}
			BossRushGlobals.canOut = false; 
			BossRushGlobals.canState = '';
			this.handler.removeObjectSafe(this,this);
		}
	}
}

function canCollide(colObj,verIndex,intersection,colVer1,colVer2) {
	if(colObj.tag != null) {
		
		if(colObj.tag == 'player') {
			if(this.properties.mode == 0) {
				colObj.properties.suspend = 1;
				colObj.position.x = -100;
				colObj.position.y = -100;
				console.log('changing to mode 4');
				this.properties.mode = 4;
			}
		} else if(colObj.tag == 'enemy') {
			if(colObj.properties.bossState == 'charging' && (this.properties.mode == 0 || this.properties.mode == 4)) {
				
				if(this.properties.mode == 4) {
					BossRushGlobals.canState = 'rolling';
					if(colObj.properties.xv > 0) {
						console.log('changing to mode 1');
						this.properties.mode = 1;
						this.properties.moveFrames = 0;
					} else {
						console.log('changing to mode 2');
						this.properties.mode = 2;
						this.properties.moveFrames = 0;
					}
				} else {
					BossRushGlobals.canState = 'rolling';
					if(colObj.properties.xv > 0) {
						console.log('changing to mode 5');
						this.properties.mode = 5;
						this.properties.moveFrames = 0;
					} else {
						console.log('changing to mode 6');
						this.properties.mode = 6;
						this.properties.moveFrames = 0;
					}
				}
	
			}
		} 
		
	}
}

function boss1Update() {
	if(this.properties.health <= 0) {
		this.handler.removeObjectSafe(this,this);
	}
	//console.log(this.properties.decidingFrames)
	if(this.properties.bossState == 'neutral') {
		if(this.properties.decidingFrames < 30) {
			
			if(BossRushGlobals.canState != 'rolling') {
				this.properties.decidingFrames++;
			}
	
			if(this.properties.decidingFrames == 30) {
				var stateSelect = Math.floor(Math.random() * 4) + 1;
				
				if(stateSelect == 1) {
					this.properties.bossState = 'grabbing';
					this.properties.grabStage = 1;
				} else if(stateSelect == 2) {
					this.properties.bossState = 'rockets';
				} else if(stateSelect == 3) {
					if(BossRushGlobals.canOut) {
						this.properties.bossState = 'charging';
					} else {
						this.properties.bossState = 'spawning';
						//this.properties.grabStage = 1;
					}
				} else if(stateSelect == 4) {
					if(BossRushGlobals.canOut == false) {
						this.properties.bossState = 'spawning';
					} else {
						this.properties.bossState = 'rockets';
					}
				}
				
				this.properties.decidingFrames = 0;
			}
		}
	} else if(this.properties.bossState == 'grabbing') {
		
		if(this.properties.decidingFrames == 0) {
			
			console.log('Grab Attack: ' + this.properties.grabStage);
			
			var pos1 = Math.floor(Math.random() * 2) + 1;
			var gOffY = 350;
			if(pos1 == 1) {
				gOffY = 350;
			} else {
				gOffY = 420;
			}
			
			var creatinString = ''
			creatinString = creatinString + 'GameObject -x ' + (this.position.x + 10) + ' -y ' + (this.position.y + gOffY) + '';
			creatinString = creatinString + ' -p xv -20';
			creatinString = creatinString + ' -p yv 0';
			creatinString = creatinString + ' -rp 0 0 16';
			creatinString = creatinString + ' -d';
			
			var GOJ = createGOJsonFromString(creatinString);
			var GOObj = createGOFromJSON(GOJ);
			GOObj.properties.parentObj = this;
			oHandler.addObject(GOObj);
			
			if(this.properties.grabStage == 1) {
				this.properties.grabberProj1 = GOObj;
			} else if(this.properties.grabStage == 2) {
				this.properties.grabberProj2 = GOObj;
			} else if(this.properties.grabStage == 3) {
				this.properties.grabberProj3 = GOObj;
			}
			
		} else if(this.properties.decidingFrames == 15) {
			var creatinString = ''
			
			var gOffY = 0;
			
			if(this.properties.grabStage == 1) {
				gOffY = this.properties.grabberProj1.position.y;
			} else if(this.properties.grabStage == 2) {
				gOffY = this.properties.grabberProj2.position.y;
			} else if(this.properties.grabStage == 3) {
				gOffY = this.properties.grabberProj3.position.y;
			}
			
			if(this.properties.looking == 'left') {
				creatinString = creatinString + 'GameObject -x ' + (this.position.x) + ' -y ' + (gOffY) + '';
				creatinString = creatinString + ' -u grabberUpdate';
				creatinString = creatinString + ' -p xv -20';
				creatinString = creatinString + ' -p yv 0';
				creatinString = creatinString + ' -rp 0 0 16';
				creatinString = creatinString + ' -rp 16 0 16';
				creatinString = creatinString + ' -rp 32 0 16';
				creatinString = creatinString + ' -rp 48 0 16';
				creatinString = creatinString + ' -rp 64 0 16';
				creatinString = creatinString + ' -rp 80 0 16';
				creatinString = creatinString + ' -rp 96 0 16';
				creatinString = creatinString + ' -t enemy';
				creatinString = creatinString + ' -p HitBoxActive 1';
				creatinString = creatinString + ' -p damage 1';
				creatinString = creatinString + ' -p done 0';
				creatinString = creatinString + ' -p xHitTraj 2';
				creatinString = creatinString + ' -d';
			} else if(this.properties.looking == 'right') {
				creatinString = creatinString + 'GameObject -x ' + (this.position.x) + ' -y ' + (gOffY) + '';
				creatinString = creatinString + ' -u grabberUpdate';
				creatinString = creatinString + ' -p xv 20';
				creatinString = creatinString + ' -p yv 0';
				creatinString = creatinString + ' -rp 0 0 16';
				creatinString = creatinString + ' -rp 16 0 16';
				creatinString = creatinString + ' -rp 32 0 16';
				creatinString = creatinString + ' -rp 48 0 16';
				creatinString = creatinString + ' -rp 64 0 16';
				creatinString = creatinString + ' -rp 80 0 16';
				creatinString = creatinString + ' -rp 96 0 16';
				creatinString = creatinString + ' -t enemy';
				creatinString = creatinString + ' -p HitBoxActive 1';
				creatinString = creatinString + ' -p damage 1';
				creatinString = creatinString + ' -p done 0';
				creatinString = creatinString + ' -p xHitTraj 2';
				creatinString = creatinString + ' -d';
			}
			
			var GOJ = createGOJsonFromString(creatinString);
			var GOObj = createGOFromJSON(GOJ);
			GOObj.properties.parentObj = this;
			oHandler.addObject(GOObj);
			
			if(this.properties.grabStage == 1) {
				this.properties.grabber1 = GOObj;
			} else if(this.properties.grabStage == 2) {
				this.properties.grabber2 = GOObj;
			} else if(this.properties.grabStage == 3) {
				this.properties.grabber3 = GOObj;
			}
		}
		
		this.properties.decidingFrames++;
		
		if(this.properties.grabber1 != null) {
			if(this.properties.grabber1.properties.done == 1) {
				this.handler.removeObjectSafe(this.properties.grabber1,this);
				this.properties.grabber1 = null;
				this.handler.removeObjectSafe(this.properties.grabberProj1,this);
				this.properties.grabberProj1 = null;
				//this.properties.bossState = 'neutral';
				this.properties.grabStage = 2;
				this.properties.decidingFrames = 0;
			}
		}
		
		if(this.properties.grabber2 != null) {
			if(this.properties.grabber2.properties.done == 1) {
				this.handler.removeObjectSafe(this.properties.grabber2,this);
				this.properties.grabber2 = null;
				this.handler.removeObjectSafe(this.properties.grabberProj2,this);
				this.properties.grabberProj2 = null;
				//this.properties.bossState = 'neutral';
				this.properties.grabStage = 3;
				this.properties.decidingFrames = 0;
			}
		}
		
		if(this.properties.grabber3 != null) {
			if(this.properties.grabber3.properties.done == 1) {
				this.handler.removeObjectSafe(this.properties.grabber3,this);
				this.properties.grabber3 = null;
				this.handler.removeObjectSafe(this.properties.grabberProj3,this);
				this.properties.grabberProj3 = null;
				this.properties.bossState = 'neutral';
				this.properties.decidingFrames = 0;
			}
		}
		
	} else if(this.properties.bossState == 'rockets') {
		if(this.properties.decidingFrames == 0) {
			console.log('Shooting');
			var creatinString = ''
			
			if(this.properties.looking == 'left') {
				
				var r1X = Math.floor(Math.random() * 390) + 10;
				var r2X = Math.floor(Math.random() * 390) + 10;
				var r3X = Math.floor(Math.random() * 390) + 10;
				
				console.log('Shots Locations');
				console.log(r1X);
				console.log(r2X);
				console.log(r3X);
				
				creatinString = creatinString + 'GameObject -x '+r1X+' -y -100';
				creatinString = creatinString + ' -u rocketUpdate';
				creatinString = creatinString + ' -cf rocketCollide';
				creatinString = creatinString + ' -v 16 32';
				creatinString = creatinString + ' -p xv 0';
				creatinString = creatinString + ' -p yv 15';
				creatinString = creatinString + ' -p yv 15';
				creatinString = creatinString + ' -rp 0 0 16';
				creatinString = creatinString + ' -t enemy';
				creatinString = creatinString + ' -p HitBoxActive 1';
				creatinString = creatinString + ' -p damage 1';
				creatinString = creatinString + ' -p done 0';
				creatinString = creatinString + ' -p targetDown 0';
				creatinString = creatinString + ' -d';
				creatinString = creatinString + ';';
				
				creatinString = creatinString + 'GameObject -x '+r2X+' -y -50';
				creatinString = creatinString + ' -u rocketUpdate';
				creatinString = creatinString + ' -cf rocketCollide';
				creatinString = creatinString + ' -v 16 32';
				creatinString = creatinString + ' -p xv 0';
				creatinString = creatinString + ' -p yv 15';
				creatinString = creatinString + ' -p yv 15';
				creatinString = creatinString + ' -rp 0 0 16';
				creatinString = creatinString + ' -t enemy';
				creatinString = creatinString + ' -p HitBoxActive 1';
				creatinString = creatinString + ' -p damage 1';
				creatinString = creatinString + ' -p done 0';
				creatinString = creatinString + ' -p targetDown 0';
				creatinString = creatinString + ' -d';
				creatinString = creatinString + ';';
				
				creatinString = creatinString + 'GameObject -x '+r3X+' -y 0';
				creatinString = creatinString + ' -u rocketUpdate';
				creatinString = creatinString + ' -cf rocketCollide';
				creatinString = creatinString + ' -v 16 32';
				creatinString = creatinString + ' -p xv 0';
				creatinString = creatinString + ' -p yv 15';
				creatinString = creatinString + ' -p yv 15';
				creatinString = creatinString + ' -rp 0 0 16';
				creatinString = creatinString + ' -t enemy';
				creatinString = creatinString + ' -p HitBoxActive 1';
				creatinString = creatinString + ' -p damage 1';
				creatinString = creatinString + ' -p done 0';
				creatinString = creatinString + ' -p targetDown 0';
				creatinString = creatinString + ' -d';
				creatinString = creatinString + ';';
			
			} else if(this.properties.looking == 'right') {
				
				var r1X = Math.floor(Math.random() * (608 - 250)) + 250;
				var r2X = Math.floor(Math.random() * (608 - 250)) + 250;
				var r3X = Math.floor(Math.random() * (608 - 250)) + 250;
				
				console.log('Shots Locations');
				console.log(r1X);
				console.log(r2X);
				console.log(r3X);
				
				creatinString = creatinString + 'GameObject -x '+r1X+' -y 0';
				creatinString = creatinString + ' -u rocketUpdate';
				creatinString = creatinString + ' -cf rocketCollide';
				creatinString = creatinString + ' -v 16 32';
				creatinString = creatinString + ' -p xv 0';
				creatinString = creatinString + ' -p yv 15';
				creatinString = creatinString + ' -p yv 15';
				creatinString = creatinString + ' -rp 0 0 16';
				creatinString = creatinString + ' -t enemy';
				creatinString = creatinString + ' -p HitBoxActive 1';
				creatinString = creatinString + ' -p damage 1';
				creatinString = creatinString + ' -p done 0';
				creatinString = creatinString + ' -p targetDown 0';
				creatinString = creatinString + ' -d';
				creatinString = creatinString + ';';
				
				creatinString = creatinString + 'GameObject -x '+r2X+' -y -50';
				creatinString = creatinString + ' -u rocketUpdate';
				creatinString = creatinString + ' -cf rocketCollide';
				creatinString = creatinString + ' -v 16 32';
				creatinString = creatinString + ' -p xv 0';
				creatinString = creatinString + ' -p yv 15';
				creatinString = creatinString + ' -p yv 15';
				creatinString = creatinString + ' -rp 0 0 16';
				creatinString = creatinString + ' -t enemy';
				creatinString = creatinString + ' -p HitBoxActive 1';
				creatinString = creatinString + ' -p damage 1';
				creatinString = creatinString + ' -p done 0';
				creatinString = creatinString + ' -p targetDown 0';
				creatinString = creatinString + ' -d';
				creatinString = creatinString + ';';
				
				creatinString = creatinString + 'GameObject -x '+r3X+' -y -100';
				creatinString = creatinString + ' -u rocketUpdate';
				creatinString = creatinString + ' -cf rocketCollide';
				creatinString = creatinString + ' -v 16 32';
				creatinString = creatinString + ' -p xv 0';
				creatinString = creatinString + ' -p yv 15';
				creatinString = creatinString + ' -p yv 15';
				creatinString = creatinString + ' -rp 0 0 16';
				creatinString = creatinString + ' -t enemy';
				creatinString = creatinString + ' -p HitBoxActive 1';
				creatinString = creatinString + ' -p damage 1';
				creatinString = creatinString + ' -p done 0';
				creatinString = creatinString + ' -p targetDown 0';
				creatinString = creatinString + ' -d';
				creatinString = creatinString + ';';
			}
			
			enterObjects(creatinString);
			//var GOJ = createGOJsonFromString(creatinString);
			//var GOObj = createGOFromJSON(GOJ);
			//GOObj.properties.parentObj = this;
			//oHandler.addObject(GOObj);
			
			this.properties.decidingFrames++;
		} else {
			this.properties.decidingFrames++;
			
			if(this.properties.decidingFrames == 30) {
				this.properties.bossState = 'neutral';
				this.properties.decidingFrames = 0;
			}
		}
	} else if(this.properties.bossState == 'charging') {
		
		if(this.properties.decidingFrames == 0) {
			this.radialPoints.push({offX: 36, offY: 80, radius: 20});
		}
		
		if(this.properties.decidingFrames == 60) {
			
			this.radialPoints.splice(3);
			
			if(this.properties.looking == 'left') {
				this.properties.xv = -20;
				
				var newPosition = {x: this.position.x + this.properties.xv, y: this.position.y + this.properties.yv};
				this.setPosition(newPosition);
				
				if(this.position.x <= 20) {
					var newPosition = {x: 20, y: this.position.y};
					this.setPosition(newPosition);
					
					this.properties.looking = 'right'
					this.properties.bossState = 'neutral';
					this.properties.decidingFrames = 0;
				}
			} else if(this.properties.looking == 'right') {
				this.properties.xv = 20;
				
				var newPosition = {x: this.position.x + this.properties.xv, y: this.position.y + this.properties.yv};
				this.setPosition(newPosition);
				
				if(this.position.x >= 420) {
					var newPosition = {x: 420, y: this.position.y};
					this.setPosition(newPosition);
					
					this.properties.looking = 'left'
					this.properties.bossState = 'neutral';
					this.properties.decidingFrames = 0;
				}
			}
		} else {
			this.properties.decidingFrames++;
		}
		
	} else if(this.properties.bossState == 'spawning') {
		console.log('Spawning');
		
		if(this.properties.decidingFrames == 0) {
			
			var creatinString = ''
			creatinString = creatinString + 'GameObject -x ' + (this.position.x + 20) + ' -y 391';
			creatinString = creatinString + ' -rp 0 0 16';
			creatinString = creatinString + ' -rp 0 32 16';
			creatinString = creatinString + ' -d';
			
			var GOJ = createGOJsonFromString(creatinString);
			var GOObj = createGOFromJSON(GOJ);
			GOObj.properties.parentObj = this;
			oHandler.addObject(GOObj);
			
			this.properties.spawnerProj1 = GOObj;
			
		} else if(this.properties.decidingFrames == 30) {
		
			var creatinString = ''
			
			if(this.properties.looking == 'left') {
			
				creatinString = creatinString + 'GameObject -x ' + (this.position.x) + ' -y 463';
				creatinString = creatinString + ' -u minionUpdate';
				creatinString = creatinString + ' -cf minionCollide';
				creatinString = creatinString + ' -pi setupMinion';
				creatinString = creatinString + ' -v 0 0 -v 36 0 -v 36 36 -v 0 36';
				creatinString = creatinString + ' -p xv -2';
				creatinString = creatinString + ' -p yv 0';
				creatinString = creatinString + ' -rp 18 18 16';
				creatinString = creatinString + ' -t enemy';
				creatinString = creatinString + ' -p HitBoxActive 1';
				creatinString = creatinString + ' -p damage 1';
				creatinString = creatinString + ' -p health 3';
				creatinString = creatinString + ' -p yTrag -6';
				creatinString = creatinString + ' -p inBounds 0';
				creatinString = creatinString + ' -p lowerBound 0';
				creatinString = creatinString + ' -p upperBound 384';
				creatinString = creatinString + ' -p acceleration 1';
				creatinString = creatinString + ' -d';
				creatinString = creatinString + ';';
				
				BossRushGlobals.canOut = true;
				
				this.properties.bossState = 'neutral';
				this.properties.decidingFrames = 0;
				
				enterObjects(creatinString);
			
			} else if(this.properties.looking == 'right') {
			
				creatinString = creatinString + 'GameObject -x ' + (this.position.x) + ' -y 463';
				creatinString = creatinString + ' -u minionUpdate';
				creatinString = creatinString + ' -cf minionCollide';
				creatinString = creatinString + ' -pi setupMinion';
				creatinString = creatinString + ' -v 0 0 -v 36 0 -v 36 36 -v 0 36';
				creatinString = creatinString + ' -p xv 2';
				creatinString = creatinString + ' -p yv 0';
				creatinString = creatinString + ' -rp 18 18 16';
				creatinString = creatinString + ' -t enemy';
				creatinString = creatinString + ' -p HitBoxActive 1';
				creatinString = creatinString + ' -p damage 1';
				creatinString = creatinString + ' -p health 3';
				creatinString = creatinString + ' -p yTrag -6';
				creatinString = creatinString + ' -p inBounds 0';
				creatinString = creatinString + ' -p lowerBound 220';
				creatinString = creatinString + ' -p upperBound 604';
				creatinString = creatinString + ' -p acceleration 1';
				creatinString = creatinString + ' -d';
				creatinString = creatinString + ';';
				
				BossRushGlobals.canOut = true;
				
				this.properties.bossState = 'neutral';
				this.properties.decidingFrames = 0;
				
				enterObjects(creatinString);
			
			}
			
			this.handler.removeObjectSafe(this.properties.spawnerProj1,this);
		
		}
		
		this.properties.decidingFrames++;
	}
}

/*
BOSS
end
*/

/*
HUD
start
*/

function setupHUD_BR() {
	var TextText = 'TextObject -x 0 -y 0 -t "HP: '+SmallGame0Globals.player.properties.health+'" -c black;';
	
	var TOJ = createTOJsonFromString(TextText);
	var TOObj = createTOFromJSON(TOJ);
	this.properties.hpChild = TOObj;
	this.handler.addTextObject(TOObj);
	
	var TextText2 = 'TextObject -x 0 -y 0 -t "Enemy: '+BossRushGlobals.enemyDisplayed.properties.health+'" -c black;';
	
	var TOJ2 = createTOJsonFromString(TextText2);
	var TOObj2 = createTOFromJSON(TOJ2);
	this.properties.scoreChild = TOObj2;
	this.handler.addTextObject(TOObj2);
}

function HUDUpdate_BR() {
	this.position.x = this.handler.CameraX + 10;
	this.position.y = this.handler.CameraY + 10;
	
	this.properties.hpChild.textContent = 'HP: '+SmallGame0Globals.player.properties.health+''
	this.properties.hpChild.position.x = this.position.x + 10;
	this.properties.hpChild.position.y = this.position.y + 10;
	
	this.properties.scoreChild.textContent = 'Enemy: '+BossRushGlobals.enemyDisplayed.properties.health+''
	this.properties.scoreChild.position.x = this.position.x + 10;
	this.properties.scoreChild.position.y = this.position.y + 20;
}

/*
HUD
start
*/