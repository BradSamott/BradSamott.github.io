var MimiAnimationStates = {
	IdleRight: 0,
	IdleLeft: 1,
	FlyRight: 2,
	FlyLeft: 3,
	FlyUpRight: 4,
	FlyDownRight: 5,
	HurtRight: 6,
	Death: 7,
	FlyDownLeft: 8,
	
	HurtLeft: 9
}

var MimiAnimationPackage = [
	//IdleRight 0
	{
		keyFrames: [
			{keyFrame: './Assets/Animates/Drone_Standard.png', length: 100, width: 50, duration: 60, currFrame: 1, drawOffX: 0, drawOffY: -50}
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	},
	
	//IdleLeft 1
	{
		keyFrames: [
			{keyFrame: './Assets/Animates/TheBoyR.png', length: 100, width: 50, duration: 60, currFrame: 1, drawOffX: 0, drawOffY: -50}
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	},
	
	//FlyRight 2
	{
		keyFrames: [
			{keyFrame: './Assets/Animates/Drone_Forward.png', length: 100, width: 50, duration: 60, currFrame: 1, drawOffX: 0, drawOffY: -50}
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	},
	
	//FlyLeft 3
	{
		keyFrames: [
			{keyFrame: './Assets/Animates/Drone_Backward.png', length: 100, width: 50, duration: 60, currFrame: 1, drawOffX: 0, drawOffY: -50}
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	},
	
	//FlyUpRight 4
	{
		keyFrames: [
			{keyFrame: './Assets/Animates/Drone_Up.png', length: 100, width: 50, duration: 60, currFrame: 1, drawOffX: 0, drawOffY: -50}
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	},
	
	//FlyDownRight 5
	{
		keyFrames: [
			{keyFrame: './Assets/Animates/Drone_Down.png', length: 100, width: 50, duration: 60, currFrame: 1, drawOffX: 0, drawOffY: -50}
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	},
	
	//HurtRight 6
	{
		keyFrames: [
			{keyFrame: './Assets/Animates/Drone_Hurt.png', length: 100, width: 50, duration: 3, currFrame: 1, drawOffX: 0, drawOffY: -50},
			{keyFrame: '', length: 50, width: 50, duration: 3, currFrame: 1},
			{keyFrame: './Assets/Animates/Drone_Hurt.png', length: 100, width: 50, duration: 3, currFrame: 1, drawOffX: 0, drawOffY: -50},
			{keyFrame: '', length: 50, width: 50, duration: 3, currFrame: 1}
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	},
	
	//Death 7
	{
		keyFrames: [
			{keyFrame: './Assets/Animates/Drone_Death.png', length: 100, width: 50, duration: 3, currFrame: 1, drawOffX: 0, drawOffY: -50}
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	}
	
	//FlyUpLeft 5
	//FlyDownLeft 7
	
	//HurtLeft 9
]

var TitleAnimationPackage = [
	{
		keyFrames: [
			{keyFrame: './Assets/Animates/MimiTitlePage.png', length: 576, width: 640, duration: 60, currFrame: 1}
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	}
]

var BombAnimationPackage = [
	{
		keyFrames: [
			{keyFrame: './Assets/Animates/TheBomb1.png', length: 45, width: 36, duration: 3, currFrame: 1, drawOffX: -18, drawOffY: -27},
			{keyFrame: './Assets/Animates/TheBomb2.png', length: 45, width: 36, duration: 3, currFrame: 1, drawOffX: -18, drawOffY: -27},
			{keyFrame: './Assets/Animates/TheBomb3.png', length: 45, width: 36, duration: 3, currFrame: 1, drawOffX: -18, drawOffY: -27}
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	}
]

var CannonBallAnimationPackage = [
	{
		keyFrames: [
			{keyFrame: './Assets/Animates/CannonBall.png', length: 36, width: 36, duration: 3, currFrame: 1, drawOffX: -18, drawOffY: -18},
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	}
]

var BoardAnimationPackage = [
	{
		keyFrames: [
			{keyFrame: './Assets/Animates/Board.png', length: 12, width: 36, duration: 3, currFrame: 1, drawOffX: 0, drawOffY: 0},
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	}
]