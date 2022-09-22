'use strict'

function Min(val1, val2) {
	if(val1 < val2) {
		return val1;
	} else {
		return val2;
	}
}

function Max(val1, val2) {
	if(val1 > val2) {
		return val1;
	} else {
		return val2;
	}
}

function SegmentsIntersect(Seg1x1,Seg1y1,Seg1x2,Seg1y2,Seg2x1,Seg2y1,Seg2x2,Seg2y2) {
	
	var det;
	var gam;
	var lam;
	
	det = (Seg1x2 - Seg1x1) * (Seg2y2 - Seg2y1) - (Seg2x2 - Seg2x1) * (Seg1y2 - Seg1y1);
	
	if(det == 0) {
		return false;
	} else {
		lam = ((Seg2y2 - Seg2y1) * (Seg2x2 - Seg1x1) + (Seg2x1 - Seg2x2) * (Seg2y2 - Seg1y1)) / det;
		gam = ((Seg1y1 - Seg1y2) * (Seg2x2 - Seg1x1) + (Seg1x2 - Seg1x1) * (Seg2y2 - Seg1y1)) / det;
		
		/*
		if((0 < lam && lam < 1) && (0 < gam && gam < 1)) {
			console.log(lam);
			console.log(gam);
		}
		*/
		
		return (0 < lam && lam < 1) && (0 < gam && gam < 1);
	}
	
}

function isInside(start, check, end) {
	if((start <= check && check <= end) || (end <= check && check <= start)) {
		return true;
	}
	
	return false;
}

function IsCollinear(Segx1, Segy1, Segx2, Segy2, pointX, pointY) {
	if((Segx2 - Segx1) * (pointY - Segy1) == (pointX - Segx1) * (Segy2 - Segy1)) {
		return true;
	}
	
	return false;
}

function IsInSegment(Segx1, Segy1, Segx2, Segy2, pointX, pointY) {
	if(IsCollinear(Segx1, Segy1, Segx2, Segy2, pointX, pointY)) {
		if(Segx1 == Segx2 && Segy1 == Segy2) {
			if(pointX != Segx1) {
				return false;
			}
		}
		
		if(Segx1 != Segx2) {
			return isInside(Segx1, pointX, Segx2);
		} else {
			return isInside(Segy1, pointY, Segy2);
		}
	}
	
	return false;
}

function FindSegmentIntersection(Seg1x1,Seg1y1,Seg1x2,Seg1y2,Seg2x1,Seg2y1,Seg2x2,Seg2y2) {
	
	var det;
	var gam;
	var lam;
	
	if(IsInSegment(Seg1x1,Seg1y1,Seg1x2,Seg1y2, Seg2x1,Seg2y1)) {
		//console.log("Seg1");
		//console.log("Seg1x1: " + Seg1x1);
		//console.log("Seg1y1: " + Seg1y1);
		//console.log("Seg1x2: " + Seg1x2);
		//console.log("Seg1y2: " + Seg1y2);
		//console.log("Seg2x1: " + Seg2x1);
		//console.log("Seg2y1: " + Seg2y1);
		return [Seg2x1,Seg2y1];
	} else if(IsInSegment(Seg1x1,Seg1y1,Seg1x2,Seg1y2, Seg2x2,Seg2y2)) {
		//console.log("Seg2");
		return [Seg2x2,Seg2y2];
	} else if(IsInSegment(Seg2x1,Seg2y1,Seg2x2,Seg2y2, Seg1x1,Seg1y1)) {
		//console.log("Seg3");
		return [Seg1x1,Seg1y1];
	} else if(IsInSegment(Seg2x1,Seg2y1,Seg2x2,Seg2y2, Seg1x2,Seg1y2)) {
		//console.log("Seg4");
		return [Seg1x2,Seg1y2];
	}
	
	det = (Seg1x2 - Seg1x1) * (Seg2y2 - Seg2y1) - (Seg2x2 - Seg2x1) * (Seg1y2 - Seg1y1);
	
	if(det == 0) {
		return [-1,-1];
	} else {
		lam = ((Seg2y2 - Seg2y1) * (Seg2x2 - Seg1x1) + (Seg2x1 - Seg2x2) * (Seg2y2 - Seg1y1)) / det;
		gam = ((Seg1y1 - Seg1y2) * (Seg2x2 - Seg1x1) + (Seg1x2 - Seg1x1) * (Seg2y2 - Seg1y1)) / det;
		
		if((0 < lam && lam < 1) && (0 < gam && gam < 1)) {
			
			var xInter = Seg1x1 + (lam * (Seg1x2 - Seg1x1));
			var yInter = Seg1y1 + (lam * (Seg1y2 - Seg1y1));
			
			return [xInter,yInter];
		} else {
			return [-1,-1];
		}
	}
}

/*
function testMainMath() {
	//console.log(FindSegmentIntersection(150,100,150,100,3,1,3,2));
	
	//console.log(isInside(3,2,1));
	
	//console.log(IsCollinear(1,2,3,2,4,2));
	
	console.log(IsInSegment(150,100,150,100,300,100));
	
	//console.log(IsInSegment(1,1,2,1,3,1));
}

testMainMath();
*/


