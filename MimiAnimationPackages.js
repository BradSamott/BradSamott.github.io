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
			{keyFrame: './Assets/Animates/TheBoy.png', length: 50, width: 50, duration: 60, currFrame: 1}
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	},
	
	//IdleLeft 1
	{
		keyFrames: [
			{keyFrame: './Assets/Animates/TheBoyR.png', length: 50, width: 50, duration: 60, currFrame: 1}
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	},
	
	//FlyRight 2
	{
		keyFrames: [
			{keyFrame: './Assets/Animates/TheBoy_Contact1.png', length: 50, width: 50, duration: 2, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_Down1.png', length: 50, width: 50, duration: 2, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_Passing1.png', length: 50, width: 50, duration: 2, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_Up1.png', length: 50, width: 50, duration: 2, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_Air1.png', length: 50, width: 50, duration: 2, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_Contact2.png', length: 50, width: 50, duration: 2, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_Down2.png', length: 50, width: 50, duration: 2, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_Passing2.png', length: 50, width: 50, duration: 2, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_Up2.png', length: 50, width: 50, duration: 2, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_Air2.png', length: 50, width: 50, duration: 2, currFrame: 1}
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	},
	
	//FlyLeft 3
	{
		keyFrames: [
			{keyFrame: './Assets/Animates/TheBoy_Contact1_R.png', length: 50, width: 50, duration: 1, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_Down1_R.png', length: 50, width: 50, duration: 1, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_Passing1_R.png', length: 50, width: 50, duration: 1, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_Up1_R.png', length: 50, width: 50, duration: 1, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_Air1_R.png', length: 50, width: 50, duration: 1, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_Contact2_R.png', length: 50, width: 50, duration: 1, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_Down2_R.png', length: 50, width: 50, duration: 1, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_Passing2_R.png', length: 50, width: 50, duration: 1, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_Up2_R.png', length: 50, width: 50, duration: 1, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_Air2_R.png', length: 50, width: 50, duration: 1, currFrame: 1}
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	},
	
	//FlyUpRight 4
	{
		keyFrames: [
			{keyFrame: './Assets/Animates/TheBoy_Jump.png', length: 50, width: 50, duration: 60, currFrame: 1}
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	},
	
	//FlyDownRight 5
	{
		keyFrames: [
			{keyFrame: './Assets/Animates/TheBoy_Jump.png', length: 25, width: 50, duration: 60, currFrame: 1}
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	},
	
	//HurtRight 6
	{
		keyFrames: [
			{keyFrame: './Assets/Animates/TheBoy_Hurt.png', length: 50, width: 50, duration: 3, currFrame: 1},
			{keyFrame: '', length: 50, width: 50, duration: 3, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_Hurt.png', length: 50, width: 50, duration: 3, currFrame: 1},
			{keyFrame: '', length: 50, width: 50, duration: 3, currFrame: 1}
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	},
	
	//Death 7
	{
		keyFrames: [
			{keyFrame: './Assets/Animates/TheBoy_Hurt.png', length: 25, width: 25, duration: 3, currFrame: 1}
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	}
	
	//FlyUpLeft 5
	//FlyDownLeft 7
	
	//HurtLeft 9
]