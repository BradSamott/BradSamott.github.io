'use strict'

function antiPlayerMovement() {
	if(this.properties == null) {
		console.log('No Prop');
		return;
	}
	
	if(this.position.x == null) {
		console.log('No Prop x');
		return;
	}
	
	if(this.position.y == null) {
		console.log('No Prop y');
		return;
	}
	
	if(this.properties.xv == null) {
		console.log('No Prop xv');
		return;
	}
	
	if(this.properties.yv == null) {
		console.log('No Prop yv');
		return;
	}
	
	if(keys.left && keys.right) {
		this.properties.xv = 0;
	} else if(keys.left) {
		//console.log('Left');
		this.properties.xv = -7;
	} else if(keys.right) {
		//console.log('Right');
		this.properties.xv = 7;
	} 
	
	if(keys.up && keys.down) {
		this.properties.yv = 0;
	} else if(keys.up) {
		//console.log('Up');
		this.properties.yv = -7;
	} else if(keys.down) {
		//console.log('Down');
		this.properties.yv = 7;
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
	
	var newPosition = {x: this.position.x + this.properties.xv, y: this.position.y + this.properties.yv};
	this.setPosition(newPosition);
	this.handler.CameraX = this.handler.CameraX + this.properties.xv;
	this.handler.CameraY = this.handler.CameraY + this.properties.yv;
	
	this.properties.xv = 0;
	this.properties.yv = 0;
	
	for (var key in this.properties.iObjects) {
		this.properties.iObjects[key].iframes++;
		if(this.properties.iObjects[key].iframes > this.properties.iObjects[key].maxIframes) {
			delete this.properties.iObjects[key];
		}
	}
}

function antiPlayerCollide(colObj,verIndex,intersection,colVer1,colVer2) {
	if(colObj.tag != null) {
		if(colObj.tag == 'bullet') {
			//console.log('Ball Intersection');
			if(this.properties.iObjects[String(colObj.properties.HandlerID)] == null) {
				console.log('Ball Attacks');
				this.properties.iObjects[String(colObj.properties.HandlerID)] = {
					iframes: 1,
					maxIframes: 225
				}
				this.properties.health = this.properties.health - 1;
				if(this.properties.health <= 0) {
					console.log('death');
				}
			}
		}
	}
}

function anitPlayerInit() {
	this.properties.iObjects = {};
}

function bulletMovement() {
	var newPosition = {x: this.position.x + this.properties.xv, y: this.position.y + this.properties.yv};
	this.setPosition(newPosition);
}