console.log('AedynsGame v0.0');

objHandler.checkKeys['left'] = {curr: false, last: false};
keys[37] = {key: 'left', pressed: false};
objHandler.checkKeys['up'] = {curr: false, last: false};
keys[38] = {key: 'up', pressed: false};

selector = {
	handler: null,
	name: 'selector',
			
	updateFunctions: [
		function(obj) {
			if(obj.handler.checkKeys.up.curr && !obj.handler.checkKeys.up.last) {
				console.log('up');
			}
					
		}
	],
			
	drawFunctions: [
		
	]
}