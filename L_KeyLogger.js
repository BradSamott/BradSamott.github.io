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
	q: false,
	b: false,
	c: false,
	e: false,
	f: false,
	g: false,
	h: false,
	i: false,
	j: false,
	k: false,
	l: false,
	m: false,
	n: false,
	o: false,
	r: false,
	t: false,
	u: false,
	v: false,
	x: false,
	y: false,
	z: false
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
	
	if(e.keyCode == 66) {
		keys.b = true;
	}

	if(e.keyCode == 67) {
		keys.c = true;
	}

	if(e.keyCode == 69) {
		keys.e = true;
	}

	if(e.keyCode == 70) {
		keys.f = true;
	}

	if(e.keyCode == 71) {
		keys.g = true;
	}

	if(e.keyCode == 72) {
		keys.h = true;
	}

	if(e.keyCode == 73) {
		keys.i = true;
	}

	if(e.keyCode == 74) {
		keys.j = true;
	}

	if(e.keyCode == 75) {
		keys.k = true;
	}

	if(e.keyCode == 76) {
		keys.l = true;
	}

	if(e.keyCode == 77) {
		keys.m = true;
	}

	if(e.keyCode == 78) {
		keys.n = true;
	}

	if(e.keyCode == 79) {
		keys.o = true;
	}

	if(e.keyCode == 82) {
		keys.r = true;
	}

	if(e.keyCode == 84) {
		keys.t = true;
	}

	if(e.keyCode == 85) {
		keys.u = true;
	}

	if(e.keyCode == 86) {
		keys.v = true;
	}

	if(e.keyCode == 88) {
		keys.x = true;
	}

	if(e.keyCode == 89) {
		keys.y = true;
	}

	if(e.keyCode == 90) {
		keys.z = true;
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
	
	if(e.keyCode == 66) {
		keys.b = false;
	}

	if(e.keyCode == 67) {
		keys.c = false;
	}

	if(e.keyCode == 69) {
		keys.e = false;
	}

	if(e.keyCode == 70) {
		keys.f = false;
	}

	if(e.keyCode == 71) {
		keys.g = false;
	}

	if(e.keyCode == 72) {
		keys.h = false;
	}

	if(e.keyCode == 73) {
		keys.i = false;
	}

	if(e.keyCode == 74) {
		keys.j = false;
	}

	if(e.keyCode == 75) {
		keys.k = false;
	}

	if(e.keyCode == 76) {
		keys.l = false;
	}

	if(e.keyCode == 77) {
		keys.m = false;
	}

	if(e.keyCode == 78) {
		keys.n = false;
	}

	if(e.keyCode == 79) {
		keys.o = false;
	}

	if(e.keyCode == 82) {
		keys.r = false;
	}

	if(e.keyCode == 84) {
		keys.t = false;
	}

	if(e.keyCode == 85) {
		keys.u = false;
	}

	if(e.keyCode == 86) {
		keys.v = false;
	}

	if(e.keyCode == 88) {
		keys.x = false;
	}

	if(e.keyCode == 89) {
		keys.y = false;
	}

	if(e.keyCode == 90) {
		keys.z = false;
	}
}