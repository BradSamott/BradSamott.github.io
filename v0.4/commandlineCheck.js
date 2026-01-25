console.log('Command Line Found');

CheckBucket.CommandLine = true;

var addedScripts = document.getElementById("AddedScripts");

//var urlPrefix = '';
//urlPrefix = "https://cdn.jsdelivr.net/gh/BradSamott/BradSamott.github.io/v"+ver+"/"
//urlPrefix = "WorkFolder/"

objHandler.objs = [];
objHandler.cBuff = [];
objHandler.maxUpdateLayer = -1;
objHandler.maxDrawLayer = -1;
objHandler.checkKeys = {};
keys = {};
touchButtons = [];
var tctx = touchControls.getContext('2d');
tctx.clearRect(0, 0, touchControls.width, touchControls.height);
				
addedScripts.innerHTML = '';
			
var newGameScript = document.createElement('script');
			
//alert("Game Start");
newGameScript.src = urlPrefix+"CommandLine.js"
addedScripts.appendChild(newGameScript);

var toAddText = document.getElementById("ToAdd");
toAddText.value = '';