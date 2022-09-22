'use strict'

function uiLogger() {
	if(keys.p) {
		console.log(this);
		if(this.properties.lastPStatus == 0) {
			if(paused == false) {
				paused = true;
			} else {
				paused = false;
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
			
			if (colObj.position.y - this.properties.parentObj.position.y <= this.properties.parentObj.properties.height + 1) {
				this.properties.parentObj.properties.jumpable = 1;
				this.properties.parentObj.properties.gravity = 0;
				//this.properties.parentObj.properties.yv = 0;
			} else {
				//console.log("No jump");
				this.properties.parentObj.properties.jumpable = 0;
				this.properties.parentObj.properties.gravity = 0.6;
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
	var GOJ = createGOJsonFromString("GameObject -x 0 -y 0 -v 0 0 -v 0 500 -d -t vector -cf platformerVectorCollide -nc platformerVectorNoCollide");
	var GOObj = createGOFromJSON(GOJ);
	this.properties.jumpVector = GOObj;
	GOObj.properties.parentObj = this;
	oHandler.addObject(GOObj);
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
		} else if(this.properties.parentObj.animations[this.properties.parentObj.currAnimation].currKeyFrame == 4) {
			this.position.x = this.properties.parentObj.position.x + 72;
			this.position.y = this.properties.parentObj.position.y;
		}
	} else if(this.properties.parentObj.currAnimation == 7) {
		if(this.properties.parentObj.animations[this.properties.parentObj.currAnimation].currKeyFrame == 0) {
			this.position.x = this.properties.parentObj.position.x;
			this.position.y = this.properties.parentObj.position.y;
		} else if(this.properties.parentObj.animations[this.properties.parentObj.currAnimation].currKeyFrame == 1) {
			this.position.x = this.properties.parentObj.position.x;
			this.position.y = this.properties.parentObj.position.y;
		} else if(this.properties.parentObj.animations[this.properties.parentObj.currAnimation].currKeyFrame == 2) {
			this.position.x = this.properties.parentObj.position.x - 18;
			this.position.y = this.properties.parentObj.position.y + 27;
		} else if(this.properties.parentObj.animations[this.properties.parentObj.currAnimation].currKeyFrame == 3) {
			this.position.x = this.properties.parentObj.position.x - 36;
			this.position.y = this.properties.parentObj.position.y + 27;
		} else if(this.properties.parentObj.animations[this.properties.parentObj.currAnimation].currKeyFrame == 4) {
			this.position.x = this.properties.parentObj.position.x - 72;
			this.position.y = this.properties.parentObj.position.y;
		}
	} else {
		oHandler.removeObject(this);
	}
}

function batHitCircleCollide(colObj,verIndex,intersection,colVer1,colVer2) {
	//console.log('collide');
	if(colObj.tag != null) {
		if(colObj.tag == 'enemy') {
			console.log('OUCH!');
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
	
	var creatinString = 'GameObject -x ' + (PlayerObj.position.x + 72) + ' -y ' + PlayerObj.position.y + ' -rp 0 0 16 -u batHitCircleUpdate -d -cf batHitCircleCollide';
	var GOJ = createGOJsonFromString(creatinString);
	var GOObj = createGOFromJSON(GOJ);
	GOObj.properties.parentObj = PlayerObj;
	oHandler.addObject(GOObj);
	
	var row = objectViewer.insertRow();
			
	var objCol = row.insertCell();
	var img = document.createElement("img");
	img.src = GOObj.defaultFrame;
	objCol.appendChild(img);
			
	var objInd = row.insertCell();
	objInd.innerHTML = "Delete";
	objInd.onclick = debugRemoveObject;
			
	var objStat = row.insertCell();
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
	
	if(keys.left && this.properties.slideStateY != 0) {
	//if(keys.left) {
		this.properties.xv = -7;
		if(this.properties.slideStateY == 1) {
			this.properties.slideStateY = 2;
		}
		this.currAnimation = 3;
	}
	
	if(keys.right && this.properties.slideStateY != 1) {
	//if(keys.right) {
		this.properties.xv = 7;
		if(this.properties.slideStateY == 0) {
			this.properties.slideStateY = 2;
		}
		this.currAnimation = 2;
	}
	
	if(this.currAnimation == 2 && this.properties.xv == 0) {
		this.currAnimation = 0;
	} else if(this.currAnimation == 3 && this.properties.xv == 0) {
		this.currAnimation = 1;
	}
	
	if(keys.up && this.properties.slideStateX != 0) {
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
	}
	
	//if(keys.down && this.properties.slideStateX != 1) {
	if(keys.down) {
		
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
		} else if(this.currAnimation == 1 || this.currAnimation == 3 || this.currAnimation == 5) {
			this.currAnimation = 7;
			this.animations[this.currAnimation].Done = false;
			this.properties.BatReady = 0;
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
	
	this.properties.yv = this.properties.yv + this.properties.gravity
	
	var newPosition = {x: this.position.x + this.properties.xv, y: this.position.y + this.properties.yv};
	this.setPosition(newPosition);
	
	if(this.properties.jumpVector != null) {
		console.log('changing vecotr position');
		var newjumpVectorPosition = {x: this.position.x, y: this.position.y + this.properties.height + 1};
		this.properties.jumpVector.setPosition(newjumpVectorPosition);
		this.properties.jumpVector.setPosition({x: this.properties.jumpVector.position.x + this.properties.jumpVector.vertices[1].offX, y: this.properties.jumpVector.position.y + this.properties.jumpVector.vertices[1].offY});
	}
	
	this.properties.xv = 0;
	//this.properties.yv = 0;
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
				this.position.y++;
				this.properties.yv = 0;
				if(colObj.position.y + colObj.vertices[colVer1].offY == colObj.position.y + colObj.vertices[colVer2].offY) {
					this.properties.slideStateX = 0;
				}
			} else if((this.position.y - this.delta.dy) < this.position.y) {
				//this.properties.jumpable = 1;
				this.position.y--;
				//this.properties.gravity = 0;
				this.properties.yv = 0;
				if(colObj.position.y + colObj.vertices[colVer1].offY == colObj.position.y + colObj.vertices[colVer2].offY) {
					this.properties.slideStateX = 1;
				}
			}
		} else if(colObj.tag == 'testBall') {
			console.log('Ball Intersection');
		}
	}
}

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