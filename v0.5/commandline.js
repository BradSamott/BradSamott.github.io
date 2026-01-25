console.log('CommandLine v0.0');

objHandler.checkKeys['a'] = {curr: false, last: false};
keys[65] = {key: 'a', pressed: false};
objHandler.checkKeys['b'] = {curr: false, last: false};
keys[66] = {key: 'b', pressed: false};
objHandler.checkKeys['c'] = {curr: false, last: false};
keys[67] = {key: 'c', pressed: false};
objHandler.checkKeys['d'] = {curr: false, last: false};
keys[68] = {key: 'd', pressed: false};
objHandler.checkKeys['e'] = {curr: false, last: false};
keys[69] = {key: 'e', pressed: false};
objHandler.checkKeys['f'] = {curr: false, last: false};
keys[70] = {key: 'f', pressed: false};
objHandler.checkKeys['g'] = {curr: false, last: false};
keys[71] = {key: 'g', pressed: false};
objHandler.checkKeys['h'] = {curr: false, last: false};
keys[72] = {key: 'h', pressed: false};
objHandler.checkKeys['i'] = {curr: false, last: false};
keys[73] = {key: 'i', pressed: false};
objHandler.checkKeys['j'] = {curr: false, last: false};
keys[74] = {key: 'j', pressed: false};
objHandler.checkKeys['k'] = {curr: false, last: false};
keys[75] = {key: 'k', pressed: false};
objHandler.checkKeys['l'] = {curr: false, last: false};
keys[76] = {key: 'l', pressed: false};
objHandler.checkKeys['m'] = {curr: false, last: false};
keys[77] = {key: 'm', pressed: false};
objHandler.checkKeys['n'] = {curr: false, last: false};
keys[78] = {key: 'n', pressed: false};
objHandler.checkKeys['o'] = {curr: false, last: false};
keys[79] = {key: 'o', pressed: false};
objHandler.checkKeys['p'] = {curr: false, last: false};
keys[80] = {key: 'p', pressed: false};
objHandler.checkKeys['q'] = {curr: false, last: false};
keys[81] = {key: 'q', pressed: false};
objHandler.checkKeys['r'] = {curr: false, last: false};
keys[82] = {key: 'r', pressed: false};
objHandler.checkKeys['s'] = {curr: false, last: false};
keys[83] = {key: 's', pressed: false};
objHandler.checkKeys['t'] = {curr: false, last: false};
keys[84] = {key: 't', pressed: false};
objHandler.checkKeys['u'] = {curr: false, last: false};
keys[85] = {key: 'u', pressed: false};
objHandler.checkKeys['v'] = {curr: false, last: false};
keys[86] = {key: 'v', pressed: false};
objHandler.checkKeys['w'] = {curr: false, last: false};
keys[87] = {key: 'w', pressed: false};
objHandler.checkKeys['x'] = {curr: false, last: false};
keys[88] = {key: 'x', pressed: false};
objHandler.checkKeys['y'] = {curr: false, last: false};
keys[89] = {key: 'y', pressed: false};
objHandler.checkKeys['z'] = {curr: false, last: false};
keys[90] = {key: 'z', pressed: false};
objHandler.checkKeys['space'] = {curr: false, last: false};
keys[32] = {key: 'space', pressed: false};

objHandler.checkKeys['0'] = {curr: false, last: false};
keys[48] = {key: '0', pressed: false};
objHandler.checkKeys['1'] = {curr: false, last: false};
keys[49] = {key: '1', pressed: false};
objHandler.checkKeys['2'] = {curr: false, last: false};
keys[50] = {key: '2', pressed: false};
objHandler.checkKeys['3'] = {curr: false, last: false};
keys[51] = {key: '3', pressed: false};
objHandler.checkKeys['4'] = {curr: false, last: false};
keys[52] = {key: '4', pressed: false};
objHandler.checkKeys['5'] = {curr: false, last: false};
keys[53] = {key: '5', pressed: false};
objHandler.checkKeys['6'] = {curr: false, last: false};
keys[54] = {key: '6', pressed: false};
objHandler.checkKeys['7'] = {curr: false, last: false};
keys[55] = {key: '7', pressed: false};
objHandler.checkKeys['8'] = {curr: false, last: false};
keys[56] = {key: '8', pressed: false};
objHandler.checkKeys['9'] = {curr: false, last: false};
keys[57] = {key: '9', pressed: false};

objHandler.checkKeys['enter'] = {curr: false, last: false};
keys[13] = {key: 'enter', pressed: false};
objHandler.checkKeys['backspace'] = {curr: false, last: false};
keys[8] = {key: 'backspace', pressed: false};


var alphabetMap = [
 [1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1]
,[1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1]
,[1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0]
,[1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0]
,[1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1]
,[1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1]
,[1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1]
,[1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1]
,[1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1]
,[1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1]
,[0,0,0]
,[0,0,0]
,[0,0,0]
,[0,0,0]
,[0,0,0]
]

var alphabetLocations = {
 'A': {startX: 0, startY: 0, w: 3, l: 5}
,'B': {startX: 3, startY: 0, w: 3, l: 5}
,'C': {startX: 6, startY: 0, w: 3, l: 5}
,'D': {startX: 9, startY: 0, w: 3, l: 5}
,'E': {startX: 12, startY: 0, w: 3, l: 5}
,'F': {startX: 15, startY: 0, w: 3, l: 5}
,'G': {startX: 18, startY: 0, w: 3, l: 5}
,'H': {startX: 21, startY: 0, w: 3, l: 5}
,'I': {startX: 24, startY: 0, w: 3, l: 5}
,'J': {startX: 27, startY: 0, w: 3, l: 5}
,'K': {startX: 30, startY: 0, w: 3, l: 5}
,'L': {startX: 33, startY: 0, w: 3, l: 5}
,'M': {startX: 36, startY: 0, w: 3, l: 5}
,'N': {startX: 39, startY: 0, w: 3, l: 5}
,'O': {startX: 42, startY: 0, w: 3, l: 5}
,'P': {startX: 45, startY: 0, w: 3, l: 5}
,'Q': {startX: 48, startY: 0, w: 3, l: 5}
,'R': {startX: 51, startY: 0, w: 3, l: 5}
,'S': {startX: 54, startY: 0, w: 3, l: 5}
,'T': {startX: 57, startY: 0, w: 3, l: 5}
,'U': {startX: 60, startY: 0, w: 3, l: 5}
,'V': {startX: 63, startY: 0, w: 3, l: 5}
,'W': {startX: 66, startY: 0, w: 3, l: 5}
,'X': {startX: 69, startY: 0, w: 3, l: 5}
,'Y': {startX: 72, startY: 0, w: 3, l: 5}
,'Z': {startX: 75, startY: 0, w: 3, l: 5}
,'0': {startX: 0, startY: 5, w: 3, l: 5}
,'1': {startX: 3, startY: 5, w: 3, l: 5}
,'2': {startX: 6, startY: 5, w: 3, l: 5}
,'3': {startX: 9, startY: 5, w: 3, l: 5}
,'4': {startX: 12, startY: 5, w: 3, l: 5}
,'5': {startX: 15, startY: 5, w: 3, l: 5}
,'6': {startX: 18, startY: 5, w: 3, l: 5}
,'7': {startX: 21, startY: 5, w: 3, l: 5}
,'8': {startX: 24, startY: 5, w: 3, l: 5}
,'9': {startX: 27, startY: 5, w: 3, l: 5}
,' ': {startX: 0, startY: 10, w: 3, l: 5}
};

var palette1 = [
 [-1,0,0]
,[255,255,255]
,[255,255,255]
]

backGroundManager = {
	handler: null,
	updateFunctions: [],
	drawFunctions: [
		function(obj) {
			for(var i = 0; i < obj.handler.res; i++) {
				for(var j = 0; j < obj.handler.res; j++) {
					obj.handler.pset(i,j, 0,0,0);
				}
			}
		}
	]
};

textMap = {
	a: 'A',
	b: 'B',
	c: 'C',
	d: 'D',
	e: 'E',
	f: 'F',
	g: 'G',
	h: 'H',
	i: 'I',
	j: 'J',
	k: 'K',
	l: 'L',
	m: 'M',
	n: 'N',
	o: 'O',
	p: 'P',
	q: 'Q',
	r: 'R',
	s: 'S',
	t: 'T',
	u: 'U',
	v: 'V',
	w: 'W',
	x: 'X',
	y: 'Y',
	z: 'Z',
	space: ' ',
	'0': '0',
	'1': '1',
	'2': '2',
	'3': '3',
	'4': '4',
	'5': '5',
	'6': '6',
	'7': '7',
	'8': '8',
	'9': '9'
}

inputManager = {
	handler: null,
	currLine: 0,
	userInputs: [''],
	lastLetter: '',
	
	updateFunctions: [
		function(obj) {
			for (const lett of Object.keys(obj.handler.checkKeys)) {
				if(obj.handler.checkKeys[lett].curr && !obj.handler.checkKeys[lett].last) {
					if(textMap[lett] != null) {
						//obj.lastLetter = textMap[lett];
						obj.userInputs[obj.currLine] = obj.userInputs[obj.currLine] + textMap[lett];
					}
				}
			}
			
			if(obj.handler.checkKeys.backspace.curr && !obj.handler.checkKeys.backspace.last) {
				if(obj.userInputs[obj.currLine].length > 0) {
					obj.userInputs[obj.currLine] = obj.userInputs[obj.currLine].substring(0,obj.userInputs[obj.currLine].length-1);
				}
			}
			
			if(obj.handler.checkKeys.enter.curr && !obj.handler.checkKeys.enter.last) {
				activateGameByArg(obj.userInputs[obj.currLine]);
				
				obj.userInputs.push('');
				obj.currLine++;
			}
		}
	],
	drawFunctions: [
		null
		, 
		function(obj) {
			//console.log(obj.lastLetter);
			//obj.handler.print(1,1,obj.lastLetter,alphabetMap,alphabetLocations,3,palette1);
			for(var i = 0; i < obj.userInputs.length; i++) {
				obj.handler.print(1,1 + (i*6),obj.userInputs[i],alphabetMap,alphabetLocations,3,palette1);
			}
		}
	]
}


touchButtons.push({
	x: 80,
	y: 170,
	r: 40,
	buttonLabel: 'Q',
	downPress: function() {
		console.log('q Pressed');
		keys[81].pressed = true;
	},
	upPress: function() {
		console.log('q Unpressed');
		keys[81].pressed = false;
	}
});

touchButtons.push({
	x: 160,
	y: 170,
	r: 40,
	buttonLabel: 'W',
	downPress: function() {
		console.log('w Pressed');
		keys[87].pressed = true;
	},
	upPress: function() {
		console.log('w Unpressed');
		keys[87].pressed = false;
	}
});

touchButtons.push({
	x: 240,
	y: 170,
	r: 40,
	buttonLabel: 'E',
	downPress: function() {
		console.log('e Pressed');
		keys[69].pressed = true;
	},
	upPress: function() {
		console.log('e Unpressed');
		keys[69].pressed = false;
	}
});

touchButtons.push({
	x: 320,
	y: 170,
	r: 40,
	buttonLabel: 'R',
	downPress: function() {
		console.log('r Pressed');
		keys[82].pressed = true;
	},
	upPress: function() {
		console.log('r Unpressed');
		keys[82].pressed = false;
	}
});

touchButtons.push({
	x: 400,
	y: 170,
	r: 40,
	buttonLabel: 'T',
	downPress: function() {
		console.log('t Pressed');
		keys[84].pressed = true;
	},
	upPress: function() {
		console.log('t Unpressed');
		keys[84].pressed = false;
	}
});

touchButtons.push({
	x: 480,
	y: 170,
	r: 40,
	buttonLabel: 'Y',
	downPress: function() {
		console.log('y Pressed');
		keys[89].pressed = true;
	},
	upPress: function() {
		console.log('y Unpressed');
		keys[89].pressed = false;
	}
});

touchButtons.push({
	x: 560,
	y: 170,
	r: 40,
	buttonLabel: 'U',
	downPress: function() {
		console.log('u Pressed');
		keys[85].pressed = true;
	},
	upPress: function() {
		console.log('u Unpressed');
		keys[85].pressed = false;
	}
});

touchButtons.push({
	x: 640,
	y: 170,
	r: 40,
	buttonLabel: 'I',
	downPress: function() {
		console.log('i Pressed');
		keys[73].pressed = true;
	},
	upPress: function() {
		console.log('i Unpressed');
		keys[73].pressed = false;
	}
});

touchButtons.push({
	x: 720,
	y: 170,
	r: 40,
	buttonLabel: 'O',
	downPress: function() {
		console.log('o Pressed');
		keys[79].pressed = true;
	},
	upPress: function() {
		console.log('o Unpressed');
		keys[79].pressed = false;
	}
});

touchButtons.push({
	x: 800,
	y: 170,
	r: 40,
	buttonLabel: 'P',
	downPress: function() {
		console.log('p Pressed');
		keys[80].pressed = true;
	},
	upPress: function() {
		console.log('p Unpressed');
		keys[80].pressed = false;
	}
});


touchButtons.push({
	x: 120,
	y: 270,
	r: 40,
	buttonLabel: 'A',
	downPress: function() {
		console.log('a Pressed');
		keys[65].pressed = true;
	},
	upPress: function() {
		console.log('q Unpressed');
		keys[65].pressed = false;
	}
});

touchButtons.push({
	x: 200,
	y: 270,
	r: 40,
	buttonLabel: 'S',
	downPress: function() {
		console.log('s Pressed');
		keys[83].pressed = true;
	},
	upPress: function() {
		console.log('s Unpressed');
		keys[83].pressed = false;
	}
});

touchButtons.push({
	x: 280,
	y: 270,
	r: 40,
	buttonLabel: 'D',
	downPress: function() {
		console.log('d Pressed');
		keys[68].pressed = true;
	},
	upPress: function() {
		console.log('d Unpressed');
		keys[68].pressed = false;
	}
});

touchButtons.push({
	x: 360,
	y: 270,
	r: 40,
	buttonLabel: 'F',
	downPress: function() {
		console.log('f Pressed');
		keys[70].pressed = true;
	},
	upPress: function() {
		console.log('f Unpressed');
		keys[70].pressed = false;
	}
});

touchButtons.push({
	x: 440,
	y: 270,
	r: 40,
	buttonLabel: 'G',
	downPress: function() {
		console.log('g Pressed');
		keys[71].pressed = true;
	},
	upPress: function() {
		console.log('g Unpressed');
		keys[71].pressed = false;
	}
});

touchButtons.push({
	x: 520,
	y: 270,
	r: 40,
	buttonLabel: 'H',
	downPress: function() {
		console.log('h Pressed');
		keys[72].pressed = true;
	},
	upPress: function() {
		console.log('h Unpressed');
		keys[72].pressed = false;
	}
});

touchButtons.push({
	x: 600,
	y: 270,
	r: 40,
	buttonLabel: 'J',
	downPress: function() {
		console.log('j Pressed');
		keys[74].pressed = true;
	},
	upPress: function() {
		console.log('j Unpressed');
		keys[74].pressed = false;
	}
});

touchButtons.push({
	x: 680,
	y: 270,
	r: 40,
	buttonLabel: 'K',
	downPress: function() {
		console.log('k Pressed');
		keys[75].pressed = true;
	},
	upPress: function() {
		console.log('k Unpressed');
		keys[75].pressed = false;
	}
});

touchButtons.push({
	x: 760,
	y: 270,
	r: 40,
	buttonLabel: 'L',
	downPress: function() {
		console.log('l Pressed');
		keys[76].pressed = true;
	},
	upPress: function() {
		console.log('l Unpressed');
		keys[76].pressed = false;
	}
});


touchButtons.push({
	x: 160,
	y: 370,
	r: 40,
	buttonLabel: 'Z',
	downPress: function() {
		console.log('z Pressed');
		keys[90].pressed = true;
	},
	upPress: function() {
		console.log('z Unpressed');
		keys[90].pressed = false;
	}
});

touchButtons.push({
	x: 240,
	y: 370,
	r: 40,
	buttonLabel: 'X',
	downPress: function() {
		console.log('x Pressed');
		keys[88].pressed = true;
	},
	upPress: function() {
		console.log('x Unpressed');
		keys[88].pressed = false;
	}
});

touchButtons.push({
	x: 320,
	y: 370,
	r: 40,
	buttonLabel: 'C',
	downPress: function() {
		console.log('c Pressed');
		keys[67].pressed = true;
	},
	upPress: function() {
		console.log('c Unpressed');
		keys[67].pressed = false;
	}
});

touchButtons.push({
	x: 400,
	y: 370,
	r: 40,
	buttonLabel: 'V',
	downPress: function() {
		console.log('v Pressed');
		keys[86].pressed = true;
	},
	upPress: function() {
		console.log('v Unpressed');
		keys[86].pressed = false;
	}
});

touchButtons.push({
	x: 480,
	y: 370,
	r: 40,
	buttonLabel: 'B',
	downPress: function() {
		console.log('b Pressed');
		keys[66].pressed = true;
	},
	upPress: function() {
		console.log('b Unpressed');
		keys[66].pressed = false;
	}
});

touchButtons.push({
	x: 560,
	y: 370,
	r: 40,
	buttonLabel: 'N',
	downPress: function() {
		console.log('n Pressed');
		keys[78].pressed = true;
	},
	upPress: function() {
		console.log('n Unpressed');
		keys[78].pressed = false;
	}
});

touchButtons.push({
	x: 640,
	y: 370,
	r: 40,
	buttonLabel: 'M',
	downPress: function() {
		console.log('m Pressed');
		keys[77].pressed = true;
	},
	upPress: function() {
		console.log('m Unpressed');
		keys[77].pressed = false;
	}
});


touchButtons.push({
	x: 400,
	y: 500,
	r: 40,
	buttonLabel: 'SPACE',
	downPress: function() {
		console.log('space Pressed');
		keys[32].pressed = true;
	},
	upPress: function() {
		console.log('space Unpressed');
		keys[32].pressed = false;
	}
});

touchButtons.push({
	x: 760,
	y: 500,
	r: 40,
	buttonLabel: 'BACK',
	downPress: function() {
		console.log('backspace Pressed');
		keys[8].pressed = true;
	},
	upPress: function() {
		console.log('backspace Unpressed');
		keys[8].pressed = false;
	}
});

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

objHandler.addObject(backGroundManager);
objHandler.addObject(inputManager);