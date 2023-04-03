'use strict'

/********
Movement for the player character while flying.
Moves omnidirectionally in 2d space.
Controlled by player.
*********/
function MimiAirPlayerMovement() {
	
	if(this.properties.defeated != 1) {
	
		if(this.properties == null) {
			//console.log('No Prop');
			return;
		}
		
		if(this.position.x == null) {
			//console.log('No Prop x');
			return;
		}
		
		if(this.position.y == null) {
			//console.log('No Prop y');
			return;
		}
		
		if(this.properties.xv == null) {
			//console.log('No Prop xv');
			this.properties.xv = 0;
		}
		
		if(this.properties.yv == null) {
			//console.log('No Prop yv');
			this.properties.yv = 0;
		}
		
		if(keys.left && keys.right) {
			this.properties.xv = 0;
		} else if(keys.left && this.properties.slideStateY != 0) {
			//console.log('Left');
			this.properties.xv = -7;
			
			if(this.properties.slideStateY == 1) {
				this.properties.slideStateY = 2;
			}
		} else if(keys.right && this.properties.slideStateY != 1) {
			//console.log('Right');
			this.properties.xv = 7;
			
			if(this.properties.slideStateY == 0) {
				this.properties.slideStateY = 2;
			}
		} 
		
		if(keys.up && keys.down) {
			this.properties.yv = 0;
		} else if(keys.up && this.properties.slideStateX != 0) {
			//console.log('Up');
			
			this.properties.yv = -7;
			
			if(this.properties.slideStateX == 1) {
				this.properties.slideStateX = 2;
			}
		} else if(keys.down && this.properties.slideStateX != 1) {
			//console.log('Down');
			
			this.properties.yv = 7;
			
			if(this.properties.slideStateX == 0) {
				this.properties.slideStateX = 2;
			}
			
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
		
		
		if(this.properties.inStun != 1) {
				
			if(this.properties.xv == 0 && this.properties.yv == 0) {
				this.currAnimation = MimiAnimationStates.IdleRight;
			} else if(this.properties.yv < 0) {
				this.currAnimation = MimiAnimationStates.FlyUpRight;
			} else if(this.properties.yv > 0) {
				this.currAnimation = MimiAnimationStates.FlyDownRight;
			} else if(this.properties.xv > 0) {
				this.currAnimation = MimiAnimationStates.FlyRight;
			} else if(this.properties.xv < 0) {
				this.currAnimation = MimiAnimationStates.FlyLeft;
			}
			
		} else {
			this.properties.stunCounter++;
			if(this.properties.stunCounter >= 45) {
				this.properties.inStun = 0;
			}
		}
		
		var newPosition = {x: this.position.x + this.properties.xv, y: this.position.y + this.properties.yv};
		this.setPosition(newPosition);
		
		this.properties.xv = 0;
		this.properties.yv = 0;
	
	} else {
		this.properties.yv = this.properties.yv + 0.6;
		var newPosition = {x: this.position.x + this.properties.xv, y: this.position.y + this.properties.yv};
		this.setPosition(newPosition);
	}
	
	for (var key in this.properties.iObjects) {
		this.properties.iObjects[key].iframes++;
		if(this.properties.iObjects[key].iframes > this.properties.iObjects[key].maxIframes) {
			delete this.properties.iObjects[key];
		}
	}
}

/********
Collision behavior for the player character while flying.
*********/
function MimiAirPlayerCollide(colObj,verIndex,intersection,colVer1,colVer2) {
	
	if(colObj.tag != null) {
		if(colObj.tag == 'wall') {
			//console.log('Col with: ' + colObj.properties.wallname + ', Vertex: ' + verIndex);
			//console.log('Interscetion Point: ' + intersection);
			this.position.x = this.position.x - (((this.position.x + this.vertices[verIndex].offX) - intersection[0]));
			this.position.y = this.position.y - (((this.position.y + this.vertices[verIndex].offY) - intersection[1]));
			
			if((this.position.x - this.delta.dx) > this.position.x) {
				
				if(colObj.position.y + colObj.vertices[colVer1].offY != colObj.position.y + colObj.vertices[colVer2].offY) {
					//console.log('Pushing Right from: ' + colObj.properties.wallname);
					this.position.x++;
				}
				
				if(colObj.position.x + colObj.vertices[colVer1].offX == colObj.position.x + colObj.vertices[colVer2].offX) {
					this.properties.slideStateY = 0;
				}
			} else if((this.position.x - this.delta.dx) < this.position.x) {
				
				if(colObj.position.y + colObj.vertices[colVer1].offY != colObj.position.y + colObj.vertices[colVer2].offY) {
					//console.log('Pushing Left from: ' + colObj.properties.wallname);
					this.position.x--;
				}
				
				if(colObj.position.x + colObj.vertices[colVer1].offX == colObj.position.x + colObj.vertices[colVer2].offX) {
					this.properties.slideStateY = 1;
				}
			}
			
			if((this.position.y - this.delta.dy) > this.position.y) {
				
				if(colObj.position.x + colObj.vertices[colVer1].offX != colObj.position.x + colObj.vertices[colVer2].offX) {
					this.position.y++;
				}
				
				this.properties.yv = 0;
				if(colObj.position.y + colObj.vertices[colVer1].offY == colObj.position.y + colObj.vertices[colVer2].offY) {
					this.properties.slideStateX = 0;
				}
			} else if((this.position.y - this.delta.dy) < this.position.y) {
				
				if(colObj.position.x + colObj.vertices[colVer1].offX != colObj.position.x + colObj.vertices[colVer2].offX) {
					this.position.y--;
				}
				
				this.properties.yv = 0;
				if(colObj.position.y + colObj.vertices[colVer1].offY == colObj.position.y + colObj.vertices[colVer2].offY) {
					this.properties.slideStateX = 1;
				}
				
			}
			
			/*
			var newverts = {}
			newverts[0] = {x: this.position.x + this.vertices[0].offX, y: this.position.y + this.vertices[0].offY}
			newverts[1] = {x: this.position.x + this.vertices[1].offX, y: this.position.y + this.vertices[1].offY}
			newverts[2] = {x: this.position.x + this.vertices[2].offX, y: this.position.y + this.vertices[2].offY}
			newverts[3] = {x: this.position.x + this.vertices[3].offX, y: this.position.y + this.vertices[3].offY}
			console.log(newverts);
			*/
		} else if(colObj.tag == 'hurtBall' || colObj.tag == 'edge') {
			if(this.properties.inStun != 1 && this.properties.defeated != 1) {
				this.properties.health--;
				
				if(this.properties.health > 0) {
					this.currAnimation = MimiAnimationStates.HurtRight;
					
					this.properties.inStun = 1;
					this.properties.stunCounter = 0;
				} else {
					this.currAnimation = MimiAnimationStates.Death;
					this.properties.defeated = 1;
					this.properties.xv = 0;
					this.properties.yv = -7;
				}
			}
		} else if(colObj.tag == 'testBall') {
			console.log('Ball Intersection');
		}
	}
}

/********
Set up default values for player character.
*********/
function MimiDefaults() {
	if(this.currAnimation == -1) {
		this.currAnimation = 0;
	}
}


/********
Button to start game
*********/
function LoaderButtonUpdate() {
	if(keys.enter) {
		var testcode = '';
	
	
		//-rp 26 -45 3 -rp 25 -22 2
		testcode = testcode + 'GameObject -v 0 0 -v 50 0 -v 50 50 -v 0 50 -u MimiAirPlayerMovement -cf MimiAirPlayerCollide -t player -x 295 -y 263 -rp 25 25 25 -p slideStateX 2 -p slideStateY 2 ' //player
		testcode = testcode + '-a MimiAnimationPackage -pi MimiDefaults -p health 3 '
		//testcode = testcode + '-d '
		testcode = testcode + ';'
		
		testcode = testcode + 'GameObject -d -x -12 -y -12 -v 0 0 -v 664 0 -d -t wall -p wallname top;' //top wall
		testcode = testcode + 'GameObject -d -x 620 -y 20 -t edge -rp 0 0 20 -p edgeType top;'
		testcode = testcode + 'GameObject -d -x 580 -y 20 -t edge -rp 0 0 20 -p edgeType top;'
		testcode = testcode + 'GameObject -d -x 540 -y 20 -t edge -rp 0 0 20 -p edgeType top;'
		testcode = testcode + 'GameObject -d -x 500 -y 20 -t edge -rp 0 0 20 -p edgeType top;'
		testcode = testcode + 'GameObject -d -x 460 -y 20 -t edge -rp 0 0 20 -p edgeType top;'
		testcode = testcode + 'GameObject -d -x 420 -y 20 -t edge -rp 0 0 20 -p edgeType top;'
		testcode = testcode + 'GameObject -d -x 380 -y 20 -t edge -rp 0 0 20 -p edgeType top;'
		testcode = testcode + 'GameObject -d -x 340 -y 20 -t edge -rp 0 0 20 -p edgeType top;'
		testcode = testcode + 'GameObject -d -x 300 -y 20 -t edge -rp 0 0 20 -p edgeType top;'
		testcode = testcode + 'GameObject -d -x 260 -y 20 -t edge -rp 0 0 20 -p edgeType top;'
		testcode = testcode + 'GameObject -d -x 220 -y 20 -t edge -rp 0 0 20 -p edgeType top;'
		testcode = testcode + 'GameObject -d -x 180 -y 20 -t edge -rp 0 0 20 -p edgeType top;'
		testcode = testcode + 'GameObject -d -x 140 -y 20 -t edge -rp 0 0 20 -p edgeType top;'
		testcode = testcode + 'GameObject -d -x 100 -y 20 -t edge -rp 0 0 20 -p edgeType top;'
		testcode = testcode + 'GameObject -d -x 60 -y 20 -t edge -rp 0 0 20 -p edgeType top;'
		testcode = testcode + 'GameObject -d -x 20 -y 20 -t edge -rp 0 0 20 -p edgeType top;'
		
		testcode = testcode + 'GameObject -d -x -12 -y -12 -v 0 0 -v 0 600 -d -t wall -p wallname left;' //left wall
		//testcode = testcode + 'GameObject -d -x 20 -y 20 -t edge -rp 0 0 20;'
		testcode = testcode + 'GameObject -d -x 20 -y 60 -t edge -rp 0 0 20 -p edgeType left;'
		testcode = testcode + 'GameObject -d -x 20 -y 100 -t edge -rp 0 0 20 -p edgeType left;'
		testcode = testcode + 'GameObject -d -x 20 -y 140 -t edge -rp 0 0 20 -p edgeType left;'
		testcode = testcode + 'GameObject -d -x 20 -y 180 -t edge -rp 0 0 20 -p edgeType left;'
		testcode = testcode + 'GameObject -d -x 20 -y 220 -t edge -rp 0 0 20 -p edgeType left;'
		testcode = testcode + 'GameObject -d -x 20 -y 260 -t edge -rp 0 0 20 -p edgeType left;'
		testcode = testcode + 'GameObject -d -x 20 -y 300 -t edge -rp 0 0 20 -p edgeType left;'
		testcode = testcode + 'GameObject -d -x 20 -y 340 -t edge -rp 0 0 20 -p edgeType left;'
		testcode = testcode + 'GameObject -d -x 20 -y 380 -t edge -rp 0 0 20 -p edgeType left;'
		testcode = testcode + 'GameObject -d -x 20 -y 420 -t edge -rp 0 0 20 -p edgeType left;'
		testcode = testcode + 'GameObject -d -x 20 -y 460 -t edge -rp 0 0 20 -p edgeType left;'
		testcode = testcode + 'GameObject -d -x 20 -y 500 -t edge -rp 0 0 20 -p edgeType left;'
		testcode = testcode + 'GameObject -d -x 20 -y 540 -t edge -rp 0 0 20 -p edgeType left;'
		testcode = testcode + 'GameObject -d -x 20 -y 580 -t edge -rp 0 0 20 -p edgeType left;'
		
		testcode = testcode + 'GameObject -d -x 652 -y -12 -v 0 0 -v 0 600 -d -t wall -p wallname right;' //right wall
		//testcode = testcode + 'GameObject -d -x 620 -y 20 -t edge -rp 0 0 20;'
		testcode = testcode + 'GameObject -d -x 620 -y 60 -t edge -rp 0 0 20 -p edgeType right;'
		testcode = testcode + 'GameObject -d -x 620 -y 100 -t edge -rp 0 0 20 -p edgeType right;'
		testcode = testcode + 'GameObject -d -x 620 -y 140 -t edge -rp 0 0 20 -p edgeType right;'
		testcode = testcode + 'GameObject -d -x 620 -y 180 -t edge -rp 0 0 20 -p edgeType right;'
		testcode = testcode + 'GameObject -d -x 620 -y 220 -t edge -rp 0 0 20 -p edgeType right;'
		testcode = testcode + 'GameObject -d -x 620 -y 260 -t edge -rp 0 0 20 -p edgeType right;'
		testcode = testcode + 'GameObject -d -x 620 -y 300 -t edge -rp 0 0 20 -p edgeType right;'
		testcode = testcode + 'GameObject -d -x 620 -y 340 -t edge -rp 0 0 20 -p edgeType right;'
		testcode = testcode + 'GameObject -d -x 620 -y 380 -t edge -rp 0 0 20 -p edgeType right;'
		testcode = testcode + 'GameObject -d -x 620 -y 420 -t edge -rp 0 0 20 -p edgeType right;'
		testcode = testcode + 'GameObject -d -x 620 -y 460 -t edge -rp 0 0 20 -p edgeType right;'
		testcode = testcode + 'GameObject -d -x 620 -y 500 -t edge -rp 0 0 20 -p edgeType right;'
		testcode = testcode + 'GameObject -d -x 620 -y 540 -t edge -rp 0 0 20 -p edgeType right;'
		testcode = testcode + 'GameObject -d -x 620 -y 580 -t edge -rp 0 0 20 -p edgeType right;'
		
		
		testcode = testcode + 'GameObject -d -x -12 -y 588 -v 0 0 -v 664 0 -d -t wall -p wallname bottom;' //bottom wall
		testcode = testcode + 'GameObject -d -x 620 -y 556 -t edge -rp 0 0 20 -p edgeType bottom;'
		testcode = testcode + 'GameObject -d -x 580 -y 556 -t edge -rp 0 0 20 -p edgeType bottom;'
		testcode = testcode + 'GameObject -d -x 540 -y 556 -t edge -rp 0 0 20 -p edgeType bottom;'
		testcode = testcode + 'GameObject -d -x 500 -y 556 -t edge -rp 0 0 20 -p edgeType bottom;'
		testcode = testcode + 'GameObject -d -x 460 -y 556 -t edge -rp 0 0 20 -p edgeType bottom;'
		testcode = testcode + 'GameObject -d -x 420 -y 556 -t edge -rp 0 0 20 -p edgeType bottom;'
		testcode = testcode + 'GameObject -d -x 380 -y 556 -t edge -rp 0 0 20 -p edgeType bottom;'
		testcode = testcode + 'GameObject -d -x 340 -y 556 -t edge -rp 0 0 20 -p edgeType bottom;'
		testcode = testcode + 'GameObject -d -x 300 -y 556 -t edge -rp 0 0 20 -p edgeType bottom;'
		testcode = testcode + 'GameObject -d -x 260 -y 556 -t edge -rp 0 0 20 -p edgeType bottom;'
		testcode = testcode + 'GameObject -d -x 220 -y 556 -t edge -rp 0 0 20 -p edgeType bottom;'
		testcode = testcode + 'GameObject -d -x 180 -y 556 -t edge -rp 0 0 20 -p edgeType bottom;'
		testcode = testcode + 'GameObject -d -x 140 -y 556 -t edge -rp 0 0 20 -p edgeType bottom;'
		testcode = testcode + 'GameObject -d -x 100 -y 556 -t edge -rp 0 0 20 -p edgeType bottom;'
		testcode = testcode + 'GameObject -d -x 60 -y 556 -t edge -rp 0 0 20 -p edgeType bottom;'
		testcode = testcode + 'GameObject -d -x 20 -y 556 -t edge -rp 0 0 20 -p edgeType bottom;'
		
		
		//testcode = testcode + 'GameObject -d -x 600 -y 100 -t shooter -u TestShooterUpdate -p delayFrames 0 -rp 0 0 9;' //test shooter
		
		testcode = testcode + 'GameObject -p lastPStatus 0 -p lastRightStatus 0 -p lastSpaceStatus 0 -p lastQStatus 0 -su uiLogger -t UI;'
		
		testcode = testcode + 'GameObject -au ./Assets/Music/Mimis_Delivery_Service.mp3 -pi CreateShooterChildren -t musicPlayer;'
		
		testcode = testcode + 'GameObject -d -cf reverseShooter -rp 0 0 9 -x 600 -y -10;'
		
		testcode = testcode + 'GameObject -d -cf reverseShooter -rp 0 0 9 -x 600 -y 586;'
		
		testcode = testcode + 'GameObject -d -cf reverseShooter -rp 0 0 9 -x 40 -y -10;'
		
		testcode = testcode + 'GameObject -d -cf reverseShooter -rp 0 0 9 -x 40 -y 586;'
		
		testcode = testcode + 'GameObject -d -rp 0 0 9 -x 0 -y -10 -u DropperUpdate -p ballVel 6 -pi setupDropper;'
		
		testcode = testcode + 'GameObject -d -rp 0 0 9 -x 10 -y 566 -u RocketShooterUpdate -p ballVel 6 -pi setupRocketShooter;'
		testcode = testcode + 'GameObject -d -rp 0 0 9 -x 630 -y 566 -u RocketShooterUpdate -p ballVel 6 -pi setupRocketShooter;'
		
		this.handler.removeObject(this);
		this.handler.removeAllObjects();
		enterObjects(testcode);
	}
}

/********
reverses shooter momentum
*********/
function reverseShooter(colObj,verIndex,intersection,colVer1,colVer2) {
	if(colObj.tag != null) {
		if(colObj.tag == 'shooter') {
			colObj.properties.yv = colObj.properties.yv * -1;
		}
	}
}

function CannonBallUpdate() {
	var newPosition = {x: this.position.x + this.properties.xv, y: this.position.y + this.properties.yv};
	this.setPosition(newPosition);
}

function CannonBallCollision(colObj,verIndex,intersection,colVer1,colVer2) {
	
	if(colObj.tag != null) {
		if(colObj.tag == 'edge') {
			if(this.properties.edgeType == 'left') {
				if(colObj.properties.edgeType == 'right') {
					console.log('removed left right');
					this.handler.removeObject(this);
				}
			} else if(this.properties.edgeType == 'right') {
				if(colObj.properties.edgeType == 'left') {
					console.log('removed right left');
					this.handler.removeObject(this);
				}
			} else if(this.properties.edgeType == 'top') {
				if(colObj.properties.edgeType == 'bottom') {
					console.log('removed top bottom');
					this.handler.removeObject(this);
				}
			} else if(this.properties.edgeType == 'bottom') {
				if(colObj.properties.edgeType == 'top') {
					console.log('removed bottom top');
					this.handler.removeObject(this);
				}
			}
		} else if(colObj.tag == 'testBall') {
			console.log('Ball Intersection');
		}
	}
	
}

/********
Test shooter
*********/
function TestShooterUpdate() {
	if(this.properties.delayFrames == 60) {
		var shotText = 'GameObject -d -x 600 -y 100 -t hurtBall -rp 0 0 18 -u CannonBallUpdate -p xv -6 -p yv 0;';
		enterObjects(shotText);
	} else if(this.properties.delayFrames == 70) {
		var shotText = 'GameObject -d -x 600 -y 100 -t hurtBall -rp 0 0 18 -u CannonBallUpdate -p xv -6 -p yv 0;';
		enterObjects(shotText);
	} else if(this.properties.delayFrames == 80) {
		var shotText = 'GameObject -d -x 600 -y 100 -t hurtBall -rp 0 0 18 -u CannonBallUpdate -p xv -6 -p yv 0;';
		enterObjects(shotText);
		this.properties.delayFrames = 0;
	}
	
	this.properties.delayFrames++;
}

function CreateShooterChildren() {
	
	//Why do I have to stay here on the ground
	var ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	var objText = "GameObject -d -x 600 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 19 -p ballVel -6 -rp 0 0 9 -pi setupShooter -p yv -7"
	objText = objText + " -p d0 0 -p w0 Why"
	objText = objText + " -p d1 17 -p w1 do"
	objText = objText + " -p d2 35 -p w2 I"
	objText = objText + " -p d3 53 -p w3 have"
	objText = objText + " -p d4 71 -p w4 to"
	objText = objText + " -p d5 89 -p w5 stay"
	objText = objText + " -p d6 107 -p w6 here"
	objText = objText + " -p d7 125 -p w7 on"
	objText = objText + " -p d8 143 -p w8 the"
	objText = objText + " -p d9 161 -p w9 ground"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
		this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	
	//it’s overrated
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 40 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 22 -p ballVel 6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 it's"
	objText = objText + " -p d1 17 -p w1 overrated"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
		this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//The cityscape escapes you with a sound
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 600 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 23 -p ballVel -6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 The"
	objText = objText + " -p d1 17 -p w1 cityscape"
	objText = objText + " -p d2 35 -p w2 escapes"
	objText = objText + " -p d3 53 -p w3 you"
	objText = objText + " -p d4 71 -p w4 with"
	objText = objText + " -p d5 89 -p w5 a"
	objText = objText + " -p d6 107 -p w6 sound"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
		this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//It’s delineated
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 40 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 27 -p ballVel 6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 It’s"
	objText = objText + " -p d1 17 -p w1 delineated"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//I waited at the station for an hour
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 600 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 28 -p ballVel -6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 I"
	objText = objText + " -p d1 17 -p w1 waited"
	objText = objText + " -p d2 34 -p w2 at"
	objText = objText + " -p d3 51 -p w3 the"
	objText = objText + " -p d4 68 -p w4 station"
	objText = objText + " -p d5 85 -p w5 for"
	objText = objText + " -p d6 102 -p w6 an"
	objText = objText + " -p d7 119 -p w7 hour"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//But I won’t make it
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
    objText = "GameObject -d -x 40 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 31 -p ballVel 6 -rp 0 0 9 -pi setupShooter"
    objText = objText + " -p d0 0 -p w0 But"
    objText = objText + " -p d1 17 -p w1 I"
    objText = objText + " -p d2 34 -p w2 won’t"
    objText = objText + " -p d3 51 -p w3 make"
    objText = objText + " -p d4 68 -p w4 it"
    var GOJChild1 = createGOJsonFromString(objText);
    var GOObjChild1 = createGOFromJSON(GOJChild1);
    if(this.properties.children == null) {
            this.properties.children = []
    }
    this.properties.children.push(GOObjChild1);
    GOObjChild1.properties.parentObj = this;
    this.handler.addObject(GOObjChild1);
	
	//You take off on an updraft by the tower
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 600 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 33 -p ballVel -6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 You"
	objText = objText + " -p d1 17 -p w1 take"
	objText = objText + " -p d2 34 -p w2 off"
	objText = objText + " -p d3 51 -p w3 on"
	objText = objText + " -p d4 68 -p w4 an"
	objText = objText + " -p d5 85 -p w5 updraft"
	objText = objText + " -p d6 102 -p w6 by"
	objText = objText + " -p d7 119 -p w7 the"
	objText = objText + " -p d8 136 -p w8 tower"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//And you overtake it
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 40 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 36 -p ballVel 6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 And"
	objText = objText + " -p d1 17 -p w1 you"
	objText = objText + " -p d2 34 -p w2 overtake"
	objText = objText + " -p d3 51 -p w3 it"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//Every moon that I
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 600 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 37 -p ballVel -6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 Every"
	objText = objText + " -p d1 17 -p w1 moon"
	objText = objText + " -p d2 34 -p w2 that"
	objText = objText + " -p d3 51 -p w3 I"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//See you on the rise
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 40 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 41 -p ballVel 6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 See"
	objText = objText + " -p d1 17 -p w1 you"
	objText = objText + " -p d2 34 -p w2 on"
	objText = objText + " -p d3 51 -p w3 the"
	objText = objText + " -p d4 68 -p w4 rise"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//You’re drawn across the sky
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 600 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 43 -p ballVel -6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 You’re"
	objText = objText + " -p d1 17 -p w1 drawn"
	objText = objText + " -p d2 34 -p w2 across"
	objText = objText + " -p d3 51 -p w3 the"
	objText = objText + " -p d4 68 -p w4 sky"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//Now that ink has dried
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 40 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 47 -p ballVel 6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 Now"
	objText = objText + " -p d1 17 -p w1 that"
	objText = objText + " -p d2 34 -p w2 ink"
	objText = objText + " -p d3 51 -p w3 has"
	objText = objText + " -p d4 68 -p w4 dried"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//And I can’t tell you why
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 600 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 51 -p ballVel -6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 And"
	objText = objText + " -p d1 17 -p w1 I"
	objText = objText + " -p d2 34 -p w2 can’t"
	objText = objText + " -p d3 51 -p w3 tell"
	objText = objText + " -p d4 68 -p w4 you"
	objText = objText + " -p d5 85 -p w5 why"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//Oh, Mimi can you
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 40 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 53 -p ballVel 6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 Oh,"
	objText = objText + " -p d1 17 -p w1 Mimi"
	objText = objText + " -p d2 34 -p w2 can"
	objText = objText + " -p d3 51 -p w3 you"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//Tell me there’s an issue
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 600 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 54 -p ballVel -6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 Tell"
	objText = objText + " -p d1 17 -p w1 me"
	objText = objText + " -p d2 34 -p w2 there’s"
	objText = objText + " -p d3 51 -p w3 an"
	objText = objText + " -p d4 68 -p w4 issue"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//I’ve seen it clouded all around you
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 40 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 56 -p ballVel 6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 I’ve"
	objText = objText + " -p d1 17 -p w1 seen"
	objText = objText + " -p d2 34 -p w2 it"
	objText = objText + " -p d3 51 -p w3 clouded"
	objText = objText + " -p d4 68 -p w4 all"
	objText = objText + " -p d5 85 -p w5 around"
	objText = objText + " -p d6 102 -p w6 you"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//I hear you tell me there’s an issue
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 600 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 58 -p ballVel -6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 I"
	objText = objText + " -p d1 17 -p w1 hear"
	objText = objText + " -p d2 34 -p w2 you"
	objText = objText + " -p d3 51 -p w3 tell"
	objText = objText + " -p d4 68 -p w4 me"
	objText = objText + " -p d5 85 -p w5 there’s"
	objText = objText + " -p d6 102 -p w6 an"
	objText = objText + " -p d7 119 -p w7 issue"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//node TestProg 61 You’ve seen before
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 40 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 61 -p ballVel 6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 You’ve"
	objText = objText + " -p d1 17 -p w1 seen"
	objText = objText + " -p d2 34 -p w2 before"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//node TestProgR 62 Oh, Mimi can you
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 600 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 62 -p ballVel -6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 Oh,"
	objText = objText + " -p d1 17 -p w1 Mimi"
	objText = objText + " -p d2 34 -p w2 can"
	objText = objText + " -p d3 51 -p w3 you"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//node TestProg 63 Tell me there’s an issue
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 40 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 63 -p ballVel 6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 Tell"
	objText = objText + " -p d1 17 -p w1 me"
	objText = objText + " -p d2 34 -p w2 there’s"
	objText = objText + " -p d3 51 -p w3 an"
	objText = objText + " -p d4 68 -p w4 issue"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//node TestProgR 65 I’ve seen it clouded all around you
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 600 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 65 -p ballVel -6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 I’ve"
	objText = objText + " -p d1 17 -p w1 seen"
	objText = objText + " -p d2 34 -p w2 it"
	objText = objText + " -p d3 51 -p w3 clouded"
	objText = objText + " -p d4 68 -p w4 all"
	objText = objText + " -p d5 85 -p w5 around"
	objText = objText + " -p d6 102 -p w6 you"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//node TestProg 67 I hear you tell me there’s an issue
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 40 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 67 -p ballVel 6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 I"
	objText = objText + " -p d1 17 -p w1 hear"
	objText = objText + " -p d2 34 -p w2 you"
	objText = objText + " -p d3 51 -p w3 tell"
	objText = objText + " -p d4 68 -p w4 me"
	objText = objText + " -p d5 85 -p w5 there’s"
	objText = objText + " -p d6 102 -p w6 an"
	objText = objText + " -p d7 119 -p w7 issue"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//node TestProgR 70 You’ve seen before
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 600 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 70 -p ballVel -6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 You’ve"
	objText = objText + " -p d1 17 -p w1 seen"
	objText = objText + " -p d2 34 -p w2 before"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//node TestProg 72 I can’t tell you why
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 40 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 72 -p ballVel 6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 I"
	objText = objText + " -p d1 17 -p w1 can’t"
	objText = objText + " -p d2 34 -p w2 tell"
	objText = objText + " -p d3 51 -p w3 you"
	objText = objText + " -p d4 68 -p w4 why"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//node TestProgR 74 No, I can’t tell you why
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 600 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 74 -p ballVel -6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 No,"
	objText = objText + " -p d1 17 -p w1 I"
	objText = objText + " -p d2 34 -p w2 can’t"
	objText = objText + " -p d3 51 -p w3 tell"
	objText = objText + " -p d4 68 -p w4 you"
	objText = objText + " -p d5 85 -p w5 why"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//node TestProg 77 Why do you have to stay here on the ground
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 40 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 77 -p ballVel 6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 Why"
	objText = objText + " -p d1 17 -p w1 do"
	objText = objText + " -p d2 34 -p w2 you"
	objText = objText + " -p d3 51 -p w3 have"
	objText = objText + " -p d4 68 -p w4 to"
	objText = objText + " -p d5 85 -p w5 stay"
	objText = objText + " -p d6 102 -p w6 here"
	objText = objText + " -p d7 119 -p w7 on"
	objText = objText + " -p d8 136 -p w8 the"
	objText = objText + " -p d9 153 -p w9 ground"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//node TestProgR 80 it’s overrated
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 600 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 80 -p ballVel -6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 it’s"
	objText = objText + " -p d1 17 -p w1 overrated"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//node TestProg 81 The cityscape berates you with a sound
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 40 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 81 -p ballVel 6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 The"
	objText = objText + " -p d1 17 -p w1 cityscape"
	objText = objText + " -p d2 34 -p w2 berates"
	objText = objText + " -p d3 51 -p w3 you"
	objText = objText + " -p d4 68 -p w4 with"
	objText = objText + " -p d5 85 -p w5 a"
	objText = objText + " -p d6 102 -p w6 sound"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//node TestProgR 85 It’s delineated
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 600 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 85 -p ballVel -6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 It’s"
	objText = objText + " -p d1 17 -p w1 delineated"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//node TestProg 86 And no one here has even learned your name
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 40 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 86 -p ballVel 6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 And"
	objText = objText + " -p d1 17 -p w1 no"
	objText = objText + " -p d2 34 -p w2 one"
	objText = objText + " -p d3 51 -p w3 here"
	objText = objText + " -p d4 68 -p w4 has"
	objText = objText + " -p d5 85 -p w5 even"
	objText = objText + " -p d6 102 -p w6 learned"
	objText = objText + " -p d7 119 -p w7 your"
	objText = objText + " -p d8 136 -p w8 name"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//node TestProgR 89 But they all claim it
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 600 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 89 -p ballVel -6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 But"
	objText = objText + " -p d1 17 -p w1 they"
	objText = objText + " -p d2 34 -p w2 all"
	objText = objText + " -p d3 51 -p w3 claim"
	objText = objText + " -p d4 68 -p w4 it"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//node TestProg 91 They saw you land and ran to do the same
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 40 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 91 -p ballVel 6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 They"
	objText = objText + " -p d1 17 -p w1 saw"
	objText = objText + " -p d2 34 -p w2 you"
	objText = objText + " -p d3 51 -p w3 land"
	objText = objText + " -p d4 68 -p w4 and"
	objText = objText + " -p d5 85 -p w5 ran"
	objText = objText + " -p d6 102 -p w6 to"
	objText = objText + " -p d7 119 -p w7 do"
	objText = objText + " -p d8 136 -p w8 the"
	objText = objText + " -p d9 153 -p w9 same"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//node TestProgR 94 But they won’t make it
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 600 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 94 -p ballVel -6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 But"
	objText = objText + " -p d1 17 -p w1 they"
	objText = objText + " -p d2 34 -p w2 won’t"
	objText = objText + " -p d3 51 -p w3 make"
	objText = objText + " -p d4 68 -p w4 it"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//node TestProg 96 Every moon that I
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 40 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 96 -p ballVel 6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 Every"
	objText = objText + " -p d1 17 -p w1 moon"
	objText = objText + " -p d2 34 -p w2 that"
	objText = objText + " -p d3 51 -p w3 I"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//node TestProgR 99 See you on the rise
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 600 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 99 -p ballVel -6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 See"
	objText = objText + " -p d1 17 -p w1 you"
	objText = objText + " -p d2 34 -p w2 on"
	objText = objText + " -p d3 51 -p w3 the"
	objText = objText + " -p d4 68 -p w4 rise"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//node TestProg 101 You’re drawn across the sky
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 40 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 101 -p ballVel 6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 You’re"
	objText = objText + " -p d1 17 -p w1 drawn"
	objText = objText + " -p d2 34 -p w2 across"
	objText = objText + " -p d3 51 -p w3 the"
	objText = objText + " -p d4 68 -p w4 sky"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//node TestProgR 104 Now that ink has dried
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 600 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 104 -p ballVel -6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 Now"
	objText = objText + " -p d1 17 -p w1 that"
	objText = objText + " -p d2 34 -p w2 ink"
	objText = objText + " -p d3 51 -p w3 has"
	objText = objText + " -p d4 68 -p w4 dried"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//node TestProg 108 And I can’t tell you why
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 40 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 108 -p ballVel 6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 And"
	objText = objText + " -p d1 17 -p w1 I"
	objText = objText + " -p d2 34 -p w2 can’t"
	objText = objText + " -p d3 51 -p w3 tell"
	objText = objText + " -p d4 68 -p w4 you"
	objText = objText + " -p d5 85 -p w5 why"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//node TestProgR 110 Oh, Mimi can you
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 600 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 110 -p ballVel -6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 Oh,"
	objText = objText + " -p d1 17 -p w1 Mimi"
	objText = objText + " -p d2 34 -p w2 can"
	objText = objText + " -p d3 51 -p w3 you"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//node TestProg 111 Tell me there’s an issue
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 40 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 111 -p ballVel 6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 Tell"
	objText = objText + " -p d1 17 -p w1 me"
	objText = objText + " -p d2 34 -p w2 there’s"
	objText = objText + " -p d3 51 -p w3 an"
	objText = objText + " -p d4 68 -p w4 issue"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//node TestProgR 113 I’ve seen it clouded all around you
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 600 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 113 -p ballVel -6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 I’ve"
	objText = objText + " -p d1 17 -p w1 seen"
	objText = objText + " -p d2 34 -p w2 it"
	objText = objText + " -p d3 51 -p w3 clouded"
	objText = objText + " -p d4 68 -p w4 all"
	objText = objText + " -p d5 85 -p w5 around"
	objText = objText + " -p d6 102 -p w6 you"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//node TestProg 115 I hear you tell me there’s an issue
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 40 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 115 -p ballVel 6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 I"
	objText = objText + " -p d1 17 -p w1 hear"
	objText = objText + " -p d2 34 -p w2 you"
	objText = objText + " -p d3 51 -p w3 tell"
	objText = objText + " -p d4 68 -p w4 me"
	objText = objText + " -p d5 85 -p w5 there’s"
	objText = objText + " -p d6 102 -p w6 an"
	objText = objText + " -p d7 119 -p w7 issue"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//node TestProgR 118 You’ve seen before
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 600 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 118 -p ballVel -6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 You’ve"
	objText = objText + " -p d1 17 -p w1 seen"
	objText = objText + " -p d2 34 -p w2 before"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//node TestProg 119 Oh, Mimi can you
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 40 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 119 -p ballVel 6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 Oh,"
	objText = objText + " -p d1 17 -p w1 Mimi"
	objText = objText + " -p d2 34 -p w2 can"
	objText = objText + " -p d3 51 -p w3 you"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//node TestProgR 120 Tell me there’s an issue
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 600 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 120 -p ballVel -6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 Tell"
	objText = objText + " -p d1 17 -p w1 me"
	objText = objText + " -p d2 34 -p w2 there’s"
	objText = objText + " -p d3 51 -p w3 an"
	objText = objText + " -p d4 68 -p w4 issue"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//node TestProg 122 I’ve seen it clouded all around you
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 40 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 122 -p ballVel 6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 I’ve"
	objText = objText + " -p d1 17 -p w1 seen"
	objText = objText + " -p d2 34 -p w2 it"
	objText = objText + " -p d3 51 -p w3 clouded"
	objText = objText + " -p d4 68 -p w4 all"
	objText = objText + " -p d5 85 -p w5 around"
	objText = objText + " -p d6 102 -p w6 you"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//node TestProgR 124 I hear you tell me there’s an issue
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 600 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 124 -p ballVel -6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 I"
	objText = objText + " -p d1 17 -p w1 hear"
	objText = objText + " -p d2 34 -p w2 you"
	objText = objText + " -p d3 51 -p w3 tell"
	objText = objText + " -p d4 68 -p w4 me"
	objText = objText + " -p d5 85 -p w5 there’s"
	objText = objText + " -p d6 102 -p w6 an"
	objText = objText + " -p d7 119 -p w7 issue"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//node TestProg 127 You’ve seen before
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 40 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 127 -p ballVel 6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 You’ve"
	objText = objText + " -p d1 17 -p w1 seen"
	objText = objText + " -p d2 34 -p w2 before"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//node TestProgR 131 And I can’t tell you why
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 600 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 131 -p ballVel -6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 And"
	objText = objText + " -p d1 17 -p w1 I"
	objText = objText + " -p d2 34 -p w2 can’t"
	objText = objText + " -p d3 51 -p w3 tell"
	objText = objText + " -p d4 68 -p w4 you"
	objText = objText + " -p d5 85 -p w5 why"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//node TestProg 135 And I can’t tell you why
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 40 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 135 -p ballVel 6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 And"
	objText = objText + " -p d1 17 -p w1 I"
	objText = objText + " -p d2 34 -p w2 can’t"
	objText = objText + " -p d3 51 -p w3 tell"
	objText = objText + " -p d4 68 -p w4 you"
	objText = objText + " -p d5 85 -p w5 why"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//node TestProgR 140 And I can’t tell you why
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 600 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 140 -p ballVel -6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 And"
	objText = objText + " -p d1 17 -p w1 I"
	objText = objText + " -p d2 34 -p w2 can’t"
	objText = objText + " -p d3 51 -p w3 tell"
	objText = objText + " -p d4 68 -p w4 you"
	objText = objText + " -p d5 85 -p w5 why"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//node TestProg 145 I can’t tell you why
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 40 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 145 -p ballVel 6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 I"
	objText = objText + " -p d1 17 -p w1 can’t"
	objText = objText + " -p d2 34 -p w2 tell"
	objText = objText + " -p d3 51 -p w3 you"
	objText = objText + " -p d4 68 -p w4 why"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//node TestProg 150 Tell me there’s an issue
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 40 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 150 -p ballVel 6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 Tell"
	objText = objText + " -p d1 17 -p w1 me"
	objText = objText + " -p d2 34 -p w2 there’s"
	objText = objText + " -p d3 51 -p w3 an"
	objText = objText + " -p d4 68 -p w4 issue"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//node TestProgR 152 I’ve seen it clouded all around you
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 600 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 152 -p ballVel -6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 I’ve"
	objText = objText + " -p d1 17 -p w1 seen"
	objText = objText + " -p d2 34 -p w2 it"
	objText = objText + " -p d3 51 -p w3 clouded"
	objText = objText + " -p d4 68 -p w4 all"
	objText = objText + " -p d5 85 -p w5 around"
	objText = objText + " -p d6 102 -p w6 you"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//node TestProg 154 I hear you tell me there’s an issue
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 40 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 154 -p ballVel 6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 I"
	objText = objText + " -p d1 17 -p w1 hear"
	objText = objText + " -p d2 34 -p w2 you"
	objText = objText + " -p d3 51 -p w3 tell"
	objText = objText + " -p d4 68 -p w4 me"
	objText = objText + " -p d5 85 -p w5 there’s"
	objText = objText + " -p d6 102 -p w6 an"
	objText = objText + " -p d7 119 -p w7 issue"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//node TestProgR 157 You’ve seen before
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 600 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 157 -p ballVel -6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 You’ve"
	objText = objText + " -p d1 17 -p w1 seen"
	objText = objText + " -p d2 34 -p w2 before"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//node TestProg 158 Oh, Mimi can you
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 40 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 158 -p ballVel 6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 Oh,"
	objText = objText + " -p d1 17 -p w1 Mimi"
	objText = objText + " -p d2 34 -p w2 can"
	objText = objText + " -p d3 51 -p w3 you"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//node TestProgR 159 Tell me there’s an issue
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 600 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 159 -p ballVel -6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 Tell"
	objText = objText + " -p d1 17 -p w1 me"
	objText = objText + " -p d2 34 -p w2 there’s"
	objText = objText + " -p d3 51 -p w3 an"
	objText = objText + " -p d4 68 -p w4 issue"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//node TestProg 161 I’ve seen it clouded all around you
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 40 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 161 -p ballVel 6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 I’ve"
	objText = objText + " -p d1 17 -p w1 seen"
	objText = objText + " -p d2 34 -p w2 it"
	objText = objText + " -p d3 51 -p w3 clouded"
	objText = objText + " -p d4 68 -p w4 all"
	objText = objText + " -p d5 85 -p w5 around"
	objText = objText + " -p d6 102 -p w6 you"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//node TestProgR 163 I hear you tell me there’s an issue you’ve seen before
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 600 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 163 -p ballVel -6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 I"
	objText = objText + " -p d1 17 -p w1 hear"
	objText = objText + " -p d2 34 -p w2 you"
	objText = objText + " -p d3 51 -p w3 tell"
	objText = objText + " -p d4 68 -p w4 me"
	objText = objText + " -p d5 85 -p w5 there’s"
	objText = objText + " -p d6 102 -p w6 an"
	objText = objText + " -p d7 119 -p w7 issue"
	objText = objText + " -p d8 136 -p w8 you’ve"
	objText = objText + " -p d9 153 -p w9 seen"
	objText = objText + " -p d10 170 -p w10 before"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//node TestProg 167 And I can’t tell you why
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 40 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 167 -p ballVel 6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 And"
	objText = objText + " -p d1 17 -p w1 I"
	objText = objText + " -p d2 34 -p w2 can’t"
	objText = objText + " -p d3 51 -p w3 tell"
	objText = objText + " -p d4 68 -p w4 you"
	objText = objText + " -p d5 85 -p w5 why"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	//node TestProgR 170 I can’t tell you why
	ycoord = Math.floor(Math.random() * (566 - 10 + 1) + 10);
	objText = "GameObject -d -x 600 -y "+ycoord+" -t shooter -u TimedTestShooterUpdate -p offset 170 -p ballVel -6 -rp 0 0 9 -pi setupShooter"
	objText = objText + " -p d0 0 -p w0 I"
	objText = objText + " -p d1 17 -p w1 can’t"
	objText = objText + " -p d2 34 -p w2 tell"
	objText = objText + " -p d3 51 -p w3 you"
	objText = objText + " -p d4 68 -p w4 why"
	var GOJChild1 = createGOJsonFromString(objText);
	var GOObjChild1 = createGOFromJSON(GOJChild1);
	if(this.properties.children == null) {
			this.properties.children = []
	}
	this.properties.children.push(GOObjChild1);
	GOObjChild1.properties.parentObj = this;
	this.handler.addObject(GOObjChild1);
	
	this.audio.audioFiles[0].player.play();
}

function setupShooter() {
	
	this.properties.delayList = [];
	this.properties.wordList = [];
	
	var i = 0;
	
	while(this.properties['d' + i] != null) {
		//console.log(this.properties['w' + i]);
		this.properties.delayList[i] = this.properties['d' + i];
		this.properties.wordList[i] = this.properties['w' + i];
		i++;
	}
}

function setupDropper() {
	for(var i = 0; i < this.handler.Objects.length; i++) {
		if(this.handler.Objects[i].tag == 'player') {
			this.properties.parentObj = this.handler.Objects[i];
		}
		
		if(this.handler.Objects[i].tag == 'musicPlayer') {
			this.properties.musicParent = this.handler.Objects[i];
		}
	}
}

function setupRocketShooter() {
	for(var i = 0; i < this.handler.Objects.length; i++) {
		if(this.handler.Objects[i].tag == 'player') {
			this.properties.parentObj = this.handler.Objects[i];
		}
		
		if(this.handler.Objects[i].tag == 'musicPlayer') {
			this.properties.musicParent = this.handler.Objects[i];
		}
	}
}

/********
Timed Test shooter
*********/
function TimedTestShooterUpdate() {
	/*
	if(this.properties.delayFrames == 60) {
		var shotText = 'GameObject -d -x 600 -y 100 -t hurtBall -rp 0 0 18 -u CannonBallUpdate -p xv -6 -p yv 0;';
		enterObjects(shotText);
	} else if(this.properties.delayFrames == 70) {
		var shotText = 'GameObject -d -x 600 -y 100 -t hurtBall -rp 0 0 18 -u CannonBallUpdate -p xv -6 -p yv 0;';
		enterObjects(shotText);
	} else if(this.properties.delayFrames == 80) {
		var shotText = 'GameObject -d -x 600 -y 100 -t hurtBall -rp 0 0 18 -u CannonBallUpdate -p xv -6 -p yv 0;';
		enterObjects(shotText);
		this.properties.delayFrames = 0;
	}
	*/
	
	if(this.properties.parentObj.audio.audioFiles[0].player.currentTime >= this.properties.offset && this.properties.trig != 1) {
		this.properties.trig = 1;
		this.properties.delayFrames = 0;
		this.properties.currShot = 0;
		//var shotText = 'GameObject -d -x '+this.position.x+' -y '+this.position.y+' -t hurtBall -rp 0 0 18 -u CannonBallUpdate -p xv -6 -p yv 0;';
		//enterObjects(shotText);
	}
	
	if(this.properties.trig == 1) {
		/*
		if(this.properties.delayFrames == 0) {
			var shotText = 'GameObject -d -x '+this.position.x+' -y '+this.position.y+' -t hurtBall -rp 0 0 18 -u CannonBallUpdate -p xv '+this.properties.ballVel+' -p yv 0;';
			enterObjects(shotText);
		} else if(this.properties.delayFrames == 17) {
			var shotText = 'GameObject -d -x '+this.position.x+' -y '+this.position.y+' -t hurtBall -rp 0 0 18 -u CannonBallUpdate -p xv '+this.properties.ballVel+' -p yv 0;';
			enterObjects(shotText);
		} else if(this.properties.delayFrames == 35) {
			var shotText = 'GameObject -d -x '+this.position.x+' -y '+this.position.y+' -t hurtBall -rp 0 0 18 -u CannonBallUpdate -p xv '+this.properties.ballVel+' -p yv 0;';
			enterObjects(shotText);
		} else if(this.properties.delayFrames == 53) {
			var shotText = 'GameObject -d -x '+this.position.x+' -y '+this.position.y+' -t hurtBall -rp 0 0 18 -u CannonBallUpdate -p xv '+this.properties.ballVel+' -p yv 0;';
			enterObjects(shotText);
		} else if(this.properties.delayFrames == 71) {
			var shotText = 'GameObject -d -x '+this.position.x+' -y '+this.position.y+' -t hurtBall -rp 0 0 18 -u CannonBallUpdate -p xv '+this.properties.ballVel+' -p yv 0;';
			enterObjects(shotText);
			this.handler.removeObject(this);
		}
		*/
		
		if(this.properties.delayFrames == this.properties.delayList[this.properties.currShot]) {
			
			var edgeType = 'right';
			if(this.properties.ballVel > 0) {
				edgeType = 'left';
			} else if(this.properties.ballVel < 0) {
				edgeType = 'right';
			}
			
			var shotText = 'GameObject -d -x '+this.position.x+' -y '+this.position.y+' -t hurtBall -rp 0 0 18 -u CannonBallUpdate -cf CannonBallCollision -p xv '+this.properties.ballVel+' -p yv 0 -p edgeType '+edgeType+';';
			//var shotText = 'GameObject -d -x '+this.position.x+' -y '+this.position.y+' -t hurtBall -rp 0 0 18 -u CannonBallUpdate -p xv '+this.properties.ballVel+' -p yv 0 -p edgeType '+edgeType+';';
			//console.log(shotText);
			enterObjects(shotText);
			this.properties.currShot++;
		}
		
		this.properties.delayFrames++;
		
	}
	
	if(this.properties.yv == null) {
		this.properties.yv = -6;
	}
	
	var newPosition = {x: this.position.x, y: this.position.y + this.properties.yv};
	this.setPosition(newPosition);
}

/********
Dropper
*********/
function DropperUpdate() {
	if(this.properties.musicParent.audio.audioFiles[0].player.currentTime >= 36 && this.properties.trig != 1) {
		this.properties.trig = 1;
		this.properties.delayFrames = 0;
	}
	
	if(this.properties.trig == 1) {
		
		//if(this.properties.delayFrames % 225 == 0) {
		if(this.properties.delayFrames % 135 == 0) {
			//var shotText = 'GameObject -d -x '+this.position.x+' -y '+this.position.y+' -t hurtBall -rp 0 0 18 -u CannonBallUpdate -p xv 0 -p yv '+this.properties.ballVel+' -p edgeType top -a BombAnimationPackage -ca 0;';
			var shotText = 'GameObject -x '+this.position.x+' -y '+this.position.y+' -t hurtBall -rp 0 0 18 -u CannonBallUpdate -cf CannonBallCollision -p xv 0 -p yv '+this.properties.ballVel+' -p edgeType top -a BombAnimationPackage -ca 0;';
			enterObjects(shotText);
		}
		
		this.properties.delayFrames++;
		
	}
	
	//var newPosition = {x: this.position.x, y: this.position.y + this.properties.yv};
	var newPosition = {x: this.properties.parentObj.position.x + 25, y: this.position.y};
	this.setPosition(newPosition);
}


function RocketShooterUpdate() {
	if(this.properties.musicParent.audio.audioFiles[0].player.currentTime >= 96 && this.properties.trig != 1) {
		this.properties.trig = 1;
		this.properties.delayFrames = 0;
	}
	
	if(this.properties.trig == 1) {
		
		if(this.properties.delayFrames % 180 == 0) {
			var dx = this.properties.parentObj.position.x - this.position.x + 25;
			var dy = this.properties.parentObj.position.y - this.position.y + 25;
			var hyp = Math.sqrt( (dx*dx) + (dy*dy) )
			
			var shotText = 'GameObject -d -x '+this.position.x+' -y '+this.position.y+' -t hurtBall -rp 0 0 18 -u CannonBallUpdate -cf CannonBallCollision -p xv '+((dx/hyp) * this.properties.ballVel)+' -p yv '+((dy/hyp) * this.properties.ballVel)+' -p edgeType bottom -a CannonBallAnimationPackage -ca 0;';
			enterObjects(shotText);
		}
		
		this.properties.delayFrames++;
		
	}
}

function setBackgroudColorMimi() {
	var backgroundCanvas = document.getElementById("canvasBG");
	backgroundCanvas.style = "background-color: white;"
}