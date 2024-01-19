var SkeletonTestAnimationStates = {
	Idle: 0,
	LiftArm: 1,
	Walk: 2,
	Run: 3
}

var SkeletalTestAnimationPackage = [
	//Idle
	{
		LocalCurrentKeyFrame: -1
		, LocalLoop: true
		, keyFrames: [
			{ //Frame 1
				jointOffsets: [
				{offX: 0, offY: 0}
				,{offX: -14, offY: 57}
				,{offX: -81, offY: 55}
				,{offX: 63, offY: 50}
				,{offX: -81, offY: 93}
				,{offX: -80, offY: 139}
				,{offX: 63, offY: 97}
				,{offX: 63, offY: 137}
				,{offX: -8, offY: 143}
				,{offX: -56, offY: 145}
				,{offX: 30, offY: 146}
				,{offX: -55, offY: 168}
				,{offX: -52, offY: 197}
				,{offX: 23, offY: 168}
				,{offX: 30, offY: 198}
				]
				, Duration: 1
				, LocalCounter: 0
			}
			
		]
	},
	
	//Lift Arm
	{
		LocalCurrentKeyFrame: -1
		, LocalLoop: true
		, keyFrames: [
			{ //Frame 1
				jointOffsets: [
				{offX: 0, offY: 0}
				,{offX: -14, offY: 57}
				,{offX: -81, offY: 55}
				,{offX: 63, offY: 50}
				,{offX: -81, offY: 93}
				,{offX: -80, offY: 139}
				,{offX: 63, offY: 97}
				,{offX: 63, offY: 137}
				,{offX: -8, offY: 143}
				,{offX: -56, offY: 145}
				,{offX: 30, offY: 146}
				,{offX: -55, offY: 168}
				,{offX: -52, offY: 197}
				,{offX: 23, offY: 168}
				,{offX: 30, offY: 198}
				]
				, Duration: 9
				, LocalCounter: 0
			},
			{ //Frame 2
				jointOffsets: [
				{offX: 0, offY: 0}
				,{offX: -14, offY: 57}
				,{offX: -81, offY: 55}
				,{offX: 63, offY: 50}
				,{offX: -81, offY: 93}
				,{offX: -80, offY: 139}
				,{offX: 63, offY: 97}
				,{offX: 63, offY: 137}
				,{offX: -8, offY: 143}
				,{offX: -56, offY: 145}
				,{offX: 30, offY: 146}
				,{offX: -55, offY: 168}
				,{offX: -52, offY: 197}
				,{offX: 23, offY: 168}
				,{offX: 30, offY: 298}
				]
				, Duration: 9
				, LocalCounter: 0
			}
		]
	},
	
	//Walk
	{
		LocalCurrentKeyFrame: -1
		, LocalLoop: true
		, keyFrames: [
			{ //Frame 1
				jointOffsets: [
				{offX: 0, offY: 0}
				,{offX: -14, offY: 57}
				,{offX: -81, offY: 55}
				,{offX: 63, offY: 50}
				,{offX: -81, offY: 93}
				,{offX: -80, offY: 139}
				,{offX: 63, offY: 97}
				,{offX: 63, offY: 137}
				,{offX: -8, offY: 143}
				,{offX: -56, offY: 145}
				,{offX: 30, offY: 146}
				,{offX: -90.1875, offY: 169}
				,{offX: -114.1875, offY: 196}
				,{offX: 58.8125, offY: 167}
				,{offX: 84.8125, offY: 193}
				]
				, Duration: 9
				, LocalCounter: 0
			},
			{
				jointOffsets: [
				{offX: 0, offY: 0}
				,{offX: -14, offY: 57}
				,{offX: -81, offY: 55}
				,{offX: 63, offY: 50}
				,{offX: -81, offY: 93}
				,{offX: -80, offY: 139}
				,{offX: 63, offY: 97}
				,{offX: 63, offY: 137}
				,{offX: -8, offY: 143}
				,{offX: -56, offY: 145}
				,{offX: 30, offY: 146}
				,{offX: -54, offY: 170}
				,{offX: -55, offY: 196}
				,{offX: 27, offY: 177}
				,{offX: 25, offY: 201}
				]
				, Duration: 9
				, LocalCounter: 0
			},
			{
				jointOffsets: [
				{offX: 0, offY: 0}
				,{offX: -14, offY: 57}
				,{offX: -81, offY: 55}
				,{offX: 63, offY: 50}
				,{offX: -81, offY: 93}
				,{offX: -80, offY: 139}
				,{offX: 63, offY: 97}
				,{offX: 63, offY: 137}
				,{offX: -8, offY: 143}
				,{offX: -56, offY: 145}
				,{offX: 30, offY: 146}
				,{offX: -36.1875, offY: 171}
				,{offX: -20.1875, offY: 190}
				,{offX: 2.8125, offY: 172}
				,{offX: -3.1875, offY: 192}
				]
				, Duration: 9
				, LocalCounter: 0
			},
			{
				jointOffsets: [
				{offX: 0, offY: 0}
				,{offX: -14, offY: 57}
				,{offX: -81, offY: 55}
				,{offX: 63, offY: 50}
				,{offX: -81, offY: 93}
				,{offX: -80, offY: 139}
				,{offX: 63, offY: 97}
				,{offX: 63, offY: 137}
				,{offX: -8, offY: 143}
				,{offX: -56, offY: 145}
				,{offX: 30, offY: 146}
				,{offX: -56.1875, offY: 171}
				,{offX: -59.1875, offY: 193}
				,{offX: 30.8125, offY: 169}
				,{offX: 28.8125, offY: 191}
				]
				, Duration: 9
				, LocalCounter: 0
			}
		]
	},
	
	//Run
	{
		LocalCurrentKeyFrame: -1
		, LocalLoop: true
		, keyFrames: [
			{ 
			jointOffsets: [
			{offX: -8.796875, offY: 29}
			,{offX: -14, offY: 57}
			,{offX: -36.796875, offY: 58}
			,{offX: 13.203125, offY: 59}
			,{offX: -19.796875, offY: 84}
			,{offX: 27.203125, offY: 74}
			,{offX: -6.796875, offY: 76}
			,{offX: -6.796875, offY: 101}
			,{offX: -8, offY: 143}
			,{offX: -27.796875, offY: 142}
			,{offX: 11.203125, offY: 144}
			,{offX: -37.796875, offY: 167}
			,{offX: -56.796875, offY: 158}
			,{offX: 24.203125, offY: 166}
			,{offX: 41.203125, offY: 196}
			]
			, Duration: 5
			, LocalCounter: 0
			}
			,{ 
			jointOffsets: [
			{offX: -8.796875, offY: 29}
			,{offX: -14, offY: 57}
			,{offX: -36.796875, offY: 58}
			,{offX: 13.203125, offY: 59}
			,{offX: -29.796875, offY: 92}
			,{offX: 7.203125, offY: 95}
			,{offX: 13.203125, offY: 85}
			,{offX: 42.203125, offY: 83}
			,{offX: -8, offY: 143}
			,{offX: -27.796875, offY: 142}
			,{offX: 11.203125, offY: 144}
			,{offX: 4.203125, offY: 167}
			,{offX: -25.796875, offY: 195}
			,{offX: -0.796875, offY: 177}
			,{offX: -5.796875, offY: 194}
			]
			, Duration: 5
			, LocalCounter: 0
			}
			,{ 
			jointOffsets: [
			{offX: -8.796875, offY: 29}
			,{offX: -14, offY: 57}
			,{offX: -36.796875, offY: 58}
			,{offX: 13.203125, offY: 59}
			,{offX: -42.796875, offY: 80}
			,{offX: -41.796875, offY: 98}
			,{offX: 30.203125, offY: 73}
			,{offX: 51.203125, offY: 45}
			,{offX: -8, offY: 143}
			,{offX: -27.796875, offY: 142}
			,{offX: 11.203125, offY: 144}
			,{offX: 12.203125, offY: 171}
			,{offX: 29.203125, offY: 198}
			,{offX: -8.796875, offY: 167}
			,{offX: -32.796875, offY: 163}
			]
			, Duration: 5
			, LocalCounter: 0
			}
			,{ 
			jointOffsets: [
			{offX: -8.796875, offY: 29}
			,{offX: -14, offY: 57}
			,{offX: -36.796875, offY: 58}
			,{offX: 13.203125, offY: 59}
			,{offX: -24.796875, offY: 83}
			,{offX: -1.796875, offY: 89}
			,{offX: 10.203125, offY: 81}
			,{offX: 33.203125, offY: 82}
			,{offX: -8, offY: 143}
			,{offX: -27.796875, offY: 142}
			,{offX: 11.203125, offY: 144}
			,{offX: -6.796875, offY: 176}
			,{offX: -5.796875, offY: 197}
			,{offX: 14.203125, offY: 169}
			,{offX: 6.203125, offY: 197}
			]
			, Duration: 5
			, LocalCounter: 0
			}
		]
	}
]

var TestSpriteSheet = './Assets/DevImages/TestLimbs.png';

var SkeletonTestSheetMappings = [
	{ //0
		nodeImg: {},
		jointImgs: {
			'1': {x: 11, y: 13, l: 10, w: 100, cLayer: 2}
		}
	},
	{ //1
		nodeImg: {},
		jointImgs: {
			'2': {x: 11, y: 13, l: 10, w: 100, cLayer: 3},
			'3': {x: 11, y: 24, l: 10, w: 100, cLayer: 1}
		}
	},
	{ //2
		nodeImg: {x: 11, y: 35, l: 10, w: 10, cLayer: 4},
		jointImgs: {
			'4': {x: 11, y: 13, l: 10, w: 100, cLayer: 4}
		}
	},
	{ //3
		nodeImg: {},
		jointImgs: {
			'6': {x: 11, y: 24, l: 10, w: 100, cLayer: 0}
		}
	},
	{ //4
		nodeImg: {},
		jointImgs: {
			'5': {x: 11, y: 13, l: 10, w: 100, cLayer: 4}
		}
	},
	{ //5
		nodeImg: {},
		jointImgs: {
			
		}
	},
	{ //6
		nodeImg: {},
		jointImgs: {
			'7': {x: 11, y: 24, l: 10, w: 100, cLayer: 0}
		}
	},
	{ //7
		nodeImg: {},
		jointImgs: {
			
		}
	},
	{ //8
		nodeImg: {},
		jointImgs: {
			'9': {x: 11, y: 13, l: 10, w: 100, cLayer: 2},
			'10': {x: 11, y: 24, l: 10, w: 100, cLayer: 1}
		}
	},
	{ //9
		nodeImg: {x: 11, y: 35, l: 10, w: 10, cLayer: 3},
		jointImgs: {
			'11': {x: 11, y: 13, l: 10, w: 100, cLayer: 3}
		}
	},
	{ //10
		nodeImg: {x: 11, y: 35, l: 10, w: 10, cLayer: 1},
		jointImgs: {
			'13': {x: 11, y: 24, l: 10, w: 100, cLayer: 1}
		}
	},
	{ //11
		nodeImg: {x: 11, y: 35, l: 10, w: 10, cLayer: 3},
		jointImgs: {
			'12': {x: 11, y: 13, l: 10, w: 100, cLayer: 3}
		}
	},
	{ //12
		nodeImg: {x: 11, y: 35, l: 10, w: 10, cLayer: 0},
		jointImgs: {
		
		}
	},
	{ //13
		nodeImg: {x: 11, y: 35, l: 10, w: 10, cLayer: 1},
		jointImgs: {
			'14': {x: 11, y: 24, l: 10, w: 100, cLayer: 1}
		}
	},
	{ //14
		nodeImg: {x: 11, y: 35, l: 10, w: 10, cLayer: 0},
		jointImgs: {
			
		}
	}
	
]

var MickeySpriteSheet = './Assets/DevImages/SteamMickeyLimbs.png';

var MickeySheetMappings = [
	{ //0 Head
		nodeImg: {x: 115, y: 33, l: 47, w: 64, rotation: 0, cLayer: 2},
		jointImgs: {
			//'1': {x: 11, y: 13, l: 10, w: 100, cLayer: 2}
		}
	},
	{ //1 (Neck)
		nodeImg: {},
		jointImgs: {
			//'2': {x: 11, y: 13, l: 10, w: 100, cLayer: 3},
			//'5': {x: 11, y: 24, l: 10, w: 100, cLayer: 1},
			//'8': {x: 11, y: 24, l: 10, w: 100, cLayer: 1}
		}
	},
	{ //2 Arm
		nodeImg: {},
		jointImgs: {
			'3': {x: 123, y: 153, l: 7, w: 100, cLayer: 4}
		}
	},
	{ //3 Arm
		nodeImg: {},
		jointImgs: {
			'4': {x: 123, y: 153, l: 7, w: 100, cLayer: 4}
		}
	},
	{ //4 Hand
		nodeImg: {x: 123, y: 190, l: 20, w: 19, cLayer: 4},
		jointImgs: {
			//'5': {x: 11, y: 13, l: 10, w: 100, cLayer: 4}
		}
	},
	{ //5 Arm
		nodeImg: {},
		jointImgs: {
			'6': {x: 123, y: 153, l: 7, w: 100, cLayer: 0}
		}
	},
	{ //6 Arm
		nodeImg: {},
		jointImgs: {
			'7': {x: 123, y: 153, l: 7, w: 100, cLayer: 0}
		}
	},
	{ //7 Hand
		nodeImg: {x: 123, y: 190, l: 20, w: 19, cLayer: 4},
		jointImgs: {
			
		}
	},
	{ //8 Body
		nodeImg: {},
		jointImgs: {
			'9': {x: 121, y: 94, l: 45, w: 52, cLayer: 2}
		}
	},
	{ //9 (Hips)
		nodeImg: {},
		jointImgs: {
			//'10': {x: 11, y: 13, l: 10, w: 100, cLayer: 3}
		}
	},
	{ //10 Leg
		nodeImg: {x: 123, y: 163, l: 15, w: 9, rotation: 1.571, cLayer: 4},
		jointImgs: {
			'11': {x: 123, y: 153, l: 7, w: 100, cLayer: 1}
		}
	},
	{ //11 Leg
		nodeImg: {},
		jointImgs: {
			'12': {x: 123, y: 153, l: 7, w: 100, cLayer: 0}
		}
	},
	{ //12 Foot
		nodeImg: {x: 123, y: 214, l: 13, w: 31, drawOffX: 15, drawOffY: 0, cLayer: 0},
		jointImgs: {
		
		}
	},
	{ //13 Leg
		nodeImg: {x: 123, y: 163, l: 15, w: 9, rotation: 1.571, cLayer: 4},
		jointImgs: {
			'14': {x: 123, y: 153, l: 7, w: 100, cLayer: 1}
		}
	},
	{ //14 Leg
		nodeImg: {},
		jointImgs: {
			'15': {x: 123, y: 153, l: 7, w: 100, cLayer: 0}
		}
	},
	{ //15 Foot
		nodeImg: {x: 123, y: 214, l: 13, w: 31, drawOffX: 15, cLayer: 0},
		jointImgs: {
			
		}
	}
	
]

var MickeyAnimationStates = {
	Idle: 0,
	Run: 1
}

var MickeyAnimationPackage = [
	//Idle
	{
		LocalCurrentKeyFrame: -1
		, LocalLoop: true
		, keyFrames: [
			{ //Frame 1
				jointOffsets: [
				{offX: 0, offY: 0}
				,{offX: 0, offY: 15}
				,{offX: -9, offY: 22}
				,{offX: -29, offY: 33}
				,{offX: -40, offY: 57}
				,{offX: 10, offY: 25}
				,{offX: 27.0625, offY: 33}
				,{offX: 42.0625, offY: 58}
				,{offX: 0, offY: 19}
				,{offX: 0, offY: 60}
				,{offX: -14, offY: 57}
				,{offX: -19, offY: 75}
				,{offX: -22, offY: 92}
				,{offX: 17, offY: 57}
				,{offX: 21.0625, offY: 74}
				,{offX: 23.0625, offY: 93}
				]
				, Duration: 1
				, LocalCounter: 0
			}
			
		]
	},
	
	//Run
	{
		LocalCurrentKeyFrame: -1
		, LocalLoop: true
		, keyFrames: [
			{ 
				jointOffsets: [
					{offX: 0, offY: 0}
					,{offX: 0, offY: 15}
					,{offX: -9, offY: 22}
					,{offX: -29, offY: 22}
					,{offX: -40, offY: 44}
					,{offX: 10, offY: 25}
					,{offX: 31, offY: 35}
					,{offX: 47, offY: 20}
					,{offX: 0, offY: 19}
					,{offX: 0, offY: 60}
					,{offX: -14, offY: 57}
					,{offX: 16, offY: 77}
					,{offX: 15, offY: 95}
					,{offX: 17, offY: 57}
					,{offX: 1, offY: 77}
					,{offX: -35, offY: 72}
				]
				, Duration: 10
				, LocalCounter: 0
			}
			,{ 
				jointOffsets: [
					{offX: 0, offY: 0}
					,{offX: 0, offY: 15}
					,{offX: -9, offY: 22}
					,{offX: -20, offY: 28}
					,{offX: -3, offY: 48}
					,{offX: 10, offY: 25}
					,{offX: 11, offY: 35}
					,{offX: 25, offY: 38}
					,{offX: 0, offY: 19}
					,{offX: 0, offY: 60}
					,{offX: -14, offY: 57}
					,{offX: 6, offY: 69}
					,{offX: 12, offY: 97}
					,{offX: 17, offY: 57}
					,{offX: 16, offY: 78}
					,{offX: -1, offY: 97}
				]
				, Duration: 10
				, LocalCounter: 0
			}
			,{ 
				jointOffsets: [
					{offX: 0, offY: 0}
					,{offX: 0, offY: 15}
					,{offX: -9, offY: 22}
					,{offX: 28, offY: 44}
					,{offX: 42, offY: 31}
					,{offX: 10, offY: 25}
					,{offX: -25, offY: 26}
					,{offX: -33, offY: 54}
					,{offX: 0, offY: 19}
					,{offX: 0, offY: 60}
					,{offX: -14, offY: 57}
					,{offX: -9, offY: 74}
					,{offX: -41, offY: 80}
					,{offX: 17, offY: 57}
					,{offX: 30, offY: 74}
					,{offX: 27, offY: 90}
				]
				, Duration: 10
				, LocalCounter: 0
			}
			,{ 
				jointOffsets: [
					{offX: 0, offY: 0}
					,{offX: 0, offY: 15}
					,{offX: -9, offY: 22}
					,{offX: -20, offY: 28}
					,{offX: -3, offY: 48}
					,{offX: 10, offY: 25}
					,{offX: 11, offY: 35}
					,{offX: 25, offY: 38}
					,{offX: 0, offY: 19}
					,{offX: 0, offY: 60}
					,{offX: -14, offY: 57}
					,{offX: 6, offY: 69}
					,{offX: 12, offY: 97}
					,{offX: 17, offY: 57}
					,{offX: 16, offY: 78}
					,{offX: -1, offY: 97}
				]
				, Duration: 10
				, LocalCounter: 0
			}
		]
	}
]

function playAnimation(gameObj) {
	//console.log(gameObj.currAnimation);
	if(gameObj.animations[gameObj.currAnimation].LocalCurrentKeyFrame == -1) { //Setup Initial Frame
	
		gameObj.animations[gameObj.currAnimation].LocalCurrentKeyFrame = 0;
		for(var i = 0; i < gameObj.skeletalJoints.length; i++) {
			gameObj.skeletalJoints[i].offX = gameObj.animations[gameObj.currAnimation].keyFrames[gameObj.animations[gameObj.currAnimation].LocalCurrentKeyFrame].jointOffsets[i].offX;
			gameObj.skeletalJoints[i].offY = gameObj.animations[gameObj.currAnimation].keyFrames[gameObj.animations[gameObj.currAnimation].LocalCurrentKeyFrame].jointOffsets[i].offY;
		}
		gameObj.animations[gameObj.currAnimation].keyFrames[gameObj.animations[gameObj.currAnimation].LocalCurrentKeyFrame].LocalCounter = 0;
		
	} else {
		
		gameObj.animations[gameObj.currAnimation].keyFrames[gameObj.animations[gameObj.currAnimation].LocalCurrentKeyFrame].LocalCounter++;
		if(gameObj.animations[gameObj.currAnimation].keyFrames[gameObj.animations[gameObj.currAnimation].LocalCurrentKeyFrame].LocalCounter 
		>= gameObj.animations[gameObj.currAnimation].keyFrames[gameObj.animations[gameObj.currAnimation].LocalCurrentKeyFrame].Duration) { //Advance KeyFrame
		
			gameObj.animations[gameObj.currAnimation].LocalCurrentKeyFrame++;
			
			if(gameObj.animations[gameObj.currAnimation].LocalCurrentKeyFrame >= gameObj.animations[gameObj.currAnimation].keyFrames.length) {
				if(gameObj.animations[gameObj.currAnimation].LocalLoop) {
					gameObj.animations[gameObj.currAnimation].LocalCurrentKeyFrame = 0;
					for(var i = 0; i < gameObj.skeletalJoints.length; i++) {
						gameObj.skeletalJoints[i].offX = gameObj.animations[gameObj.currAnimation].keyFrames[gameObj.animations[gameObj.currAnimation].LocalCurrentKeyFrame].jointOffsets[i].offX;
						gameObj.skeletalJoints[i].offY = gameObj.animations[gameObj.currAnimation].keyFrames[gameObj.animations[gameObj.currAnimation].LocalCurrentKeyFrame].jointOffsets[i].offY;
					}
					gameObj.animations[gameObj.currAnimation].keyFrames[gameObj.animations[gameObj.currAnimation].LocalCurrentKeyFrame].LocalCounter = 0;
				} else {
					gameObj.animations[gameObj.currAnimation].LocalCurrentKeyFrame--;
				}
				
				return;
			} else {
				for(var i = 0; i < gameObj.skeletalJoints.length; i++) {
					gameObj.skeletalJoints[i].offX = gameObj.animations[gameObj.currAnimation].keyFrames[gameObj.animations[gameObj.currAnimation].LocalCurrentKeyFrame].jointOffsets[i].offX;
					gameObj.skeletalJoints[i].offY = gameObj.animations[gameObj.currAnimation].keyFrames[gameObj.animations[gameObj.currAnimation].LocalCurrentKeyFrame].jointOffsets[i].offY;
				}
				gameObj.animations[gameObj.currAnimation].keyFrames[gameObj.animations[gameObj.currAnimation].LocalCurrentKeyFrame].LocalCounter = 0;
			}
			
		} else { //Further Current Frame*
			//gameObj.animations[gameObj.currAnimation].keyFrames[gameObj.animations[gameObj.currAnimation].LocalCurrentKeyFrame].LocalCounter++;
		}
		
	}
}

function renderAnimationObject(gameObj) {
	
	for(var i = 0; i < gameObj.skeletalJoints.length; i++) {
		//console.log(i);
		if(gameObj.skeletalSheetMappings[i].nodeImg.w != null) {
			
			var contextUse = LocalCanvases[gameObj.skeletalSheetMappings[i].nodeImg.cLayer].context;
			
			var dX = 0
			if(gameObj.skeletalSheetMappings[i].nodeImg.drawOffX != null) {
				dX = gameObj.skeletalSheetMappings[i].nodeImg.drawOffX;
			}
			
			var dY = 0
			if(gameObj.skeletalSheetMappings[i].nodeImg.drawOffY != null) {
				dY = gameObj.skeletalSheetMappings[i].nodeImg.drawOffY;
			}
			
			if(gameObj.skeletalSheetMappings[i].nodeImg.rotation != null) {
				contextUse.save();

				contextUse.translate(gameObj.position.x + gameObj.skeletalJoints[i].offX, gameObj.position.y + gameObj.skeletalJoints[i].offY);
				
				contextUse.rotate(gameObj.skeletalSheetMappings[i].nodeImg.rotation);
				
				contextUse.drawImage(LocalSpriteSheets[gameObj.spriteSheetIndex]
														,gameObj.skeletalSheetMappings[i].nodeImg.x
														,gameObj.skeletalSheetMappings[i].nodeImg.y
														,gameObj.skeletalSheetMappings[i].nodeImg.w
														,gameObj.skeletalSheetMappings[i].nodeImg.l
														,0 - (gameObj.skeletalSheetMappings[i].nodeImg.w / 2) + dX
														,0 - (gameObj.skeletalSheetMappings[i].nodeImg.l / 2) + dY
														,gameObj.skeletalSheetMappings[i].nodeImg.w
														,gameObj.skeletalSheetMappings[i].nodeImg.l)
				
				contextUse.restore(); 
			} else {
				contextUse.drawImage(LocalSpriteSheets[gameObj.spriteSheetIndex]
														,gameObj.skeletalSheetMappings[i].nodeImg.x
														,gameObj.skeletalSheetMappings[i].nodeImg.y
														,gameObj.skeletalSheetMappings[i].nodeImg.w
														,gameObj.skeletalSheetMappings[i].nodeImg.l
														,gameObj.position.x + gameObj.skeletalJoints[i].offX - (gameObj.skeletalSheetMappings[i].nodeImg.w / 2) + dX
														,gameObj.position.y + gameObj.skeletalJoints[i].offY - (gameObj.skeletalSheetMappings[i].nodeImg.l / 2) + dY
														,gameObj.skeletalSheetMappings[i].nodeImg.w
														,gameObj.skeletalSheetMappings[i].nodeImg.l)
			
			}
			
		}
		
		for(var j = 0; j < gameObj.skeletalJoints[i].joints.length; j++) {
			
			if(gameObj.skeletalSheetMappings[i] != null) {
				if(gameObj.skeletalSheetMappings[i].jointImgs[gameObj.skeletalJoints[i].joints[j]] != null) {
					var SheetMap = gameObj.skeletalSheetMappings[i];
					var currJoint = gameObj.skeletalJoints[i].joints[j];
					
					var adj = (gameObj.position.x + gameObj.skeletalJoints[currJoint].offX) - (gameObj.position.x + gameObj.skeletalJoints[i].offX);
					var op = (gameObj.position.y + gameObj.skeletalJoints[currJoint].offY) - (gameObj.position.y + gameObj.skeletalJoints[i].offY);
					var dist = Math.sqrt((adj * adj) + (op * op));
					var angleRad = Math.acos(adj / dist);
					
					var contextUse = LocalCanvases[gameObj.skeletalSheetMappings[i].jointImgs[gameObj.skeletalJoints[i].joints[j]].cLayer].context;
					
					//gameObj.context.save(); 
					contextUse.save();

					// move to the middle of where we want to draw our image
					//gameObj.context.translate(gameObj.position.x + gameObj.skeletalJoints[i].offX, gameObj.position.y + gameObj.skeletalJoints[i].offY);
					contextUse.translate(gameObj.position.x + gameObj.skeletalJoints[i].offX, gameObj.position.y + gameObj.skeletalJoints[i].offY);

					// rotate around that point, converting our 
					// angle from degrees to radians 
					if(gameObj.position.y + gameObj.skeletalJoints[currJoint].offY >= gameObj.position.y + gameObj.skeletalJoints[i].offY) {
						//gameObj.context.rotate(angleRad);
						contextUse.rotate(angleRad);
					} else {
						//gameObj.context.rotate(angleRad*-1);
						contextUse.rotate(angleRad*-1);
					}
					
					/*
					gameObj.context.drawImage(LocalSpriteSheets[gameObj.spriteSheetIndex]
														,SheetMap.jointImgs[currJoint].x
														,SheetMap.jointImgs[currJoint].y
														,SheetMap.jointImgs[currJoint].w
														,SheetMap.jointImgs[currJoint].l
														,0
														,-5
														,dist*1.3
														,10)
					*/
					
					contextUse.drawImage(
														LocalSpriteSheets[gameObj.spriteSheetIndex]
														,SheetMap.jointImgs[currJoint].x
														,SheetMap.jointImgs[currJoint].y
														,SheetMap.jointImgs[currJoint].w
														,SheetMap.jointImgs[currJoint].l
														,0
														,0 - (SheetMap.jointImgs[currJoint].l / 2)
														,dist
														,SheetMap.jointImgs[currJoint].l)
														
					contextUse.restore(); 
				}
			}
			
		}
		
	}
}

function resetAnimation(gameObj,targetAnimation) {
	gameObj.animations[targetAnimation].LocalCurrentKeyFrame == -1;
	for(var i = 0; i < gameObj.animations[targetAnimation].keyFrames.length; i++) {
		gameObj.animations[targetAnimation].keyFrames[i].LocalCounter = 0;
	}
}

function controlledMovement_Test(gameObj) {
	if(keys.left && keys.right) {
		gameObj.properties.xv = 0;
	} else if(keys.left) {
		gameObj.properties.xv = -7;
		
		if(gameObj.currAnimation != SkeletonTestAnimationStates.Run) {
			resetAnimation(gameObj,SkeletonTestAnimationStates.Run);
			gameObj.currAnimation = SkeletonTestAnimationStates.Run;
		}
	} else if(keys.right) {
		gameObj.properties.xv = 7;
		
		if(gameObj.currAnimation != SkeletonTestAnimationStates.Run) {
			resetAnimation(gameObj,SkeletonTestAnimationStates.Run);
			gameObj.currAnimation = SkeletonTestAnimationStates.Run;
		}
	} 
	
	if(gameObj.properties.xv == 0) {
		if(gameObj.currAnimation != SkeletonTestAnimationStates.Idle) {
			resetAnimation(gameObj,SkeletonTestAnimationStates.Idle);
			gameObj.currAnimation = SkeletonTestAnimationStates.Idle;
		}
	}
}

function controlledMovement_Mickey(gameObj) {
	if(keys.left && keys.right) {
		gameObj.properties.xv = 0;
	} else if(keys.left) {
		gameObj.properties.xv = -7;
		
		if(gameObj.currAnimation != MickeyAnimationStates.Run) {
			resetAnimation(gameObj,MickeyAnimationStates.Run);
			gameObj.currAnimation = MickeyAnimationStates.Run;
		}
	} else if(keys.right) {
		gameObj.properties.xv = 7;
		
		if(gameObj.currAnimation != MickeyAnimationStates.Run) {
			resetAnimation(gameObj,MickeyAnimationStates.Run);
			gameObj.currAnimation = MickeyAnimationStates.Run;
		}
	} 
	
	if(gameObj.properties.xv == 0) {
		if(gameObj.currAnimation != MickeyAnimationStates.Idle) {
			resetAnimation(gameObj,MickeyAnimationStates.Idle);
			gameObj.currAnimation = MickeyAnimationStates.Idle;
		}
	}
}

function editSkeleton(gameObj) {
	if(DefaultDevGlobals.currObjEditJoint == null) {
		for(var i = 0; i < gameObj.handler.cBuff.length; i++) {
			
			for(var j = 0; j < gameObj.skeletalJoints.length; j++) {
				var dX = (gameObj.handler.cBuff[i].x + gameObj.handler.CameraX) - (gameObj.position.x + gameObj.skeletalJoints[j].offX);
				var dY = (gameObj.handler.cBuff[i].y + gameObj.handler.CameraY) - (gameObj.position.y + gameObj.skeletalJoints[j].offY);
				
				var dist = Math.sqrt((dX * dX) + (dY * dY));
				
				//console.log(dist);
				if(dist <= 5) {
					console.log(j);
					//DefaultDevGlobals.currObjEdit = gameObj;
					DefaultDevGlobals.currObjEditJoint = j;
					break;
				}
			}
			
		}
	} else {
		for(var i = 0; i < gameObj.handler.cBuff.length; i++) {
			
			var newOffX = (gameObj.handler.cBuff[i].x + gameObj.handler.CameraX) - gameObj.position.x;
			var newOffY = (gameObj.handler.cBuff[i].y + gameObj.handler.CameraY) - gameObj.position.y;
			
			gameObj.skeletalJoints[DefaultDevGlobals.currObjEditJoint].offX = newOffX;
			gameObj.skeletalJoints[DefaultDevGlobals.currObjEditJoint].offY = newOffY;
			
			DefaultDevGlobals.currObjEditJoint = null;
			break;
		}
	}
}

function CreateLocalCanvases() {
	var newCanvasID = 'Canvas' + LocalCanvases.length;
	
	var canvasSection = document.getElementById('Canvases');
	
	var canv0 = document.createElement('canvas');
	canv0.id = newCanvasID;
	
	canv0.width = 640; 
	canv0.height = 576;
	canv0.style.display = 'block';
	canv0.style.marginTop = '-576px';
	canv0.style.width = '640px'; 
	canv0.style.height = '576px';
	canv0.style.zIndex = LocalCanvases.length + 5;

	canvasSection.appendChild(canv0); // adds the canvas to #someBox
	
	var newCanv0 = document.getElementById(newCanvasID);
	var newCtx0 = newCanv0.getContext("2d");
	LocalCanvases.push({canvas: newCanv0, context: newCtx0});
}

function addClickToCanvas(canIndex) {
	//DefaultDevGlobals.currHandler = this.handler;
	LocalCanvases[canIndex].canvas.addEventListener('click', storeClick_DefaultDev, false);
}

function testArgFunct(arg, arg2) {
	console.log(arg);
	console.log(arg2);
}

function MickeyUpdate() {
	//editSkeleton(this);
	
	if(this.currAnimation == -1) {
		this.currAnimation = 0;
	}
	
	if(this.properties == null) {
		this.properties = {};
	}
	
	if(this.position.x == null) {
		this.position.x = 0;
	}
	
	if(this.position.y == null) {
		this.position.y = 0;
	}
	
	if(this.properties.xv == null) {
		this.properties.xv = 0;
	}
	
	if(this.properties.yv == null) {
		this.properties.yv = 0;
	}
	
	if(this.properties.gravity == null) {
		this.properties.gravity = 0.6;
	}
	
	if(this.properties.suspend == 1) {
		return;
	}
	
	if(this.properties.state == 'scraping') {
		//scrapeAction_MOAB(this);
	} else if(this.properties.state == 'tennis') {
		//tennisAction_MOAB(this);
	} else {
		controlledMovement_Mickey(this);
	}
	
	if(this.properties.xv == 7 && this.properties.yv == 7) {
		this.properties.xv = Math.sqrt((7 * 7)/2);
		this.properties.yv = Math.sqrt((7 * 7)/2);
	} else if(this.properties.xv == 7 && this.properties.yv == -7) {
		this.properties.xv = Math.sqrt((7 * 7)/2);
		this.properties.yv = Math.sqrt((7 * 7)/2) * -1;
	} else if(this.properties.xv == -7 && this.properties.yv == 7) {
		this.properties.xv = Math.sqrt((7 * 7)/2) * -1;
		this.properties.yv = Math.sqrt((7 * 7)/2);
	} else if(this.properties.xv == -7 && this.properties.yv == -7) {
		this.properties.xv = Math.sqrt((7 * 7)/2) * -1;
		this.properties.yv = Math.sqrt((7 * 7)/2) * -1;
	}
	
	this.properties.yv = this.properties.yv + this.properties.gravity;
	
	var newPosition = {x: this.position.x + this.properties.xv, y: this.position.y + this.properties.yv};
	this.setPosition(newPosition);
		
	this.properties.xv = 0;
		
	
	playAnimation(this);
}

function WallCollisionBehavior_Mickey(gameObj,colObj,verIndex,intersection,colVer1,colVer2) {
	
	var origX = gameObj.position.x;
	var origY = gameObj.position.y;
	
	var newPosition = {};
	newPosition.x = gameObj.position.x - (((gameObj.position.x + gameObj.vertices[verIndex].offX) - intersection[0]));
	newPosition.y = gameObj.position.y - (((gameObj.position.y + gameObj.vertices[verIndex].offY) - intersection[1]));
			
	if((gameObj.position.x - gameObj.delta.dx) > gameObj.position.x) {
		newPosition.x++;
		if(colObj.position.x + colObj.vertices[colVer1].offX == colObj.position.x + colObj.vertices[colVer2].offX) {
			gameObj.properties.slideStateY = 0;
		}
	} else if((gameObj.position.x - gameObj.delta.dx) < gameObj.position.x) {
		newPosition.x--;
		if(colObj.position.x + colObj.vertices[colVer1].offX == colObj.position.x + colObj.vertices[colVer2].offX) {
			gameObj.properties.slideStateY = 1;
		}
	}
			
	if((gameObj.position.y - gameObj.delta.dy) > gameObj.position.y) {
		
		if(colObj.position.x + colObj.vertices[colVer1].offX != colObj.position.x + colObj.vertices[colVer2].offX) {
			console.log('Pressing Down');
			//gameObj.position.y++;
			newPosition.y++;
		}
				
		gameObj.properties.yv = 0;
		if(colObj.position.y + colObj.vertices[colVer1].offY == colObj.position.y + colObj.vertices[colVer2].offY) {
			gameObj.properties.slideStateX = 0;
		}
	} else if((gameObj.position.y - gameObj.delta.dy) < gameObj.position.y) {
	
		if(colObj.position.x + colObj.vertices[colVer1].offX != colObj.position.x + colObj.vertices[colVer2].offX) {
			console.log('Pressing Up');
			//gameObj.position.y--;
			newPosition.y--;
		}
				
		gameObj.properties.yv = 0;
		if(colObj.position.y + colObj.vertices[colVer1].offY == colObj.position.y + colObj.vertices[colVer2].offY) {
			gameObj.properties.slideStateX = 1;
		}
				
		var newjumpVectorPosition = {x: newPosition.x, y: newPosition.y + gameObj.properties.height + 1};
		gameObj.properties.jumpVector.setPosition(newjumpVectorPosition);
		gameObj.properties.jumpVector.setPosition({x: gameObj.properties.jumpVector.position.x, y: gameObj.properties.jumpVector.position.y + 500});
				
	}
	
	gameObj.appendPosition(newPosition);
}

function MickeyCollision(colObj,verIndex,intersection,colVer1,colVer2) {
	
	if(colObj.tag != null) {
		if(colObj.tag == 'wall') {
			WallCollisionBehavior_Mickey(this,colObj,verIndex,intersection,colVer1,colVer2);
		} else if(colObj.tag == 'coin') {
			
		} else if(colObj.tag == 'platform') {
			
		} else if(colObj.tag == 'ladder') {
			
		} else if(colObj.tag == 'enemy') {
			
		} else if(colObj.tag == 'enemyHitBox') {
			
		} else if(colObj.tag == 'reaper') {
			
		}
	}
}

function setupMickey() {

	console.log('M Set');

	var GOJ = createGOJsonFromString("GameObject -x 0 -y 0 -v 0 0 -v 36 0 -d -t vector -cf platformerVectorCollide_SG0 -nc platformerVectorNoCollide_SG0 -p hit 0");
	var GOObj = createGOFromJSON(GOJ);
	this.properties.jumpVector = GOObj;
	GOObj.properties.parentObj = this;
	oHandlerDev.addObject(GOObj);
	
}

function platformerVectorCollide_SG0(colObj,verIndex,intersection,colVer1,colVer2) {
	if(colObj.tag != null) {
		//console.log(colObj.tag);
		if(colObj.tag == 'wall') {
			
			if (colObj.position.y - this.properties.parentObj.position.y <= this.properties.parentObj.properties.height + 1) {
				this.properties.parentObj.properties.jumpable = 1;
				this.properties.parentObj.properties.jumps = this.properties.parentObj.properties.maxJumps;
				this.properties.parentObj.properties.gravity = 0;
				this.properties.hit = 1;
				this.properties.parentObj.properties.standingOn = 'wall';
			} else {
				if(this.properties.hit != 1) {
					this.properties.parentObj.properties.jumpable = 0;
					this.properties.parentObj.properties.gravity = 0.6;
					this.properties.parentObj.properties.standingOn = '';
				}
				
				if(this.properties.parentObj.properties.jumps == this.properties.parentObj.properties.maxJumps && this.properties.hit != 1) {
					console.log('fixing');
					this.properties.parentObj.properties.jumps--;
				}
			}
			
		} else if(colObj.tag == 'platform') {
			
			if (colObj.position.y - this.properties.parentObj.position.y <= this.properties.parentObj.properties.height + 1) {
				this.properties.parentObj.properties.jumpable = 1;
				this.properties.parentObj.properties.jumps = this.properties.parentObj.properties.maxJumps;
				this.properties.parentObj.properties.gravity = 0;
				this.properties.parentObj.properties.standingOn = 'plat';
				
				if(this.properties.hit != 1) {
					var newPosition = {x: this.properties.parentObj.position.x, y: this.properties.parentObj.position.y}
					if(colObj.properties.xv != null) {
						newPosition.x = this.properties.parentObj.position.x + colObj.properties.xv
						this.properties.parentObj.appendPosition(newPosition);
					}
					if(colObj.properties.yv != null) {
						//newPosition.y = this.properties.parentObj.position.y + colObj.properties.yv
						this.properties.parentObj.properties.yv = colObj.properties.yv;
					}
					
				}
				
				this.properties.hit = 1;
				
			} else if(colObj.properties.yv != null) {
				if(colObj.position.y >= this.properties.parentObj.position.y + this.properties.parentObj.properties.height 
				&& colObj.position.y + colObj.properties.yv <= this.properties.parentObj.position.y + this.properties.parentObj.properties.height) {
					this.properties.parentObj.properties.jumpable = 1;
					this.properties.parentObj.properties.jumps = this.properties.parentObj.properties.maxJumps;
					this.properties.parentObj.properties.gravity = 0;
					this.properties.parentObj.properties.standingOn = 'plat';
					
					
					this.properties.parentObj.position.y = colObj.position.y - this.properties.parentObj.properties.height - 1;
					this.properties.parentObj.properties.yv = colObj.properties.yv;
					if(this.properties.parentObj.currAnimation == PlatformerAnimationStates.JumpRight) {
						this.properties.parentObj.currAnimation = PlatformerAnimationStates.IdleRight;
					} else if(this.properties.parentObj.currAnimation == PlatformerAnimationStates.JumpLeft) {
						this.properties.parentObj.currAnimation = PlatformerAnimationStates.IdleLeft;
					}
				}	
			} else {
				//console.log('No');
				if(this.properties.hit != 1) {
					this.properties.parentObj.properties.jumpable = 0;
					this.properties.parentObj.properties.gravity = 0.6;
					this.properties.parentObj.properties.standingOn = '';
				}
				
				if(this.properties.parentObj.properties.jumps == this.properties.parentObj.properties.maxJumps && this.properties.hit != 1) {
					console.log('fixing');
					this.properties.parentObj.properties.jumps--;
				}
			}
			
		} 
	}
}

function platformerVectorNoCollide_SG0() {
	this.properties.parentObj.properties.jumpable = 0;
	this.properties.parentObj.properties.gravity = 0.6;
	this.properties.parentObj.properties.standingOn = '';
	
	if(this.properties.parentObj.properties.jumps == this.properties.parentObj.properties.maxJumps) {
		//console.log('fixing');
		this.properties.parentObj.properties.jumps--;
	}
}

function TestUpdate() {
	//this.currAnimation = SkeletonTestAnimationStates.LiftArm;
	//this.currAnimation = SkeletonTestAnimationStates.Walk;
	//this.currAnimation = 0;
	//playAnimation(this);
	//renderAnimationObject(this);
	
	//editSkeleton(this);
	
	/*
	if(DefaultDevGlobals.currObjEditJoint == null) {
		for(var i = 0; i < this.handler.cBuff.length; i++) {
			
			for(var j = 0; j < this.skeletalJoints.length; j++) {
				var dX = (this.handler.cBuff[i].x + this.handler.CameraX) - (this.position.x + this.skeletalJoints[j].offX);
				var dY = (this.handler.cBuff[i].y + this.handler.CameraY) - (this.position.y + this.skeletalJoints[j].offY);
				
				var dist = Math.sqrt((dX * dX) + (dY * dY));
				
				//console.log(dist);
				if(dist <= 5) {
					console.log(j);
					//DefaultDevGlobals.currObjEdit = this;
					DefaultDevGlobals.currObjEditJoint = j;
					break;
				}
			}
			
		}
	} else {
		for(var i = 0; i < this.handler.cBuff.length; i++) {
			
			var newOffX = (this.handler.cBuff[i].x + this.handler.CameraX) - this.position.x;
			var newOffY = (this.handler.cBuff[i].y + this.handler.CameraY) - this.position.y;
			
			this.skeletalJoints[DefaultDevGlobals.currObjEditJoint].offX = newOffX;
			this.skeletalJoints[DefaultDevGlobals.currObjEditJoint].offY = newOffY;
			
			DefaultDevGlobals.currObjEditJoint = null;
			break;
		}
	}
	*/
	
	
	if(this.currAnimation == -1) {
		this.currAnimation = 0;
	}
	
	if(this.properties == null) {
		this.properties = {};
	}
	
	if(this.position.x == null) {
		this.position.x = 0;
	}
	
	if(this.position.y == null) {
		this.position.y = 0;
	}
	
	if(this.properties.xv == null) {
		this.properties.xv = 0;
	}
	
	if(this.properties.yv == null) {
		this.properties.yv = 0;
	}
	
	if(this.properties.suspend == 1) {
		return;
	}
	
	if(this.properties.state == 'scraping') {
		//scrapeAction_MOAB(this);
	} else if(this.properties.state == 'tennis') {
		//tennisAction_MOAB(this);
	} else {
		controlledMovement_Test(this);
	}
	
	if(this.properties.xv == 7 && this.properties.yv == 7) {
		this.properties.xv = Math.sqrt((7 * 7)/2);
		this.properties.yv = Math.sqrt((7 * 7)/2);
	} else if(this.properties.xv == 7 && this.properties.yv == -7) {
		this.properties.xv = Math.sqrt((7 * 7)/2);
		this.properties.yv = Math.sqrt((7 * 7)/2) * -1;
	} else if(this.properties.xv == -7 && this.properties.yv == 7) {
		this.properties.xv = Math.sqrt((7 * 7)/2) * -1;
		this.properties.yv = Math.sqrt((7 * 7)/2);
	} else if(this.properties.xv == -7 && this.properties.yv == -7) {
		this.properties.xv = Math.sqrt((7 * 7)/2) * -1;
		this.properties.yv = Math.sqrt((7 * 7)/2) * -1;
	}
	
	var newPosition = {x: this.position.x + this.properties.xv, y: this.position.y + this.properties.yv};
	this.setPosition(newPosition);
		
	this.properties.xv = 0;
		
	this.properties.yv = 0;
	
	playAnimation(this);
	
	
}