var MickeySpriteSheet = './Games/SteamBoatBubbly/Assets/Images/SteamMickeyLimbs.png';

var MickeySheetMappings = [
	{ //0 Head
		nodeImg: {x: 115, y: 33, l: 47, w: 64, rotation: 0, cLayer: 2},
		jointImgs: {
			//'1': {x: 11, y: 13, l: 10, w: 100, cLayer: 2}
		}
	},
	{ //1 (Neck)
		nodeImg: {},
		jointImgs: {
			//'2': {x: 11, y: 13, l: 10, w: 100, cLayer: 3},
			//'5': {x: 11, y: 24, l: 10, w: 100, cLayer: 1},
			//'8': {x: 11, y: 24, l: 10, w: 100, cLayer: 1}
		}
	},
	{ //2 Arm
		nodeImg: {},
		jointImgs: {
			'3': {x: 123, y: 153, l: 7, w: 100, cLayer: 4}
		}
	},
	{ //3 Arm
		nodeImg: {},
		jointImgs: {
			'4': {x: 123, y: 153, l: 7, w: 100, cLayer: 4}
		}
	},
	{ //4 Hand
		nodeImg: {x: 123, y: 190, l: 20, w: 19, cLayer: 4},
		jointImgs: {
			//'5': {x: 11, y: 13, l: 10, w: 100, cLayer: 4}
		}
	},
	{ //5 Arm
		nodeImg: {},
		jointImgs: {
			'6': {x: 123, y: 153, l: 7, w: 100, cLayer: 0}
		}
	},
	{ //6 Arm
		nodeImg: {},
		jointImgs: {
			'7': {x: 123, y: 153, l: 7, w: 100, cLayer: 0}
		}
	},
	{ //7 Hand
		nodeImg: {x: 123, y: 190, l: 20, w: 19, cLayer: 4},
		jointImgs: {
			
		}
	},
	{ //8 Body
		nodeImg: {},
		jointImgs: {
			'9': {x: 121, y: 94, l: 45, w: 52, cLayer: 2}
		}
	},
	{ //9 (Hips)
		nodeImg: {},
		jointImgs: {
			//'10': {x: 11, y: 13, l: 10, w: 100, cLayer: 3}
		}
	},
	{ //10 Leg
		nodeImg: {x: 123, y: 163, l: 15, w: 9, rotation: 1.571, cLayer: 4},
		jointImgs: {
			'11': {x: 123, y: 153, l: 7, w: 100, cLayer: 1}
		}
	},
	{ //11 Leg
		nodeImg: {},
		jointImgs: {
			'12': {x: 123, y: 153, l: 7, w: 100, cLayer: 0}
		}
	},
	{ //12 Foot
		nodeImg: {x: 123, y: 214, l: 13, w: 31, drawOffX: 15, drawOffY: 0, cLayer: 0},
		jointImgs: {
		
		}
	},
	{ //13 Leg
		nodeImg: {x: 123, y: 163, l: 15, w: 9, rotation: 1.571, cLayer: 4},
		jointImgs: {
			'14': {x: 123, y: 153, l: 7, w: 100, cLayer: 1}
		}
	},
	{ //14 Leg
		nodeImg: {},
		jointImgs: {
			'15': {x: 123, y: 153, l: 7, w: 100, cLayer: 0}
		}
	},
	{ //15 Foot
		nodeImg: {x: 123, y: 214, l: 13, w: 31, drawOffX: 15, cLayer: 0},
		jointImgs: {
			
		}
	}
	
]

var MickeyAnimationStates = {
	Idle: 0,
	Run: 1,
	Jump: 2
}

var MickeyAnimationPackage = [
	//Idle
	{
		LocalCurrentKeyFrame: -1
		, LocalLoop: true
		, keyFrames: [
			{ //Frame 1
				jointOffsets: [
				{offX: 0, offY: 0}
				,{offX: 0, offY: 15}
				,{offX: -9, offY: 22}
				,{offX: -29, offY: 33}
				,{offX: -40, offY: 57}
				,{offX: 10, offY: 25}
				,{offX: 27.0625, offY: 33}
				,{offX: 42.0625, offY: 58}
				,{offX: 0, offY: 19}
				,{offX: 0, offY: 60}
				,{offX: -14, offY: 57}
				,{offX: -19, offY: 75}
				,{offX: -22, offY: 92}
				,{offX: 17, offY: 57}
				,{offX: 21.0625, offY: 74}
				,{offX: 23.0625, offY: 93}
				]
				, Duration: 1
				, LocalCounter: 0
			}
			
		]
	},
	
	//Run
	{
		LocalCurrentKeyFrame: -1
		, LocalLoop: true
		, keyFrames: [
			{ 
				jointOffsets: [
					{offX: 0, offY: 0}
					,{offX: 0, offY: 15}
					,{offX: -9, offY: 22}
					,{offX: -29, offY: 22}
					,{offX: -40, offY: 44}
					,{offX: 10, offY: 25}
					,{offX: 31, offY: 35}
					,{offX: 47, offY: 20}
					,{offX: 0, offY: 19}
					,{offX: 0, offY: 60}
					,{offX: -14, offY: 57}
					,{offX: 16, offY: 77}
					,{offX: 15, offY: 95}
					,{offX: 17, offY: 57}
					,{offX: 1, offY: 77}
					,{offX: -35, offY: 72}
				]
				, Duration: 10
				, LocalCounter: 0
			}
			,{ 
				jointOffsets: [
					{offX: 0, offY: 0}
					,{offX: 0, offY: 15}
					,{offX: -9, offY: 22}
					,{offX: -20, offY: 28}
					,{offX: -3, offY: 48}
					,{offX: 10, offY: 25}
					,{offX: 11, offY: 35}
					,{offX: 25, offY: 38}
					,{offX: 0, offY: 19}
					,{offX: 0, offY: 60}
					,{offX: -14, offY: 57}
					,{offX: 6, offY: 69}
					,{offX: 12, offY: 97}
					,{offX: 17, offY: 57}
					,{offX: 16, offY: 78}
					,{offX: -1, offY: 97}
				]
				, Duration: 10
				, LocalCounter: 0
			}
			,{ 
				jointOffsets: [
					{offX: 0, offY: 0}
					,{offX: 0, offY: 15}
					,{offX: -9, offY: 22}
					,{offX: 28, offY: 44}
					,{offX: 42, offY: 31}
					,{offX: 10, offY: 25}
					,{offX: -25, offY: 26}
					,{offX: -33, offY: 54}
					,{offX: 0, offY: 19}
					,{offX: 0, offY: 60}
					,{offX: -14, offY: 57}
					,{offX: -9, offY: 74}
					,{offX: -41, offY: 80}
					,{offX: 17, offY: 57}
					,{offX: 30, offY: 74}
					,{offX: 27, offY: 90}
				]
				, Duration: 10
				, LocalCounter: 0
			}
			,{ 
				jointOffsets: [
					{offX: 0, offY: 0}
					,{offX: 0, offY: 15}
					,{offX: -9, offY: 22}
					,{offX: -20, offY: 28}
					,{offX: -3, offY: 48}
					,{offX: 10, offY: 25}
					,{offX: 11, offY: 35}
					,{offX: 25, offY: 38}
					,{offX: 0, offY: 19}
					,{offX: 0, offY: 60}
					,{offX: -14, offY: 57}
					,{offX: 6, offY: 69}
					,{offX: 12, offY: 97}
					,{offX: 17, offY: 57}
					,{offX: 16, offY: 78}
					,{offX: -1, offY: 97}
				]
				, Duration: 10
				, LocalCounter: 0
			}
		]
	},
	
	//Jump
	{
		LocalCurrentKeyFrame: -1
		, LocalLoop: true
		, keyFrames: [
			{ 
				jointOffsets: [
					{offX: 0, offY: 0}
					,{offX: 15, offY: 15}
					,{offX: -9, offY: 22}
					,{offX: -29.046875, offY: 21}
					,{offX: -54.046875, offY: -4}
					,{offX: 10, offY: 25}
					,{offX: 33.953125, offY: 21}
					,{offX: 55.953125, offY: -2}
					,{offX: 0, offY: 19}
					,{offX: 0, offY: 60}
					,{offX: -14, offY: 57}
					,{offX: -15.046875, offY: 76}
					,{offX: -18.046875, offY: 94}
					,{offX: 17, offY: 57}
					,{offX: 34.953125, offY: 63}
					,{offX: 37.953125, offY: 80}
				]
				, Duration: 10
				, LocalCounter: 0
			}
		]
	}
]

function MickeyUpdate() {
	//editSkeleton(this);
	
	if(this.currAnimation == -1) {
		this.currAnimation = 0;
	}
	
	if(this.properties == null) {
		this.properties = {};
	}
	
	if(this.position.x == null) {
		this.position.x = 0;
	}
	
	if(this.position.y == null) {
		this.position.y = 0;
	}
	
	if(this.properties.xv == null) {
		this.properties.xv = 0;
	}
	
	if(this.properties.yv == null) {
		this.properties.yv = 0;
	}
	
	if(this.properties.gravity == null) {
		this.properties.gravity = 0.6;
	}
	
	if(this.properties.suspend == 1) {
		return;
	}
	
	if(this.properties.state == 'scraping') {
		//scrapeAction_MOAB(this);
	} else if(this.properties.state == 'tennis') {
		//tennisAction_MOAB(this);
	} else {
		controlledMovement_Mickey(this);
	}
	
	if(this.properties.xv == 7 && this.properties.yv == 7) {
		this.properties.xv = Math.sqrt((7 * 7)/2);
		this.properties.yv = Math.sqrt((7 * 7)/2);
	} else if(this.properties.xv == 7 && this.properties.yv == -7) {
		this.properties.xv = Math.sqrt((7 * 7)/2);
		this.properties.yv = Math.sqrt((7 * 7)/2) * -1;
	} else if(this.properties.xv == -7 && this.properties.yv == 7) {
		this.properties.xv = Math.sqrt((7 * 7)/2) * -1;
		this.properties.yv = Math.sqrt((7 * 7)/2);
	} else if(this.properties.xv == -7 && this.properties.yv == -7) {
		this.properties.xv = Math.sqrt((7 * 7)/2) * -1;
		this.properties.yv = Math.sqrt((7 * 7)/2) * -1;
	}
	
	this.properties.yv = this.properties.yv + this.properties.gravity;
	
	var newPosition = {x: this.position.x + this.properties.xv, y: this.position.y + this.properties.yv};
	this.setPosition(newPosition);
		
	this.properties.xv = 0;
		
	var newjumpVectorPosition = {x: newPosition.x, y: newPosition.y + this.properties.height + 1};
	this.properties.jumpVector.setPosition(newjumpVectorPosition);
	this.properties.jumpVector.setPosition({x: this.properties.jumpVector.position.x, y: this.properties.jumpVector.position.y + 500});
	this.properties.jumpVector.properties.hit = 0;
	
	//console.log(this.currAnimation);
	playAnimation(this);
}

function WallCollisionBehavior_Mickey(gameObj,colObj,verIndex,intersection,colVer1,colVer2) {
	
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
			console.log('Pressing Down');
			//gameObj.position.y++;
			newPosition.y++;
		}
				
		gameObj.properties.yv = 0;
		if(colObj.position.y + colObj.vertices[colVer1].offY == colObj.position.y + colObj.vertices[colVer2].offY) {
			gameObj.properties.slideStateX = 0;
		}
	} else if((gameObj.position.y - gameObj.delta.dy) < gameObj.position.y) {
	
		if(colObj.position.x + colObj.vertices[colVer1].offX != colObj.position.x + colObj.vertices[colVer2].offX) {
			console.log('Pressing Up');
			//gameObj.position.y--;
			newPosition.y--;
		}
				
		gameObj.properties.yv = 0;
		if(colObj.position.y + colObj.vertices[colVer1].offY == colObj.position.y + colObj.vertices[colVer2].offY) {
			gameObj.properties.slideStateX = 1;
		}
				
		var newjumpVectorPosition = {x: newPosition.x, y: newPosition.y + gameObj.properties.height + 1};
		gameObj.properties.jumpVector.setPosition(newjumpVectorPosition);
		gameObj.properties.jumpVector.setPosition({x: gameObj.properties.jumpVector.position.x, y: gameObj.properties.jumpVector.position.y + 500});
		
	}
	
	gameObj.appendPosition(newPosition);
}

function MickeyCollision(colObj,verIndex,intersection,colVer1,colVer2) {
	
	if(colObj.tag != null) {
		if(colObj.tag == 'wall') {
			WallCollisionBehavior_Mickey(this,colObj,verIndex,intersection,colVer1,colVer2);
		} else if(colObj.tag == 'coin') {
			
		} else if(colObj.tag == 'platform') {
			
		} else if(colObj.tag == 'ladder') {
			
		} else if(colObj.tag == 'enemy') {
			
		} else if(colObj.tag == 'enemyHitBox') {
			
		} else if(colObj.tag == 'reaper') {
			
		}
	}
}

function setupMickey() {

	console.log('M Set');

	var GOJ = createGOJsonFromString("GameObject -x 0 -y 0 -v 0 0 -v 36 0 -d -t vector -cf platformerVectorCollide_SG0 -nc platformerVectorNoCollide_SG0 -p hit 0");
	var GOObj = createGOFromJSON(GOJ);
	this.properties.jumpVector = GOObj;
	GOObj.properties.parentObj = this;
	this.handler.addObject(GOObj);
	
}

function platformerVectorCollide_SG0(colObj,verIndex,intersection,colVer1,colVer2) {
	if(colObj.tag != null) {
		//console.log(colObj.tag);
		if(colObj.tag == 'wall') {
			
			if (colObj.position.y - this.properties.parentObj.position.y <= this.properties.parentObj.properties.height + 1) {
				this.properties.parentObj.properties.jumpable = 1;
				this.properties.parentObj.properties.jumps = this.properties.parentObj.properties.maxJumps;
				
				this.properties.parentObj.properties.gravity = 0;
				this.properties.hit = 1;
				this.properties.parentObj.properties.standingOn = 'wall';
			} else {
				//console.log(this.properties.hit);
				if(this.properties.hit != 1) {
					this.properties.parentObj.properties.jumpable = 0;
					
					this.properties.parentObj.properties.gravity = 0.6;
					this.properties.parentObj.properties.standingOn = '';
				}
				
				if(this.properties.parentObj.properties.jumps == this.properties.parentObj.properties.maxJumps && this.properties.hit != 1) {
					console.log('fixing');
					this.properties.parentObj.properties.jumps--;
				}
			}
			
		} else if(colObj.tag == 'platform') {
			
			if (colObj.position.y - this.properties.parentObj.position.y <= this.properties.parentObj.properties.height + 1) {
				this.properties.parentObj.properties.jumpable = 1;
				this.properties.parentObj.properties.jumps = this.properties.parentObj.properties.maxJumps;
				
				this.properties.parentObj.properties.gravity = 0;
				this.properties.parentObj.properties.standingOn = 'plat';
				
				if(this.properties.hit != 1) {
					var newPosition = {x: this.properties.parentObj.position.x, y: this.properties.parentObj.position.y}
					if(colObj.properties.xv != null) {
						newPosition.x = this.properties.parentObj.position.x + colObj.properties.xv
						this.properties.parentObj.appendPosition(newPosition);
					}
					if(colObj.properties.yv != null) {
						//newPosition.y = this.properties.parentObj.position.y + colObj.properties.yv
						this.properties.parentObj.properties.yv = colObj.properties.yv;
					}
					
				}
				
				this.properties.hit = 1;
				
			} else if(colObj.properties.yv != null) {
				if(colObj.position.y >= this.properties.parentObj.position.y + this.properties.parentObj.properties.height 
				&& colObj.position.y + colObj.properties.yv <= this.properties.parentObj.position.y + this.properties.parentObj.properties.height) {
					this.properties.parentObj.properties.jumpable = 1;
					this.properties.parentObj.properties.jumps = this.properties.parentObj.properties.maxJumps;
					
					this.properties.parentObj.properties.gravity = 0;
					this.properties.parentObj.properties.standingOn = 'plat';
					
					
					this.properties.parentObj.position.y = colObj.position.y - this.properties.parentObj.properties.height - 1;
					this.properties.parentObj.properties.yv = colObj.properties.yv;
					if(this.properties.parentObj.currAnimation == PlatformerAnimationStates.JumpRight) {
						this.properties.parentObj.currAnimation = PlatformerAnimationStates.IdleRight;
					} else if(this.properties.parentObj.currAnimation == PlatformerAnimationStates.JumpLeft) {
						this.properties.parentObj.currAnimation = PlatformerAnimationStates.IdleLeft;
					}
				}	
			} else {
				//console.log('No');
				if(this.properties.hit != 1) {
					this.properties.parentObj.properties.jumpable = 0;
					
					this.properties.parentObj.properties.gravity = 0.6;
					this.properties.parentObj.properties.standingOn = '';
				}
				
				if(this.properties.parentObj.properties.jumps == this.properties.parentObj.properties.maxJumps && this.properties.hit != 1) {
					console.log('fixing');
					this.properties.parentObj.properties.jumps--;
				}
			}
			
		} 
	}
}

function platformerVectorNoCollide_SG0() {
	this.properties.parentObj.properties.jumpable = 0;
	this.properties.parentObj.properties.gravity = 0.6;
	this.properties.parentObj.properties.standingOn = '';
	
	if(this.properties.parentObj.properties.jumps == this.properties.parentObj.properties.maxJumps) {
		//console.log('fixing');
		this.properties.parentObj.properties.jumps--;
	}
}

function controlledMovement_Mickey(gameObj) {
	if(keys.left && keys.right) {
		gameObj.properties.xv = 0;
	} else if(keys.left) {
		gameObj.properties.xv = -7;
		
		if(gameObj.currAnimation != MickeyAnimationStates.Run && gameObj.currAnimation != MickeyAnimationStates.Jump) {
			resetAnimation(gameObj,MickeyAnimationStates.Run);
			gameObj.currAnimation = MickeyAnimationStates.Run;
		}
		//console.log(gameObj.currAnimation);
	} else if(keys.right) {
		gameObj.properties.xv = 7;
		
		if(gameObj.currAnimation != MickeyAnimationStates.Run && gameObj.currAnimation != MickeyAnimationStates.Jump) {
			resetAnimation(gameObj,MickeyAnimationStates.Run);
			gameObj.currAnimation = MickeyAnimationStates.Run;
		}
		//console.log(gameObj.currAnimation);
	} 
	
	if(keys.up && gameObj.properties.jumpable == 1) {
		gameObj.properties.yv = -10;
		resetAnimation(gameObj,MickeyAnimationStates.Jump);
		gameObj.currAnimation = MickeyAnimationStates.Jump;
	}
	
	if(gameObj.properties.xv == 0 && gameObj.properties.yv == 0) {
		if(gameObj.currAnimation != MickeyAnimationStates.Idle) {
			resetAnimation(gameObj,MickeyAnimationStates.Idle);
			gameObj.currAnimation = MickeyAnimationStates.Idle;
		}
	}
}

function runsteamboatbubbly() {
	var gameText = '';
	
	gameText = gameText + "Run CreateLocalCanvases '#9bbc0f';"
	//gameText = gameText + "Run CreateLocalCanvases;"
	gameText = gameText + 'Run CreateLocalCanvases;'
	gameText = gameText + 'Run CreateLocalCanvases;'
	gameText = gameText + 'Run CreateLocalCanvases;'
	gameText = gameText + 'Run CreateLocalCanvases;'
	gameText = gameText + 'Run addClickToCanvas 4;'
	
	gameText = gameText + 'GameObject -x 292 -y 116 -a MickeyAnimationPackage '
	gameText = gameText + '-sj 0 0 1 '
	gameText = gameText + '-sj 0 15 2 5 8 '
	gameText = gameText + '-sj -9 22 3 '
	gameText = gameText + '-sj -29 33 4 '
	gameText = gameText + '-sj -40 57 '
	gameText = gameText + '-sj 10 25 6 '
	gameText = gameText + '-sj 27 33 7 '
	gameText = gameText + '-sj 42 58 '
	gameText = gameText + '-sj 0 19 9 '
	gameText = gameText + '-sj 0 60 10 13 '
	gameText = gameText + '-sj -14 57 11 '
	gameText = gameText + '-sj -19 75 12 '
	gameText = gameText + '-sj -22 92 '
	gameText = gameText + '-sj 17 57 14 '
	gameText = gameText + '-sj 21 74 15 '
	gameText = gameText + '-sj 23 93 '
	gameText = gameText + '-v -42 0 -v 42 0 -v 42 93 -v -42 93 '
	gameText = gameText + '-spr MickeySpriteSheet -ssm MickeySheetMappings -d -u MickeyUpdate -cf MickeyCollision -pi setupMickey -p height 93;'
	
	gameText = gameText + 'GameObject -x 0 -y 400 -t wall -v 0 0 -v 1000 0 -d;'
	
	console.log(gameText);
	
	enterObjects(gameText);
	
}