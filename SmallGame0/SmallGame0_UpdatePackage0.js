/*
Global JSON to hold variables that need to be accessible to many objects
*/
var SmallGame0Globals = {
	//PERKS
	DoubleJumpSelected: false,
	DoubleJumpTriggered: false,
	
	SkyEyeSelected: false,
	SkyEyeTriggered: false,
	
	ComboSelected: false,
	ComboTriggered: false,
	
	//CALAMITIES
	RunnyDoorSelected: false,
	RunnyDoorTriggered: false,
	
	TeleporterSelected: false,
	TeleporterTriggered: false,
	
	DropsSelected: false,
	DropsTriggered: false,
	
	//LEVEL
	CurrentLevel: 0
}

function CheckEnemies() {
	if(SmallGame0Globals.TotalEnemies <= 0) {
		console.log('Done');
		SmallGame0Globals.door.collideFunction = doorCollision_SG0;
	}
}

function StartSmallGame0() {
	var backgroundCanvas = document.getElementById("canvasBG");
	backgroundCanvas.style = "background-color: white;"
	
	var SelText = 'GameObject -x 220 -y 400';
	SelText = SelText + ' -v 0 0 topleft -v 200 0 topright -v 200 54 bottomright -v 0 54 bottomleft'
	SelText = SelText + ' -u StartButtonUpdate'
	//SelText = SelText + ' -pi setupPlayer'
	SelText = SelText + ' -d'
	SelText = SelText + ';'
	
	SelText = SelText + 'GameObject -pi addClickOption_SG0;'
	
	enterObjects(SelText);
}

function StartSmallGameLevel() {
	
	var jumpTotal = 1;
	if(SmallGame0Globals.DoubleJumpTriggered) {
		jumpTotal = 2;
	}
	
	//player object
	var SelText = 'GameObject -x 400 -y 750';
	SelText = SelText + ' -v 0 0 topleft -v 36 0 topright -v 36 54 bottomright -v 0 54 bottomleft'
	SelText = SelText + ' -rp 18 15 18'
	SelText = SelText + ' -t player'
	SelText = SelText + ' -p xv 0 -p yv 0'
	SelText = SelText + ' -p jumpable 1 -p gravity 6 -p slideStateX 2 -p slideStateY 2 -p height 54'
	SelText = SelText + ' -p BatReady 1'
	SelText = SelText + ' -u playerMovement_SG0'
	SelText = SelText + ' -cf playerCollision_SG0'
	SelText = SelText + ' -pi setupPlayer'
	SelText = SelText + ' -a PlatformerAnimationPackage -ca 0'
	SelText = SelText + ' -p climbMode 0 -p climbing 0 -p health 5 -p iFrames -1 -p inControl 1 -p inStun 0 -p stunCounter 0'
	SelText = SelText + ' -p jumps '+jumpTotal+''
	SelText = SelText + ' -p maxJumps '+jumpTotal+''
	SelText = SelText + ' -d'
	SelText = SelText + ';'
	
	//key tracker
	SelText = SelText + 'GameObject -x 0 -y 0';
	SelText = SelText + ' -pi setupKeyTracker'
	SelText = SelText + ' -u keyTrackerUpdate'
	SelText = SelText + ';'
	
	var TotalEnem = (SmallGame0Globals.CurrentLevel + 1) * 3;
	SmallGame0Globals.TotalEnemies = TotalEnem;
	console.log('Enemies: ' + TotalEnem);
	
	for(var i = 0; i < TotalEnem; i++) {
		var optionE = Math.floor(Math.random() * 2) + 1;
		console.log('Option: ' + optionE);
		var xCoord = Math.floor(Math.random() * 876) + 25;
		var yCoord = Math.floor(Math.random() * 801) + 50;
		if(optionE == 1) {
			//enemObject
			SelText = SelText + 'GameObject -x '+xCoord+' -y '+yCoord+'';
			SelText = SelText + ' -v 0 0 topleft -v 36 0 topright -v 36 54 bottomright -v 0 54 bottomleft'
			SelText = SelText + ' -rp 18 15 18'
			SelText = SelText + ' -t enemy'
			SelText = SelText + ' -p xv 0 -p yv 0'
			SelText = SelText + ' -p jumpable 1 -p gravity 6 -p slideStateX 2 -p slideStateY 2 -p height 54'
			SelText = SelText + ' -p BatReady 1'
			SelText = SelText + ' -u enemMovement_SG0'
			SelText = SelText + ' -cf enemCollision_SG0'
			SelText = SelText + ' -pi setupEnem'
			SelText = SelText + ' -a PlatformerAnimationPackage -ca 0'
			SelText = SelText + ' -p climbMode 0 -p climbing 0 -p health 5 -p iFrames -1 -p inControl 1 -p inStun 0 -p stunCounter 0'
			SelText = SelText + ' -p HitBoxActive 1'
			SelText = SelText + ' -d'
			SelText = SelText + ';'
		} else if(optionE == 2) {
			SelText = SelText + 'GameObject -x '+xCoord+' -y '+yCoord+'';
			SelText = SelText + ' -v 0 0 topleft -v 36 0 topright -v 36 54 bottomright -v 0 54 bottomleft'
			SelText = SelText + ' -rp 18 15 18'
			SelText = SelText + ' -t enemy'
			SelText = SelText + ' -p xv 0 -p yv 0'
			SelText = SelText + ' -p jumpable 1 -p gravity 6 -p slideStateX 2 -p slideStateY 2 -p height 54'
			SelText = SelText + ' -p BatReady 1'
			SelText = SelText + ' -u enem2Movement_SG0'
			SelText = SelText + ' -cf enemCollision_SG0'
			SelText = SelText + ' -pi setupEnem'
			SelText = SelText + ' -a PlatformerAnimationPackage -ca 0'
			SelText = SelText + ' -p climbMode 0 -p climbing 0 -p health 5 -p iFrames -1 -p inControl 1 -p inStun 0 -p stunCounter 0'
			SelText = SelText + ' -p HitBoxActive 1'
			SelText = SelText + ' -p EscapeFrames -1'
			SelText = SelText + ' -d'
			SelText = SelText + ';'
		}
	}
	
	//Door object
	SelText = SelText + 'GameObject -x 488 -y 846';
	SelText = SelText + ' -v 0 0 topleft -v 36 0 topright -v 36 54 bottomright -v 0 54 bottomleft'
	SelText = SelText + ' -t door'
	SelText = SelText + ' -pi setupDoor'
	SelText = SelText + ' -rp 18 15 18'
	//SelText = SelText + ' -cf doorCollision_SG0'
	SelText = SelText + ' -d'
	SelText = SelText + ';'
	
	//floor
	SelText = SelText + 'GameObject -x 25 -y 900 -v 0 0 left -v 1000 0 right -t wall'
	SelText = SelText + ' -d'
	SelText = SelText + ';'
	
	//left wall
	SelText = SelText + 'GameObject -x 25 -y 0 -v 0 0 top -v 0 900 bottom -t wall'
	SelText = SelText + ' -d'
	SelText = SelText + ';'
	
	//right wall
	SelText = SelText + 'GameObject -x 1025 -y 0 -v 0 0 top -v 0 900 bottom -t wall'
	SelText = SelText + ' -d'
	SelText = SelText + ';'
	
	//top
	SelText = SelText + 'GameObject -x 25 -y 0 -v 0 0 left -v 1000 0 right -t wall'
	SelText = SelText + ' -d'
	SelText = SelText + ';'
	
	for(var i = 0; i < 18; i++) {
		var xCoord = Math.floor(Math.random() * 876) + 25;
		var yCoord = Math.floor(Math.random() * 801) + 50;
		SelText = SelText + 'GameObject -x '+xCoord+' -y '+yCoord+' -v 0 0 top -v 100 0 bottom -t platform -d;'
	}
	
	//cameraControls_SG0
	SelText = SelText + 'GameObject -x 0 -y 0 -u cameraControls_SG0 -p lowerBoundX 0 -p upperBoundX 410 -p lowerBoundY 0 -p upperBoundY 424'
	SelText = SelText + ';'
	
	//Teleporters
	if(SmallGame0Globals.TeleporterTriggered) {
		SelText = SelText + 'GameObject -x 65 -y 835 -p x2 985 -p y2 65 -rp 0 0 18'
		SelText = SelText + ' -u teleporterUpdate_SG0'
		SelText = SelText + ' -cf teleporterCollision_SG0'
		SelText = SelText + ' -p downFrames -1'
		SelText = SelText + ' -pi setupTeleporter'
		SelText = SelText + ' -d'
		SelText = SelText + ';'
		
		SelText = SelText + 'GameObject -x 960 -y 835 -p x2 65 -p y2 65 -rp 0 0 18'
		SelText = SelText + ' -u teleporterUpdate_SG0'
		SelText = SelText + ' -cf teleporterCollision_SG0'
		SelText = SelText + ' -p downFrames -1'
		SelText = SelText + ' -pi setupTeleporter'
		SelText = SelText + ' -d'
		SelText = SelText + ';'
	}
	
	SmallGame0Globals.score = 0;
	
	enterObjects(SelText);
}

/*
KEYTRACK
start
*/
function setupKeyTracker() {
	SmallGame0Globals.keyTracker = this
	this.properties.upDown = false;
	this.properties.zDown = false;
	this.properties.spaceDown = false;
}

function keyTrackerUpdate() {
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

/*
BUTTONSELECT
start
*/

function addClickOption_SG0() {
	var currentHandler = this.handler;
	
	canvasUserInterface.addEventListener('click', function(e) {
		var mousepos = getMousePos(canvasUserInterface,e);
		currentHandler.cBuff.push(mousepos);
	});
}

function StartButtonUpdate() {
	//this.properties.wordChild.position.x = this.position.x + 10;
	//this.properties.wordChild.position.y = this.position.y + 20;
	
	var triggered = false;
	
	if(this.vertices.length < 4) {
		return;
	}
		
	for(var i = 0; i < this.handler.cBuff.length; i++) {
	
		if(this.handler.cBuff[i].x + this.handler.CameraX > this.position.x 
		   && this.handler.cBuff[i].x + this.handler.CameraX < this.position.x + this.vertices[1].offX) 
		{
			if(this.handler.cBuff[i].y + this.handler.CameraY > this.position.y
			   && this.handler.cBuff[i].y + this.handler.CameraY < this.position.y + this.vertices[2].offY) {
				
				if(triggered == false) {
					console.log('pressed');
					triggered = true;
					
					this.handler.removeAllObjects();
					//SmallGame0Globals.TotalEnemies = 1;
					SmallGame0Globals.DoubleJumpSelected = false;
					SmallGame0Globals.DoubleJumpTriggered = false;
					SmallGame0Globals.SkyEyeSelected = false;
					SmallGame0Globals.SkyEyeTriggered = false;
					SmallGame0Globals.ComboSelected = false;
					SmallGame0Globals.ComboTriggered = false;
					
					SmallGame0Globals.RunnyDoorSelected = false;
					SmallGame0Globals.RunnyDoorTriggered = false;
					SmallGame0Globals.TeleporterSelected = false;
					SmallGame0Globals.TeleporterTriggered = false;
					SmallGame0Globals.DropsSelected = false;
					SmallGame0Globals.DropsTriggered = false;
					
					SmallGame0Globals.CurrentLevel = 0;
					
					StartSmallGameLevel();
				}
				
			}
		}
		
	}	

}

function doubleJumpButtonUpdate() {
	var triggered = false;
	
	if(this.vertices.length < 4) {
		return;
	}
		
	for(var i = 0; i < this.handler.cBuff.length; i++) {
	
		if(this.handler.cBuff[i].x + this.handler.CameraX > this.position.x 
		   && this.handler.cBuff[i].x + this.handler.CameraX < this.position.x + this.vertices[1].offX) 
		{
			if(this.handler.cBuff[i].y + this.handler.CameraY > this.position.y
			   && this.handler.cBuff[i].y + this.handler.CameraY < this.position.y + this.vertices[2].offY) {
				
				if(triggered == false) {
					console.log('pressed');
					triggered = true;
					
					if(!SmallGame0Globals.DoubleJumpTriggered) {
						SmallGame0Globals.DoubleJumpSelected = true;
						
						SmallGame0Globals.SkyEyeSelected = false;
						SmallGame0Globals.ComboSelected = false;
					}
				}
				
			}
		}
		
	}
}

function skyEyeButtonUpdate() {
	var triggered = false;
	
	if(this.vertices.length < 4) {
		return;
	}
		
	for(var i = 0; i < this.handler.cBuff.length; i++) {
	
		if(this.handler.cBuff[i].x + this.handler.CameraX > this.position.x 
		   && this.handler.cBuff[i].x + this.handler.CameraX < this.position.x + this.vertices[1].offX) 
		{
			if(this.handler.cBuff[i].y + this.handler.CameraY > this.position.y
			   && this.handler.cBuff[i].y + this.handler.CameraY < this.position.y + this.vertices[2].offY) {
				
				if(triggered == false) {
					console.log('pressed');
					triggered = true;
					
					if(!SmallGame0Globals.SkyEyeTriggered) {
						SmallGame0Globals.SkyEyeSelected = true;
						
						SmallGame0Globals.DoubleJumpSelected = false;
						SmallGame0Globals.ComboSelected = false;
					}
				}
				
			}
		}
		
	}
}

function comboButtonUpdate() {
	var triggered = false;
	
	if(this.vertices.length < 4) {
		return;
	}
		
	for(var i = 0; i < this.handler.cBuff.length; i++) {
	
		if(this.handler.cBuff[i].x + this.handler.CameraX > this.position.x 
		   && this.handler.cBuff[i].x + this.handler.CameraX < this.position.x + this.vertices[1].offX) 
		{
			if(this.handler.cBuff[i].y + this.handler.CameraY > this.position.y
			   && this.handler.cBuff[i].y + this.handler.CameraY < this.position.y + this.vertices[2].offY) {
				
				if(triggered == false) {
					console.log('pressed');
					triggered = true;
					
					if(!SmallGame0Globals.ComboTriggered) {
						SmallGame0Globals.ComboSelected = true;
						
						SmallGame0Globals.DoubleJumpSelected = false;
						SmallGame0Globals.SkyEyeSelected = false;
					}
				}
				
			}
		}
		
	}
}

function runnyDoorButtonUpdate() {
	var triggered = false;
	
	if(this.vertices.length < 4) {
		return;
	}
		
	for(var i = 0; i < this.handler.cBuff.length; i++) {
	
		if(this.handler.cBuff[i].x + this.handler.CameraX > this.position.x 
		   && this.handler.cBuff[i].x + this.handler.CameraX < this.position.x + this.vertices[1].offX) 
		{
			if(this.handler.cBuff[i].y + this.handler.CameraY > this.position.y
			   && this.handler.cBuff[i].y + this.handler.CameraY < this.position.y + this.vertices[2].offY) {
				
				if(triggered == false) {
					console.log('pressed');
					triggered = true;
					
					if(!SmallGame0Globals.RunnyDoorTriggered) {
						SmallGame0Globals.RunnyDoorSelected = true;
						
						SmallGame0Globals.TeleporterSelected = false;
						SmallGame0Globals.DropsSelected = false;
					}
				}
				
			}
		}
		
	}
}

function teleporterButtonUpdate() {
	var triggered = false;
	
	if(this.vertices.length < 4) {
		return;
	}
		
	for(var i = 0; i < this.handler.cBuff.length; i++) {
	
		if(this.handler.cBuff[i].x + this.handler.CameraX > this.position.x 
		   && this.handler.cBuff[i].x + this.handler.CameraX < this.position.x + this.vertices[1].offX) 
		{
			if(this.handler.cBuff[i].y + this.handler.CameraY > this.position.y
			   && this.handler.cBuff[i].y + this.handler.CameraY < this.position.y + this.vertices[2].offY) {
				
				if(triggered == false) {
					console.log('pressed');
					triggered = true;
					
					if(!SmallGame0Globals.TeleporterTriggered) {
						SmallGame0Globals.TeleporterSelected = true;
						
						SmallGame0Globals.RunnyDoorSelected = false;
						SmallGame0Globals.DropsSelected = false;
					}
				}
				
			}
		}
		
	}
}

function dropsButtonUpdate() {
	var triggered = false;
	
	if(this.vertices.length < 4) {
		return;
	}
		
	for(var i = 0; i < this.handler.cBuff.length; i++) {
	
		if(this.handler.cBuff[i].x + this.handler.CameraX > this.position.x 
		   && this.handler.cBuff[i].x + this.handler.CameraX < this.position.x + this.vertices[1].offX) 
		{
			if(this.handler.cBuff[i].y + this.handler.CameraY > this.position.y
			   && this.handler.cBuff[i].y + this.handler.CameraY < this.position.y + this.vertices[2].offY) {
				
				if(triggered == false) {
					console.log('pressed');
					triggered = true;
					
					if(!SmallGame0Globals.DropsTriggered) {
						SmallGame0Globals.DropsSelected = true;
						
						SmallGame0Globals.RunnyDoorSelected = false;
						SmallGame0Globals.TeleporterSelected = false;
					}
				}
				
			}
		}
		
	}
}

function NextLevelButtonUpdate() {
	var triggered = false;
	
	if(this.vertices.length < 4) {
		return;
	}
		
	for(var i = 0; i < this.handler.cBuff.length; i++) {
	
		if(this.handler.cBuff[i].x + this.handler.CameraX > this.position.x 
		   && this.handler.cBuff[i].x + this.handler.CameraX < this.position.x + this.vertices[1].offX) 
		{
			if(this.handler.cBuff[i].y + this.handler.CameraY > this.position.y
			   && this.handler.cBuff[i].y + this.handler.CameraY < this.position.y + this.vertices[2].offY) {
				
				if(triggered == false) {
					console.log('pressed');
					triggered = true;
					
					var perkDJSelected = false;
					var perkSESelected = false;
					var perkCSelected = false;
					
					var calamityRDSelected = false;
					var calamityTSelected = false;
					var calamityDSelected = false;
					
					console.log('DoubleJumpSelected: ' + SmallGame0Globals.DoubleJumpSelected);
					console.log('DoubleJumpTriggered: ' + SmallGame0Globals.DoubleJumpTriggered);
					console.log('SkyEyeSelected: ' + SmallGame0Globals.SkyEyeSelected);
					console.log('SkyEyeTriggered: ' + SmallGame0Globals.SkyEyeTriggered);
					console.log('ComboSelected: ' + SmallGame0Globals.ComboSelected);
					console.log('ComboTriggered: ' + SmallGame0Globals.ComboTriggered);
					console.log('RunnyDoorSelected: ' + SmallGame0Globals.RunnyDoorSelected);
					console.log('RunnyDoorTriggered: ' + SmallGame0Globals.RunnyDoorTriggered);
					console.log('TeleporterSelected: ' + SmallGame0Globals.TeleporterSelected);
					console.log('TeleporterTriggered: ' + SmallGame0Globals.TeleporterTriggered);
					console.log('DropsSelected: ' + SmallGame0Globals.DropsSelected);
					console.log('DropsTriggered: ' + SmallGame0Globals.DropsTriggered);
					
					if(SmallGame0Globals.DoubleJumpSelected && !SmallGame0Globals.DoubleJumpTriggered) {
						//SmallGame0Globals.DoubleJumpTriggered = true;
						//this.handler.removeAllObjects();
						//SmallGame0Globals.TotalEnemies = 1;
						//SmallGame0Globals.CurrentLevel++;
						//StartSmallGameLevel();
						
						perkDJSelected = true;
					} else if(SmallGame0Globals.SkyEyeSelected && !SmallGame0Globals.SkyEyeTriggered) {
						//SmallGame0Globals.SkyEyeTriggered = true;
						//this.handler.removeAllObjects();
						//SmallGame0Globals.TotalEnemies = 1;
						//SmallGame0Globals.CurrentLevel++;
						//StartSmallGameLevel();
						
						perkSESelected = true;
					} else if(SmallGame0Globals.ComboSelected && !SmallGame0Globals.ComboTriggered) {
						//SmallGame0Globals.ComboTriggered = true;
						//this.handler.removeAllObjects();
						//SmallGame0Globals.TotalEnemies = 1;
						//SmallGame0Globals.CurrentLevel++;
						//StartSmallGameLevel();
						
						perkCSelected = true;
					} else {
						console.log('Select Perk');
					}
					
					if(SmallGame0Globals.RunnyDoorSelected && !SmallGame0Globals.RunnyDoorTriggered) {
						//SmallGame0Globals.RunnyDoorTriggered = true;
						
						calamityRDSelected = true;
					} else if(SmallGame0Globals.TeleporterSelected && !SmallGame0Globals.TeleporterTriggered) {
						//SmallGame0Globals.TeleporterTriggered = true;
						
						calamityTSelected = true;
					} else if(SmallGame0Globals.DropsSelected && !SmallGame0Globals.DropsTriggered) {
						//SmallGame0Globals.DropsTriggered = true;
						
						calamityDSelected = true;
					} else {
						console.log('Select Calamity');
					}
					
				if((perkDJSelected || perkSESelected || perkCSelected) && (calamityRDSelected || calamityTSelected || calamityDSelected)) {
						if(perkDJSelected) {
							SmallGame0Globals.DoubleJumpTriggered = true;
						} else if(perkSESelected) {
							SmallGame0Globals.SkyEyeTriggered = true;
						} else if(perkCSelected) {
							SmallGame0Globals.ComboTriggered = true;
						}
						
						if(calamityRDSelected) {
							SmallGame0Globals.RunnyDoorTriggered = true;
						} else if(calamityTSelected) {
							SmallGame0Globals.TeleporterTriggered = true;
						} else if(calamityDSelected) {
							SmallGame0Globals.DropsTriggered = true;
						}
					
						this.handler.removeAllObjects();
						SmallGame0Globals.CurrentLevel++;
						StartSmallGameLevel();
					}
				}
				
			}
		}
		
	}
}

/*
BUTTONSELECT
end
*/

/*
SWINGHIT
start
*/

function batHitCircleUpdate_SG0() {
	
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

function batHitCircleRUpdate_SG0() {
	
	if(this.properties.parentObj.currAnimation == 11) {
		if(this.properties.parentObj.animations[this.properties.parentObj.currAnimation].currKeyFrame == 0) {
			this.position.x = this.properties.parentObj.position.x + 72;
			this.position.y = this.properties.parentObj.position.y;
			this.radialPoints[0].radius = 16;
		} else if(this.properties.parentObj.animations[this.properties.parentObj.currAnimation].currKeyFrame == 1) {
			this.position.x = this.properties.parentObj.position.x + 36;
			this.position.y = this.properties.parentObj.position.y + 27;
			this.radialPoints[0].radius = 24;
		} else if(this.properties.parentObj.animations[this.properties.parentObj.currAnimation].currKeyFrame == 2) {
			this.position.x = this.properties.parentObj.position.x + 18;
			this.position.y = this.properties.parentObj.position.y + 27;
		} else if(this.properties.parentObj.animations[this.properties.parentObj.currAnimation].currKeyFrame == 3) {
			this.position.x = this.properties.parentObj.position.x;
			this.position.y = this.properties.parentObj.position.y;
		} else if(this.properties.parentObj.animations[this.properties.parentObj.currAnimation].currKeyFrame == 4) {
			this.position.x = this.properties.parentObj.position.x;
			this.position.y = this.properties.parentObj.position.y;
		}
	} else if(this.properties.parentObj.currAnimation == 12) {
		if(this.properties.parentObj.animations[this.properties.parentObj.currAnimation].currKeyFrame == 0) {
			this.position.x = this.properties.parentObj.position.x - 36;
			this.position.y = this.properties.parentObj.position.y;
			this.radialPoints[0].radius = 16;
		} else if(this.properties.parentObj.animations[this.properties.parentObj.currAnimation].currKeyFrame == 1) {
			this.position.x = this.properties.parentObj.position.x - 0;
			this.position.y = this.properties.parentObj.position.y + 27;
			this.radialPoints[0].radius = 24;
		} else if(this.properties.parentObj.animations[this.properties.parentObj.currAnimation].currKeyFrame == 2) {
			this.position.x = this.properties.parentObj.position.x + 18;
			this.position.y = this.properties.parentObj.position.y + 27;
		} else if(this.properties.parentObj.animations[this.properties.parentObj.currAnimation].currKeyFrame == 3) {
			this.position.x = this.properties.parentObj.position.x + 36;
			this.position.y = this.properties.parentObj.position.y;
		} else if(this.properties.parentObj.animations[this.properties.parentObj.currAnimation].currKeyFrame == 4) {
			this.position.x = this.properties.parentObj.position.x + 36;
			this.position.y = this.properties.parentObj.position.y;
		}
	} else {
		this.handler.removeObject(this);
	}
}

function createBatHitBox_SG0(PlayerObj) {
	
	var startOffset = -72;
	
	if(PlayerObj.currAnimation == PlatformerAnimationStates.IdleRight || PlayerObj.currAnimation == PlatformerAnimationStates.RunRight || PlayerObj.currAnimation == PlatformerAnimationStates.JumpRight) {
		startOffset = -72;
	} else if(PlayerObj.currAnimation == PlatformerAnimationStates.IdleLeft || PlayerObj.currAnimation == PlatformerAnimationStates.RunLeft || PlayerObj.currAnimation == PlatformerAnimationStates.JumpLeft) {
		startOffset = 72;
	}
	
	console.log(startOffset);
	
	var creatinString = 'GameObject -x ' + (PlayerObj.position.x + startOffset) + ' -y ' + PlayerObj.position.y + ' -rp 0 0 16 -u batHitCircleUpdate_SG0 -d -t playerHitBox -p HitBoxActive 1';
	var GOJ = createGOJsonFromString(creatinString);
	var GOObj = createGOFromJSON(GOJ);
	GOObj.properties.parentObj = PlayerObj;
	PlayerObj.handler.addObject(GOObj);
	
}

function createBatHitBoxR_SG0(PlayerObj) {
	
	var startOffset = -72;
	
	if(PlayerObj.currAnimation == PlatformerAnimationStates.IdleRight || PlayerObj.currAnimation == PlatformerAnimationStates.RunRight || PlayerObj.currAnimation == PlatformerAnimationStates.JumpRight || PlayerObj.currAnimation == PlatformerAnimationStates.SwingRight) {
		startOffset = -72;
	} else if(PlayerObj.currAnimation == PlatformerAnimationStates.IdleLeft || PlayerObj.currAnimation == PlatformerAnimationStates.RunLeft || PlayerObj.currAnimation == PlatformerAnimationStates.JumpLeft || PlayerObj.currAnimation == PlatformerAnimationStates.SwingLeft) {
		startOffset = 72;
	}
	
	console.log(startOffset);
	
	var creatinString = 'GameObject -x ' + (PlayerObj.position.x + startOffset) + ' -y ' + PlayerObj.position.y + ' -rp 0 0 16 -u batHitCircleRUpdate_SG0 -d -t playerHitBox -p HitBoxActive 1';
	var GOJ = createGOJsonFromString(creatinString);
	var GOObj = createGOFromJSON(GOJ);
	GOObj.properties.parentObj = PlayerObj;
	PlayerObj.handler.addObject(GOObj);
	
}

/*
SWINGHIT
end
*/

/*
Generic Function for player controlled objects
*/
function controlledMovement_SG0(gameObj) {
	if(keys.left && gameObj.properties.slideStateY != 0 && gameObj.properties.climbing == 0 
	&& gameObj.currAnimation != PlatformerAnimationStates.SwingRight 
	&& gameObj.currAnimation != PlatformerAnimationStates.SwingLeft
	&& gameObj.currAnimation != PlatformerAnimationStates.Swing2Right 
	&& gameObj.currAnimation != PlatformerAnimationStates.Swing2Left) {
		gameObj.properties.xv = -7;
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
		
	if(keys.up && gameObj.properties.slideStateX != 0 && gameObj.properties.climbMode == 0) {
		//if(gameObj.properties.jumpable == 1) {
		if(gameObj.properties.jumps > 0 && SmallGame0Globals.keyTracker.properties.upDown == false) {
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
		
	if(!keys.space) {
		gameObj.properties.BatReady = 1;
	}
		
	if(keys.space && gameObj.properties.BatReady == 1) {
		
		if(gameObj.currAnimation == 0 || gameObj.currAnimation == 2 || gameObj.currAnimation == 4) {
			gameObj.currAnimation = 6;
			gameObj.animations[gameObj.currAnimation].Done = false;
			gameObj.properties.BatReady = 0;
			gameObj.animations[gameObj.currAnimation].currKeyFrame = 0;
			gameObj.animations[gameObj.currAnimation].keyFrames[gameObj.animations[gameObj.currAnimation].currKeyFrame].currFrame = 1;
		} else if(gameObj.currAnimation == 1 || gameObj.currAnimation == 3 || gameObj.currAnimation == 5) {
			gameObj.currAnimation = 7;
			gameObj.animations[gameObj.currAnimation].Done = false;
			gameObj.properties.BatReady = 0;
			gameObj.animations[gameObj.currAnimation].currKeyFrame = 0;
			gameObj.animations[gameObj.currAnimation].keyFrames[gameObj.animations[gameObj.currAnimation].currKeyFrame].currFrame = 1;
		}
			
		createBatHitBox_SG0(gameObj);
	}
	
	if(SmallGame0Globals.ComboTriggered) {
		
		if(keys.space && SmallGame0Globals.keyTracker.properties.spaceDown == false && gameObj.currAnimation == PlatformerAnimationStates.SwingRight && gameObj.animations[gameObj.currAnimation].currKeyFrame == 4) {
			gameObj.currAnimation = PlatformerAnimationStates.Swing2Right;
			gameObj.animations[gameObj.currAnimation].Done = false;
			gameObj.properties.BatReady = 0;
			gameObj.animations[gameObj.currAnimation].currKeyFrame = 0;
			gameObj.animations[gameObj.currAnimation].keyFrames[gameObj.animations[gameObj.currAnimation].currKeyFrame].currFrame = 1;
			
			createBatHitBoxR_SG0(gameObj);
		} else if(keys.space && SmallGame0Globals.keyTracker.properties.spaceDown == false && gameObj.currAnimation == PlatformerAnimationStates.SwingLeft && gameObj.animations[gameObj.currAnimation].currKeyFrame == 4) {
			gameObj.currAnimation = PlatformerAnimationStates.Swing2Left;
			gameObj.animations[gameObj.currAnimation].Done = false;
			gameObj.properties.BatReady = 0;
			gameObj.animations[gameObj.currAnimation].currKeyFrame = 0;
			gameObj.animations[gameObj.currAnimation].keyFrames[gameObj.animations[gameObj.currAnimation].currKeyFrame].currFrame = 1;
			
			createBatHitBoxR_SG0(gameObj);
		}
		
	}
	
	if(SmallGame0Globals.SkyEyeTriggered) {
		if(keys.z && gameObj.properties.zoomOut == false && SmallGame0Globals.keyTracker.properties.zDown == false) {
			gameObj.handler.CameraZoom = 0.4;
			gameObj.properties.zoomOut = true;
		} else if(keys.z && gameObj.properties.zoomOut == true && SmallGame0Globals.keyTracker.properties.zDown == false) {
			gameObj.handler.CameraZoom = 1;
			gameObj.properties.zoomOut = false;
		}
	}
	
	/*
	if(keys.z) {
		gameObj.handler.CameraZoom = gameObj.handler.CameraZoom + 0.01;
		console.log('zoom press: ' + gameObj.handler.CameraZoom);
	}
	
	if(keys.x) {
		gameObj.handler.CameraZoom = gameObj.handler.CameraZoom - 0.01;
		console.log('zoom press: ' + gameObj.handler.CameraZoom);
	}
	*/
		
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

/*
Generic Function for wall collisions
*/
function WallCollisionBehavior_SG0(gameObj,colObj,verIndex,intersection,colVer1,colVer2) {
	//console.log('Wall Collide');
	gameObj.position.x = gameObj.position.x - (((gameObj.position.x + gameObj.vertices[verIndex].offX) - intersection[0]));
	gameObj.position.y = gameObj.position.y - (((gameObj.position.y + gameObj.vertices[verIndex].offY) - intersection[1]));
			
	if((gameObj.position.x - gameObj.delta.dx) > gameObj.position.x) {
		gameObj.position.x++;
		if(colObj.position.x + colObj.vertices[colVer1].offX == colObj.position.x + colObj.vertices[colVer2].offX) {
			gameObj.properties.slideStateY = 0;
		}
	} else if((gameObj.position.x - gameObj.delta.dx) < gameObj.position.x) {
		gameObj.position.x--;
		if(colObj.position.x + colObj.vertices[colVer1].offX == colObj.position.x + colObj.vertices[colVer2].offX) {
			gameObj.properties.slideStateY = 1;
		}
	}
			
	if((gameObj.position.y - gameObj.delta.dy) > gameObj.position.y) {
				
		if(colObj.position.x + colObj.vertices[colVer1].offX != colObj.position.x + colObj.vertices[colVer2].offX) {
			gameObj.position.y++;
		}
				
		gameObj.properties.yv = 0;
		if(colObj.position.y + colObj.vertices[colVer1].offY == colObj.position.y + colObj.vertices[colVer2].offY) {
			gameObj.properties.slideStateX = 0;
		}
	} else if((gameObj.position.y - gameObj.delta.dy) < gameObj.position.y) {
	
		if(colObj.position.x + colObj.vertices[colVer1].offX != colObj.position.x + colObj.vertices[colVer2].offX) {
			gameObj.position.y--;
		}
				
		gameObj.properties.yv = 0;
		if(colObj.position.y + colObj.vertices[colVer1].offY == colObj.position.y + colObj.vertices[colVer2].offY) {
			gameObj.properties.slideStateX = 1;
		}
				
		var newjumpVectorPosition = {x: gameObj.position.x, y: gameObj.position.y + gameObj.properties.height + 1};
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
}

/*
Generic Function for platform collisions
*/
function PlatformCollisionBehavior_SG0(gameObj,colObj,verIndex,intersection,colVer1,colVer2) {
	if((gameObj.position.y - gameObj.delta.dy) < gameObj.position.y && (gameObj.vertices[verIndex].label == 'bottomright' || gameObj.vertices[verIndex].label == 'bottomleft') ) { 
				
		gameObj.position.x = gameObj.position.x - (((gameObj.position.x + gameObj.vertices[verIndex].offX) - intersection[0]));
		gameObj.position.y = gameObj.position.y - (((gameObj.position.y + gameObj.vertices[verIndex].offY) - intersection[1]));
				
		if(colObj.position.x + colObj.vertices[colVer1].offX != colObj.position.x + colObj.vertices[colVer2].offX) {
			gameObj.position.y--;
		}
				
		gameObj.properties.yv = 0;
		if(colObj.position.y + colObj.vertices[colVer1].offY == colObj.position.y + colObj.vertices[colVer2].offY) {
			gameObj.properties.slideStateX = 1;
		}
				
		var newjumpVectorPosition = {x: gameObj.position.x, y: gameObj.position.y + gameObj.properties.height + 1};
				
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
}

function GetHitBehavior_SG0(gameObj,colObj,verIndex,intersection,colVer1,colVer2) {
	if(gameObj.properties.iFrames == -1 && colObj.properties.HitBoxActive == 1) {
		console.log('From Health: ' + gameObj.properties.health);
		gameObj.properties.health--;
		console.log('To Health: ' + gameObj.properties.health);
				
		if(gameObj.properties.health == 0) {
			console.log('Death');
		}
				
		gameObj.properties.iFrames = 0;
				
		gameObj.properties.inStun = 1;
		gameObj.properties.stunCounter = 0;
		gameObj.properties.HitBoxActive = 0;
		
		if(gameObj.position.x <= colObj.position.x) {
			gameObj.currAnimation = PlatformerAnimationStates.HurtRight;
		} else {
			gameObj.currAnimation = PlatformerAnimationStates.HurtLeft;
		}
		
		/*
		if(gameObj.currAnimation == PlatformerAnimationStates.IdleRight || gameObj.currAnimation == PlatformerAnimationStates.RunRight || gameObj.currAnimation == PlatformerAnimationStates.JumpRight || gameObj.currAnimation == PlatformerAnimationStates.SwingRight) {
			gameObj.currAnimation = PlatformerAnimationStates.HurtRight;
		} else if(gameObj.currAnimation == PlatformerAnimationStates.IdleLeft || gameObj.currAnimation == PlatformerAnimationStates.RunLeft || gameObj.currAnimation == PlatformerAnimationStates.JumpLeft || gameObj.currAnimation == PlatformerAnimationStates.SwingLeft || gameObj.currAnimation == PlatformerAnimationStates.Climb) {
			gameObj.currAnimation = PlatformerAnimationStates.HurtLeft;
		}
		*/
		/*
		if(gameObj.properties.health <= 0) {
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
					
			gameObj.handler.removeAllObjects();
			enterObjects(testcode);
		}
		*/
	}
}

function movingPlatformBehavior() {
	var newPosition = {x: this.position.x + this.properties.xv, y: this.position.y + this.properties.yv};
	this.setPosition(newPosition);
}

function platformerVectorCollide_SG0(colObj,verIndex,intersection,colVer1,colVer2) {
	if(colObj.tag != null) {
		
		if(colObj.tag == 'wall') {
			
			if (colObj.position.y - this.properties.parentObj.position.y <= this.properties.parentObj.properties.height + 1) {
				this.properties.parentObj.properties.jumpable = 1;
				this.properties.parentObj.properties.jumps = this.properties.parentObj.properties.maxJumps;
				this.properties.parentObj.properties.gravity = 0;
				this.properties.hit = 1;
			} else {
				if(this.properties.hit != 1) {
					this.properties.parentObj.properties.jumpable = 0;
					this.properties.parentObj.properties.gravity = 0.6;
				}
			}
			
		} else if(colObj.tag == 'platform') {
			
			if (colObj.position.y - this.properties.parentObj.position.y <= this.properties.parentObj.properties.height + 1) {
				this.properties.parentObj.properties.jumpable = 1;
				this.properties.parentObj.properties.jumps = this.properties.parentObj.properties.maxJumps;
				this.properties.parentObj.properties.gravity = 0;
				
				if(this.properties.hit != 1) {
					var newPosition = {x: this.properties.parentObj.position.x, y: this.properties.parentObj.position.y}
					if(colObj.properties.xv != null) {
						newPosition.x = this.properties.parentObj.position.x + colObj.properties.xv
					}
					if(colObj.properties.yv != null) {
						newPosition.y = this.properties.parentObj.position.y + colObj.properties.yv
					}
					this.properties.parentObj.appendPosition(newPosition);
				}
				
				this.properties.hit = 1;
			} else {
				if(this.properties.hit != 1) {
					this.properties.parentObj.properties.jumpable = 0;
					this.properties.parentObj.properties.gravity = 0.6;
				}
			}
			
		} 
	}
}

function platformerVectorNoCollide_SG0() {
	this.properties.parentObj.properties.jumpable = 0;
	this.properties.parentObj.properties.gravity = 0.6;
}

/*
PLAYERSG0
start
*/
function playerMovement_SG0() {
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
	
	if(this.properties.inStun == 0 && this.properties.inControl == 1) {
		controlledMovement_SG0(this);
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

function playerCollision_SG0(colObj,verIndex,intersection,colVer1,colVer2) {
	if(colObj.tag != null) {
		if(colObj.tag == 'wall') {
			WallCollisionBehavior_SG0(this,colObj,verIndex,intersection,colVer1,colVer2);
		} else if(colObj.tag == 'testBall') {
			
		} else if(colObj.tag == 'platform') {
			PlatformCollisionBehavior_SG0(this,colObj,verIndex,intersection,colVer1,colVer2);
		} else if(colObj.tag == 'ladder') {
			
		} else if(colObj.tag == 'enemy') {
			GetHitBehavior_SG0(this,colObj,verIndex,intersection,colVer1,colVer2);
			if(this.properties.health <= 0) {
				endLevel(false);
			}
		} else if(colObj.tag == 'enemyHitBox') {
			
		}
	}
}

function setupPlayer() {

	var GOJ = createGOJsonFromString("GameObject -x 0 -y 0 -v 0 0 -v 36 0 -d -t vector -cf platformerVectorCollide_SG0 -nc platformerVectorNoCollide_SG0 -p hit 0");
	var GOObj = createGOFromJSON(GOJ);
	this.properties.jumpVector = GOObj;
	GOObj.properties.parentObj = this;
	oHandler.addObject(GOObj);
	
	this.properties.zoomOut = false;
	
	SmallGame0Globals.player = this;
	
}
/*
PLAYERSG0
end
*/

/*
CAMERASG0
start
*/
function cameraControls_SG0() {
	if(SmallGame0Globals.player.properties.zoomOut == false || SmallGame0Globals.player.properties.zoomOut == null) {
		this.handler.CameraX = SmallGame0Globals.player.position.x - 320;
		this.handler.CameraY = SmallGame0Globals.player.position.y - 288;
		
		if(this.handler.CameraX < this.properties.lowerBoundX) {
			this.handler.CameraX = this.properties.lowerBoundX;
		} else if(this.handler.CameraX > this.properties.upperBoundX) {
			this.handler.CameraX = this.properties.upperBoundX;
		}
		
		if(this.handler.CameraY < this.properties.lowerBoundY) {
			this.handler.CameraY = this.properties.lowerBoundY;
		} else if(this.handler.CameraY > this.properties.upperBoundY) {
			this.handler.CameraY = this.properties.upperBoundY;
		}
	} else if(SmallGame0Globals.player.properties.zoomOut == true) {
		this.handler.CameraX = 0;
		this.handler.CameraY = 0;
	}
}
/*
CAMERASG0
end
*/

/*
ENEMSG0
start
*/
function enemMovement_SG0() {
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
	
	if(this.properties.inStun == 0) {
		//controlledMovement_SG0(this);
		if(this.currAnimation == 0) {
			this.properties.xv = 3;
			this.currAnimation = PlatformerAnimationStates.RunRight;
		} else if(this.currAnimation == 1) {
			this.properties.xv = -3;
			this.currAnimation = PlatformerAnimationStates.RunLeft;
		} else if(this.currAnimation == PlatformerAnimationStates.RunRight) {
			this.properties.xv = 3;
			this.currAnimation = PlatformerAnimationStates.RunRight;
		} else if(this.currAnimation == PlatformerAnimationStates.RunLeft) {
			this.properties.xv = -3;
			this.currAnimation = PlatformerAnimationStates.RunLeft;
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
			this.properties.HitBoxActive = 1;
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

function enem2Movement_SG0() {
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
	
	if(this.properties.inStun == 0) {
		//controlledMovement_SG0(this);
		if(this.properties.EscapeFrames == -1) {
			if(this.position.x < SmallGame0Globals.player.position.x) {
				this.properties.xv = 2;
			} else if(this.position.x > SmallGame0Globals.player.position.x) {
				this.properties.xv = -2;
			} else {
				this.properties.xv = 0;
			}
			
			if(this.position.y < SmallGame0Globals.player.position.y) {
				this.properties.yv = 2;
			} else if(this.position.y > SmallGame0Globals.player.position.y) {
				this.properties.yv = -2;
			} else {
				this.properties.yv = 0;
			}
		} else {
			if(this.position.x < SmallGame0Globals.player.position.x) {
				this.properties.xv = -2;
			} else if(this.position.x > SmallGame0Globals.player.position.x) {
				this.properties.xv = 2;
			} else {
				this.properties.xv = 2;
			}
			this.properties.yv = -2;
			
			this.properties.EscapeFrames++;
			if(this.properties.EscapeFrames == 60) {
				this.properties.EscapeFrames = -1
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
			this.properties.HitBoxActive = 1;
			if(this.currAnimation == PlatformerAnimationStates.HurtRight) {
				this.currAnimation = PlatformerAnimationStates.IdleRight;
			} else if(this.currAnimation == PlatformerAnimationStates.HurtLeft) {
				this.currAnimation = PlatformerAnimationStates.IdleLeft;
			}
		}
	}
	
	var newPosition = {x: this.position.x + this.properties.xv, y: this.position.y + this.properties.yv};
	this.setPosition(newPosition);
	
	if(this.properties.iFrames != -1) {
		this.properties.iFrames++;
	}
	if(this.properties.iFrames == 60) {
		this.properties.iFrames = -1;
	}
}

function enemCollision_SG0(colObj,verIndex,intersection,colVer1,colVer2) {
	if(colObj.tag != null) {
		if(colObj.tag == 'wall') {
			console.log('wall: ' + this.vertices[verIndex].label);
			WallCollisionBehavior_SG0(this,colObj,verIndex,intersection,colVer1,colVer2);
			if(this.currAnimation == PlatformerAnimationStates.RunRight) {
				this.currAnimation = PlatformerAnimationStates.RunLeft;
			} else if(this.currAnimation == PlatformerAnimationStates.RunLeft) {
				this.currAnimation = PlatformerAnimationStates.RunRight;
			}
		} else if(colObj.tag == 'testBall') {
			
		} else if(colObj.tag == 'platform') {
			PlatformCollisionBehavior_SG0(this,colObj,verIndex,intersection,colVer1,colVer2);
		} else if(colObj.tag == 'ladder') {
			
		} else if(colObj.tag == 'playerHitBox') {
			GetHitBehavior_SG0(this,colObj,verIndex,intersection,colVer1,colVer2);
			if(this.properties.health <= 0) {
				SmallGame0Globals.TotalEnemies--;
				this.handler.removeObject(this.properties.jumpVector);
				this.handler.removeObject(this);
				SmallGame0Globals.score++;
				CheckEnemies();
			}
		} else if(colObj.tag == 'player') {
			this.properties.EscapeFrames = 0;
		}
	}
}

function setupEnem() {

	var GOJ = createGOJsonFromString("GameObject -x 0 -y 0 -v 0 0 -v 36 0 -d -t vector -cf platformerVectorCollide -nc platformerVectorNoCollide -p hit 0");
	var GOObj = createGOFromJSON(GOJ);
	this.properties.jumpVector = GOObj;
	GOObj.properties.parentObj = this;
	oHandler.addObject(GOObj);
	
}
/*
ENEMSG0
end
*/

/*
ENDGAME
start
*/

function endLevel(success) {
	SmallGame0Globals.handler.removeAllObjects();
	
	SmallGame0Globals.handler.CameraX = 0;
	SmallGame0Globals.handler.CameraY = 0;
	SmallGame0Globals.handler.CameraZoom = 1;
	
	var SelText = '';
	
	if(success) {
		if(SmallGame0Globals.CurrentLevel == 3) {
			//retry button
			SelText = SelText + 'GameObject -x 220 -y 400';
			SelText = SelText + ' -v 0 0 topleft -v 200 0 topright -v 200 54 bottomright -v 0 54 bottomleft'
			SelText = SelText + ' -u StartButtonUpdate'
			SelText = SelText + ' -d'
			SelText = SelText + ';'
		} else {
			//next level button
			SelText = SelText + 'GameObject -x 220 -y 400';
			SelText = SelText + ' -v 0 0 topleft -v 200 0 topright -v 200 54 bottomright -v 0 54 bottomleft'
			SelText = SelText + ' -u NextLevelButtonUpdate'
			SelText = SelText + ' -d'
			SelText = SelText + ';'
			
			//double jump button
			SelText = SelText + 'GameObject -x 210 -y 100';
			SelText = SelText + ' -v 0 0 topleft -v 100 0 topright -v 100 54 bottomright -v 0 54 bottomleft'
			SelText = SelText + ' -u doubleJumpButtonUpdate'
			SelText = SelText + ' -d'
			SelText = SelText + ';'
			
			//sky eye button
			SelText = SelText + 'GameObject -x 360 -y 100';
			SelText = SelText + ' -v 0 0 topleft -v 100 0 topright -v 100 54 bottomright -v 0 54 bottomleft'
			SelText = SelText + ' -u skyEyeButtonUpdate'
			SelText = SelText + ' -d'
			SelText = SelText + ';'
			
			//combo button
			SelText = SelText + 'GameObject -x 510 -y 100';
			SelText = SelText + ' -v 0 0 topleft -v 100 0 topright -v 100 54 bottomright -v 0 54 bottomleft'
			SelText = SelText + ' -u comboButtonUpdate'
			SelText = SelText + ' -d'
			SelText = SelText + ';'
			
			//runny door button
			SelText = SelText + 'GameObject -x 210 -y 200';
			SelText = SelText + ' -v 0 0 topleft -v 100 0 topright -v 100 54 bottomright -v 0 54 bottomleft'
			SelText = SelText + ' -u runnyDoorButtonUpdate'
			SelText = SelText + ' -d'
			SelText = SelText + ';'
			
			//teleporter button
			SelText = SelText + 'GameObject -x 360 -y 200';
			SelText = SelText + ' -v 0 0 topleft -v 100 0 topright -v 100 54 bottomright -v 0 54 bottomleft'
			SelText = SelText + ' -u teleporterButtonUpdate'
			SelText = SelText + ' -d'
			SelText = SelText + ';'
			
			//drops button
			SelText = SelText + 'GameObject -x 510 -y 200';
			SelText = SelText + ' -v 0 0 topleft -v 100 0 topright -v 100 54 bottomright -v 0 54 bottomleft'
			SelText = SelText + ' -u dropsButtonUpdate'
			SelText = SelText + ' -d'
			SelText = SelText + ';'
			
		}
	} else {
		//retry button
		SelText = SelText + 'GameObject -x 220 -y 400';
		SelText = SelText + ' -v 0 0 topleft -v 200 0 topright -v 200 54 bottomright -v 0 54 bottomleft'
		SelText = SelText + ' -u StartButtonUpdate'
		SelText = SelText + ' -d'
		SelText = SelText + ';'
	}
	
	enterObjects(SelText);
}

/*
ENDGAME
end
*/

/*
DOORSG0
start
*/

function doorCollision_SG0(colObj,verIndex,intersection,colVer1,colVer2) {
	if(colObj.tag != null) {
		if(colObj.tag == 'wall') {
			
		} else if(colObj.tag == 'testBall') {
			
		} else if(colObj.tag == 'platform') {
			//PlatformCollisionBehavior_SG0(this,colObj,verIndex,intersection,colVer1,colVer2);
		} else if(colObj.tag == 'ladder') {
			
		} else if(colObj.tag == 'playerHitBox') {
			
		} else if(colObj.tag == 'player') {
			console.log('Player!');
			endLevel(true);
		}
	}
}

function setupDoor() {
	SmallGame0Globals.door = this;
	SmallGame0Globals.handler = this.handler;
}

/*
DOORSG0
end
*/

/*
teleporter
start
*/

function teleporterUpdate_SG0() {
	if(this.properties.downFrames != -1) {
		this.properties.downFrames++;
		if(this.properties.downFrames == 120) {
			this.properties.Active = true;
			this.properties.downFrames = -1;
		}
	}
}

function teleporterCollision_SG0(colObj,verIndex,intersection,colVer1,colVer2) {
	if(colObj.tag != null) {
		if(this.properties.Active) {
			if(colObj.tag == 'enemy') {
				this.properties.downFrames = 0;
				this.properties.Active = false;
				if( Math.abs(colObj.position.x - (this.position.x + this.radialPoints[0].offX)) < Math.abs(colObj.position.x - (this.position.x + this.radialPoints[1].offX)) ) {
					colObj.position.x = this.position.x + this.radialPoints[1].offX;
					colObj.position.y = this.position.y + this.radialPoints[1].offY;
				} else {
					colObj.position.x = this.position.x + this.radialPoints[0].offX;
					colObj.position.y = this.position.y + this.radialPoints[0].offY;
				}
			} else if(colObj.tag == 'player') {
				this.properties.downFrames = 0;
				this.properties.Active = false;
				if( Math.abs(colObj.position.x - (this.position.x + this.radialPoints[0].offX)) < Math.abs(colObj.position.x - (this.position.x + this.radialPoints[1].offX)) ) {
					colObj.position.x = this.position.x + this.radialPoints[1].offX;
					colObj.position.y = this.position.y + this.radialPoints[1].offY;
				} else {
					colObj.position.x = this.position.x + this.radialPoints[0].offX;
					colObj.position.y = this.position.y + this.radialPoints[0].offY;
				}
			}
		}
	}
}

function setupTeleporter() {
	var newRPoffX = this.properties.x2 - this.position.x;
	var newRPoffY = this.properties.y2 - this.position.y;
	
	var newRadP = {
		offX: newRPoffX,
		offY: newRPoffY,
		radius: 18
	}
	
	this.radialPoints.push(newRadP);
	
	this.properties.Active = true;
}

/*
teleporter
end
*/