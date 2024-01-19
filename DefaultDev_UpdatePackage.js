var DefaultDevGlobals = {
	currHandler: oHandlerDev,
	currNewObject: null,
	mode: 'vertex'
}

function storeClick_DefaultDev(e) {
	var mousepos = getMousePos(canvasUserInterfaceDev,e);
	DefaultDevGlobals.currHandler.cBuff.push(mousepos);
}

function addClickOption_DefaultDev() {
	DefaultDevGlobals.currHandler = this.handler;
	canvasUserInterfaceDev.addEventListener('click', storeClick_DefaultDev, false);
}

function showClickPosition() {
	for(var i = 0; i < this.handler.cBuff.length; i++) {
		console.log({ LocalPositonX: this.handler.cBuff[i].x, LocalPositonY: this.handler.cBuff[i].y} );
		console.log({ AbsolutePositionX: this.handler.cBuff[i].x + this.handler.CameraX, AbsolutePositionY: this.handler.cBuff[i].y + this.handler.CameraY} );
	}
}


function addVertex() {
	if(DefaultDevGlobals.mode == 'vertex') {
		for(var i = 0; i < this.handler.cBuff.length; i++) {
			//console.log({ LocalPositonX: this.handler.cBuff[i].x, LocalPositonY: this.handler.cBuff[i].y} );
			//console.log({ AbsolutePositionX: this.handler.cBuff[i].x + this.handler.CameraX, AbsolutePositionY: this.handler.cBuff[i].y + this.handler.CameraY} );
			
			if(DefaultDevGlobals.currNewObject != null) {
				if(DefaultDevGlobals.currNewObject.vertices.length == 0 && DefaultDevGlobals.currNewObject.radialPoints.length == 0) {
					DefaultDevGlobals.currNewObject.position.x = this.handler.cBuff[i].x + this.handler.CameraX;
					DefaultDevGlobals.currNewObject.position.y = this.handler.cBuff[i].y + this.handler.CameraY;
					
					DefaultDevGlobals.currNewObject.vertices.push({offX: 0, offY: 0})
				} else {
					DefaultDevGlobals.currNewObject.vertices.push({offX: this.handler.cBuff[i].x + this.handler.CameraX - DefaultDevGlobals.currNewObject.position.x, offY: this.handler.cBuff[i].y + this.handler.CameraY - DefaultDevGlobals.currNewObject.position.y})
				}
			}
		}
	}
}

function addRadialPoint() {
	if(DefaultDevGlobals.mode == 'radialPoint') {
		for(var i = 0; i < this.handler.cBuff.length; i++) {
			//console.log({ LocalPositonX: this.handler.cBuff[i].x, LocalPositonY: this.handler.cBuff[i].y} );
			//console.log({ AbsolutePositionX: this.handler.cBuff[i].x + this.handler.CameraX, AbsolutePositionY: this.handler.cBuff[i].y + this.handler.CameraY} );
			
			if(DefaultDevGlobals.currNewObject != null) {
				if(DefaultDevGlobals.currNewObject.vertices.length == 0 && DefaultDevGlobals.currNewObject.radialPoints.length == 0) {
					DefaultDevGlobals.currNewObject.position.x = this.handler.cBuff[i].x + this.handler.CameraX;
					DefaultDevGlobals.currNewObject.position.y = this.handler.cBuff[i].y + this.handler.CameraY;
					
					DefaultDevGlobals.currNewObject.radialPoints.push({offX: 0, offY: 0, radius: 15})
				} else {
					DefaultDevGlobals.currNewObject.radialPoints.push({offX: this.handler.cBuff[i].x + this.handler.CameraX - DefaultDevGlobals.currNewObject.position.x, offY: this.handler.cBuff[i].y + this.handler.CameraY - DefaultDevGlobals.currNewObject.position.y, radius: 15})
				}
			}
		}
	}
}

function DefaultDevSetup() {
	SelText = '';
	
	SelText = SelText + 'GameObject -pi addClickOption_DefaultDev -t debugger;';
	SelText = SelText + 'GameObject -lu showClickPosition -t debugger;';
	SelText = SelText + 'GameObject -lu addVertex -t debugger;';
	SelText = SelText + 'GameObject -lu addRadialPoint -t debugger;';
	
	enterObjectsDev(SelText);
}

DefaultDevSetup();
