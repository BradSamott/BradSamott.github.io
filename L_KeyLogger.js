'use strict'

window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1 && document.activeElement != document.getElementById("inputBox")) {
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
	lastPStatus: false,
	w: false,
	a: false,
	s: false,
	d: false,
	enter: false,
	q: false
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
	
	// 87 is the code for the w key
	if(e.keyCode == 87) {
		keys.w = true;
	}
	
	// 65 is the code for the w key
	if(e.keyCode == 65) {
		keys.a = true;
	}
	
	// 83 is the code for the w key
	if(e.keyCode == 83) {
		keys.s = true;
	}
	
	// 68 is the code for the w key
	if(e.keyCode == 68) {
		keys.d = true;
	}
	
	// 13 is the code for the enter key
	if(e.keyCode == 13) {
		keys.enter = true;
	}
	
	// 81 is the code for the q key
	if(e.keyCode == 81) {
		keys.q = true;
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
	
	//w
	if(e.keyCode == 87) {
		keys.w = false;
	}
	
	//a
	if(e.keyCode == 65) {
		keys.a = false;
	}
	
	//s
	if(e.keyCode == 83) {
		keys.s = false;
	}
	
	//d
	if(e.keyCode == 68) {
		keys.d = false;
	}
	
	//enter
	if(e.keyCode == 13) {
		keys.enter = false;
	}
	
	//q
	if(e.keyCode == 81) {
		keys.q = false;
	}
}