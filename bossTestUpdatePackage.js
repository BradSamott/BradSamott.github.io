'use strict'

function ballAttackUpdate() {
	
	if(this.properties.delayFrames == null) {
		this.properties.delayFrames = 0;
	}
	
	this.properties.delayFrames++;
	
	if(this.properties.delayFrames == 60) {
		this.handler.removeObject(this);
	}
	
	var newPosition = {x: this.position.x + this.properties.xv, y: this.position.y + this.properties.yv};
	this.setPosition(newPosition);
}

function bossSniffsHelper(gB) {
	if(gB.properties.delayFrames == null) {
		gB.properties.delayFrames = 0;
	}
	
	if(gB.properties.generalCounter == null) {
		gB.properties.generalCounter = 0;
	}
	
	gB.properties.delayFrames++;
	
	if(gB.properties.generalCounter == 3) {
		gB.properties.generalCounter = 0;
		gB.properties.delayFrames = 0;
		gB.properties.mode = 1;
	}
	
	if(gB.properties.delayFrames == 30) {
		
		var vel = 6;
		var startX = 0;
		if(gB.currAnimation == SniffAnimationStates.IdleRight) {
			vel = 6;
			startX = 72;
		} else if(gB.currAnimation == SniffAnimationStates.IdleLeft) {
			vel = -6;
			startX = 0;
		}
		
		var GOJ2 = createGOJsonFromString("GameObject -x "+(gB.position.x + startX)+" -y "+(gB.position.y + 36)+" -d -rp 0 0 18 -t enemyHitBox -u ballAttackUpdate -p xv "+vel+" -p yv 0");
		var GOObj2 = createGOFromJSON(GOJ2);
		gB.handler.addObject(GOObj2);
		gB.properties.delayFrames = 0;
		gB.properties.generalCounter++;
	}
}

function bossSniffsHelper2(gB) {
	if(gB.properties.delayFrames == null) {
		gB.properties.delayFrames = 0;
	}
	
	if(gB.properties.generalCounter == null) {
		gB.properties.generalCounter = 0;
	}
	
	if(gB.currAnimation == SniffAnimationStates.IdleRight) {
		gB.properties.xv = 6;
	} else if(gB.currAnimation == SniffAnimationStates.IdleLeft) {
		gB.properties.xv = -6;
	}
	
	gB.properties.delayFrames++;
	
	if(gB.properties.delayFrames == 150) {
		gB.properties.generalCounter = 0;
		gB.properties.delayFrames = 0;
		gB.properties.mode = 0;
		gB.properties.xv = 0;
	}
	
}

function bossSniffsUpdate() {
	
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
	} else {
		//put behavior here
		if(this.properties.mode == 0) {
			bossSniffsHelper(this);
		} else if(this.properties.mode == 1) {
			bossSniffsHelper2(this);
		}
	}
	
	if(this.properties.iFrames == 60) {
		if(this.currAnimation == SniffAnimationStates.HurtLeft) {
			this.currAnimation = SniffAnimationStates.IdleLeft;
		} else if(this.currAnimation == SniffAnimationStates.HurtRight) {
			this.currAnimation = SniffAnimationStates.IdleRight;
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
		return;
	}
	
	this.properties.yv = this.properties.yv + this.properties.gravity;
	
	var newPosition = {x: this.position.x + this.properties.xv, y: this.position.y + this.properties.yv};
	this.setPosition(newPosition);
	
	if(this.properties.jumpVector != null) {
		//console.log('changing vecotr position');
		var newjumpVectorPosition = {x: this.position.x, y: this.position.y + this.properties.height + 1};
		this.properties.jumpVector.setPosition(newjumpVectorPosition);
		
		this.properties.jumpVector.setPosition({x: this.properties.jumpVector.position.x, y: this.properties.jumpVector.position.y + 500});
		this.properties.jumpVector.properties.hit = 0;
	}
}