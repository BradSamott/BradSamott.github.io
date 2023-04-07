'use strict'

/*
The base GameObject object. 
Hold basic data such as position, tag, an update function
to be ran and a late update to be run after.
Also has a list of vertices used to keep track of the shape.
*/
function GameObject(x, y, vertices, radialPoints, tag, update, lateUpdate, systemUpdate, collideFunction, animations, currAnimation, defaultFrame, defaultLength, defaultWidth, debugMode, properties, canvas, context, audio, init, postInit, nilCollideFunction) {
	this.position = {x, y};
	this.delta = {dx: 0, dy: 0};

	this.vertices = vertices;
	this.radialPoints = radialPoints;
	this.tag = tag;
	
	this.update = update;
	this.lateUpdate = lateUpdate;
	this.systemUpdate = systemUpdate;
	this.collideFunction = collideFunction;
	
	this.animations = animations;
	
	this.renderImgs = [];
	for(var i = 0; i < this.animations.length; i++) {
		for(var j = 0; j < this.animations[i].keyFrames.length; j++) {
			if(this.renderImgs[i] == null) {
				this.renderImgs[i] = [];
				var img = new Image();
				img.src = this.animations[i].keyFrames[j].keyFrame;
				this.renderImgs[i][j] = img;
			} else {
				var img = new Image();
				img.src = this.animations[i].keyFrames[j].keyFrame;
				this.renderImgs[i][j] = img;
			}
		}
	}
	
	this.currAnimation = currAnimation;
	this.defaultFrame = defaultFrame;
	this.defaultLength = defaultLength;
	this.defaultWidth = defaultWidth;
	this.debugMode = debugMode;
	
	this.properties = properties;
	
	this.canvas = canvas;
	this.context = context;
	
	this.audio = audio;
	
	this.init = init;
	this.postInit = postInit;
	
	this.nilCollideFunction = nilCollideFunction;
	
	this.getPosition = function() {return this.position}
	this.getTag = function() {return this.tag}
	
	this.setPosition = function(newPosition) {
		this.delta.dx = newPosition.x - this.position.x;
		this.delta.dy = newPosition.y - this.position.y;
		
		this.position.x = newPosition.x;
		this.position.y = newPosition.y;
	}
	
	this.handler = null;
	
}

function TextObject(x, y, size, font, color, textContent, properties) {
	this.position = {x, y};
	
	this.size = size;
	this.font = font;
	this.color = color;
	this.textContent = textContent;
	this.properties = properties;
}

/*
This is an Object used to store GameObjects.
It will render and tick the objects.
*/
function ObjectHandler() {
	this.Objects = [];
	this.textObjects = [];
	this.currID = 0;
	this.collisionBuffer = {};
	this.AreaWidth = 640;
	this.AreaHeight = 576;
	this.CameraX = 0;
	this.CameraY = 0;
	this.cBuff = [];
	
	this.addObject = function(object) {
		//console.log('adding');
		if(object.init != null) {
			//console.log('running init');
			object.init();
		}
		object.properties.HandlerID = this.currID;
		this.currID++;
		this.Objects.push(object);
		
		object.handler = this;
		
		if(object.postInit != null) {
			//console.log('running post init');
			object.postInit();
		}
		
		//object.handler = this;
	}
	
	this.addTextObject = function(object) {
		this.textObjects.push(object);
		object.Handler = this;
	}
	
	this.removeObject = function(object) {
		for(var objI = 0; objI < this.Objects.length; objI++) {
			if(this.Objects[objI] == object) {
				this.Objects.splice(objI, 1);
				break;
			}
		}
	}
	
	this.removeTextObject = function(object) {
		for(var objI = 0; objI < this.textObjects.length; objI++) {
			if(this.textObjects[objI] == object) {
				this.textObjects.splice(objI, 1);
				break;
			}
		}
	}
	
	this.removeAllObjects = function() {
		this.Objects = [];
		this.textObjects = [];
	}
	
	this.tickObjects = function() {
		for(var objI = 0; objI < this.Objects.length; objI++) { 
			if(this.Objects[objI].update != null) {
				this.Objects[objI].update();
			}
		}
		
		for(var objI = 0; objI < this.Objects.length; objI++) {
			if(this.Objects[objI].lateUpdate != null) {
				this.Objects[objI].lateUpdate();
			}
		}
	}
	
	this.systemTick = function() {
		//console.log('System Tick');
		for(var objI = 0; objI < this.Objects.length; objI++) { 
			if(this.Objects[objI].systemUpdate != null) {
				//console.log("System Tick Run");
				this.Objects[objI].systemUpdate();
			}
		}
	}
	
	this.checkCollisions = function() {
		for(var objI = 0; objI < this.Objects.length; objI++) { 
			//console.log('Checking Object: ' + objI + ' Tag: ' + this.Objects[objI].tag);
			if(this.Objects[objI].vertices != null) {
				for(var verI = 0; verI < this.Objects[objI].vertices.length; verI++) {
					for(var objC = 0; objC < this.Objects.length; objC++) {
						if(this.Objects[objC].vertices != null && objC != objI) {
							for(var verC = 0; verC < this.Objects[objC].vertices.length; verC++) { 
							
								if(verC == this.Objects[objC].vertices.length - 1 && this.Objects[objC].vertices.length == 2) {
									//console.log('Stop');
									break;
								}
							
								var startX1 = (this.Objects[objI].position.x + this.Objects[objI].vertices[verI].offX) - this.Objects[objI].delta.dx;
								var startY1 = (this.Objects[objI].position.y + this.Objects[objI].vertices[verI].offY) - this.Objects[objI].delta.dy;
								var endX1 = this.Objects[objI].position.x + this.Objects[objI].vertices[verI].offX;
								var endY1 = this.Objects[objI].position.y + this.Objects[objI].vertices[verI].offY;
								var startX2 = this.Objects[objC].position.x + this.Objects[objC].vertices[verC].offX;
								var startY2 = this.Objects[objC].position.y + this.Objects[objC].vertices[verC].offY;
								
								var colVer1 = verC;
								var colVer2;
								
								var endX2;
								var endY2;
								
								if(verC == this.Objects[objC].vertices.length - 1) {
									endX2 = this.Objects[objC].position.x + this.Objects[objC].vertices[0].offX;
									endY2 = this.Objects[objC].position.y + this.Objects[objC].vertices[0].offY;
									
									colVer2 = 0;
								} else {
									endX2 = this.Objects[objC].position.x + this.Objects[objC].vertices[verC + 1].offX;
									endY2 = this.Objects[objC].position.y + this.Objects[objC].vertices[verC + 1].offY;
									
									colVer2 = verC + 1;
								}
								/*
								if(this.Objects[objI].tag == 'player' && this.Objects[objC].tag == 'wall') {
									var printJ = {
										startX1: startX1,
										startY1: startY1,
										endX1: endX1,
										endY1: endY1,
										startX2: startX2,
										startY2: startY2,
										endX2: endX2,
										endY2: endY2
									}
									console.log(printJ);
								}
								*/
							
								var inter = FindSegmentIntersection(startX1,startY1,endX1,endY1,startX2,startY2,endX2,endY2);
								
								//console.log('Checking Collision: ' + inter);
								if(inter[0] != -1) {
									//console.log('Entering Collision');
									//console.log(inter);
									if(verC == 0 && verI == 2) {
										//console.log('start');
										//console.log(verC);
										//console.log(verI);
										//console.log((this.Objects[objI].position.x + this.Objects[objI].vertices[verI].offX) - this.Objects[objI].delta.dx);
										//console.log((this.Objects[objI].position.x + this.Objects[objI].vertices[verI].offX));
										//console.log(inter);
										//console.log('end');
									} else if(verC == 1 && verI == 2) {
										//console.log('start');
										//console.log(verC);
										//console.log(verI);
										//console.log((this.Objects[objI].position.x + this.Objects[objI].vertices[verI].offX) - this.Objects[objI].delta.dx);
										//console.log((this.Objects[objI].position.x + this.Objects[objI].vertices[verI].offX));
										//console.log(inter);
										//console.log('end');
									}
									
									var collisionObj = {
										RunObject: this.Objects[objI],
										collObj: this.Objects[objC],
										verIndex: verI,
										intersection: inter,
										collideVer1: colVer1,
										collideVer2: colVer2
									}
									
									if(this.collisionBuffer[this.Objects[objI].properties.HandlerID] == null) {
										this.collisionBuffer[this.Objects[objI].properties.HandlerID] = {};
									} 
									
									if(this.collisionBuffer[this.Objects[objI].properties.HandlerID][this.Objects[objC].properties.HandlerID] == null) {
										this.collisionBuffer[this.Objects[objI].properties.HandlerID][this.Objects[objC].properties.HandlerID] = {
											Ran: false,
											collisions: [collisionObj]
										}
									} else {
										this.collisionBuffer[this.Objects[objI].properties.HandlerID][this.Objects[objC].properties.HandlerID].collisions.push(collisionObj);
									}
									
									//colObj,verIndex,intersection,colVer1,colVer2
									//this.Objects[objI].collideFunction(this.Objects[objC],verI,inter,colVer1,colVer2);
									/*
									collisionObj.RunObject.collideFunction(collisionObj.collObj
									,collisionObj.verIndex
									,collisionObj.intersection
									,collisionObj.collideVer1
									,collisionObj.collideVer2);
									*/
									
									var currentLength = this.collisionBuffer[this.Objects[objI].properties.HandlerID][this.Objects[objC].properties.HandlerID].collisions.length - 1;
									
									/*
									if(this.Objects[objI].tag == 'player' && this.Objects[objC].tag == 'wall') {
										var printJ = {
											startX1: startX1,
											startY1: startY1,
											endX1: endX1,
											endY1: endY1,
											startX2: startX2,
											startY2: startY2,
											endX2: endX2,
											endY2: endY2
										}
										console.log(printJ);
									}
									*/
									
									this.collisionBuffer[this.Objects[objI].properties.HandlerID][this.Objects[objC].properties.HandlerID].collisions[currentLength].RunObject.collideFunction(
									this.collisionBuffer[this.Objects[objI].properties.HandlerID][this.Objects[objC].properties.HandlerID].collisions[currentLength].collObj
									,this.collisionBuffer[this.Objects[objI].properties.HandlerID][this.Objects[objC].properties.HandlerID].collisions[currentLength].verIndex
									,this.collisionBuffer[this.Objects[objI].properties.HandlerID][this.Objects[objC].properties.HandlerID].collisions[currentLength].intersection
									,this.collisionBuffer[this.Objects[objI].properties.HandlerID][this.Objects[objC].properties.HandlerID].collisions[currentLength].collideVer1
									,this.collisionBuffer[this.Objects[objI].properties.HandlerID][this.Objects[objC].properties.HandlerID].collisions[currentLength].collideVer2
									);
									
									this.collisionBuffer[this.Objects[objI].properties.HandlerID][this.Objects[objC].properties.HandlerID].Ran = true;
									
									//if(this.Objects[objC].properties.unmove == 1) {
										
									//}
									
								}
							}
						}
					}
				}
			}
			
			if(this.collisionBuffer[this.Objects[objI].properties.HandlerID] == null) {
				//console.log('No Hit');
				this.Objects[objI].nilCollideFunction();
			}
			
			if(this.Objects[objI].radialPoints != null) {
				for(var radI = 0; radI < this.Objects[objI].radialPoints.length; radI++) {
					for(var objC = 0; objC < this.Objects.length; objC++) {
						if(this.Objects[objC].radialPoints != null && objC != objI) {
							for(var radC = 0; radC < this.Objects[objC].radialPoints.length; radC++) {
								
								var dx = (this.Objects[objI].position.x + this.Objects[objI].radialPoints[radI].offX) - (this.Objects[objC].position.x + this.Objects[objC].radialPoints[radC].offX);
								var dy = (this.Objects[objI].position.y + this.Objects[objI].radialPoints[radI].offY) - (this.Objects[objC].position.y + this.Objects[objC].radialPoints[radC].offY);
								var dist = Math.sqrt((dx * dx) + (dy * dy));
								var radiusSum = this.Objects[objI].radialPoints[radI].radius + this.Objects[objC].radialPoints[radC].radius;
								
								//console.log('dist: ' + dist + ', radiusSum: ' + radiusSum);
								
								if(dist < radiusSum) {
									//console.log('call');
									this.Objects[objI].collideFunction(this.Objects[objC],null,null,null,null);
								}
								
							}
						}
					}
				}
			}
		}
		
		/*
		for(var key in this.collisionBuffer) {
			for(var keyJ in this.collisionBuffer[key]) {
				
				console.log('firstObj: ' + key + ' nextObj: ' + keyJ); 
				this.collisionBuffer[key][keyJ].Ran = true;
				for(var collideI = 0; collideI < this.collisionBuffer[key][keyJ].collisions.length; collideI++) {
					this.collisionBuffer[key][keyJ].collisions[collideI].RunObject.collideFunction(
					this.collisionBuffer[key][keyJ].collisions[collideI].collObj
					,this.collisionBuffer[key][keyJ].collisions[collideI].verIndex
					,this.collisionBuffer[key][keyJ].collisions[collideI].intersection
					,this.collisionBuffer[key][keyJ].collisions[collideI].collideVer1
					,this.collisionBuffer[key][keyJ].collisions[collideI].collideVer2);
				}
				
				for(var collideI = 0; collideI < this.collisionBuffer[key][keyJ].collisions.length; collideI++) {
					console.log('firstObj: ' + key + ' nextObj: ' + keyJ + '   ' + collideI);
					console.log(this.collisionBuffer[key][keyJ].collisions[collideI].verIndex);
					console.log(this.collisionBuffer[key][keyJ].collisions[collideI].intersection);
					console.log(this.collisionBuffer[key][keyJ].collisions[collideI].collideVer1);
					console.log(this.collisionBuffer[key][keyJ].collisions[collideI].collideVer2);
					
					this.collisionBuffer[key][keyJ].collisions[collideI].RunObject.collideFunction(
					this.collisionBuffer[key][keyJ].collisions[collideI].collObj
					,this.collisionBuffer[key][keyJ].collisions[collideI].verIndex
					,this.collisionBuffer[key][keyJ].collisions[collideI].intersection
					,this.collisionBuffer[key][keyJ].collisions[collideI].collideVer1
					,this.collisionBuffer[key][keyJ].collisions[collideI].collideVer2
					);
				}
			}
		}
		*/
		
		this.collisionBuffer = {};
		
	}
	
	this.renderObjects = function(PlayArea,PlayCanvas, BackgroundArea, BackgroundCanvas, ForegroundArea, ForegroundCanvas, UIArea, UICanvas) {
		PlayArea.clearRect(0, 0, PlayCanvas.width, PlayCanvas.height);
		
		BackgroundArea.clearRect(0, 0, BackgroundCanvas.width, BackgroundCanvas.height);
		ForegroundArea.clearRect(0, 0, ForegroundCanvas.width, ForegroundCanvas.height);
		//ctxGrid.clearRect(0, 0, canvasGrid.width, canvasGrid.height);
		UIArea.clearRect(0, 0, UICanvas.width, UICanvas.height);
		
		for(var objI = 0; objI < this.Objects.length; objI++) {
			//var img = new Image();
			//img.src = "";
			//console.log('CamX: ' + this.CameraX + ', CamY: ' + this.CameraY);
			
			var img;
			
			var xPos = this.Objects[objI].position.x - this.CameraX;
			var yPos = this.Objects[objI].position.y - this.CameraY;
			if(this.Objects[objI].animations[this.Objects[objI].currAnimation] != null) {
			if(this.Objects[objI].animations[this.Objects[objI].currAnimation].fixedAnimation == true) {
					var xPos = this.Objects[objI].position.x;
					var yPos = this.Objects[objI].position.y;
				}
			}
			var cWidth = 0;
			var cLength = 0;
			var drawOffsetX = 0;
			var drawOffsetY = 0;
			if(this.Objects[objI].animations.length == 0 || this.Objects[objI].currAnimation < 0 || this.Objects[objI].currAnimation >= this.Objects[objI].animations.length) {
				img = new Image();
				img.src = this.Objects[objI].defaultFrame;
				cLength = this.Objects[objI].defaultLength;
				cWidth = this.Objects[objI].defaultWidth;
			} else {
				//img.src = this.Objects[objI].animations[this.Objects[objI].currAnimation].keyFrames[this.Objects[objI].animations[this.Objects[objI].currAnimation].currKeyFrame].keyFrame;
				img = this.Objects[objI].renderImgs[this.Objects[objI].currAnimation][this.Objects[objI].animations[this.Objects[objI].currAnimation].currKeyFrame];
				cLength = this.Objects[objI].animations[this.Objects[objI].currAnimation].keyFrames[this.Objects[objI].animations[this.Objects[objI].currAnimation].currKeyFrame].length;
				cWidth = this.Objects[objI].animations[this.Objects[objI].currAnimation].keyFrames[this.Objects[objI].animations[this.Objects[objI].currAnimation].currKeyFrame].width;
				
				if(this.Objects[objI].animations[this.Objects[objI].currAnimation].keyFrames[this.Objects[objI].animations[this.Objects[objI].currAnimation].currKeyFrame].drawOffX != null) {
					drawOffsetX = this.Objects[objI].animations[this.Objects[objI].currAnimation].keyFrames[this.Objects[objI].animations[this.Objects[objI].currAnimation].currKeyFrame].drawOffX;
				}
				
				if(this.Objects[objI].animations[this.Objects[objI].currAnimation].keyFrames[this.Objects[objI].animations[this.Objects[objI].currAnimation].currKeyFrame].drawOffY != null) {
					drawOffsetY = this.Objects[objI].animations[this.Objects[objI].currAnimation].keyFrames[this.Objects[objI].animations[this.Objects[objI].currAnimation].currKeyFrame].drawOffY;
				}
				
				this.Objects[objI].animations[this.Objects[objI].currAnimation].keyFrames[this.Objects[objI].animations[this.Objects[objI].currAnimation].currKeyFrame].currFrame++;
				if(this.Objects[objI].animations[this.Objects[objI].currAnimation].keyFrames[this.Objects[objI].animations[this.Objects[objI].currAnimation].currKeyFrame].currFrame > this.Objects[objI].animations[this.Objects[objI].currAnimation].keyFrames[this.Objects[objI].animations[this.Objects[objI].currAnimation].currKeyFrame].duration) {
					this.Objects[objI].animations[this.Objects[objI].currAnimation].keyFrames[this.Objects[objI].animations[this.Objects[objI].currAnimation].currKeyFrame].currFrame = 1;
					this.Objects[objI].animations[this.Objects[objI].currAnimation].currKeyFrame++;
				}
				
				if(this.Objects[objI].animations[this.Objects[objI].currAnimation].currKeyFrame >= this.Objects[objI].animations[this.Objects[objI].currAnimation].keyFrames.length) {
					if(this.Objects[objI].animations[this.Objects[objI].currAnimation].Loops) {
						this.Objects[objI].animations[this.Objects[objI].currAnimation].currKeyFrame = 0;
					} else {
						this.Objects[objI].animations[this.Objects[objI].currAnimation].currKeyFrame--;
						this.Objects[objI].animations[this.Objects[objI].currAnimation].Done = true;
					}
				}
			}
			//PlayArea.drawImage(img, xPos, yPos, cWidth, cLength);
			this.Objects[objI].context.drawImage(img, xPos + drawOffsetX, yPos + drawOffsetY, cWidth, cLength);
			
			//this.Objects[objI].context.drawImage(img, xPos + drawOffsetX, yPos + drawOffsetY - 50, cWidth, cLength);
			
			/*
			var currObj = this.Objects[objI];
			img.onload = function () {
				currObj.context.drawImage(img, xPos, yPos, cWidth, cLength); 
			}
			*/
			
			if(this.Objects[objI].debugMode) {
				for(var verI = 0; verI < this.Objects[objI].vertices.length; verI++) {
					/*
					PlayArea.beginPath();
					PlayArea.moveTo(0, 0);
					PlayArea.lineTo(300, 150);
					PlayArea.stroke();
					*/
					
					PlayArea.beginPath();
					PlayArea.moveTo(this.Objects[objI].position.x + this.Objects[objI].vertices[verI].offX - this.CameraX, this.Objects[objI].position.y + this.Objects[objI].vertices[verI].offY - this.CameraY);
					
					if(this.Objects[objI].vertices.length - 1 == verI) {
						PlayArea.lineTo(this.Objects[objI].position.x + this.Objects[objI].vertices[0].offX - this.CameraX, this.Objects[objI].position.y + this.Objects[objI].vertices[0].offY - this.CameraY);
					} else {
						PlayArea.lineTo(this.Objects[objI].position.x + this.Objects[objI].vertices[verI + 1].offX - this.CameraX, this.Objects[objI].position.y + this.Objects[objI].vertices[verI + 1].offY - this.CameraY);
					}
					
					PlayArea.stroke();
				}
				
				for(var radI = 0; radI < this.Objects[objI].radialPoints.length; radI++) {
					//console.log('Drawing Radial');
					PlayArea.beginPath();
					PlayArea.arc(this.Objects[objI].position.x + this.Objects[objI].radialPoints[radI].offX - this.CameraX, this.Objects[objI].position.y + this.Objects[objI].radialPoints[radI].offY - this.CameraY, this.Objects[objI].radialPoints[radI].radius, 0, 2 * Math.PI, false);
					PlayArea.stroke();
				}
				
				/*
				objectViewer.rows[objI + 1].cells[2].innerHTML = 'position: ' + JSON.stringify(this.Objects[objI].position) + ', properties: {';
				
				for (var key in this.Objects[objI].properties) {
					if (this.Objects[objI].properties.hasOwnProperty(key)) {
						//console.log(key + " -> " + p[key]);
						if(key != "parentObj") {
							objectViewer.rows[objI + 1].cells[2].innerHTML = objectViewer.rows[objI + 1].cells[2].innerHTML + ", " + key + ":" + this.Objects[objI].properties[key];
						}
					}
				}
				objectViewer.rows[objI + 1].cells[2].innerHTML = objectViewer.rows[objI + 1].cells[2].innerHTML + "}";
				*/
			}
		}
	}
	
	this.renderTextObjects = function(PlayArea,PlayCanvas, BackgroundArea, BackgroundCanvas, ForegroundArea, ForegroundCanvas, UIArea, UICanvas) {
		for(var objI = 0; objI < this.textObjects.length; objI++) {
			//console.log("Text Obj x: " + this.textObjects[objI].textContent);
			//ctxUserInterface.font = ""+this.textObjects[objI].size+"px "+this.textObjects[objI].font+"";
			//ctxUserInterface.fillStyle = this.textObjects[objI].color;
			//ctxUserInterface.textAlign = "left";
			//ctxUserInterface.fillText(this.textObjects[objI].textContent, this.textObjects[objI].position.x, this.textObjects[objI].position.y);
			
			var xPos = this.textObjects[objI].position.x - this.CameraX;
			var yPos = this.textObjects[objI].position.y - this.CameraY;
			
			UIArea.font = ""+this.textObjects[objI].size+"px "+this.textObjects[objI].font+"";
			UIArea.fillStyle = this.textObjects[objI].color;
			UIArea.textAlign = "left";
			UIArea.fillText(this.textObjects[objI].textContent, xPos, yPos);
		}
	}
	
	this.setAreaSize = function(newWidth, newLength) {
		this.AreaWidth = newWidth;
		this.AreaHeight = newLength;
	}
}

/*
Uses a JSON to build a Game Object.
The elements of the JSON are used as
arguments for the constructor.
*/
function createGOFromJSON(jArg,DevFlag) {
	var x = 0;
	var y = 0;
	var vertices = [];
	var radialPoints = [];
	var tag = '';
	var update = function() {};
	var lateUpdate = function() {};
	var systemUpdate = function() {};
	var collideFunction = function(colObj,verIndex,intersection) {};
	var animations = [];
	var currAnimation = -1;
	var defaultFrame = '';
	var defaultLength = 50;
	var defaultWidth = 50;
	var debugMode = false;
	var properties = {};
	var canvas;
	var context;
	if(DevFlag == 1) {
		canvas = canvasPlayDev;
		context = ctxPlayDev;
	} else {
		canvas = canvasPlay;
		context = ctxPlay;
	}
	var audio = {audioFiles: []};
	var init = function() {};
	var postInit = function() {};
	var nilCollideFunction = function() {};
	
	if(jArg.x != null) {
		x = jArg.x;
	}
	
	if(jArg.y != null) {
		y = jArg.y;
	}
	
	if(jArg.vertices != null) {
		vertices = jArg.vertices;
	}
	
	if(jArg.radialPoints != null) {
		radialPoints = jArg.radialPoints;
	}
	
	if(jArg.tag != null) {
		tag = jArg.tag;
	}
	
	if(jArg.update != null) {
		update = jArg.update;
	}
	
	if(jArg.lateUpdate != null) {
		lateUpdate = jArg.lateUpdate;
	}
	
	if(jArg.systemUpdate != null) {
		systemUpdate = jArg.systemUpdate;
	}
	
	if(jArg.collideFunction != null) {
		collideFunction = jArg.collideFunction;
	}
	
	if(jArg.animations != null) {
		animations = jArg.animations;
	}
	
	if(jArg.currAnimation != null) {
		currAnimation = jArg.currAnimation;
	}
	
	if(jArg.defaultFrame != null) {
		defaultFrame = jArg.defaultFrame;
	}
	
	if(jArg.defaultLength != null) {
		defaultLength = jArg.defaultLength;
	}
	
	if(jArg.defaultWidth != null) {
		defaultWidth = jArg.defaultWidth;
	}
	
	if(jArg.debugMode != null) {
		debugMode = jArg.debugMode;
	}
	
	if(jArg.properties != null) {
		properties = jArg.properties;
	}
	
	if(jArg.canvas != null) {
		canvas = jArg.canvas;
	}
	
	if(jArg.context != null) {
		context = jArg.context;
	}
	
	if(jArg.audio != null) {
		audio = jArg.audio;
	}
	
	if(jArg.init != null) {
		init = jArg.init;
	}
	
	if(jArg.postInit != null) {
		postInit = jArg.postInit;
	}
	
	if(jArg.nilCollideFunction != null) {
		nilCollideFunction = jArg.nilCollideFunction;
	}
	
	var newGameObject = new GameObject(x,y,vertices,radialPoints,tag,update,lateUpdate,systemUpdate,collideFunction,animations,currAnimation,defaultFrame,defaultLength,defaultWidth,debugMode,properties,canvas,context,audio,init,postInit,nilCollideFunction);
	
	return newGameObject;
}

function splitQuoteGroup(inputString) {
	//The parenthesis in the regex creates a captured group within the quotes
	var myRegexp = /[^\s"]+|"([^"]*)"/gi;
	
	var myArray = [];

	do {
		//Each call to exec returns the next regex match as an array
		var match = myRegexp.exec(inputString);
		if (match != null)
		{
			//Index 1 in the array is the captured group if it exists
			//Index 0 is the matched text, which we use if no captured group exists
			myArray.push(match[1] ? match[1] : match[0]);
		}
	} while (match != null);
	
	return myArray;
}

/*
Function used to build a JSON containing the
arguments for making a Game Object.
*/
function createGOJsonFromString(args) {
	var jsonArg = {
		properties: {}, 
		audio: {audioFiles: []}
	};
	
	//var argsList = args.replace(/\s\s+/g, ' ').replace(';','').replace('\n','').split(" ");
	//console.log(args.replace(';','').replace('\n',''));
	var argsList = splitQuoteGroup(args.replace(';','').replace('\n',''));
	
	//console.log('argsList: ' + argsList);
	
	for(var i = 0; i < argsList.length; i++) {
		
		//x-coord
		if(argsList[i] == '-x') {
			if(!isNaN(argsList[i + 1]) && argsList[i + 1] != null && argsList[i + 1] != '') {
				jsonArg.x = parseFloat(argsList[i + 1]);
				i++;
			}
		}
		
		//y-coord
		else if(argsList[i] == '-y') {
			if(!isNaN(argsList[i + 1]) && argsList[i + 1] != null && argsList[i + 1] != '') {
				jsonArg.y = parseFloat(argsList[i + 1]);
				i++;
			}
		}
		
		//vertices
		else if(argsList[i] == '-v') {
			if(!isNaN(argsList[i + 1]) && argsList[i + 1] != null && argsList[i + 1] != '') {
				var newVert = {};
				newVert.offX = parseFloat(argsList[i + 1]);
				
				if(!isNaN(argsList[i + 2]) && argsList[i + 2] != null && argsList[i + 2] != '') {
					newVert.offY = parseFloat(argsList[i + 2]);
					//i = i + 2;
					
					if(argsList[i + 3] != null && argsList[i + 3] != '') {
						if(argsList[i + 3].substring(0,1) != '-') {
							newVert.label = argsList[i + 3];
							i = i + 3;
						} else {
							i = i + 2;
						}
					} else {
						i = i + 2;
					}
				} else {
					newVert.offY = 0;
					i++;
				}
				
				if(jsonArg.vertices == null) {
					jsonArg.vertices = [];
				}
				
				jsonArg.vertices.push(newVert);
			}
		}
		
		//radial points
		else if(argsList[i] == '-rp') {
			if(!isNaN(argsList[i + 1]) && argsList[i + 1] != null && argsList[i + 1] != '') {
				var newRadP = {};
				newRadP.offX = parseFloat(argsList[i + 1]);
				
				if(!isNaN(argsList[i + 2]) && argsList[i + 2] != null && argsList[i + 2] != '') {
					newRadP.offY = parseFloat(argsList[i + 2]);
					//i = i + 2;
					
					if(!isNaN(argsList[i + 3]) && argsList[i + 3] != null && argsList[i + 3] != '') {
						newRadP.radius = parseFloat(argsList[i + 3]);
						i = i + 3;
					} else {
						newRadP.radius = 0;
						i = i + 2;
					}
				} else {
					newRadP.offY = 0;
					newRadP.radius = 0;
					i++;
				}
				
				if(jsonArg.radialPoints == null) {
					jsonArg.radialPoints = [];
				}
				
				jsonArg.radialPoints.push(newRadP);
			}
		}
		
		//tag
		else if(argsList[i] == '-t') {
			if(argsList[i + 1] != null && argsList[i + 1] != '') {
				jsonArg.tag = argsList[i + 1];
				i++;
			}
		}
		
		//update function
		else if(argsList[i] == '-u') {
			if(argsList[i + 1] != null && argsList[i + 1] != '') {
				try {
					eval("jsonArg.update = "+ argsList[i + 1] + ";");
					i++;
				} catch(e) {
					console.log('Error: Function for update does not exist');
				}
			}
		}
		
		//late update function
		else if(argsList[i] == '-lu') {
			if(argsList[i + 1] != null && argsList[i + 1] != '') {
				try {
					eval("jsonArg.lateUpdate = "+ argsList[i + 1] + ";");
					i++;
				} catch(e) {
					console.log('Error: Function for late update does not exist');
				}
			}
		}
		
		//system update function
		else if(argsList[i] == '-su') {
			if(argsList[i + 1] != null && argsList[i + 1] != '') {
				try {
					eval("jsonArg.systemUpdate = " + argsList[i + 1] + ";");
					i++;
				} catch(e) {
					console.log('Error: Function for system update does not exist');
				}
			}
		}
		
		//collide function
		else if(argsList[i] == '-cf') {
			if(argsList[i + 1] != null && argsList[i + 1] != '') {
				try {
					eval("jsonArg.collideFunction = "+ argsList[i + 1] + ";");
					i++;
				} catch(e) {
					console.log('Error: Function for collision does not exist');
				}
			}
		}
		
		//animations package
		else if(argsList[i] == '-a') {
			if(argsList[i + 1] != null && argsList[i + 1] != '') {
				try {
					//eval("jsonArg.animations = "+ argsList[i + 1] + ";");
					eval("jsonArg.animations = JSON.parse(JSON.stringify("+ argsList[i + 1] + "));");
					i++;
				} catch(e) {
					console.log('Error: Aniamtion Package does not exist.');
				}
			}
		}
		
		//current animation
		else if(argsList[i] == '-ca') {
			if(!isNaN(argsList[i + 1]) && argsList[i + 1] != null && argsList[i + 1] != '') {
				jsonArg.currAnimation = parseFloat(argsList[i + 1]);
				i++;
			}
		}
		
		//default frame
		else if(argsList[i] == '-df') {
			if(argsList[i + 1] != null && argsList[i + 1] != '' && argsList[i + 1] != '""') {
				jsonArg.defaultFrame = argsList[i + 1];
				i++;
			}
		}
		
		//default length
		else if(argsList[i] == '-dl') {
			if(!isNaN(argsList[i + 1]) && argsList[i + 1] != null && argsList[i + 1] != '') {
				jsonArg.defaultLength = parseFloat(argsList[i + 1]);
				i++;
			}
		}
		
		//default width
		else if(argsList[i] == '-dw') {
			if(!isNaN(argsList[i + 1]) && argsList[i + 1] != null && argsList[i + 1] != '') {
				jsonArg.defaultWidth = parseFloat(argsList[i + 1]);
				i++;
			}
		}
		
		//debug mode
		else if(argsList[i] == '-d') {
			jsonArg.debugMode = true;
		}
		
		//properties Package
		else if(argsList[i] == '-p') {
			if(argsList[i + 1] != null && argsList[i + 1] != '') {
				if(argsList[i + 2] != null && argsList[i + 2] != '') {
					if(isNaN(argsList[i + 2])) {
						jsonArg.properties[argsList[i + 1]] = argsList[i + 2];
					} else {
						jsonArg.properties[argsList[i + 1]] = parseFloat(argsList[i + 2]);
					}
				}
			} 
		}
		
		//object property
		else if(argsList[i] == '-op') {
			//console.log('Setting Obj Prop');
			if(argsList[i + 1] != null && argsList[i + 1] != '') {
				if(argsList[i + 2] != null && argsList[i + 2] != '') {
					//console.log("jsonArg.properties['"+argsList[i + 1]+"'] = "+ argsList[i + 2] + ";");
					try {
						eval("jsonArg.properties['"+argsList[i + 1]+"'] = "+ argsList[i + 2] + ";");
					} catch(e) {
						console.log('Error: Property does not exist.');
					}
				}
			} 
		}
		
		//canvas
		else if(argsList[i] == '-cv') {
			if(argsList[i + 1] != null && argsList[i + 1] != '') {
				if(argsList[i + 1] == 'Background') {
					//console.log('Setting Canvas to background');
					jsonArg.canvas = canvasBackground;
					jsonArg.context = ctxBackground;
				} else if(argsList[i + 1] == 'Play') {
					jsonArg.canvas  = canvasPlay;
					jsonArg.context = ctxPlay;
				} else if(argsList[i + 1] == 'Foreground') {
					jsonArg.canvas  = canvasForeground;
					jsonArg.context = ctxForeground;
				} else if(argsList[i + 1] == 'Grid') {
					jsonArg.canvas  = canvasGrid;
					jsonArg.context = ctxGrid;
				} else if(argsList[i + 1] == 'UserInterface') {
					jsonArg.canvas  = canvasUserInterface;
					jsonArg.context = ctxUserInterface;
				}
				i++;
			}
		}
		
		//audio
		else if(argsList[i] == '-au') {
			if(argsList[i + 1] != null && argsList[i + 1] != '') {
				var audio = new Audio(argsList[i + 1]);
				
				jsonArg.audio.audioFiles.push({player: audio, isPlaying: false});
				i++
			}
		}
		
		//init function
		else if(argsList[i] == '-i') {
			if(argsList[i + 1] != null && argsList[i + 1] != '') {
				try {
					eval("jsonArg.init = "+ argsList[i + 1] + ";");
					i++;
				} catch(e) {
					console.log('Error: Function for init does not exist');
				}
			}
		}
		
		//postInit function
		else if(argsList[i] == '-pi') {
			if(argsList[i + 1] != null && argsList[i + 1] != '') {
				try {
					eval("jsonArg.postInit = "+ argsList[i + 1] + ";");
					i++;
				} catch(e) {
					console.log('Error: Function for post init does not exist');
				}
			}
		}
		
		//nilCollide function
		else if(argsList[i] == '-nc') {
			if(argsList[i + 1] != null && argsList[i + 1] != '') {
				try {
					eval("jsonArg.nilCollideFunction = "+ argsList[i + 1] + ";");
					i++;
				} catch(e) {
					console.log('Error: Function for nilCollideFunction does not exist');
				}
			}
		}
	}
	
	return jsonArg;
}

function createTOFromJSON(jArg) {
	
	var x = 0;
	var y = 0;
	var size = 12;
	//var font = 'Comic Sans MS';
	var font = 'Arial';
	var color = 'white';
	var textContent = '';
	var properties = {};
	
	if(jArg.x != null) {
		x = jArg.x;
	}
	
	if(jArg.y != null) {
		y = jArg.y;
	}
	
	if(jArg.size != null) {
		size = jArg.size;
	}
	
	if(jArg.font != null) {
		font = jArg.font;
	}
	
	if(jArg.color != null) {
		color = jArg.color;
	}
	
	if(jArg.textContent != null) {
		textContent = jArg.textContent;
	}
	
	if(jArg.properties != null) {
		properties = jArg.properties;
	}
	
	var newTextObject = new TextObject(x, y, size, font, color, textContent, properties);
	
	return newTextObject;
}

function createTOJsonFromString(args) { 
	var jsonArg = {
		properties: {}
	};
	
	var argsList = splitQuoteGroup(args.replace(';','').replace('\n',''));
	
	//console.log('argsList: ' + argsList);
	
	for(var i = 0; i < argsList.length; i++) {
	
		//x-coord
		if(argsList[i] == '-x') {
			if(!isNaN(argsList[i + 1]) && argsList[i + 1] != null && argsList[i + 1] != '') {
				jsonArg.x = parseFloat(argsList[i + 1]);
				i++;
			}
		}
		
		//y-coord
		else if(argsList[i] == '-y') {
			if(!isNaN(argsList[i + 1]) && argsList[i + 1] != null && argsList[i + 1] != '') {
				jsonArg.y = parseFloat(argsList[i + 1]);
				i++;
			}
		}
		
		//size
		else if(argsList[i] == '-s') {
			if(!isNaN(argsList[i + 1]) && argsList[i + 1] != null && argsList[i + 1] != '') {
				jsonArg.size = parseFloat(argsList[i + 1]);
				i++;
			}
		}
		
		//font
		else if(argsList[i] == '-f') {
			if(argsList[i + 1] != null && argsList[i + 1] != '') {
				jsonArg.font = argsList[i + 1];
				i++;
			}
		}
		
		//color
		else if(argsList[i] == '-c') {
			if(argsList[i + 1] != null && argsList[i + 1] != '') {
				jsonArg.color = argsList[i + 1];
				i++;
			}
		}
		
		//textContent
		else if(argsList[i] == '-t') {
			if(argsList[i + 1] != null && argsList[i + 1] != '') {
				jsonArg.textContent = argsList[i + 1];
				i++;
			}
		}
		
	}
	
	return jsonArg;
}

function testMain() {
	/*
	console.log("Starting Test Function");
	
	
	var GOJSON = {
		x: 10,
		y: 10,
		vertices: [{offX: 1, offY: 2},{},{}],
		tag: 'Hello',
		update: function() {console.log('Update 1')},
		lateUpdate: function() {},
		animations: [
			[
				{keyFrame: '', length: 1, width: 2, duration: 3, currFrame: 1},
				{keyFrame: '', length: 1, width: 2, duration: 3, currFrame: 1},
				{keyFrame: '', length: 1, width: 2, duration: 3, currFrame: 1}
			]
		],
		currAnimation: 0,
		defaultFrame: 'this.png'
	}
	

	var GOObj = createGOFromJSON(GOJSON);
	
	//GOObj.update();
	//console.log(GOObj);
	
	var GOJ = createGOJsonFromString('-y 1.2 -x 20 -t player player2 -v 1  5 -v 2      3 -u example2 -lu example1 -a testAnimationPackage -ca 1 -df   "that myguy.png"');
	
	//console.log(GOJ);
	
	var GOObj2 = createGOFromJSON(GOJ);
	
	var handler = new ObjectHandler();
	
	handler.addObject(GOObj);
	handler.addObject(GOObj2);
	
	console.log(handler.Objects);
	
	handler.removeObject(GOObj);
	
	console.log(handler.Objects);
	
	
	console.log(splitQuoteGroup('-y 1.2 -x 20 -t player player2 -v 1  5 -v 2     3 -u example2 -lu example1 -a testAnimationPackage -df "a " "that myguy.png"'));
	//var stringT = '-y 1.2 -x 20 -t player player2 -v 1  5 -v 2     3 -u example2 -lu example1 -a testAnimationPackage -df "that myguy.png"'
	//console.log(stringT.split(' '));
	
	
	
	var testJSONstring = '{"1": "17", "vy": "2"}';
	var testJSON = JSON.parse(testJSONstring);
	testJSON['3'] = 100;
	testJSON.update = function() {console.log('update')};
	testJSON.update();
	//console.log(testJSON.update());
	
	var x = 1;
	var y = 2;
	
	var testJSON = {x, y};
	
	console.log(testJSON.y);
	*/
	/*
	var testJSON = {chees: 1};
	
	testJSON['testObj'] = testAnimationPackage;
	console.log(testJSON);
	*/
}

function example1() {
	console.log('example1');
}

function example2(arg1) {
	console.log('example\n2');
}

/*
var testAnimationPackage = [
			[
				{keyFrame: '', length: 1, width: 2, duration: 3, currFrame: 1},
				{keyFrame: '', length: 1, width: 2, duration: 3, currFrame: 1},
				{keyFrame: '', length: 1, width: 2, duration: 3, currFrame: 1}
			],
			[
				{keyFrame: '', length: 1, width: 2, duration: 3, currFrame: 1},
				{keyFrame: '', length: 1, width: 2, duration: 3, currFrame: 1},
				{keyFrame: '', length: 1, width: 2, duration: 3, currFrame: 1}
			]
		]
*/

testMain();

