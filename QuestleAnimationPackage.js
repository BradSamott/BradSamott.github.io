var LetterAnimationStates = {
	Normal: 0,
	Hurt: 1
}

var aAnimationPackage = [
	//Normal
	{
		keyFrames: [
			{keyFrame: './Assets/Animates/aSprite.png', length: 50, width: 50, duration: 60, currFrame: 1}
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	},
	
	//Hurt
	{
		keyFrames: [
			{keyFrame: './Assets/Animates/aSprite.png', length: 50, width: 50, duration: 3, currFrame: 1},
			{keyFrame: '', length: 50, width: 50, duration: 3, currFrame: 1},
			{keyFrame: './Assets/Animates/aSprite.png', length: 50, width: 50, duration: 3, currFrame: 1},
			{keyFrame: '', length: 50, width: 50, duration: 3, currFrame: 1}
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	}
]

var bAnimationPackage = [
	//Normal
	{
		keyFrames: [
			{keyFrame: './Assets/Animates/bSprite.png', length: 50, width: 50, duration: 60, currFrame: 1}
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	},
	
	//Hurt
	{
		keyFrames: [
			{keyFrame: './Assets/Animates/bSprite.png', length: 50, width: 50, duration: 3, currFrame: 1},
			{keyFrame: '', length: 50, width: 50, duration: 3, currFrame: 1},
			{keyFrame: './Assets/Animates/bSprite.png', length: 50, width: 50, duration: 3, currFrame: 1},
			{keyFrame: '', length: 50, width: 50, duration: 3, currFrame: 1}
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	}
]

var cAnimationPackage = [
	//Normal
	{
		keyFrames: [
			{keyFrame: './Assets/Animates/cSprite.png', length: 50, width: 50, duration: 60, currFrame: 1}
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	},
	
	//Hurt
	{
		keyFrames: [
			{keyFrame: './Assets/Animates/cSprite.png', length: 50, width: 50, duration: 3, currFrame: 1},
			{keyFrame: '', length: 50, width: 50, duration: 3, currFrame: 1},
			{keyFrame: './Assets/Animates/cSprite.png', length: 50, width: 50, duration: 3, currFrame: 1},
			{keyFrame: '', length: 50, width: 50, duration: 3, currFrame: 1}
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	}
]