testobject = {
			handler: null,
			name: 'test object',
			
			updateFunctions: [
				function(obj) {
					if(obj.handler.checkKeys.a.curr && !obj.handler.checkKeys.a.last) {
						console.log('AAA');
					}
				},
				
				function(obj) {
					if(obj.handler.checkKeys.s.curr && !obj.handler.checkKeys.s.last) {
						console.log('SSS');
					}
				}
			],
			
			drawFunctions: [
				function(obj) {
					//console.log('DDD');
					if(obj.handler != null) {
						//console.log('circle');
						obj.handler.CTX.beginPath();
						obj.handler.CTX.arc(10, 10, 10, 0, 2 * Math.PI, false);
						obj.handler.CTX.stroke();
						
						obj.handler.pset(100,50,0,0,0);
						obj.handler.pset(101,50,0,0,0);
					}
				}
			]
		}
		
		selector0 = {
			handler: null,
			name: 'selector 0',
			wSquares: 4,
			lSquares: 4,
			
			updateFunctions: [
				function(obj) {
					for(var i = 0; i < obj.handler.cBuff.length; i++) {
						console.log(obj.handler.cBuff[i]);
						//console.log(obj.handler.GS.width / obj.wSquares);
						console.log(Math.floor(obj.handler.cBuff[i].x / (obj.handler.GS.width / obj.wSquares)));
						console.log(Math.floor(obj.handler.cBuff[i].y / (obj.handler.GS.height / obj.lSquares)));
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
				}
			]
		}
		
		objHandler.addObject(testobject);
		objHandler.addObject(selector0);