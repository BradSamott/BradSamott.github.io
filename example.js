var CrawlerAnimationPackage = [
		{
			keyFrames: [
				{keyFrame: './Assets/Animates/Crawler_Stand.png', length: 32, width: 32, duration: 60, currFrame: 1}
			],
			currKeyFrame: 0
		},
		{
			keyFrames: [
				{keyFrame: './Assets/Animates/Crawler_Stand_R.png', length: 32, width: 32, duration: 60, currFrame: 1}
			],
			currKeyFrame: 0
		},
		{
			keyFrames: [
				{keyFrame: './Assets/Animates/DefaultBlock.png', length: 32, width: 32, duration: 120, currFrame: 1}
			],
			currKeyFrame: 0
		}
	]

var SniffsAnimationPackage = [
	//Idle Right 0
	{
		keyFrames: [
			{keyFrame: './Assets/Animates/MrSniffs.png', length: 36, width: 36, duration: 60, currFrame: 1}
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	}
]
	
var PlatformerAnimationStates = {
	IdleRight: 0,
	IdleLeft: 1,
	RunRight: 2,
	RunLeft: 3,
	JumpRight: 4,
	JumpLeft: 5,
	SwingRight: 6,
	SwingLeft: 7
}

var AntiAnimationPackage = [

	//Idle Right 0
	{
		keyFrames: [
			{keyFrame: './Assets/Animates/TheBoy.png', length: 54, width: 36, duration: 60, currFrame: 1}
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	},
	
	//Idle Left 1
	{
		keyFrames: [
			{keyFrame: './Assets/Animates/TheBoyR.png', length: 54, width: 36, duration: 60, currFrame: 1}
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	},
	
	//Run Right 2
	{
		keyFrames: [
			{keyFrame: './Assets/Animates/TheBoy_Contact1.png', length: 54, width: 36, duration: 2, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_Down1.png', length: 54, width: 36, duration: 2, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_Passing1.png', length: 54, width: 36, duration: 2, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_Up1.png', length: 54, width: 36, duration: 2, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_Air1.png', length: 54, width: 36, duration: 2, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_Contact2.png', length: 54, width: 36, duration: 2, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_Down2.png', length: 54, width: 36, duration: 2, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_Passing2.png', length: 54, width: 36, duration: 2, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_Up2.png', length: 54, width: 36, duration: 2, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_Air2.png', length: 54, width: 36, duration: 2, currFrame: 1}
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	},
	
	//Run Left 3
	{
		keyFrames: [
			{keyFrame: './Assets/Animates/TheBoy_Contact1_R.png', length: 54, width: 36, duration: 1, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_Down1_R.png', length: 54, width: 36, duration: 1, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_Passing1_R.png', length: 54, width: 36, duration: 1, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_Up1_R.png', length: 54, width: 36, duration: 1, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_Air1_R.png', length: 54, width: 36, duration: 1, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_Contact2_R.png', length: 54, width: 36, duration: 1, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_Down2_R.png', length: 54, width: 36, duration: 1, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_Passing2_R.png', length: 54, width: 36, duration: 1, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_Up2_R.png', length: 54, width: 36, duration: 1, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_Air2_R.png', length: 54, width: 36, duration: 1, currFrame: 1}
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	}

]
	
var PlatformerAnimationPackage = [
	//Idle Right 0
	{
		keyFrames: [
			{keyFrame: './Assets/Animates/TheBoy.png', length: 54, width: 36, duration: 60, currFrame: 1}
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	},
	
	//Idle Left 1
	{
		keyFrames: [
			{keyFrame: './Assets/Animates/TheBoyR.png', length: 54, width: 36, duration: 60, currFrame: 1}
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	},
	
	//Run Right 2
	{
		keyFrames: [
			{keyFrame: './Assets/Animates/TheBoy_Contact1.png', length: 54, width: 36, duration: 2, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_Down1.png', length: 54, width: 36, duration: 2, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_Passing1.png', length: 54, width: 36, duration: 2, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_Up1.png', length: 54, width: 36, duration: 2, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_Air1.png', length: 54, width: 36, duration: 2, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_Contact2.png', length: 54, width: 36, duration: 2, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_Down2.png', length: 54, width: 36, duration: 2, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_Passing2.png', length: 54, width: 36, duration: 2, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_Up2.png', length: 54, width: 36, duration: 2, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_Air2.png', length: 54, width: 36, duration: 2, currFrame: 1}
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	},
	
	//Run Left 3
	{
		keyFrames: [
			{keyFrame: './Assets/Animates/TheBoy_Contact1_R.png', length: 54, width: 36, duration: 1, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_Down1_R.png', length: 54, width: 36, duration: 1, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_Passing1_R.png', length: 54, width: 36, duration: 1, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_Up1_R.png', length: 54, width: 36, duration: 1, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_Air1_R.png', length: 54, width: 36, duration: 1, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_Contact2_R.png', length: 54, width: 36, duration: 1, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_Down2_R.png', length: 54, width: 36, duration: 1, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_Passing2_R.png', length: 54, width: 36, duration: 1, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_Up2_R.png', length: 54, width: 36, duration: 1, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_Air2_R.png', length: 54, width: 36, duration: 1, currFrame: 1}
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	},
	
	//Jump Right 4
	{
		keyFrames: [
			{keyFrame: './Assets/Animates/TheBoy_Jump.png', length: 54, width: 36, duration: 60, currFrame: 1}
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	},
	
	//Jump Left 5
	{
		keyFrames: [
			{keyFrame: './Assets/Animates/TheBoy_Jump_R.png', length: 54, width: 36, duration: 60, currFrame: 1}
		],
		currKeyFrame: 0,
		Loops: true,
		Done: false
	},
	
	//Swing Right 6
	{
		keyFrames: [
			{keyFrame: './Assets/Animates/TheBoy_Windup.png', length: 54, width: 72, duration: 4, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_ReadyStep.png', length: 54, width: 72, duration: 4, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_Swing.png', length: 54, width: 72, duration: 4, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_BatHit.png', length: 54, width: 72, duration: 4, currFrame: 1},
			{keyFrame: './Assets/Animates/TheBoy_FollowThru.png', length: 54, width: 72, duration: 4, currFrame: 1}
		],
		currKeyFrame: 0,
		Loops: false,
		Done: false
	},
	
	//Swing Left 7
	{
		keyFrames: [
			{keyFrame: './Assets/Animates/TheBoy_Windup_R.png', length: 54, width: 72, duration: 1, currFrame: 1, drawOffX: -36, drawOffsetY: 0},
			{keyFrame: './Assets/Animates/TheBoy_ReadyStep_R.png', length: 54, width: 72, duration: 1, currFrame: 1, drawOffX: -36, drawOffsetY: 0},
			{keyFrame: './Assets/Animates/TheBoy_Swing_R.png', length: 54, width: 72, duration: 1, currFrame: 1, drawOffX: -36, drawOffsetY: 0},
			{keyFrame: './Assets/Animates/TheBoy_BatHit_R.png', length: 54, width: 72, duration: 1, currFrame: 1, drawOffX: -36, drawOffsetY: 0},
			{keyFrame: './Assets/Animates/TheBoy_FollowThru_R.png', length: 54, width: 72, duration: 1, currFrame: 1, drawOffX: -36, drawOffsetY: 0}
		],
		currKeyFrame: 0,
		Loops: false,
		Done: false
	}
]
	
function DefHitUpdate() {
	
	console.log('Hitbox update');
	
	if(this.properties == null) {
		return;
	}
	
	if(this.properties.thrower == null) {
		return;
	}
	
	var newPosition = {x: this.properties.thrower.position.x, y: this.properties.thrower.position.y};
	
	this.setPosition(newPosition);
}