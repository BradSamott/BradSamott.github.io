console.log('Brad Studio');

function printArrAsString(arr) {
	var fullArr = '[';
	for(var i = 0; i < arr.length; i++) {
		if(fullArr == '[') {
			fullArr = fullArr + '\n' + ' ';
		} else {
			fullArr = fullArr + '\n' + ',';
		}
		var ln = '[';
		for(var j = 0; j < arr[i].length; j++) {
			if(ln == '[') {
				ln = ln + arr[i][j];
			} else {
				ln = ln + ',' + arr[i][j];
			}
		}
		ln = ln + ']';
		fullArr = fullArr + ln;
	}
	fullArr = fullArr + '\n';
	fullArr = fullArr + ']';
	
	console.log(fullArr);
}

objHandler.checkKeys['enter'] = {curr: false, last: false};
keys[13] = {key: 'enter', pressed: false};

var palette1 = [
 [-1,0,0]
,[0,0,0]
]

var drawMap = Array(objHandler.res).fill().map(() => Array(objHandler.res).fill(0));
//console.log(drawMap);

selector = {
	handler: null,
	name: 'selector 0',
	//wSquares: 4,
	//lSquares: 4,
	wSquares: objHandler.res,
	lSquares: objHandler.res,
			
	updateFunctions: [
		function(obj) {
			for(var i = 0; i < obj.handler.cBuff.length; i++) {
				console.log(obj.handler.cBuff[i]);
				//console.log(obj.handler.GS.width / obj.wSquares);
				console.log(Math.floor(obj.handler.cBuff[i].x / (obj.handler.GS.width / obj.wSquares)));
				console.log(Math.floor(obj.handler.cBuff[i].y / (obj.handler.GS.height / obj.lSquares)));
				
				var dx = Math.floor(obj.handler.cBuff[i].x / (obj.handler.GS.width / obj.wSquares));
				var dy = Math.floor(obj.handler.cBuff[i].y / (obj.handler.GS.height / obj.lSquares));
				
				drawMap[dy][dx] = 1;
			}
			
			for(var i = 0; i < obj.handler.rcBuff.length; i++) {
				var dx = Math.floor(obj.handler.rcBuff[i].x / (obj.handler.GS.width / obj.wSquares));
				var dy = Math.floor(obj.handler.rcBuff[i].y / (obj.handler.GS.height / obj.lSquares));
				
				drawMap[dy][dx] = 0;
			}

			if(obj.handler.checkKeys.enter.curr && !obj.handler.checkKeys.enter.last) { 
				printArrAsString(drawMap);
			}
			
		}
	],
			
	drawFunctions: [
		function(obj) {
			var seplines = 0
			sepWlines = obj.handler.GS.width / obj.wSquares;
			sepLlines = obj.handler.GS.height / obj.lSquares;
					
			for(var i = 1; i < obj.wSquares; i++) {
				obj.handler.CTX.beginPath();
				obj.handler.CTX.moveTo(sepWlines * i, 0);
				obj.handler.CTX.lineTo(sepWlines * i, obj.handler.GS.height);
				obj.handler.CTX.stroke();
			}
					
			for(var i = 1; i < obj.lSquares; i++) {
				obj.handler.CTX.beginPath();
				obj.handler.CTX.moveTo(0, sepLlines * i);
				obj.handler.CTX.lineTo(obj.handler.GS.width, sepLlines * i);
				obj.handler.CTX.stroke();
			}
		},
		function(obj) {
			obj.handler.drawFromMap(0,0,drawMap,0,0,128,128,palette1);
		}
	]
}

touchButtons.push({
	x: 80,
	y: 520,
	r: 40,
	buttonLabel: 'ENTER',
	downPress: function() {
		console.log('enter Pressed');
		keys[13].pressed = true;
	},
	upPress: function() {
		console.log('enter Unpressed');
		keys[13].pressed = false;
	}
});

windowResizeAction();

objHandler.addObject(selector);