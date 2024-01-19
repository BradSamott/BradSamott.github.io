var MouseAnimationStates = {
	IdleRight: 0,
	IdleLeft: 1,
	RunRight: 2,
	RunLeft: 3
}

var MouseAnimationPackage = [
	//Idle Right 0
	{
		keyFrames: [
			{keyFrame: 'http://ec2-44-218-172-188.compute-1.amazonaws.com/sprite?source=MobiusMouse&spriteImage=MouseIdle', length: 50, width: 50, duration: 60, currFrame: 1}
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	},
	
	//Idle Left 1
	{
		keyFrames: [
			{keyFrame: 'http://ec2-44-218-172-188.compute-1.amazonaws.com/sprite?source=MobiusMouse&spriteImage=MouseIdle_Rev', length: 50, width: 50, duration: 60, currFrame: 1}
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	},
	
	//Run Right 2
	{
		keyFrames: [
			{keyFrame: 'http://ec2-44-218-172-188.compute-1.amazonaws.com/sprite?source=MobiusMouse&spriteImage=MouseRunContact', length: 50, width: 50, duration: 2, currFrame: 1},
			{keyFrame: 'http://ec2-44-218-172-188.compute-1.amazonaws.com/sprite?source=MobiusMouse&spriteImage=MouseRunDown', length: 50, width: 50, duration: 2, currFrame: 1},
			{keyFrame: 'http://ec2-44-218-172-188.compute-1.amazonaws.com/sprite?source=MobiusMouse&spriteImage=MouseRunPassing', length: 50, width: 50, duration: 2, currFrame: 1},
			{keyFrame: 'http://ec2-44-218-172-188.compute-1.amazonaws.com/sprite?source=MobiusMouse&spriteImage=MouseRunUp', length: 50, width: 50, duration: 2, currFrame: 1},
			{keyFrame: 'http://ec2-44-218-172-188.compute-1.amazonaws.com/sprite?source=MobiusMouse&spriteImage=MouseRunAir', length: 50, width: 50, duration: 2, currFrame: 1}
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	},
	
	//Run Left 3
	{
		keyFrames: [
			{keyFrame: 'http://ec2-44-218-172-188.compute-1.amazonaws.com/sprite?source=MobiusMouse&spriteImage=MouseRunContact_Rev', length: 50, width: 50, duration: 2, currFrame: 1},
			{keyFrame: 'http://ec2-44-218-172-188.compute-1.amazonaws.com/sprite?source=MobiusMouse&spriteImage=MouseRunDown_Rev', length: 50, width: 50, duration: 2, currFrame: 1},
			{keyFrame: 'http://ec2-44-218-172-188.compute-1.amazonaws.com/sprite?source=MobiusMouse&spriteImage=MouseRunPassing_Rev', length: 50, width: 50, duration: 2, currFrame: 1},
			{keyFrame: 'http://ec2-44-218-172-188.compute-1.amazonaws.com/sprite?source=MobiusMouse&spriteImage=MouseRunUp_Rev', length: 50, width: 50, duration: 2, currFrame: 1},
			{keyFrame: 'http://ec2-44-218-172-188.compute-1.amazonaws.com/sprite?source=MobiusMouse&spriteImage=MouseRunAir_Rev', length: 50, width: 50, duration: 2, currFrame: 1}
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	}
]

var CaesarAnimationPackage = [
	//Idle Right 0
	{
		keyFrames: [
			{keyFrame: 'http://ec2-44-218-172-188.compute-1.amazonaws.com/sprite?source=MobiusMouse&spriteImage=CaesarIdle', length: 24, width: 24, duration: 60, currFrame: 1, drawOffX: -12, drawOffY: -12}
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	}
]

var TedslyAnimationPackage = [
	//Idle Right 0
	{
		keyFrames: [
			{keyFrame: 'http://ec2-44-218-172-188.compute-1.amazonaws.com/sprite?source=MobiusMouse&spriteImage=Tedsly', length: 24, width: 24, duration: 60, currFrame: 1, drawOffX: -12, drawOffY: -12}
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	}
]