'use strict'

var controllerIndex = null;

var GamePadButtons = {
	leftPressed: false,
	rightPressed: false,
	upPressed: false,
	downPressed: false,
	Clock6Pressed: false, //A on XBOX
	Clock9Pressed: false //X on XBOX
}

window.addEventListener('gamepadconnected', (event) => {
	controllerIndex = event.gamepad.index;
	console.log('controller connected');
});

window.addEventListener('gamepaddisconnected', (event) => {
	controllerIndex = null;
	console.log('controller disconnected');
});

function controllerInput() {
	if(controllerIndex != null) {
		const gamepad = navigator.getGamepads()[controllerIndex];
		const buttons = gamepad.buttons;
		
		GamePadButtons.leftPressed = buttons[14].pressed;
		GamePadButtons.rightPressed = buttons[15].pressed;
		GamePadButtons.upPressed = buttons[12].pressed;
		GamePadButtons.downPressed = buttons[13].pressed;
		
		GamePadButtons.Clock6Pressed = buttons[0].pressed;
		GamePadButtons.Clock9Pressed = buttons[2].pressed;
	}
}