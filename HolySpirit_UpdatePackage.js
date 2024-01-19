
function startHolySpirit() {
	var SelText = ''
	
	SelText = SelText + 'GameObject -u textBoxUpdate';
	SelText = SelText + ' -pi setupHSTextBox';
	SelText = SelText + ' -x 120 -y 100';
	SelText = SelText + ' -p waitFrames 0';
	SelText = SelText + ' -d;';
	
	enterObjects(SelText);
}

function UploadHolySpirit() {
	GameTitle.innerHTML = "Holy Spirit";
	oHandler.resetCamera();
	oHandler.removeAllObjects();
	
	var backgroundCanvas = document.getElementById("canvasBG");
	backgroundCanvas.style = "background-color: white;"
	
	startHolySpirit();
	//startMenu();
}

function setupHSTextBox() {
	this.properties.Lines = [];
	this.properties.Lines.push('You are back.');
	this.properties.Lines.push('I think he has caught on to my plan.');
	this.properties.Lines.push('Wait. Why do you look confused?');
	this.properties.Lines.push('Is this the first time you are seeing me?');
	this.properties.Lines.push('You will need to go back. You need to visit in the right order.');
	
	this.properties.textChildren = [];
	this.properties.currentLine = 0;
	this.properties.currentChar = 0;
}

function textBoxUpdate() {
	if(this.properties.currentLine < this.properties.Lines.length) {
		if(this.properties.waitFrames == 0) {
			if(this.properties.textChildren[this.properties.currentLine] == null) {
				this.properties.currentChar = 0;
				var childGenStr = 'TextObject -x '+this.position.x+' -y '+(this.position.y + (this.properties.currentLine * 20))+' -t '+this.properties.Lines[this.properties.currentLine].charAt(this.properties.currentChar)+' -c black;';
		
				var TOJ = createTOJsonFromString(childGenStr);
				var TOObj = createTOFromJSON(TOJ);
				this.properties.textChildren.push(TOObj);
				this.handler.addTextObject(TOObj);
				this.properties.currentChar++;
				
				if(this.properties.currentChar > this.properties.Lines[this.properties.currentLine].length - 1) {
					this.properties.currentLine++;
				}
			} else {
				this.properties.textChildren[this.properties.currentLine].textContent = this.properties.textChildren[this.properties.currentLine].textContent + this.properties.Lines[this.properties.currentLine].charAt(this.properties.currentChar);
				this.properties.currentChar++;
				
				if(this.properties.currentChar > this.properties.Lines[this.properties.currentLine].length - 1) {
					this.properties.currentLine++;
				}
			}
		} else {
			this.properties.waitFrames++;
		}
		
		if(this.properties.waitFrames == 10) {
			this.properties.waitFrames = 0;
		}
	}
}