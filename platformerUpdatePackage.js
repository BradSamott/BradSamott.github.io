'use strict'

function uiLogger() {
	
	if(keys.right) {
		if(paused) {
			if(this.properties.lastRightStatus == 0) {
				frameFlip = true;
			}
			this.properties.lastRightStatus = 1;
		}
	} else {
		this.properties.lastRightStatus = 0;
	}
	
	if(keys.space) {
		if(paused) {
			if(this.properties.lastSpaceStatus == 0) {
				var fullPrint = {};
				for(var objI = 0; objI < this.handler.Objects.length; objI++) {
					//console.log("Object: " + objI);
					//console.log("  Tag: " + this.handler.Objects[objI].tag);
					//console.log("  X: " + this.handler.Objects[objI].position.x);
					//console.log("  Y: " + this.handler.Objects[objI].position.y);
					fullPrint[objI] = {};
					fullPrint[objI].ObjectIndex = objI;
					fullPrint[objI].Tag = this.handler.Objects[objI].tag;
					fullPrint[objI].X = this.handler.Objects[objI].position.x;
					fullPrint[objI].Y = this.handler.Objects[objI].position.y;
				}
				console.log(fullPrint);
			}
			this.properties.lastSpaceStatus = 1;
		}
	} else {
		this.properties.lastSpaceStatus = 0;
	}
	
	if(keys.p) {
		console.log(this);
		if(this.properties.lastPStatus == 0) {
			if(paused == false) {
				paused = true;
				
				for(var objI = 0; objI < this.handler.Objects.length; objI++) {
					if(this.handler.Objects[objI].tag == 'musicPlayer') {
						this.handler.Objects[objI].audio.audioFiles[0].player.pause();
					}
				}
			} else {
				paused = false;
				
				for(var objI = 0; objI < this.handler.Objects.length; objI++) {
					if(this.handler.Objects[objI].tag == 'musicPlayer') {
						this.handler.Objects[objI].audio.audioFiles[0].player.play();
					}
				}
			}
		}
		this.properties.lastPStatus = 1
	} else {
		this.properties.lastPStatus = 0;
	}
}

function platformerVectorCollide(colObj,verIndex,intersection,colVer1,colVer2) {
	if(colObj.tag != null) {
		
		if(colObj.tag == 'wall') {
			//console.log('Wall Found');
			if (colObj.position.y - this.properties.parentObj.position.y <= this.properties.parentObj.properties.height + 1) {
				this.properties.parentObj.properties.jumpable = 1;
				this.properties.parentObj.properties.gravity = 0;
				//this.properties.parentObj.properties.yv = 0;
				this.properties.hit = 1;
			} else {
				//console.log("No jump");
				if(this.properties.hit != 1) {
					this.properties.parentObj.properties.jumpable = 0;
					this.properties.parentObj.properties.gravity = 0.6;
				}
			}
			
		} else if(colObj.tag == 'platform') {
			//console.log('Platform Found');
			//console.log(colObj.position.y);
			//console.log(this.properties.parentObj.position.y);
			//console.log(colObj.position.y - this.properties.parentObj.position.y);
			//console.log(this.properties.parentObj.properties.height + 1);
			//console.log();
			if (colObj.position.y - this.properties.parentObj.position.y <= this.properties.parentObj.properties.height + 1) {
				//console.log("Jump");
				this.properties.parentObj.properties.jumpable = 1;
				this.properties.parentObj.properties.gravity = 0;
				//this.properties.parentObj.properties.yv = 0;
				this.properties.hit = 1;
			} else {
				//console.log("No jump");
				if(this.properties.hit != 1) {
					this.properties.parentObj.properties.jumpable = 0;
					this.properties.parentObj.properties.gravity = 0.6;
				}
			}
		} //else {
			//this.properties.parentObj.properties.jumpable = 0;
			//this.properties.parentObj.properties.gravity = 0.6;
		//}
	}
}

function platformerVectorNoCollide() {
	//console.log('No Collide');
	this.properties.parentObj.properties.jumpable = 0;
	this.properties.parentObj.properties.gravity = 0.6;
}

function createPlatformVector() {
	//var GOJ = createGOJsonFromString("GameObject -x 0 -y 0 -v 0 0 -v 0 500 -d -t vector -cf platformerVectorCollide -nc platformerVectorNoCollide");
	var GOJ = createGOJsonFromString("GameObject -x 0 -y 0 -v 0 0 -v 36 0 -d -t vector -cf platformerVectorCollide -nc platformerVectorNoCollide -p hit 0");
	var GOObj = createGOFromJSON(GOJ);
	this.properties.jumpVector = GOObj;
	GOObj.properties.parentObj = this;
	oHandler.addObject(GOObj);
	
	var GOJ2 = createGOJsonFromString("GameObject -u CameraController2");
	var GOObj2 = createGOFromJSON(GOJ2);
	//this.properties.jumpVector = GOObj2;
	GOObj2.properties.parentObj = this;
	oHandler.addObject(GOObj2);
	/*
	var row = objectViewer.insertRow();
			
	var objCol = row.insertCell();
	var img = document.createElement("img");
	img.src = GOObj.defaultFrame;
	objCol.appendChild(img);
			
	var objInd = row.insertCell();
	objInd.innerHTML = "Delete";
	objInd.onclick = debugRemoveObject;
			
	var objStat = row.insertCell();
	*/
}

function MrSniffHitBoxUpdate() {
	this.position.x = this.properties.parentObj.position.x;
	this.position.y = this.properties.parentObj.position.y;
}

function createPlatformVectorAndHitBox() {
	//var GOJ = createGOJsonFromString("GameObject -x 0 -y 0 -v 0 0 -v 0 500 -d -t vector -cf platformerVectorCollide -nc platformerVectorNoCollide");
	var GOJ = createGOJsonFromString("GameObject -x 0 -y 0 -v 0 0 -v 36 0 -d -t vector -cf platformerVectorCollide -nc platformerVectorNoCollide -p hit 0");
	var GOObj = createGOFromJSON(GOJ);
	this.properties.jumpVector = GOObj;
	GOObj.properties.parentObj = this;
	oHandler.addObject(GOObj);
	
	var hitboxRadius = 0;
	hitboxRadius = this.properties.height / 2
	
	var GOJ2 = createGOJsonFromString("GameObject -x 0 -y 0 -d -rp "+hitboxRadius+" "+hitboxRadius+" "+hitboxRadius+" -t enemyHitBox -u MrSniffHitBoxUpdate");
	var GOObj2 = createGOFromJSON(GOJ2);
	if(this.properties.children == null) {
		this.properties.children = []
		this.properties.children.push(GOObj2);
	}
	GOObj2.properties.parentObj = this;
	oHandler.addObject(GOObj2);
	
}

function createLadderAndStopper() {
	//var GOJ = createGOJsonFromString("GameObject -x 470 -y 1000 -v 0 0 -v 50 0 -v 50 150 -v 0 150 -d -t ladder;");
	var xOffLad = 470;
	var xOffStop = 495;
	if(this.properties.side == "right") {
		xOffLad = 470;
		xOffStop = 495;
	} else if(this.properties.side == "left") {
		xOffLad = 120;
		xOffStop = 145;
	}
	var GOJ = createGOJsonFromString("GameObject -x "+xOffLad+" -y "+(this.position.y+1)+" -v 0 0 topleft -v 50 0 topright -v 50 150 bottomright -v 0 150 bottomleft -d -t ladder;");
	var GOObj = createGOFromJSON(GOJ);
	//this.properties.ladder = GOObj;
	GOObj.properties.parentObj = this;
	oHandler.addObject(GOObj);
	
	//var GOJ2 = createGOJsonFromString("GameObject -x 495 -y 910 -rp 0 0 30 -d -t ladderStopper -cf ladderStopperAction;");
	var GOJ2 = createGOJsonFromString("GameObject -x "+xOffStop+" -y "+(this.position.y-89)+" -rp 0 0 30 -d -t ladderStopper -cf ladderStopperAction;");
	var GOObj2 = createGOFromJSON(GOJ2);
	//this.properties.ladderStopper = GOObj2;
	GOObj2.properties.parentObj = this;
	oHandler.addObject(GOObj2);
}

function batHitCircleUpdate() {
	//this.position.x = this.properties.parentObj.position.x + 72;
	//this.position.y = this.properties.parentObj.position.y;
	
	if(this.properties.parentObj.currAnimation == 6) {
		if(this.properties.parentObj.animations[this.properties.parentObj.currAnimation].currKeyFrame == 0) {
			this.position.x = this.properties.parentObj.position.x;
			this.position.y = this.properties.parentObj.position.y;
		} else if(this.properties.parentObj.animations[this.properties.parentObj.currAnimation].currKeyFrame == 1) {
			this.position.x = this.properties.parentObj.position.x;
			this.position.y = this.properties.parentObj.position.y;
		} else if(this.properties.parentObj.animations[this.properties.parentObj.currAnimation].currKeyFrame == 2) {
			this.position.x = this.properties.parentObj.position.x + 18;
			this.position.y = this.properties.parentObj.position.y + 27;
		} else if(this.properties.parentObj.animations[this.properties.parentObj.currAnimation].currKeyFrame == 3) {
			this.position.x = this.properties.parentObj.position.x + 36;
			this.position.y = this.properties.parentObj.position.y + 27;
			this.radialPoints[0].radius = 24;
		} else if(this.properties.parentObj.animations[this.properties.parentObj.currAnimation].currKeyFrame == 4) {
			this.position.x = this.properties.parentObj.position.x + 72;
			this.position.y = this.properties.parentObj.position.y;
			this.radialPoints[0].radius = 16;
		}
	} else if(this.properties.parentObj.currAnimation == 7) {
		if(this.properties.parentObj.animations[this.properties.parentObj.currAnimation].currKeyFrame == 0) {
			this.position.x = this.properties.parentObj.position.x + 36;
			this.position.y = this.properties.parentObj.position.y;
		} else if(this.properties.parentObj.animations[this.properties.parentObj.currAnimation].currKeyFrame == 1) {
			this.position.x = this.properties.parentObj.position.x + 36;
			this.position.y = this.properties.parentObj.position.y;
		} else if(this.properties.parentObj.animations[this.properties.parentObj.currAnimation].currKeyFrame == 2) {
			this.position.x = this.properties.parentObj.position.x + 18;
			this.position.y = this.properties.parentObj.position.y + 27;
		} else if(this.properties.parentObj.animations[this.properties.parentObj.currAnimation].currKeyFrame == 3) {
			this.position.x = this.properties.parentObj.position.x - 0;
			this.position.y = this.properties.parentObj.position.y + 27;
			this.radialPoints[0].radius = 24;
		} else if(this.properties.parentObj.animations[this.properties.parentObj.currAnimation].currKeyFrame == 4) {
			this.position.x = this.properties.parentObj.position.x - 36;
			this.position.y = this.properties.parentObj.position.y;
			this.radialPoints[0].radius = 16;
		}
	} else {
		this.handler.removeObject(this);
	}
}

function batHitCircleCollide(colObj,verIndex,intersection,colVer1,colVer2) {
	//console.log('collide');
	if(colObj.tag != null) {
		/*
		if(colObj.tag == 'enemy') {
			console.log('OUCH!');
			if(colObj.properties.health != null) {
				if(colObj.currAnimation != 1) {
					console.log('PAIN!');
					colObj.properties.health--;
				}
			}
		}
		*/
	}		
}

function MrSniffsUpdate() {
	if(this.properties.health <= 0) {
		this.handler.removeObject(this.properties.jumpVector);
		if(this.properties.children != null) {
			for(var i = 0; i < this.properties.children.length; i++) {
				this.handler.removeObject(this.properties.children[i]);
			}
		}
		this.handler.removeObject(this);
	}
	if(this.currAnimation == SniffAnimationStates.HurtLeft || this.currAnimation == SniffAnimationStates.HurtRight) {
		this.properties.iFrames++;
	}
	if(this.properties.iFrames == 60) {
		if(this.currAnimation == SniffAnimationStates.HurtLeft) {
			this.currAnimation = SniffAnimationStates.IdleLeft;
			this.properties.xv = -3;
		} else if(this.currAnimation == SniffAnimationStates.HurtRight) {
			this.currAnimation = SniffAnimationStates.IdleRight;
			this.properties.xv = 3;
		}
		
		var hitboxRadius = 0;
		hitboxRadius = (this.properties.height / 2)
		
		//var GOJ2 = createGOJsonFromString("GameObject -x 0 -y 0 -d -rp 18 18 18 -t enemyHitBox -u MrSniffHitBoxUpdate");
		var GOJ2 = createGOJsonFromString("GameObject -x 0 -y 0 -d -rp "+hitboxRadius+" "+hitboxRadius+" "+hitboxRadius+" -t enemyHitBox -u MrSniffHitBoxUpdate");
		var GOObj2 = createGOFromJSON(GOJ2);
		if(this.properties.children == null) {
			this.properties.children = []
		}
		this.properties.children.push(GOObj2);
		GOObj2.properties.parentObj = this;
		oHandler.addObject(GOObj2);
		
		this.properties.iFrames++;
	}
	if(this.properties.xv == null) {
		this.properties.xv = 0;
	}
	
	if(this.properties.yv == null) {
		this.properties.yv = 0;
	}
	if(this.properties.gravity == null) {
		//console.log('No Prop');
		return;
	} //else {
		//console.log(this.properties.gravity);
	//}
	
	this.properties.yv = this.properties.yv + this.properties.gravity
	
	var newPosition = {x: this.position.x + this.properties.xv, y: this.position.y + this.properties.yv};
	this.setPosition(newPosition);
	
	if(this.properties.jumpVector != null) {
		//console.log('changing vecotr position');
		var newjumpVectorPosition = {x: this.position.x, y: this.position.y + this.properties.height + 1};
		this.properties.jumpVector.setPosition(newjumpVectorPosition);
		//this.properties.jumpVector.setPosition({x: this.properties.jumpVector.position.x + this.properties.jumpVector.vertices[1].offX, y: this.properties.jumpVector.position.y + this.properties.jumpVector.vertices[1].offY});
		this.properties.jumpVector.setPosition({x: this.properties.jumpVector.position.x, y: this.properties.jumpVector.position.y + 500});
		this.properties.jumpVector.properties.hit = 0;
	}
}

function MrSniffsUpdate2() {
	if(this.properties.stayFrames == null) {
		this.properties.stayFrames = 0;
	}
	if(this.properties.jumping == null) {
		this.properties.jumping = 1;
	}
	if(this.properties.stayFrames < 20 && this.properties.jumping == 0) {
		if(this.currAnimation == SniffAnimationStates.IdleLeft || this.currAnimation == SniffAnimationStates.IdleRight) {
			this.properties.stayFrames++;
			this.properties.xv = 0;
			this.properties.yv = 0;
		}
	} else if(this.properties.jumping == 0) {
		if(this.currAnimation == SniffAnimationStates.IdleRight) {
			this.properties.xv = 6;
			this.properties.yv = -6;
			this.properties.jumping = 1;
		} else if(this.currAnimation == SniffAnimationStates.IdleLeft) {
			this.properties.xv = -6;
			this.properties.yv = -6;
			this.properties.jumping = 1;
		}
	}
	if(this.properties.health <= 0) {
		this.handler.removeObject(this.properties.jumpVector);
		if(this.properties.children != null) {
			for(var i = 0; i < this.properties.children.length; i++) {
				this.handler.removeObject(this.properties.children[i]);
			}
		}
		this.handler.removeObject(this);
	}
	if(this.currAnimation == SniffAnimationStates.HurtLeft || this.currAnimation == SniffAnimationStates.HurtRight) {
		this.properties.iFrames++;
	}
	if(this.properties.iFrames == 60) {
		if(this.currAnimation == SniffAnimationStates.HurtLeft) {
			this.currAnimation = SniffAnimationStates.IdleLeft;
			//this.properties.xv = -3;
		} else if(this.currAnimation == SniffAnimationStates.HurtRight) {
			this.currAnimation = SniffAnimationStates.IdleRight;
			//this.properties.xv = 3;
		}
		
		var hitboxRadius = 0;
		hitboxRadius = (this.properties.height / 2)
		
		//var GOJ2 = createGOJsonFromString("GameObject -x 0 -y 0 -d -rp 18 18 18 -t enemyHitBox -u MrSniffHitBoxUpdate");
		var GOJ2 = createGOJsonFromString("GameObject -x 0 -y 0 -d -rp "+hitboxRadius+" "+hitboxRadius+" "+hitboxRadius+" -t enemyHitBox -u MrSniffHitBoxUpdate");
		var GOObj2 = createGOFromJSON(GOJ2);
		if(this.properties.children == null) {
			this.properties.children = []
		}
		this.properties.children.push(GOObj2);
		GOObj2.properties.parentObj = this;
		oHandler.addObject(GOObj2);
		
		this.properties.iFrames++;
	}
	if(this.properties.xv == null) {
		this.properties.xv = 0;
	}
	
	if(this.properties.yv == null) {
		this.properties.yv = 0;
	}
	if(this.properties.gravity == null) {
		//console.log('No Prop');
		return;
	} //else {
		//console.log(this.properties.gravity);
	//}
	
	this.properties.yv = this.properties.yv + this.properties.gravity;
	
	var newPosition = {x: this.position.x + this.properties.xv, y: this.position.y + this.properties.yv};
	this.setPosition(newPosition);
	
	if(this.properties.jumpVector != null) {
		//console.log('changing vecotr position');
		var newjumpVectorPosition = {x: this.position.x, y: this.position.y + this.properties.height + 1};
		this.properties.jumpVector.setPosition(newjumpVectorPosition);
		//this.properties.jumpVector.setPosition({x: this.properties.jumpVector.position.x + this.properties.jumpVector.vertices[1].offX, y: this.properties.jumpVector.position.y + this.properties.jumpVector.vertices[1].offY});
		this.properties.jumpVector.setPosition({x: this.properties.jumpVector.position.x, y: this.properties.jumpVector.position.y + 500});
		this.properties.jumpVector.properties.hit = 0;
	}
}

function MrSniffCollide(colObj,verIndex,intersection,colVer1,colVer2) {
	if(colObj.tag != null) {
		if(colObj.tag == 'playerHitCircle') {
			console.log('OUCH!');
			if(this.currAnimation == SniffAnimationStates.IdleLeft || this.currAnimation == SniffAnimationStates.IdleRight) {
				console.log('PAIN!');
				this.properties.health--;
				if(this.currAnimation == SniffAnimationStates.IdleLeft) {
					this.currAnimation = SniffAnimationStates.HurtLeft;
				} else if(this.currAnimation == SniffAnimationStates.IdleRight) {
					this.currAnimation = SniffAnimationStates.HurtRight;
				}
				this.properties.iFrames = 0;
				
				if(this.properties.children != null) {
					console.log('Children removal');
					for(var i = 0; i < this.properties.children.length; i++) {
						this.handler.removeObject(this.properties.children[i]);
					}
				}
				this.properties.xv = 0;
				
			}
		} else if(colObj.tag == 'wall') {
			//console.log('Wall Collide');
			this.position.x = this.position.x - (((this.position.x + this.vertices[verIndex].offX) - intersection[0]));
			this.position.y = this.position.y - (((this.position.y + this.vertices[verIndex].offY) - intersection[1]));
			
			if((this.position.x - this.delta.dx) > this.position.x) {
				this.position.x++;
				if(colObj.position.x + colObj.vertices[colVer1].offX == colObj.position.x + colObj.vertices[colVer2].offX) {
					this.properties.slideStateY = 0;
					this.properties.xv = this.properties.xv * -1;
					if(this.properties.xv > 0) {
						this.currAnimation = SniffAnimationStates.IdleRight;
					} else if(this.properties.xv < 0) {
						this.currAnimation = SniffAnimationStates.IdleLeft;
					}
				}
				/*
				this.properties.xv = this.properties.xv * -1;
				if(this.properties.xv > 0) {
					this.currAnimation = SniffAnimationStates.IdleRight;
				} else if(this.properties.xv < 0) {
					this.currAnimation = SniffAnimationStates.IdleLeft;
				}
				*/
			} else if((this.position.x - this.delta.dx) < this.position.x) {
				this.position.x--;
				if(colObj.position.x + colObj.vertices[colVer1].offX == colObj.position.x + colObj.vertices[colVer2].offX) {
					this.properties.slideStateY = 1;
					this.properties.xv = this.properties.xv * -1;
					if(this.properties.xv > 0) {
						this.currAnimation = SniffAnimationStates.IdleRight;
					} else if(this.properties.xv < 0) {
						this.currAnimation = SniffAnimationStates.IdleLeft;
					}
				}
				/*
				this.properties.xv = this.properties.xv * -1;
				if(this.properties.xv > 0) {
					this.currAnimation = SniffAnimationStates.IdleRight;
				} else if(this.properties.xv < 0) {
					this.currAnimation = SniffAnimationStates.IdleLeft;
				}
				*/
			}
			
			if((this.position.y - this.delta.dy) > this.position.y) {
				//this.properties.jumpable = 1;
				this.position.y++;
				this.properties.yv = 0;
				if(colObj.position.y + colObj.vertices[colVer1].offY == colObj.position.y + colObj.vertices[colVer2].offY) {
					this.properties.slideStateX = 0;
				}
			} else if((this.position.y - this.delta.dy) < this.position.y) { //landing
				//this.properties.jumpable = 1;
				this.position.y--;
				//this.properties.gravity = 0;
				this.properties.yv = 0;
				if(colObj.position.y + colObj.vertices[colVer1].offY == colObj.position.y + colObj.vertices[colVer2].offY) {
					this.properties.slideStateX = 1;
				}
				
				console.log('Redoing vector');
				var newjumpVectorPosition = {x: this.position.x, y: this.position.y + this.properties.height + 1};
				this.properties.jumpVector.setPosition(newjumpVectorPosition);
				this.properties.jumpVector.setPosition({x: this.properties.jumpVector.position.x, y: this.properties.jumpVector.position.y + 500});
				//this.properties.jumpVector.properties.hit = 0;
			}
			
		} else if(colObj.tag == 'platform') {
			//console.log('Platform Collide');
			this.position.x = this.position.x - (((this.position.x + this.vertices[verIndex].offX) - intersection[0]));
			this.position.y = this.position.y - (((this.position.y + this.vertices[verIndex].offY) - intersection[1]));
			
			if((this.position.x - this.delta.dx) > this.position.x) {
				this.position.x++;
				if(colObj.position.x + colObj.vertices[colVer1].offX == colObj.position.x + colObj.vertices[colVer2].offX) {
					this.properties.slideStateY = 0;
					this.properties.xv = this.properties.xv * -1;
					if(this.properties.xv > 0) {
						this.currAnimation = SniffAnimationStates.IdleRight;
					} else if(this.properties.xv < 0) {
						this.currAnimation = SniffAnimationStates.IdleLeft;
					}
				}
				/*
				this.properties.xv = this.properties.xv * -1;
				if(this.properties.xv > 0) {
					this.currAnimation = SniffAnimationStates.IdleRight;
				} else if(this.properties.xv < 0) {
					this.currAnimation = SniffAnimationStates.IdleLeft;
				}
				*/
			} else if((this.position.x - this.delta.dx) < this.position.x) {
				this.position.x--;
				if(colObj.position.x + colObj.vertices[colVer1].offX == colObj.position.x + colObj.vertices[colVer2].offX) {
					this.properties.slideStateY = 1;
					this.properties.xv = this.properties.xv * -1;
					if(this.properties.xv > 0) {
						this.currAnimation = SniffAnimationStates.IdleRight;
					} else if(this.properties.xv < 0) {
						this.currAnimation = SniffAnimationStates.IdleLeft;
					}
				}
				/*
				this.properties.xv = this.properties.xv * -1;
				if(this.properties.xv > 0) {
					this.currAnimation = SniffAnimationStates.IdleRight;
				} else if(this.properties.xv < 0) {
					this.currAnimation = SniffAnimationStates.IdleLeft;
				}
				*/
			}
			
			if((this.position.y - this.delta.dy) < this.position.y) { //landing
				//this.properties.jumpable = 1;
				this.position.y--;
				//this.properties.gravity = 0;
				this.properties.yv = 0;
				if(colObj.position.y + colObj.vertices[colVer1].offY == colObj.position.y + colObj.vertices[colVer2].offY) {
					this.properties.slideStateX = 1;
				}
				
				console.log('Redoing vector');
				var newjumpVectorPosition = {x: this.position.x, y: this.position.y + this.properties.height + 1};
				this.properties.jumpVector.setPosition(newjumpVectorPosition);
				this.properties.jumpVector.setPosition({x: this.properties.jumpVector.position.x, y: this.properties.jumpVector.position.y + 500});
				//this.properties.jumpVector.properties.hit = 0;
			}
		}
	}
}

function MrSniffCollide2(colObj,verIndex,intersection,colVer1,colVer2) {
	if(colObj.tag != null) {
		if(colObj.tag == 'playerHitCircle') {
			console.log('OUCH!');
			if(this.currAnimation == SniffAnimationStates.IdleLeft || this.currAnimation == SniffAnimationStates.IdleRight) {
				console.log('PAIN!');
				this.properties.health--;
				if(this.currAnimation == SniffAnimationStates.IdleLeft) {
					this.currAnimation = SniffAnimationStates.HurtLeft;
				} else if(this.currAnimation == SniffAnimationStates.IdleRight) {
					this.currAnimation = SniffAnimationStates.HurtRight;
				}
				this.properties.iFrames = 0;
				
				if(this.properties.children != null) {
					console.log('Children removal');
					for(var i = 0; i < this.properties.children.length; i++) {
						this.handler.removeObject(this.properties.children[i]);
					}
				}
				this.properties.xv = 0;
				
			}
		} else if(colObj.tag == 'wall') {
			//console.log('Wall Collide');
			this.position.x = this.position.x - (((this.position.x + this.vertices[verIndex].offX) - intersection[0]));
			this.position.y = this.position.y - (((this.position.y + this.vertices[verIndex].offY) - intersection[1]));
			
			if((this.position.x - this.delta.dx) > this.position.x) {
				this.position.x++;
				if(colObj.position.x + colObj.vertices[colVer1].offX == colObj.position.x + colObj.vertices[colVer2].offX) {
					this.properties.slideStateY = 0;
					this.properties.xv = this.properties.xv * -1;
					if(this.properties.xv > 0) {
						this.currAnimation = SniffAnimationStates.IdleRight;
					} else if(this.properties.xv < 0) {
						this.currAnimation = SniffAnimationStates.IdleLeft;
					}
				}
				/*
				this.properties.xv = this.properties.xv * -1;
				if(this.properties.xv > 0) {
					this.currAnimation = SniffAnimationStates.IdleRight;
				} else if(this.properties.xv < 0) {
					this.currAnimation = SniffAnimationStates.IdleLeft;
				}
				*/
			} else if((this.position.x - this.delta.dx) < this.position.x) {
				this.position.x--;
				if(colObj.position.x + colObj.vertices[colVer1].offX == colObj.position.x + colObj.vertices[colVer2].offX) {
					this.properties.slideStateY = 1;
					this.properties.xv = this.properties.xv * -1;
					if(this.properties.xv > 0) {
						this.currAnimation = SniffAnimationStates.IdleRight;
					} else if(this.properties.xv < 0) {
						this.currAnimation = SniffAnimationStates.IdleLeft;
					}
				}
				/*
				this.properties.xv = this.properties.xv * -1;
				if(this.properties.xv > 0) {
					this.currAnimation = SniffAnimationStates.IdleRight;
				} else if(this.properties.xv < 0) {
					this.currAnimation = SniffAnimationStates.IdleLeft;
				}
				*/
			}
			
			if((this.position.y - this.delta.dy) > this.position.y) {
				//this.properties.jumpable = 1;
				this.position.y++;
				this.properties.yv = 0;
				if(colObj.position.y + colObj.vertices[colVer1].offY == colObj.position.y + colObj.vertices[colVer2].offY) {
					this.properties.slideStateX = 0;
				}
			} else if((this.position.y - this.delta.dy) < this.position.y) { //landing
				//this.properties.jumpable = 1;
				this.position.y--;
				//this.properties.gravity = 0;
				this.properties.yv = 0;
				if(colObj.position.y + colObj.vertices[colVer1].offY == colObj.position.y + colObj.vertices[colVer2].offY) {
					this.properties.slideStateX = 1;
				}
				
				console.log('Redoing vector');
				var newjumpVectorPosition = {x: this.position.x, y: this.position.y + this.properties.height + 1};
				this.properties.jumpVector.setPosition(newjumpVectorPosition);
				this.properties.jumpVector.setPosition({x: this.properties.jumpVector.position.x, y: this.properties.jumpVector.position.y + 500});
				//this.properties.jumpVector.properties.hit = 0;
				
				this.properties.jumping = 0;
				this.properties.stayFrames = 0;
			}
			
		} else if(colObj.tag == 'platform') {
			//console.log('Platform Collide');
			this.position.x = this.position.x - (((this.position.x + this.vertices[verIndex].offX) - intersection[0]));
			this.position.y = this.position.y - (((this.position.y + this.vertices[verIndex].offY) - intersection[1]));
			
			if((this.position.x - this.delta.dx) > this.position.x) {
				this.position.x++;
				if(colObj.position.x + colObj.vertices[colVer1].offX == colObj.position.x + colObj.vertices[colVer2].offX) {
					this.properties.slideStateY = 0;
					this.properties.xv = this.properties.xv * -1;
					if(this.properties.xv > 0) {
						this.currAnimation = SniffAnimationStates.IdleRight;
					} else if(this.properties.xv < 0) {
						this.currAnimation = SniffAnimationStates.IdleLeft;
					}
				}
				/*
				this.properties.xv = this.properties.xv * -1;
				if(this.properties.xv > 0) {
					this.currAnimation = SniffAnimationStates.IdleRight;
				} else if(this.properties.xv < 0) {
					this.currAnimation = SniffAnimationStates.IdleLeft;
				}
				*/
			} else if((this.position.x - this.delta.dx) < this.position.x) {
				this.position.x--;
				if(colObj.position.x + colObj.vertices[colVer1].offX == colObj.position.x + colObj.vertices[colVer2].offX) {
					this.properties.slideStateY = 1;
					this.properties.xv = this.properties.xv * -1;
					if(this.properties.xv > 0) {
						this.currAnimation = SniffAnimationStates.IdleRight;
					} else if(this.properties.xv < 0) {
						this.currAnimation = SniffAnimationStates.IdleLeft;
					}
				}
				/*
				this.properties.xv = this.properties.xv * -1;
				if(this.properties.xv > 0) {
					this.currAnimation = SniffAnimationStates.IdleRight;
				} else if(this.properties.xv < 0) {
					this.currAnimation = SniffAnimationStates.IdleLeft;
				}
				*/
			}
			
			if((this.position.y - this.delta.dy) < this.position.y) { //landing
				//this.properties.jumpable = 1;
				this.position.y--;
				//this.properties.gravity = 0;
				this.properties.yv = 0;
				if(colObj.position.y + colObj.vertices[colVer1].offY == colObj.position.y + colObj.vertices[colVer2].offY) {
					this.properties.slideStateX = 1;
				}
				
				console.log('Redoing vector');
				var newjumpVectorPosition = {x: this.position.x, y: this.position.y + this.properties.height + 1};
				this.properties.jumpVector.setPosition(newjumpVectorPosition);
				this.properties.jumpVector.setPosition({x: this.properties.jumpVector.position.x, y: this.properties.jumpVector.position.y + 500});
				//this.properties.jumpVector.properties.hit = 0;
				
				this.properties.jumping = 0;
				this.properties.stayFrames = 0;
			}
		}
	}
}

function Floor1Trigger() {
	if(this.properties.pulled == 0) {
		var found = false;
		for(var i = 0; i < this.handler.Objects.length; i++) {
			if(this.handler.Objects[i].properties.trig == 'floor1') {
				found = true;
			}
		}
		
		if(!found) {
			var code = '';
			code = code + 'GameObject -x 120 -y 999 -v 0 0 -v 400 0 -t platform -d -pi createLadderAndStopper -p side right;'
			enterObjects(code);
			this.properties.pulled = 1;
		}
	}
}

function Floor2Trigger() {
	if(this.properties.pulled == 0) {
		var found = false;
		for(var i = 0; i < this.handler.Objects.length; i++) {
			if(this.handler.Objects[i].properties.trig == 'floor2') {
				found = true;
			}
		}
		
		if(!found) {
			var code = '';
			code = code + 'GameObject -x 120 -y 849 -v 0 0 -v 400 0 -t platform -d -pi createLadderAndStopper -p side left;'
			enterObjects(code);
			this.properties.pulled = 1;
		}
	}
}

function FloorNTrigger() {
	//console.log('FloorNTrigger');
	if(this.properties.pulled == 0) {
		//console.log(this.properties.trig);
		var found = false;
		for(var i = 0; i < this.handler.Objects.length; i++) {
			if(this.handler.Objects[i].properties.trig == this.properties.trigN) {
				found = true;
			}
		}
		
		if(!found && this.properties.active == 1) {
			console.log('Working');
			var code = '';
			if(this.properties.highest == 1) {
				code = code + 'GameObject -x 340 -y '+(this.properties.ycoord + 50)+' -rp 0 0 18 -d -cf refreshFloorsCollision;';
				console.log(code);
				enterObjects(code);
			} else {
				//code = code + 'GameObject -x 120 -y '+this.properties.ycoord+' -v 0 0 -v 400 0 -t platform -d -pi createLadderAndStopper -p side '+this.properties.side+';'
				this.handler.addObject(this.properties.children[0].properties.children[0]);
				this.handler.addObject(this.properties.children[0].properties.children[1]);
			}
			//console.log(code);
			//enterObjects(code);
			this.properties.pulled = 1;
		}
	}
}

function createFloorChildren() {
	var xOffLad = 470;
	var xOffStop = 495;
	if(this.properties.side == "right") {
		xOffLad = 470;
		xOffStop = 495;
	} else if(this.properties.side == "left") {
		xOffLad = 120;
		xOffStop = 145;
	}
	
	if(this.properties.children == null) {
		this.properties.children = []
	}
	
	var GOJ0 = createGOJsonFromString('GameObject -x 120 -y '+this.properties.ycoord+' -v 0 0 -v 400 0 -t platform -d -p side '+this.properties.side+';');
	var GOObj0 = createGOFromJSON(GOJ0);
	//this.properties.ladder = GOObj;
	GOObj0.properties.parentObj = this;
	this.properties.children[0] = GOObj0; 
	GOObj0.properties.children = [];
	this.handler.addObject(GOObj0);
	
	var GOJ = createGOJsonFromString("GameObject -x "+xOffLad+" -y "+(GOObj0.position.y+1)+" -v 0 0 topleft -v 50 0 topright -v 50 150 bottomright -v 0 150 bottomleft -d -t ladder;");
	var GOObj = createGOFromJSON(GOJ);
	//this.properties.ladder = GOObj;
	GOObj.properties.parentObj = GOObj0;
	GOObj0.properties.children[0] = GOObj;
	//oHandler.addObject(GOObj);
	
	//var GOJ2 = createGOJsonFromString("GameObject -x 495 -y 910 -rp 0 0 30 -d -t ladderStopper -cf ladderStopperAction;");
	var GOJ2 = createGOJsonFromString("GameObject -x "+xOffStop+" -y "+(GOObj0.position.y-89)+" -rp 0 0 30 -d -t ladderStopper -cf ladderStopperAction;");
	var GOObj2 = createGOFromJSON(GOJ2);
	//this.properties.ladderStopper = GOObj2;
	GOObj2.properties.parentObj = GOObj0;
	GOObj0.properties.children[1] = GOObj2;
	//oHandler.addObject(GOObj2);
}

function refreshFloorsCollision(colObj,verIndex,intersection,colVer1,colVer2) {
	if(colObj.tag != null) {
		if(colObj.tag == 'player') {
			var testcode = '';
			
			/*
			testcode = testcode + 'GameObject -x 0 -y 700 -pi moveCameraPosition;'
			testcode = testcode + 'GameObject -x 119 -y 0 -t wall -v 0 0 -v 0 2000 -d;'
			testcode = testcode + 'GameObject -x 521 -y 0 -t wall -v 0 0 -v 0 2000 -d;'
			testcode = testcode + 'GameObject -x 120 -y 1150 -v 0 0 -v 400 0 -t wall -d;'
			
			testcode = testcode + 'GameObject -x 125 -y 1090 -v 0 0 -v 36 0 -v 36 54 -v 0 54 -rp 18 15 18 -p BatReady 1 -p xv 0 -p yv 0 -p jumpable 1 -p gravity 6 -p slideStateX 2 -p slideStateY 2 -p height 54 -d -u platformerPlayerMovement -cf platformerPlayerCollide -t player -pi createPlatformVector -a PlatformerAnimationPackage -ca 0 -p climbMode 0 -p climbing 0;'
			testcode = testcode + 'GameObject -pi addClickOption -u showClickPosition;'
			
			testcode = testcode + 'GameObject -x 140 -y 1090 -t enemy -u MrSniffsUpdate -cf MrSniffCollide -p health 5 -d -rp 18 18 18 -a SniffsAnimationPackage -ca 0 -p trig floor1;'
			testcode = testcode + 'GameObject -u Floor1Trigger -p pulled 0;'
	
			testcode = testcode + 'GameObject -x 140 -y 940 -t enemy -u MrSniffsUpdate -cf MrSniffCollide -p health 5 -d -rp 18 18 18 -a SniffsAnimationPackage -ca 0 -p trig floor2;'
			testcode = testcode + 'GameObject -x 240 -y 940 -t enemy -u MrSniffsUpdate -cf MrSniffCollide -p health 10 -d -rp 18 18 18 -a SniffsAnimationPackage -ca 0 -p trig floor2;'
			testcode = testcode + 'GameObject -u Floor2Trigger -p pulled 0;'
	
			testcode = testcode + 'GameObject -x 140 -y 790 -t enemy -u MrSniffsUpdate -cf MrSniffCollide -p health 5 -d -rp 18 18 18 -a SniffsAnimationPackage -ca 0 -p trig floor3;'
			testcode = testcode + 'GameObject -u FloorNTrigger -p pulled 0 -p trigN floor3 -p ycoord 699 -p side right;'
	
			testcode = testcode + 'GameObject -x 140 -y 640 -t enemy -u MrSniffsUpdate -cf MrSniffCollide -p health 5 -d -rp 18 18 18 -a SniffsAnimationPackage -ca 0 -p trig floor4;'
			testcode = testcode + 'GameObject -u FloorNTrigger -p pulled 0 -p trigN floor4 -p highest 1;'
			*/
			
			testcode = testcode + 'GameObject -x 69 -y 0 -a badPhoneAnimationPackage -ca 0 -d;'
			
			testcode = testcode + 'GameObject -x 119 -y 0 -t wall -v 0 0 -v 0 2000 -d;'
			testcode = testcode + 'GameObject -x 521 -y 0 -t wall -v 0 0 -v 0 2000 -d;'
			testcode = testcode + 'GameObject -x 120 -y 1150 -v 0 0 -v 400 0 -t wall -d;'
			testcode = testcode + 'GameObject -x 0 -y 700 -pi moveCameraPosition;'
			testcode = testcode + 'GameObject -pi setupFloorRandom ;';
			testcode = testcode + 'GameObject -x 125 -y 1090 -v 0 0 topleft -v 36 0 topright -v 36 54 bottomright -v 0 54 bottomleft -rp 18 15 18 -p BatReady 1 -p xv 0 -p yv 0 -p jumpable 1 -p gravity 6 -p slideStateX 2 -p slideStateY 2 -p height 54 -d -u platformerPlayerMovement -cf platformerPlayerCollide -t player -pi createPlatformVector -a PlatformerAnimationPackage -ca 0 -p climbMode 0 -p climbing 0 -p health 5 -p iFrames -1 -p inControl 1 -p inStun 0 -p stunCounter 0;'
			testcode = testcode + 'GameObject -p lastPStatus 0 -p lastRightStatus 0 -su uiLogger;'
			
			this.handler.removeAllObjects();
			enterObjects(testcode);
		}
	}
}

function setupFloorRandom() {
	var side = 'right';
	
	var lastTrigger;
	
	for(var i = 1; i <= 5; i++) {
		var enemAmt = Math.floor(Math.random() * 3) + 1;
		
		console.log( 1000 - ((i-1)*150) );
		var GOJ0;
		if(i == 5) {
			GOJ0 = createGOJsonFromString('GameObject -u FloorNTrigger -pi createFloorChildren -p active 0 -p highest 1 -p pulled 0 -p trigN floor'+i+' -p side '+side+' -p ycoord '+( 1000 - ((i-1)*150) )+';');
		} else {
			GOJ0 = createGOJsonFromString('GameObject -u FloorNTrigger -pi createFloorChildren -p active 0 -p pulled 0 -p trigN floor'+i+' -p side '+side+' -p ycoord '+( 1000 - ((i-1)*150) )+';');
		}
		var GOObj0 = createGOFromJSON(GOJ0);
		GOObj0.properties.parentObj = this;
		this.properties.children = [];
		this.properties.children[i - 1] = GOObj0; 
		GOObj0.properties.children = [];
		this.handler.addObject(GOObj0);
		
		if(i > 1) {
			lastTrigger.properties.nextTrigger = GOObj0;
		} else {
			GOObj0.properties.active = 1;
		}
		
		lastTrigger = GOObj0;
		
		if(i < 5) {
			for(var j = 1; j <= enemAmt; j++) {
				//testcode = testcode + 'GameObject -x 240 -y '+( 1090 - ((i-1)*150)) )+' -t enemy -u MrSniffsUpdate -cf MrSniffCollide -p health 2 -d -rp 18 18 18 -a SniffsAnimationPackage -ca 0 -p trig floor1 -v 0 0 topleft -v 36 0 topright -v 36 36 bottomright -v 0 36 bottomleft -p gravity 0.6 -pi createPlatformVectorAndHitBox -p height 36 -p xv 3;'
				var enemyTypeNum = Math.floor(Math.random() * 2) + 1;
				var enemyType = '';
				var collideType = '';
				
				if(enemyTypeNum == 1) {
					enemyType = 'MrSniffsUpdate';
					collideType = 'MrSniffCollide';
				} else if(enemyTypeNum == 2) {
					enemyType = 'MrSniffsUpdate2';
					collideType = 'MrSniffCollide2';
				} else {
					enemyType = 'MrSniffsUpdate';
					collideType = 'MrSniffCollide';
				}
				
				var GOJE = createGOJsonFromString('GameObject -x '+( 240 + ((j-1)*100) )+' -y '+( 1090 - ((i-1)*150) )+' -t enemy -u '+enemyType+' -cf '+collideType+' -p health 2 -d -rp 18 18 18 -a SniffsAnimationPackage -ca 0 -p trig floor'+i+' -v 0 0 topleft -v 36 0 topright -v 36 36 bottomright -v 0 36 bottomleft -p gravity 0.6 -pi createPlatformVectorAndHitBox -p height 36 -p xv 3;');
				var GOObjE = createGOFromJSON(GOJE);
				if(i == 1) {
					this.handler.addObject(GOObjE);
				} else {
					GOObj0.properties.children[j] = GOObjE;
				}
			}
		} else {
			var enemyTypeNum = Math.floor(Math.random() * 2) + 1;
			var enemyType = '';
			var collideType = '';
				
			if(enemyTypeNum == 1) {
				enemyType = 'MrSniffsUpdate';
				collideType = 'MrSniffCollide';
			} else if(enemyTypeNum == 2) {
				enemyType = 'MrSniffsUpdate2';
				collideType = 'MrSniffCollide2';
			} else {
				enemyType = 'MrSniffsUpdate';
				collideType = 'MrSniffCollide';
			}
				
			var GOJE = createGOJsonFromString('GameObject -x '+( 240 + ((0-1)*100) )+' -y '+( 1058 - ((i-1)*150) )+' -t enemy -u '+enemyType+' -cf '+collideType+' -p health 5 -d -rp 36 36 36 -a bigSniffsAnimationPackage -ca 0 -p trig floor'+i+' -v 0 0 topleft -v 72 0 topright -v 72 72 bottomright -v 0 72 bottomleft -p gravity 0.6 -pi createPlatformVectorAndHitBox -p height 72 -p xv 3;');
			var GOObjE = createGOFromJSON(GOJE);
			//this.handler.addObject(GOObjE);
			GOObj0.properties.children[1] = GOObjE;
		}
		
		if(side == 'right') {
			side = 'left';
		} else {
			side = 'right';
		}
	}
}

function createBatHitBox(PlayerObj) {
	/*
	var creationString = 'GameObject -x ' + (PlayerObj.position.x + 36) + ' -y ' + PlayerObj.position.y + ' -v 0 0 -v 16 0 -v 16 16 -v 0 16 -d';
	var GOJ = createGOJsonFromString(creationString);
	var GOObj = createGOFromJSON(GOJ);
	//this.properties.jumpVector = GOObj;
	//GOObj.properties.parentObj = this;
	oHandler.addObject(GOObj);
	*/
	
	var startOffset = -72;
	
	if(PlayerObj.currAnimation == PlatformerAnimationStates.IdleRight || PlayerObj.currAnimation == PlatformerAnimationStates.RunRight || PlayerObj.currAnimation == PlatformerAnimationStates.JumpRight) {
		startOffset = -72;
	} else if(PlayerObj.currAnimation == PlatformerAnimationStates.IdleLeft || PlayerObj.currAnimation == PlatformerAnimationStates.RunLeft || PlayerObj.currAnimation == PlatformerAnimationStates.JumpLeft) {
		startOffset = 72;
	}
	
	console.log(startOffset);
	
	var creatinString = 'GameObject -x ' + (PlayerObj.position.x + startOffset) + ' -y ' + PlayerObj.position.y + ' -rp 0 0 16 -u batHitCircleUpdate -d -cf batHitCircleCollide -t playerHitCircle';
	var GOJ = createGOJsonFromString(creatinString);
	var GOObj = createGOFromJSON(GOJ);
	GOObj.properties.parentObj = PlayerObj;
	PlayerObj.handler.addObject(GOObj);
	
	/*
	var row = objectViewer.insertRow();
			
	var objCol = row.insertCell();
	var img = document.createElement("img");
	img.src = GOObj.defaultFrame;
	objCol.appendChild(img);
			
	var objInd = row.insertCell();
	objInd.innerHTML = "Delete";
	objInd.onclick = debugRemoveObject;
			
	var objStat = row.insertCell();
	*/
}

function platformerPlayerMovement() {
	//console.log('Plat');
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
		console.log('No Prop');
		return;
	}
	
	if(this.properties.inStun == 0 && this.properties.inControl == 1) {
		if(keys.left && this.properties.slideStateY != 0 && this.properties.climbing == 0 && this.currAnimation != PlatformerAnimationStates.SwingRight && this.currAnimation != PlatformerAnimationStates.SwingLeft) {
		//if(keys.left) {
			this.properties.xv = -7;
			if(this.properties.slideStateY == 1) {
				this.properties.slideStateY = 2;
			}
			if(this.currAnimation != PlatformerAnimationStates.RunLeft && this.currAnimation != PlatformerAnimationStates.JumpRight && this.currAnimation != PlatformerAnimationStates.JumpLeft) {
				//Reset Last Animation
				this.animations[this.currAnimation].keyFrames[this.animations[this.currAnimation].currKeyFrame].currFrame = 1;
				
				
				this.currAnimation = PlatformerAnimationStates.RunLeft;
				this.animations[this.currAnimation].currKeyFrame = 0;
			}
			//this.currAnimation = 3;
		}
		
		if(keys.right && this.properties.slideStateY != 1 && this.properties.climbing == 0 && this.currAnimation != PlatformerAnimationStates.SwingRight && this.currAnimation != PlatformerAnimationStates.SwingLeft) {
		//if(keys.right) {
			this.properties.xv = 7;
			if(this.properties.slideStateY == 0) {
				this.properties.slideStateY = 2;
			}
			if(this.currAnimation != PlatformerAnimationStates.RunRight && this.currAnimation != PlatformerAnimationStates.JumpRight && this.currAnimation != PlatformerAnimationStates.JumpLeft) {
				//Reset Last Animation
				this.animations[this.currAnimation].keyFrames[this.animations[this.currAnimation].currKeyFrame].currFrame = 1;
				
				
				this.currAnimation = PlatformerAnimationStates.RunRight;
				this.animations[this.currAnimation].currKeyFrame = 0;
			}
		}
		
		if(this.currAnimation == 2 && this.properties.xv == 0) {
			this.currAnimation = 0;
		} else if(this.currAnimation == 3 && this.properties.xv == 0) {
			this.currAnimation = 1;
		}
		
		if(keys.up && this.properties.slideStateX != 0 && this.properties.climbMode == 0) {
		//if(keys.up) {
			//console.log('Up Press');
			if(this.properties.jumpable == 1) {
				this.properties.yv = -10;
				//this.properties.jumpable = 0;
				if(this.properties.slideStateX == 1) {
					this.properties.slideStateX = 2;
				}
				//if(this.properties.gravity == 0) {
				//	this.properties.gravity = 0.6;
				//}
				if(this.currAnimation == 0 || this.currAnimation == 2) {
					this.currAnimation = 4;
				} else if(this.currAnimation == 1 || this.currAnimation == 3) {
					this.currAnimation = 5;
				}
			}
		} else if(keys.up && this.properties.slideStateX != 0 && this.properties.climbMode == 1) {
			this.properties.yv = -7;
			
			if(this.properties.climbing == 0) {
				this.properties.climbing = 1;
			}
			
			if(this.currAnimation != PlatformerAnimationStates.Climb) {
				//Reset prev animation
				this.animations[this.currAnimation].keyFrames[this.animations[this.currAnimation].currKeyFrame].currFrame = 1;
				
				//console.log('Changing to climb anim');
				this.currAnimation = PlatformerAnimationStates.Climb;
				this.animations[this.currAnimation].currKeyFrame = 0;
			}
		}
		
		//if(keys.down && this.properties.slideStateX != 1) {
		if(keys.down && this.properties.climbMode == 0) {
			
		} else if(keys.down && this.properties.climbMode == 1) {
			this.properties.yv = 7;
			
			if(this.properties.climbing == 0) {
				this.properties.climbing = 1;
			}
			
			if(this.currAnimation != PlatformerAnimationStates.Climb) {
				//Reset prev animation
				this.animations[this.currAnimation].keyFrames[this.animations[this.currAnimation].currKeyFrame].currFrame = 1;
				
				//console.log('Changing to climb anim');
				this.currAnimation = PlatformerAnimationStates.Climb;
				this.animations[this.currAnimation].currKeyFrame = 0;
			}
		}
		
		if(!keys.space) {
			this.properties.BatReady = 1;
		}
		
		if(keys.space && this.properties.BatReady == 1) {
			
			//this.Objects[objI].animations[this.Objects[objI].currAnimation].currKeyFrame
			
			if(this.currAnimation == 0 || this.currAnimation == 2 || this.currAnimation == 4) {
				this.currAnimation = 6;
				this.animations[this.currAnimation].Done = false;
				this.properties.BatReady = 0;
				this.animations[this.currAnimation].currKeyFrame = 0;
				this.animations[this.currAnimation].keyFrames[this.animations[this.currAnimation].currKeyFrame].currFrame = 1;
			} else if(this.currAnimation == 1 || this.currAnimation == 3 || this.currAnimation == 5) {
				this.currAnimation = 7;
				this.animations[this.currAnimation].Done = false;
				this.properties.BatReady = 0;
				this.animations[this.currAnimation].currKeyFrame = 0;
				this.animations[this.currAnimation].keyFrames[this.animations[this.currAnimation].currKeyFrame].currFrame = 1;
			}
			
			createBatHitBox(this);
		}
		
		if(this.animations[this.currAnimation].Done) {
			if(this.currAnimation == 6) {
				this.currAnimation = 0;
			} else if(this.currAnimation == 7) {
				this.currAnimation = 1;
			}
		}
		
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
		
	//console.log('climbMode: ' + this.properties.climbMode + ', climbing: ' + this.properties.climbing);
	if(this.properties.climbing == 0) {
		this.properties.yv = this.properties.yv + this.properties.gravity
	} else {
		this.properties.yv = this.properties.yv;
	}
		
	var newPosition = {x: this.position.x + this.properties.xv, y: this.position.y + this.properties.yv};
	this.setPosition(newPosition);
		
	if(this.properties.jumpVector != null) {
		//console.log('changing vecotr position');
		var newjumpVectorPosition = {x: this.position.x, y: this.position.y + this.properties.height + 1};
		this.properties.jumpVector.setPosition(newjumpVectorPosition);
		//this.properties.jumpVector.setPosition({x: this.properties.jumpVector.position.x + this.properties.jumpVector.vertices[1].offX, y: this.properties.jumpVector.position.y + this.properties.jumpVector.vertices[1].offY});
		this.properties.jumpVector.setPosition({x: this.properties.jumpVector.position.x, y: this.properties.jumpVector.position.y + 500});
		this.properties.jumpVector.properties.hit = 0;
	}
		
	this.properties.xv = 0;
		
	if(this.properties.climbing == 1) {
		this.properties.yv = 0;
	}
	//this.properties.yv = 0;
	
	
	if(this.properties.iFrames != -1) {
		this.properties.iFrames++;
	}
	if(this.properties.iFrames == 60) {
		this.properties.iFrames = -1;
	}
}

function platformerPlayerCollide(colObj,verIndex,intersection,colVer1,colVer2) {
	//console.log('collide');
	if(colObj.tag != null) {
		if(colObj.tag == 'wall') {
			//console.log('Wall Collide');
			this.position.x = this.position.x - (((this.position.x + this.vertices[verIndex].offX) - intersection[0]));
			this.position.y = this.position.y - (((this.position.y + this.vertices[verIndex].offY) - intersection[1]));
			
			if((this.position.x - this.delta.dx) > this.position.x) {
				this.position.x++;
				if(colObj.position.x + colObj.vertices[colVer1].offX == colObj.position.x + colObj.vertices[colVer2].offX) {
					this.properties.slideStateY = 0;
				}
			} else if((this.position.x - this.delta.dx) < this.position.x) {
				this.position.x--;
				if(colObj.position.x + colObj.vertices[colVer1].offX == colObj.position.x + colObj.vertices[colVer2].offX) {
					this.properties.slideStateY = 1;
				}
			}
			
			if((this.position.y - this.delta.dy) > this.position.y) {
				//this.properties.jumpable = 1;
				
				if(colObj.position.x + colObj.vertices[colVer1].offX != colObj.position.x + colObj.vertices[colVer2].offX) {
					this.position.y++;
				}
				
				this.properties.yv = 0;
				if(colObj.position.y + colObj.vertices[colVer1].offY == colObj.position.y + colObj.vertices[colVer2].offY) {
					this.properties.slideStateX = 0;
				}
			} else if((this.position.y - this.delta.dy) < this.position.y) {
				//this.properties.jumpable = 1;
				
				if(colObj.position.x + colObj.vertices[colVer1].offX != colObj.position.x + colObj.vertices[colVer2].offX) {
					this.position.y--;
				}
				
				//this.properties.gravity = 0;
				this.properties.yv = 0;
				if(colObj.position.y + colObj.vertices[colVer1].offY == colObj.position.y + colObj.vertices[colVer2].offY) {
					this.properties.slideStateX = 1;
				}
				
				var newjumpVectorPosition = {x: this.position.x, y: this.position.y + this.properties.height + 1};
				this.properties.jumpVector.setPosition(newjumpVectorPosition);
				this.properties.jumpVector.setPosition({x: this.properties.jumpVector.position.x, y: this.properties.jumpVector.position.y + 500});
				//this.properties.jumpVector.properties.hit = 0;
				
				if(this.currAnimation == PlatformerAnimationStates.JumpRight) {
					this.animations[this.currAnimation].keyFrames[this.animations[this.currAnimation].currKeyFrame].currFrame = 1;
					this.currAnimation = PlatformerAnimationStates.IdleRight;
					this.animations[this.currAnimation].currKeyFrame = 0;
				} else if(this.currAnimation == PlatformerAnimationStates.JumpLeft) {
					this.animations[this.currAnimation].keyFrames[this.animations[this.currAnimation].currKeyFrame].currFrame = 1;
					this.currAnimation = PlatformerAnimationStates.IdleLeft;
					this.animations[this.currAnimation].currKeyFrame = 0;
				}
			}
		} else if(colObj.tag == 'testBall') {
			console.log('Ball Intersection');
		} else if(colObj.tag == 'platform') {
			
			if((this.position.y - this.delta.dy) < this.position.y) {
				
				this.position.x = this.position.x - (((this.position.x + this.vertices[verIndex].offX) - intersection[0]));
				this.position.y = this.position.y - (((this.position.y + this.vertices[verIndex].offY) - intersection[1]));
				//this.properties.jumpable = 1;
				if(colObj.position.x + colObj.vertices[colVer1].offX != colObj.position.x + colObj.vertices[colVer2].offX) {
					this.position.y--;
				}
				//this.properties.gravity = 0;
				this.properties.yv = 0;
				if(colObj.position.y + colObj.vertices[colVer1].offY == colObj.position.y + colObj.vertices[colVer2].offY) {
					this.properties.slideStateX = 1;
				}
				
				//console.log(this.properties.jumpVector.position);
				//console.log(this.properties.jumpVector.delta);
				var newjumpVectorPosition = {x: this.position.x, y: this.position.y + this.properties.height + 1};
				//console.log(newjumpVectorPosition);
				this.properties.jumpVector.setPosition(newjumpVectorPosition);
				//console.log({x: this.properties.jumpVector.position.x, y: this.properties.jumpVector.position.y + 500});
				this.properties.jumpVector.setPosition({x: this.properties.jumpVector.position.x, y: this.properties.jumpVector.position.y + 500});
				//console.log(this.properties.jumpVector.delta);
				//this.properties.jumpVector.properties.hit = 0;
				
				if(this.currAnimation == PlatformerAnimationStates.JumpRight) {
					this.animations[this.currAnimation].keyFrames[this.animations[this.currAnimation].currKeyFrame].currFrame = 1;
					this.currAnimation = PlatformerAnimationStates.IdleRight;
					this.animations[this.currAnimation].currKeyFrame = 0;
				} else if(this.currAnimation == PlatformerAnimationStates.JumpLeft) {
					this.animations[this.currAnimation].keyFrames[this.animations[this.currAnimation].currKeyFrame].currFrame = 1;
					this.currAnimation = PlatformerAnimationStates.IdleLeft;
					this.animations[this.currAnimation].currKeyFrame = 0;
				}
			}
		} else if(colObj.tag == 'ladder') {
			//console.log(colObj.parentObj);
			if(this.position.y >= colObj.properties.parentObj.position.y) {
				if(this.vertices[verIndex].label == 'topright') {
					console.log('topright collision');
					console.log(colObj.vertices[colVer1].label);
					console.log(colObj.vertices[colVer2].label);
					if(colObj.vertices[colVer1].label == 'bottomleft' && colObj.vertices[colVer2].label == 'topleft') {
						console.log('left ladder wall');
						if((this.position.x - this.delta.dx) < this.position.x) {
							this.properties.climbMode = 1;
						} else if((this.position.x - this.delta.dx) > this.position.x) {
							this.properties.climbMode = 0;
						}
					}
				} else if(this.vertices[verIndex].label == 'topleft') {
					console.log('topleft collision');
					if(colObj.vertices[colVer1].label == 'topright' && colObj.vertices[colVer2].label == 'bottomright') {
						console.log('right ladder wall');
						if((this.position.x - this.delta.dx) < this.position.x) {
							this.properties.climbMode = 0;
						} else if((this.position.x - this.delta.dx) > this.position.x) {
							this.properties.climbMode = 1;
						}
					}
				}
				//this.properties.climbMode = 1;
			}
		} else if(colObj.tag == 'enemyHitBox') {
			console.log('Attacked');
			if(this.properties.iFrames == -1) {
				console.log('From Health: ' + this.properties.health);
				this.properties.health--;
				console.log('To Health: ' + this.properties.health);
				
				if(this.properties.health == 0) {
					console.log('Death');
				}
				
				this.properties.iFrames = 0;
				
				this.properties.inStun = 1;
				this.properties.stunCounter = 0;
				//console.log(this.properties.inStun);
				if(this.currAnimation == PlatformerAnimationStates.IdleRight || this.currAnimation == PlatformerAnimationStates.RunRight || this.currAnimation == PlatformerAnimationStates.JumpRight || this.currAnimation == PlatformerAnimationStates.SwingRight) {
					this.currAnimation = PlatformerAnimationStates.HurtRight;
				} else if(this.currAnimation == PlatformerAnimationStates.IdleLeft || this.currAnimation == PlatformerAnimationStates.RunLeft || this.currAnimation == PlatformerAnimationStates.JumpLeft || this.currAnimation == PlatformerAnimationStates.SwingLeft || this.currAnimation == PlatformerAnimationStates.Climb) {
					this.currAnimation = PlatformerAnimationStates.HurtLeft;
				}

				if(this.properties.health <= 0) {
					console.log('resetting');
					var testcode = '';
					
					testcode = testcode + 'GameObject -x 69 -y 0 -a badPhoneAnimationPackage -ca 0 -d;'
			
					testcode = testcode + 'GameObject -x 119 -y 0 -t wall -v 0 0 -v 0 2000 -d;'
					testcode = testcode + 'GameObject -x 521 -y 0 -t wall -v 0 0 -v 0 2000 -d;'
					testcode = testcode + 'GameObject -x 120 -y 1150 -v 0 0 -v 400 0 -t wall -d;'
					testcode = testcode + 'GameObject -x 0 -y 700 -pi moveCameraPosition;'
					testcode = testcode + 'GameObject -pi setupFloorRandom ;';
					testcode = testcode + 'GameObject -x 125 -y 1090 -v 0 0 topleft -v 36 0 topright -v 36 54 bottomright -v 0 54 bottomleft -rp 18 15 18 -p BatReady 1 -p xv 0 -p yv 0 -p jumpable 1 -p gravity 6 -p slideStateX 2 -p slideStateY 2 -p height 54 -d -u platformerPlayerMovement -cf platformerPlayerCollide -t player -pi createPlatformVector -a PlatformerAnimationPackage -ca 0 -p climbMode 0 -p climbing 0 -p health 5 -p iFrames -1 -p inControl 1 -p inStun 0 -p stunCounter 0;'
					testcode = testcode + 'GameObject -p lastPStatus 0 -p lastRightStatus 0 -su uiLogger;'
					
					this.handler.removeAllObjects();
					enterObjects(testcode);
				}
				
			}
		}
	}
}

function ladderStopperAction(colObj,verIndex,intersection,colVer1,colVer2) {
	if(colObj.tag != null) {
		if(colObj.tag == 'player' && this.properties.activated != true) {
			colObj.properties.climbMode = 0;
			colObj.properties.climbing = 0;
			
			var TOJ = createTOJsonFromString('TextObject -x 130 -y '+(this.position.y-10)+' -t "Hi Im Tom"');
			var TOObj = createTOFromJSON(TOJ);
			this.handler.addTextObject(TOObj);
			
			//console.log(this.properties.parentObj)
			this.handler.addObject(this.properties.parentObj.properties.parentObj.properties.nextTrigger.properties.children[1]);
			if(this.properties.parentObj.properties.parentObj.properties.nextTrigger.properties.children[2] != null) {
				this.handler.addObject(this.properties.parentObj.properties.parentObj.properties.nextTrigger.properties.children[2]);
			}
			if(this.properties.parentObj.properties.parentObj.properties.nextTrigger.properties.children[3] != null) {
				this.handler.addObject(this.properties.parentObj.properties.parentObj.properties.nextTrigger.properties.children[3]);
			}
			
			this.properties.parentObj.properties.parentObj.properties.nextTrigger.properties.active = 1;
			
			this.properties.activated = true;
		}
	}
}
/*
function ladderAction(colObj,verIndex,intersection,colVer1,colVer2) {
	if(colObj.tag != null) {
		if(colObj.tag == 'player') {
			colObj.properties.climbMode = 1;
		}
	}
}
*/

function CameraController() {
	if(keys.left) {
		oHandler.CameraX = oHandler.CameraX - 7;
		console.log(oHandler.CameraX);
	}
	
	if(keys.right) {
		oHandler.CameraX = oHandler.CameraX + 7;
		console.log(oHandler.CameraX);
	}
	
	if(keys.up) {
		
	}
	
	if(keys.down) {
		
	}
}

function CameraController2() {
	//this.handler.CameraX = this.properties.parentObj.position.x - 100;
	
	if(this.properties.parentObj.properties.climbing == 1) {
		//this.handler.CameraY = this.properties.parentObj.position.y - 200;
		this.handler.CameraY = this.properties.parentObj.position.y - 394;
	}
}

function addClickOption() {
	var currentHandler = this.handler;
	
	canvasUserInterface.addEventListener('click', function(e) {
		var mousepos = getMousePos(canvasUserInterface,e);
		//console.log("x: " + mousepos.x + ", y: " + mousepos.y);
		//console.log(currentHandler);
		currentHandler.cBuff.push(mousepos);
	});
}

function showClickPosition() {
	for(var i = 0; i < this.handler.cBuff.length; i++) {
		console.log({ localX: this.handler.cBuff[i].x, localY: this.handler.cBuff[i].y} );
		console.log({ absX: this.handler.cBuff[i].x + this.handler.CameraX, absY: this.handler.cBuff[i].y + this.handler.CameraY} );
	}
}

function moveCameraPosition() {
	this.handler.CameraX = this.position.x;
	this.handler.CameraY = this.position.y;
	
}

function playTrack() {
	this.audio.audioFiles[0].player.play();
}