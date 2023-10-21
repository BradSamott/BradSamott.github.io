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
	SelText = SelText + 'GameObject -x -10 -y 500 -v 0 0 left -v 1000 0 right -t wall'
	SelText = SelText + ' -d'
	SelText = SelText + ';'
	
	SelText = SelText + 'GameObject -x -10 -y 0 -v 0 0 left -v 0 500 right -t wall'
	SelText = SelText + ' -d'
	SelText = SelText + ';'
	
	SelText = SelText + 'GameObject -x 10 -y 300';
	SelText = SelText + ' -v 0 0 topleft -v 72 0 topright -v 72 108 bottomright -v 0 108 bottomleft'
	SelText = SelText + ' -rp 36 30 36'
	SelText = SelText + ' -rp 36 80 20'
	SelText = SelText + ' -t player'
	SelText = SelText + ' -p xv 0 -p yv 0'
	SelText = SelText + ' -p jumpable 1 -p gravity 6 -p slideStateX 2 -p slideStateY 2 -p height 108'
	SelText = SelText + ' -p BatReady 1'
	SelText = SelText + ' -u playerMovement_BR'
	SelText = SelText + ' -cf playerCollision_SG0'
	SelText = SelText + ' -pi setupPlayer'
	SelText = SelText + ' -a PlatformerAnimationPackage -ca 0'
	SelText = SelText + ' -p climbMode 0 -p climbing 0 -p health 5 -p iFrames -1 -p inControl 1 -p inStun 0 -p stunCounter 0'
	SelText = SelText + ' -p jumps 1'
	SelText = SelText + ' -p maxJumps 1'
	SelText = SelText + ' -p fireFrames 0'
	SelText = SelText + ' -p looking right'
	SelText = SelText + ' -xR 2'
	SelText = SelText + ' -yR 2'
	SelText = SelText + ' -d'
	SelText = SelText + ';'
	
	SelText = SelText + 'GameObject -x 0 -y 0';
	SelText = SelText + ' -pi setupKeyTracker_BR'
	SelText = SelText + ' -u keyTrackerUpdate'
	SelText = SelText + ';'
	
	SelText = SelText + 'GameObject -x 420 -y 45';
	SelText = SelText + ' -v 0 0 topleft -v 200 0 topright -v 200 454 bottomright -v 0 454 bottomleft'
	SelText = SelText + ' -rp 100 100 100'
	SelText = SelText + ' -rp 100 300 100'
	SelText = SelText + ' -rp 100 500 100'
	SelText = SelText + ' -u boss1Update'
	SelText = SelText + ' -cf boss1Collision'
	SelText = SelText + ' -t enemy'
	SelText = SelText + ' -p HitBoxActive 1'
	SelText = SelText + ' -p xv 0 -p yv 0'
	SelText = SelText + ' -p height 54'
	SelText = SelText + ' -p health 30'
	SelText = SelText + ' -p decidingFrames 0'
	SelText = SelText + ' -p bossState neutral'
	SelText = SelText + ' -d'
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
	
	if(!keys.down && gameObj.currAnimation == PlatformerAnimationStates.DuckingRight) {
		gameObj.animations[gameObj.currAnimation].keyFrames[gameObj.animations[gameObj.currAnimation].currKeyFrame].currFrame = 1;

		gameObj.currAnimation = PlatformerAnimationStates.IdleRight;
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

		gameObj.currAnimation = PlatformerAnimationStates.DuckingRight;
		gameObj.animations[gameObj.currAnimation].currKeyFrame = 0;
		
		gameObj.vertices[0].offY = 27; 
		gameObj.vertices[1].offY = 27; 
		
		gameObj.radialPoints[0].offY = 30;
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
			gameObj.properties.fireFrames = 20;
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
			this.properties.xv = -4;
		} else if(this.currAnimation == PlatformerAnimationStates.HurtLeft && this.properties.climbing != 1) {
			this.properties.xv = 4;
		} else if(this.currAnimation == PlatformerAnimationStates.HurtLeft && this.properties.climbing == 1) {
			this.properties.xv = 0;
		}
		
		this.properties.stunCounter++;
		if(this.properties.stunCounter == 30) {
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
	if(this.properties.iFrames == 60) {
		this.properties.iFrames = -1;
	}
}

function createBullet(gameObj) {
	
	var bVel = 0;
	if(gameObj.properties.looking == 'right') {
		bVel = 7;
	} else if(gameObj.properties.looking == 'left') {
		bVel = -7;
	}
	
	var creatinString = ''
	creatinString = creatinString + 'GameObject -x ' + (gameObj.position.x) + ' -y ' + gameObj.position.y + '';
	creatinString = creatinString + ' -u bulletUpdate';
	creatinString = creatinString + ' -p xv '+bVel+'';
	creatinString = creatinString + ' -p yv 0';
	creatinString = creatinString + ' -rp 0 0 16';
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

function boss1Collision(colObj,verIndex,intersection,colVer1,colVer2) {
	
	if(colObj.tag != null) {
		
		if(colObj.tag == 'testBall') {
		
		} else if(colObj.tag == 'platform') {
		
		} else if(colObj.tag == 'ladder') {
		
		} else if(colObj.tag == 'playerHitBox') {
			console.log('Hit');
			this.handler.removeObject(colObj);
			this.properties.health--;
			console.log(this.properties.health);
		} else if(colObj.tag == 'player') {
		
		}
	
	}
}

function grabberUpdate() {
	
	if(this.position.x <= 0) {
		this.properties.xv = this.properties.xv * -1;
	}
	
	var newPosition = {x: this.position.x + this.properties.xv, y: this.position.y + this.properties.yv};
	this.setPosition(newPosition);
	
	if(this.position.x > this.properties.parentObj.position.x + 100) {
		console.log('Fin');
		this.properties.done = 1;
	}
}

function rocketUpdate() {
	
	var newPosition = {x: this.position.x + this.properties.xv, y: this.position.y + this.properties.yv};
	this.setPosition(newPosition);
	
}

function boss1Update() {
	if(this.properties.health <= 0) {
		this.handler.removeObject(this);
	}
	//console.log(this.properties.decidingFrames)
	if(this.properties.bossState == 'neutral') {
		if(this.properties.decidingFrames < 30) {
			this.properties.decidingFrames++;
			if(this.properties.decidingFrames == 30) {
				var stateSelect = Math.floor(Math.random() * 2) + 1;
				
				if(stateSelect == 1) {
					this.properties.bossState = 'grabbing';
				} else if(stateSelect == 2) {
					this.properties.bossState = 'rockets';
				}
				
				this.properties.decidingFrames = 0;
			}
		}
	} else if(this.properties.bossState == 'grabbing') {
		if(this.properties.grabber1 == null) {
			var creatinString = ''
			creatinString = creatinString + 'GameObject -x ' + (this.position.x) + ' -y ' + (this.position.y + 400) + '';
			creatinString = creatinString + ' -u grabberUpdate';
			creatinString = creatinString + ' -p xv -15';
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
			creatinString = creatinString + ' -d';
			
			var GOJ = createGOJsonFromString(creatinString);
			var GOObj = createGOFromJSON(GOJ);
			GOObj.properties.parentObj = this;
			oHandler.addObject(GOObj);
			
			this.properties.grabber1 = GOObj;
		}
		
		if(this.properties.grabber1.properties.done == 1) {
			this.handler.removeObject(this.properties.grabber1);
			this.properties.grabber1 = null;
			this.properties.bossState = 'neutral';
		}
	} else if(this.properties.bossState == 'rockets') {
		if(this.properties.decidingFrames == 0) {
			console.log('Shooting');
			var creatinString = ''
			creatinString = creatinString + 'GameObject -x 200 -y -10';
			creatinString = creatinString + ' -u rocketUpdate';
			creatinString = creatinString + ' -p xv 0';
			creatinString = creatinString + ' -p yv 15';
			creatinString = creatinString + ' -p yv 15';
			creatinString = creatinString + ' -rp 0 0 16';
			creatinString = creatinString + ' -t enemy';
			creatinString = creatinString + ' -p HitBoxActive 1';
			creatinString = creatinString + ' -p damage 1';
			creatinString = creatinString + ' -p done 0';
			creatinString = creatinString + ' -d';
			
			var GOJ = createGOJsonFromString(creatinString);
			var GOObj = createGOFromJSON(GOJ);
			//GOObj.properties.parentObj = this;
			oHandler.addObject(GOObj);
			
			this.properties.decidingFrames++;
		} else {
			this.properties.decidingFrames++;
			
			if(this.properties.decidingFrames == 30) {
				this.properties.bossState = 'neutral';
				this.properties.decidingFrames = 0;
			}
		}
	}
}

/*
BOSS
end
*/