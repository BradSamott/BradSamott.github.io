'use strict'

window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);

// The status of the arrow keys
var keys = {
    right: false,
    left: false,
    up: false,
	lastUpStatus: false,
	space: false,
	lastSpaceStatus: false,
	p: false,
	lastPStatus: false
};

// This function will be called when a key on the keyboard is pressed
function keydown(e) {
    // 37 is the code for the left arrow key
    if(e.keyCode == 37) {
        keys.left = true;
    }
	
    // 38 is the code for the up arrow key
    if(e.keyCode == 38) {
		keys.up = true;
    }
	
    // 39 is the code for the right arrow key
    if(e.keyCode == 39) {
        keys.right = true;
    }
	
	// 40 is the code for the down arrow key
    if(e.keyCode == 40) {
        keys.down = true;
    }
	
	// 32 is the code for the space key
    if(e.keyCode == 32) {
        keys.space = true;
    }
	
	// 80 is the code for the p key
	if(e.keyCode == 80) {
		keys.p = true;
	}
}
	
// This function is called when the pressed key is released
function keyup(e) {
	//left
    if(e.keyCode == 37) {
        keys.left = false;
    }
	
	//up
    if(e.keyCode == 38) {
		keys.up = false;
    }
	
	//right
    if(e.keyCode == 39) {
        keys.right = false;
    }
	
	//down
    if(e.keyCode == 40) {
        keys.down = false;
    }
	
	//space
	if(e.keyCode == 32) {
        keys.space = false;
    }
	
	//p
	if(e.keyCode == 80) {
		keys.p = false;
	}
}