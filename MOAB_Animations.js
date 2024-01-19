var ManAnimationStates = {
	IdleRight: 0,
	IdleLeft: 1,
	WalkRight: 2,
	WalkLeft: 3,
	Scraping: 4,
	Racket: 5
}

var ManAnimationPackage = [
	//Idle Right 0
	{
		keyFrames: [
			{keyFrame: 'http://ec2-44-218-172-188.compute-1.amazonaws.com/sprite?source=MOAB&spriteImage=ProtoStick_FullStretch', length: 50, width: 50, duration: 60, currFrame: 1}
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	},
	
	//Idle Left 1
	{
		keyFrames: [
			{keyFrame: 'http://ec2-44-218-172-188.compute-1.amazonaws.com/sprite?source=MOAB&spriteImage=ProtoStick_FullStretch_Rev', length: 50, width: 50, duration: 60, currFrame: 1}
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	},
	
	//Walk Right 2
	{
		keyFrames: [
			{keyFrame: 'http://ec2-44-218-172-188.compute-1.amazonaws.com/sprite?source=MOAB&spriteImage=ProtoStick_FullStretch', length: 50, width: 50, duration: 2, currFrame: 1},
			{keyFrame: 'http://ec2-44-218-172-188.compute-1.amazonaws.com/sprite?source=MOAB&spriteImage=ProtoStick_HalfStretch', length: 50, width: 50, duration: 2, currFrame: 1},
			{keyFrame: 'http://ec2-44-218-172-188.compute-1.amazonaws.com/sprite?source=MOAB&spriteImage=ProtoStick_NoStretch', length: 50, width: 50, duration: 2, currFrame: 1},
			{keyFrame: 'http://ec2-44-218-172-188.compute-1.amazonaws.com/sprite?source=MOAB&spriteImage=ProtoStick_Cross', length: 50, width: 50, duration: 2, currFrame: 1}
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	},
	
	//Walk Left 3
	{
		keyFrames: [
			{keyFrame: 'http://ec2-44-218-172-188.compute-1.amazonaws.com/sprite?source=MOAB&spriteImage=ProtoStick_FullStretch_Rev', length: 50, width: 50, duration: 2, currFrame: 1},
			{keyFrame: 'http://ec2-44-218-172-188.compute-1.amazonaws.com/sprite?source=MOAB&spriteImage=ProtoStick_HalfStretch_Rev', length: 50, width: 50, duration: 2, currFrame: 1},
			{keyFrame: 'http://ec2-44-218-172-188.compute-1.amazonaws.com/sprite?source=MOAB&spriteImage=ProtoStick_NoStretch_Rev', length: 50, width: 50, duration: 2, currFrame: 1},
			{keyFrame: 'http://ec2-44-218-172-188.compute-1.amazonaws.com/sprite?source=MOAB&spriteImage=ProtoStick_Cross_Rev', length: 50, width: 50, duration: 2, currFrame: 1}
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	},
	
	//Scraping 4
	{
		keyFrames: [
			{keyFrame: 'http://ec2-44-218-172-188.compute-1.amazonaws.com/sprite?source=MOAB&spriteImage=ProtoStick_Scraping', length: 50, width: 50, duration: 60, currFrame: 1}
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	},
	
	//Racket 5
	{
		keyFrames: [
			{keyFrame: 'http://ec2-44-218-172-188.compute-1.amazonaws.com/sprite?source=MOAB&spriteImage=ProtoStick_RacketReady', length: 50, width: 50, duration: 2, currFrame: 1},
			{keyFrame: 'http://ec2-44-218-172-188.compute-1.amazonaws.com/sprite?source=MOAB&spriteImage=ProtoStick_RacketMid', length: 50, width: 50, duration: 2, currFrame: 1},
			{keyFrame: 'http://ec2-44-218-172-188.compute-1.amazonaws.com/sprite?source=MOAB&spriteImage=ProtoStick_RacketDown', length: 50, width: 50, duration: 2, currFrame: 1},
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	}
]

var StickAnimationPackage = [
	{
		keyFrames: [
			{keyFrame: 'http://ec2-44-218-172-188.compute-1.amazonaws.com/sprite?source=MOAB&spriteImage=LineStick', length: 1, width: 2, duration: 60, currFrame: 1, drawOffX: 0, drawOffY: 0}
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	}
]

var BushAnimationStates = {
	Bush: 0,
	Throw: 1
}

var BushAnimationPackage = [
	{
		keyFrames: [
			{keyFrame: 'http://ec2-44-218-172-188.compute-1.amazonaws.com/sprite?source=MOAB&spriteImage=BushStick', length: 60, width: 60, duration: 60, currFrame: 1, drawOffX: -30, drawOffY: -30}
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	},
	
	{
		keyFrames: [
			{keyFrame: 'http://ec2-44-218-172-188.compute-1.amazonaws.com/sprite?source=MOAB&spriteImage=BushThrower_Windup', length: 120, width: 60, duration: 20, currFrame: 1, drawOffX: -30, drawOffY: -90},
			{keyFrame: 'http://ec2-44-218-172-188.compute-1.amazonaws.com/sprite?source=MOAB&spriteImage=BushThrower_Throw', length: 120, width: 60, duration: 20, currFrame: 1, drawOffX: -30, drawOffY: -90}
		],
		currKeyFrame: 0,
		Loops: false,
		Done: false
	}
]

var BushAnimationPackageRev = [
	{
		keyFrames: [
			{keyFrame: 'http://ec2-44-218-172-188.compute-1.amazonaws.com/sprite?source=MOAB&spriteImage=BushStick', length: 60, width: 60, duration: 60, currFrame: 1, drawOffX: -30, drawOffY: -30}
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	},
	
	{
		keyFrames: [
			{keyFrame: 'http://ec2-44-218-172-188.compute-1.amazonaws.com/sprite?source=MOAB&spriteImage=BushThrower_Windup_Rev', length: 120, width: 60, duration: 20, currFrame: 1, drawOffX: -30, drawOffY: -90},
			{keyFrame: 'http://ec2-44-218-172-188.compute-1.amazonaws.com/sprite?source=MOAB&spriteImage=BushThrower_Throw_Rev', length: 120, width: 60, duration: 20, currFrame: 1, drawOffX: -30, drawOffY: -90}
		],
		currKeyFrame: 0,
		Loops: false,
		Done: false
	}
]

var BentCanAnimationPackage = [
	{
		keyFrames: [
			{keyFrame: 'http://ec2-44-218-172-188.compute-1.amazonaws.com/sprite?source=MOAB&spriteImage=BentCan', length: 20, width: 20, duration: 60, currFrame: 1, drawOffX: -10, drawOffY: -10}
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	}
]

var RottenTomatoCanAnimationPackage = [
	{
		keyFrames: [
			{keyFrame: 'http://ec2-44-218-172-188.compute-1.amazonaws.com/sprite?source=MOAB&spriteImage=RottenTomato', length: 20, width: 20, duration: 60, currFrame: 1, drawOffX: -10, drawOffY: -10}
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	}
]

var StainAnimationPackage = [
	{
		keyFrames: [
			{keyFrame: 'http://ec2-44-218-172-188.compute-1.amazonaws.com/sprite?source=MOAB&spriteImage=StickStain', length: 20, width: 20, duration: 60, currFrame: 1, drawOffX: -10, drawOffY: -10}
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	}
]

var TargetAnimationPackage = [
	{
		keyFrames: [
			{keyFrame: 'http://ec2-44-218-172-188.compute-1.amazonaws.com/sprite?source=MOAB&spriteImage=StickTarget', length: 20, width: 20, duration: 60, currFrame: 1, drawOffX: -10, drawOffY: -10}
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	}
]

var PowerUpAnimationPackage = [
	{
		keyFrames: [
			{keyFrame: 'http://ec2-44-218-172-188.compute-1.amazonaws.com/sprite?source=MOAB&spriteImage=StickPowerUp', length: 20, width: 40, duration: 60, currFrame: 1, drawOffX: -20, drawOffY: -10}
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	}
]