/*
SEARCH TERMS:

GLOBALS
STAGEONE
STAGETWO
STAGETHREE
PLAYER
BUTTONS
HOLE

*/

/*
GLOBALS
start
*/

MobiusMouseGlobals = {
	//StageLockStatus: [true,false,false],
	StageLockStatus: [true,true,false],
	StageCompleteStatus: [false,false,false],
	StageText: ['','',''],
	StageLayerMaxs: [2,2,0],
	CurrentStage: 0,
	CurrentLayer: 0,
	HasTedsly: false,
	HasCaesar: false
}

/*
GLOBALS
end
*/

/*
STAGEONE
start
*/

//Player
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + 'GameObject -x 220 -y 188 -v 0 0 -v 50 0 -v 50 50 -v 0 50';
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -rp 25 25 25'
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -p xv 0 -p yv 0'
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -u playerMovement_MobiusMouse'
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -cf playerCollision_MobiusMouse'
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -t player'
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -a MouseAnimationPackage'
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -ca 0'
//MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -d'
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ';'

//Layer 0
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + 'GameObject -x 100 -y 138 -t wall';
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -v 0 0 -v 440 0 -v 440 125 -v 200 125 -v 200 175 -v 440 175 -v 440 300 -v 0 300';
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -d'
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -p oLayer 0 -p origX 100 -p origY 138'
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ';'

MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + 'GameObject -x 440 -y 200';
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -rp 0 0 25';
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -d'
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -p oLayer 0 -p origX 440 -p origY 200'
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -t hole'
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ';'

MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + 'GameObject -x 440 -y 390';
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -rp 0 0 25';
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -d'
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -p oLayer 0 -p origX 440 -p origY 390'
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -t hole'
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ';'

//Layer 1
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + 'GameObject -x -1000 -y -1000 -t wall';
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -v 0 0 -v 440 0 -v 440 300 -v 0 300';
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -d'
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -p oLayer 1 -p origX 100 -p origY 138'
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ';'

MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + 'GameObject -x -1000 -y -1000 -t wall';
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -v 0 0 -v 220 0';
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -d'
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -p oLayer 1 -p origX 320 -p origY 288'
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ';'

MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + 'GameObject -x -1000 -y -1000 -t wall';
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -v 0 0 -v 0 150';
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -d'
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -p oLayer 1 -p origX 320 -p origY 288'
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ';'

MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + 'GameObject -x -1000 -y -1000';
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -rp 0 0 25';
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -d'
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -p oLayer 1 -p origX 150 -p origY 390'
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -t hole'
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ';'

MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + 'GameObject -x -1000 -y -1000';
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -rp 0 0 25';
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -d'
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -p oLayer 1 -p origX 510 -p origY 325'
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -t hole'
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ';'

MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + 'GameObject -x -1000 -y -1000';
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -rp 0 0 12';
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -a TedslyAnimationPackage';
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -ca 0';
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -d'
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -p oLayer 1 -p origX 390 -p origY 380'
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -t Tedsly'
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ';'

//Layer 2
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + 'GameObject -x -1000 -y -1000 -t wall';
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -v 0 0 -v 440 0 -v 440 300 -v 0 300';
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -d'
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -p oLayer 2 -p origX 100 -p origY 138'
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ';'

MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + 'GameObject -x -1000 -y -1000 -t wall';
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -v 0 0 -v -220 0';
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -d'
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -p oLayer 2 -p origX 320 -p origY 288'
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ';'

MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + 'GameObject -x -1000 -y -1000 -t wall';
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -v 0 0 -v 0 150';
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -d'
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -p oLayer 2 -p origX 320 -p origY 288'
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ';'

MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + 'GameObject -x -1000 -y -1000';
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -rp 0 0 25';
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -d'
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -p oLayer 2 -p origX 220 -p origY 188'
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -t hole'
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ';'

MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + 'GameObject -x -1000 -y -1000';
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -rp 0 0 15';
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -d'
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -p oLayer 2 -p origX 250 -p origY 390'
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ' -t goal'
MobiusMouseGlobals.StageText[0] = MobiusMouseGlobals.StageText[0] + ';'


/*
STAGEONE
end
*/

/*
STAGETWO
start
*/

//Player
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + 'GameObject -x 70 -y 70 -v 0 0 -v 50 0 -v 50 50 -v 0 50';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -rp 25 25 25'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -p xv 0 -p yv 0'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -u playerMovement_MobiusMouse'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -cf playerCollision_MobiusMouse'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -t player'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -a MouseAnimationPackage'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -ca 0'
//MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -d'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ';'

//Layer 1
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + 'GameObject -x 65 -y 65 -t wall';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -v 0 0 -v 500 0 -v 500 440 -v 0 440';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -d';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -p oLayer 0 -p origX 65 -p origY 65';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ';'

MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + 'GameObject -x 205 -y 245 -t wall'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -v 0 0 -v 265 260 -v 0 260'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -d';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -p oLayer 0 -p origX 205 -p origY 245';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ';'

MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + 'GameObject -x 312 -y 190 -t wall'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -v 0 0 -v 253 261 -v 253 0'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -d';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -p oLayer 0 -p origX 312 -p origY 190';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ';'

MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + 'GameObject -x 129 -y 456'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -rp 0 0 25';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -d'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -p oLayer 0 -p origX 129 -p origY 456'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -t hole'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ';'

MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + 'GameObject -x 508 -y 126'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -rp 0 0 25';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -d'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -p oLayer 0 -p origX 508 -p origY 126'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -t hole'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ';'

MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + 'GameObject -x 400 -y 360'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -rp 0 0 25';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -d'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -p oLayer 0 -p origX 400 -p origY 360'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -t hole'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ';'

MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + 'GameObject -x 270 -y 470';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -rp 0 0 15';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -d'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -p oLayer 0 -p origX 270 -p origY 470'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -t goal'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ';'

//Layer 2
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + 'GameObject -x -1000 -y -1000 -t wall';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -v 0 0 -v 500 0 -v 500 440 -v 0 440';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -d';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -p oLayer 1 -p origX 65 -p origY 65';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ';'

MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + 'GameObject -x -1000 -y -1000 -t wall'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -v 0 0 -v 0 440'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -d';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -p oLayer 1 -p origX 225 -p origY 65';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ';'

MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + 'GameObject -x -1000 -y -1000 -t wall'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -v 0 0 -v 155 0 -v 155 155 -v 0 155'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -d';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -p oLayer 1 -p origX 410 -p origY 65';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ';'

MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + 'GameObject -x -1000 -y -1000 -v 0 0'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -rp 0 0 25';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -d'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -p oLayer 1 -p origX 130 -p origY 298'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -t hole'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ';'

MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + 'GameObject -x -1000 -y -1000 -v 0 0'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -rp 0 0 25';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -d'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -p oLayer 1 -p origX 130 -p origY 118'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -t hole'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ';'

MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + 'GameObject -x -1000 -y -1000 -v 0 0'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -rp 0 0 25';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -d'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -p oLayer 1 -p origX 440 -p origY 97'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -t hole'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ';'

MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + 'GameObject -x -1000 -y -1000 -v 0 0'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -rp 0 0 25';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -d'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -p oLayer 1 -p origX 531 -p origY 188'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -t hole'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ';'

MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + 'GameObject -x -1000 -y -1000 -v 0 0'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -rp 0 0 25';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -d'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -p oLayer 1 -p origX 350 -p origY 140'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -t hole'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ';'

MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + 'GameObject -x -1000 -y -1000 -v 0 0'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -rp 0 0 25';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -d'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -p oLayer 1 -p origX 300 -p origY 440'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -t hole'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ';'

//Layer 3
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + 'GameObject -x -1000 -y -1000 -t wall';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -v 0 0 -v 500 0 -v 500 440 -v 0 440';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -d';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -p oLayer 2 -p origX 65 -p origY 65';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ';'

MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + 'GameObject -x -1000 -y -1000 -t wall';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -v 0 0 -v 160 0 -v 160 300 -v 0 300';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -d';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -p oLayer 2 -p origX 65 -p origY 205';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ';'

MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + 'GameObject -x -1000 -y -1000 -t wall';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -v 0 0 -v 340 0 -v 340 105 -v 0 105';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -d';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -p oLayer 2 -p origX 225 -p origY 400';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ';'

MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + 'GameObject -x -1000 -y -1000 -t wall';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -v 0 0 -v 0 140';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -d';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -p oLayer 2 -p origX 285 -p origY 65';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ';'

MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + 'GameObject -x -1000 -y -1000 -t wall';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -v 0 0 -v 100 0';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -d';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -p oLayer 2 -p origX 285 -p origY 205';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ';'

MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + 'GameObject -x -1000 -y -1000 -t wall';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -v 0 0 -v 0 195';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -d';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -p oLayer 2 -p origX 385 -p origY 205';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ';'

//Hole 2
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + 'GameObject -x -1000 -y -1000 -v 0 0'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -rp 0 0 25';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -d'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -p oLayer 2 -p origX 270 -p origY 370'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -t hole'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ';'

//Hole 4
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + 'GameObject -x -1000 -y -1000 -v 0 0'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -rp 0 0 25';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -d'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -p oLayer 2 -p origX 515 -p origY 460'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -t hole'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ';'

//Hole 1
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + 'GameObject -x -1000 -y -1000 -v 0 0'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -rp 0 0 25';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -d'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -p oLayer 2 -p origX 130 -p origY 390'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -t hole'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ';'

//Hole 3
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + 'GameObject -x -1000 -y -1000 -v 0 0'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -rp 0 0 25';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -d'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -p oLayer 2 -p origX 440 -p origY 160'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -t hole'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ';'

//Caesar
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + 'GameObject -x -1000 -y -1000 -v 0 0'
//MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + 'GameObject -x 490 -y 320 -v 0 0'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -rp 0 0 12';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -a CaesarAnimationPackage';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -ca 0';
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -d'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -p oLayer 2 -p origX 490 -p origY 320'
//MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -p oLayer 0 -p origX 490 -p origY 320'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -t Caesar'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -u CaesarUpdate'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ' -pi setupCaesar'
MobiusMouseGlobals.StageText[1] = MobiusMouseGlobals.StageText[1] + ';'

/*
STAGETWO
end
*/

/*
STAGETHREE
start
*/

/*
STAGETHREE
end
*/

function nextLayer() {
	MobiusMouseGlobals.CurrentLayer++;
	
	if(MobiusMouseGlobals.CurrentLayer > MobiusMouseGlobals.StageLayerMaxs[MobiusMouseGlobals.CurrentStage]) {
		MobiusMouseGlobals.CurrentLayer = 0;
	}
	
	for(var i = 0; i < oHandler.Objects.length; i++) {
		
		if(oHandler.Objects[i].properties.oLayer != null) {
			if(oHandler.Objects[i].properties.oLayer != MobiusMouseGlobals.CurrentLayer) {
				oHandler.Objects[i].position.x = -1000;
				oHandler.Objects[i].position.y = -1000;
				if(oHandler.Objects[i].properties.TextBox != null) {
					resetTextBox_MM(oHandler.Objects[i].properties.TextBox);
				}
			} else if(oHandler.Objects[i].properties.oLayer == MobiusMouseGlobals.CurrentLayer) {
				oHandler.Objects[i].position.x = oHandler.Objects[i].properties.origX;
				oHandler.Objects[i].position.y = oHandler.Objects[i].properties.origY;
				if(oHandler.Objects[i].properties.TextBox != null) {
					resetTextBox_MM(oHandler.Objects[i].properties.TextBox);
				}
			}
		}
		
	}
}

function startMenu_MobiusMouse() {
	var SelText = ''
	
	//Level One Button
	SelText = SelText + 'GameObject -x 200 -y 100 -v 0 0 -v 240 0 -v 240 100 -v 0 100';
	SelText = SelText + ' -p wordLabel "Level One"'
	SelText = SelText + ' -p stage 0'
	SelText = SelText + ' -u startLevelFromButton -pi setupLevelButton'
	SelText = SelText + ' -d'
	SelText = SelText + ';'
	
	//Level Two Button
	SelText = SelText + 'GameObject -x 200 -y 250 -v 0 0 -v 240 0 -v 240 100 -v 0 100';
	SelText = SelText + ' -p wordLabel "Level Two"'
	SelText = SelText + ' -p stage 1'
	SelText = SelText + ' -u startLevelFromButton -pi setupLevelButton'
	SelText = SelText + ' -d'
	SelText = SelText + ';'
	
	//Level Three Button
	SelText = SelText + 'GameObject -x 200 -y 400 -v 0 0 -v 240 0 -v 240 100 -v 0 100';
	SelText = SelText + ' -p wordLabel "Level Three"'
	SelText = SelText + ' -p stage 2'
	SelText = SelText + ' -u startLevelFromButton -pi setupLevelButton'
	SelText = SelText + ' -d'
	SelText = SelText + ';'
	
	//Click Handler
	SelText = SelText + 'GameObject -pi addClickOption_MobiusMouse;';
	
	if(MobiusMouseGlobals.HasTedsly) {
		SelText = SelText + 'GameObject -x 500 -y 100';
		SelText = SelText + ' -a TedslyAnimationPackage'
		SelText = SelText + ' -ca 0'
		//SelText = SelText + ' -d'
		SelText = SelText + ';'
	}
	
	if(MobiusMouseGlobals.HasCaesar) {
		SelText = SelText + 'GameObject -x 500 -y 250 -v 0 0'
		SelText = SelText + ' -rp 0 0 12';
		SelText = SelText + ' -a CaesarAnimationPackage';
		SelText = SelText + ' -ca 0';
		SelText = SelText + ' -d'
		SelText = SelText + ' -t Caesar'
		SelText = SelText + ' -u CaesarUpdate'
		SelText = SelText + ' -pi setupCaesar2'
		SelText = SelText + ';'
	}
	
	enterObjects(SelText);
}

function startMM(Stage) {
	
	enterObjects(MobiusMouseGlobals.StageText[Stage]);
}

function UploadMobiusMouse() {
	GameTitle.innerHTML = "Mobius Mouse";
	oHandler.resetCamera();
	oHandler.removeAllObjects();
	
	var backgroundCanvas = document.getElementById("canvasBG");
	backgroundCanvas.style = "background-color: white;"
	
	//startMOAB();
	//startMM();
	startMenu_MobiusMouse();
}

/*
PLAYER
start
*/

function controlledMovement_MobiusMouse(gameObj) {
	if(keys.left && keys.right) {
		gameObj.properties.xv = 0;
	} else if(keys.left) {
		gameObj.properties.xv = -7;
	
		if(gameObj.currAnimation != MouseAnimationStates.RunLeft) {
			gameObj.animations[gameObj.currAnimation].keyFrames[gameObj.animations[gameObj.currAnimation].currKeyFrame].currFrame = 1;
			gameObj.currAnimation = MouseAnimationStates.RunLeft;
			gameObj.animations[gameObj.currAnimation].currKeyFrame = 0;
		}
	} else if(keys.right) {
		gameObj.properties.xv = 7;
		
		if(gameObj.currAnimation != MouseAnimationStates.RunRight) {
			gameObj.animations[gameObj.currAnimation].keyFrames[gameObj.animations[gameObj.currAnimation].currKeyFrame].currFrame = 1;
			gameObj.currAnimation = MouseAnimationStates.RunRight;
			gameObj.animations[gameObj.currAnimation].currKeyFrame = 0;
		}
	} 
	
	if(keys.up && keys.down) {
		gameObj.properties.yv = 0;
	} else if(keys.up) {
		gameObj.properties.yv = -7;
		
		if((gameObj.currAnimation == MouseAnimationStates.RunLeft || gameObj.currAnimation == MouseAnimationStates.IdleLeft) && gameObj.currAnimation != MouseAnimationStates.RunLeft) {
			gameObj.animations[gameObj.currAnimation].keyFrames[gameObj.animations[gameObj.currAnimation].currKeyFrame].currFrame = 1;
			gameObj.currAnimation = MouseAnimationStates.RunLeft;
			gameObj.animations[gameObj.currAnimation].currKeyFrame = 0;
		} else if((gameObj.currAnimation == MouseAnimationStates.RunRight || gameObj.currAnimation == MouseAnimationStates.IdleRight) && gameObj.currAnimation != MouseAnimationStates.RunRight) {
			gameObj.animations[gameObj.currAnimation].keyFrames[gameObj.animations[gameObj.currAnimation].currKeyFrame].currFrame = 1;
			gameObj.currAnimation = MouseAnimationStates.RunRight;
			gameObj.animations[gameObj.currAnimation].currKeyFrame = 0;
		}
	} else if(keys.down) {
		gameObj.properties.yv = 7;
		
		if((gameObj.currAnimation == MouseAnimationStates.RunLeft || gameObj.currAnimation == MouseAnimationStates.IdleLeft) && gameObj.currAnimation != MouseAnimationStates.RunLeft) {
			gameObj.animations[gameObj.currAnimation].keyFrames[gameObj.animations[gameObj.currAnimation].currKeyFrame].currFrame = 1;
			gameObj.currAnimation = MouseAnimationStates.RunLeft;
			gameObj.animations[gameObj.currAnimation].currKeyFrame = 0;
		} else if((gameObj.currAnimation == MouseAnimationStates.RunRight || gameObj.currAnimation == MouseAnimationStates.IdleRight) && gameObj.currAnimation != MouseAnimationStates.RunRight) {
			gameObj.animations[gameObj.currAnimation].keyFrames[gameObj.animations[gameObj.currAnimation].currKeyFrame].currFrame = 1;
			gameObj.currAnimation = MouseAnimationStates.RunRight;
			gameObj.animations[gameObj.currAnimation].currKeyFrame = 0;
		}
	}
	
	if(gameObj.properties.xv == 0 && gameObj.properties.yv == 0) {
		if(gameObj.currAnimation == MouseAnimationStates.RunLeft) {
			gameObj.animations[gameObj.currAnimation].keyFrames[gameObj.animations[gameObj.currAnimation].currKeyFrame].currFrame = 1;
			gameObj.currAnimation = MouseAnimationStates.IdleLeft;
			gameObj.animations[gameObj.currAnimation].currKeyFrame = 0;
		} else if(gameObj.currAnimation == MouseAnimationStates.RunRight) {
			gameObj.animations[gameObj.currAnimation].keyFrames[gameObj.animations[gameObj.currAnimation].currKeyFrame].currFrame = 1;
			gameObj.currAnimation = MouseAnimationStates.IdleRight;
			gameObj.animations[gameObj.currAnimation].currKeyFrame = 0;
		}
	}
}

function playerMovement_MobiusMouse() {
	if(this.properties == null) {
		//console.log('No Prop');
		return;
	}
	
	if(this.position.x == null) {
		//console.log('No Prop');
		return;
	}
	
	if(this.position.y == null) {
		//console.log('No Prop');
		return;
	}
	
	if(this.properties.xv == null) {
		//console.log('No Prop');
		return;
	}
	
	if(this.properties.yv == null) {
		//console.log('No Prop');
		return;
	}
	
	if(this.properties.suspend == 1) {
		return;
	}
	
	/*
	if(this.properties.preVector != null) {
		var newpreVectorPosition = {x: this.position.x, y: this.position.y + this.properties.height + 1};
		this.properties.preVector.setPosition(newpreVectorPosition);
		this.properties.preVector.setPosition({x: this.properties.preVector.position.x, y: this.properties.preVector.position.y + 500});
		this.properties.preVector.properties.hit = 0;
	}
	*/
	
	if(this.properties.state == 'scraping') {
		//scrapeAction_MOAB(this);
	} else if(this.properties.state == 'tennis') {
		//tennisAction_MOAB(this);
	} else {
		controlledMovement_MobiusMouse(this);
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
	
	/*
	if(this.properties.iFrames != -1) {
		this.properties.iFrames++;
	}
	if(this.properties.iFrames == this.properties.maxStunFrames + 20) {
		this.properties.iFrames = -1;
	}
	*/
}

function WallCollisionBehavior_MobiusMouse(gameObj,colObj,verIndex,intersection,colVer1,colVer2) {
	//console.log('Wall Collide');
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
			//console.log('Pressing Down');
			newPosition.y++;
		}
				
		gameObj.properties.yv = 0;
		if(colObj.position.y + colObj.vertices[colVer1].offY == colObj.position.y + colObj.vertices[colVer2].offY) {
			gameObj.properties.slideStateX = 0;
		}
	} else if((gameObj.position.y - gameObj.delta.dy) < gameObj.position.y) {
	
		if(colObj.position.x + colObj.vertices[colVer1].offX != colObj.position.x + colObj.vertices[colVer2].offX) {
			//console.log('Pressing Up');
			newPosition.y--;
		}
				
		gameObj.properties.yv = 0;
		if(colObj.position.y + colObj.vertices[colVer1].offY == colObj.position.y + colObj.vertices[colVer2].offY) {
			gameObj.properties.slideStateX = 1;
		}
		
		/*
		var newjumpVectorPosition = {x: newPosition.x, y: newPosition.y + gameObj.properties.height + 1};
		gameObj.properties.jumpVector.setPosition(newjumpVectorPosition);
		gameObj.properties.jumpVector.setPosition({x: gameObj.properties.jumpVector.position.x, y: gameObj.properties.jumpVector.position.y + 500});
		*/
			
		if(gameObj.currAnimation == PlatformerAnimationStates.JumpRight) {
			gameObj.animations[gameObj.currAnimation].keyFrames[gameObj.animations[gameObj.currAnimation].currKeyFrame].currFrame = 1;
			gameObj.currAnimation = PlatformerAnimationStates.IdleRight;
			gameObj.animations[gameObj.currAnimation].currKeyFrame = 0;
		} else if(gameObj.currAnimation == PlatformerAnimationStates.JumpLeft) {
			gameObj.animations[gameObj.currAnimation].keyFrames[gameObj.animations[gameObj.currAnimation].currKeyFrame].currFrame = 1;
			gameObj.currAnimation = PlatformerAnimationStates.IdleLeft;
			gameObj.animations[gameObj.currAnimation].currKeyFrame = 0;
		}
	}
	
	gameObj.appendPosition(newPosition);
}

function HoleCollisionBehavior_MobiusMouse(gameObj,colObj,verIndex,intersection,colVer1,colVer2) {
	
}

function playerCollision_MobiusMouse(colObj,verIndex,intersection,colVer1,colVer2) {
	
	if(colObj.tag != null) {
		if(colObj.tag == 'wall') {
			WallCollisionBehavior_MobiusMouse(this,colObj,verIndex,intersection,colVer1,colVer2);
		} else if(colObj.tag == 'hole') {
			this.position.x = colObj.position.x - 25;
			this.position.y = colObj.position.y - 25;
			nextLayer();
		} else if(colObj.tag == 'goal') {
			oHandler.removeAllObjects();
			MobiusMouseGlobals.StageLockStatus[MobiusMouseGlobals.CurrentStage + 1] = true;
			startMenu_MobiusMouse();
		} else if(colObj.tag == 'Caesar') {
			if(!MobiusMouseGlobals.HasTedsly) {
				this.handler.removeObjectSafe(colObj.properties.TextBox,this);
				resetTextBox_MM(colObj.properties.TextBox);
				
				var SelText = '';
				SelText = SelText + 'GameObject -x -100 -y -100'
				SelText = SelText + ' -p Line0 "No go."'
				SelText = SelText + ' -p Line1 "Too cared with"'
				SelText = SelText + ' -p Line2 "no Tedsly"'
				SelText = SelText + ' -u textBoxUpdate_MM'
				SelText = SelText + ' -pi setupMMTextBox'
				
				var GO = createGOFromString(SelText);
				colObj.properties.TextBox = GO;
				colObj.handler.addObject(GO);
			} else {
				this.handler.removeObjectSafe(colObj.properties.TextBox,this);
				resetTextBox_MM(colObj.properties.TextBox);
				
				this.handler.removeObjectSafe(colObj,this);
				
				MobiusMouseGlobals.HasCaesar = true;
			}
		} else if(colObj.tag == 'Tedsly') {
			this.handler.removeObjectSafe(colObj,this);
			MobiusMouseGlobals.HasTedsly = true;
		}
	}
}

/*
PLAYER
end
*/

/*
BUTTONS
start
*/

function storeClick_MobiusMouse(e) {
	var mousepos = getMousePos(canvasUserInterface,e);
	MOABGlobals.currHandler.cBuff.push(mousepos);
}

function addClickOption_MobiusMouse() {
	MOABGlobals.currHandler = this.handler;
	canvasUserInterface.addEventListener('click', storeClick_MobiusMouse, false);
}

function setupLevelButton() {
	var resWord = '';
	
	if(MobiusMouseGlobals.StageLockStatus[this.properties.stage]) {
		resWord = this.properties.wordLabel;
	} else {
		resWord = 'Locked';
	}
	
	var TextText = 'TextObject -x 0 -y 0 -t "'+resWord+'" -c black;';
	
	var TOJ = createTOJsonFromString(TextText);
	var TOObj = createTOFromJSON(TOJ);
	this.properties.wordChild = TOObj;
	console.log(this.properties.wordChild);
	this.handler.addTextObject(TOObj);
}

function startLevelFromButton() {
	
	var triggered = false;
	
	this.properties.wordChild.position.x = this.position.x + 10;
	this.properties.wordChild.position.y = this.position.y + 20;
	
	if(this.vertices.length < 4) {
		return;
	}
		
	for(var i = 0; i < this.handler.cBuff.length; i++) {
	
		if(this.handler.cBuff[i].x + this.handler.CameraX > this.position.x 
		   && this.handler.cBuff[i].x + this.handler.CameraX < this.position.x + this.vertices[1].offX) 
		{
			if(this.handler.cBuff[i].y + this.handler.CameraY > this.position.y
			   && this.handler.cBuff[i].y + this.handler.CameraY < this.position.y + this.vertices[2].offY) {
				
				if(triggered == false) {
					//console.log('pressed');
					triggered = true;
					
					if(MobiusMouseGlobals.StageLockStatus[this.properties.stage]) {
						this.handler.removeAllObjects();
					
						MobiusMouseGlobals.CurrentLayer = 0;
						MobiusMouseGlobals.CurrentStage = this.properties.stage;
						startMM(this.properties.stage);
					}
				}
				
			}
		}
		
	}	
}

/*
BUTTONS
end
*/

/*
HOLE
start
*/

/*
HOLE
end
*/

/*
TEXTBOX
start
*/
function resetTextBox_MM(gameObj) {
	for(var i = 0; i < gameObj.properties.textChildren.length; i++) {
		gameObj.handler.removeTextObject(gameObj.properties.textChildren[i]);
	}
	console.log(gameObj.properties.textChildren[i]);
	
	gameObj.properties.textChildren = [];
	gameObj.properties.currentLine = 0;
	gameObj.properties.currentChar = 0;
	
	gameObj.properties.waitFrames = 0;
}

function setupMMTextBox() {
	this.properties.Lines = [];
	
	
	for (var key in this.properties){
		if(key.substring(0, 4) == 'Line') {
			this.properties.Lines[key.substring(4, 7)] = this.properties[key];
		}
	}	
	
	this.properties.textChildren = [];
	this.properties.currentLine = 0;
	this.properties.currentChar = 0;
	
	this.properties.waitFrames = 0;
}

function textBoxUpdate_MM() {
	if(this.properties.currentLine < this.properties.Lines.length) {
		
		if(this.properties.waitFrames == 0) {
			if(this.properties.textChildren[this.properties.currentLine] == null) {
				this.properties.currentChar = 0;
				var childGenStr = 'TextObject -x '+this.position.x+' -y '+(this.position.y + (this.properties.currentLine * 20))+' -t '+this.properties.Lines[this.properties.currentLine].charAt(this.properties.currentChar)+' -c black;';
		
				var TOJ = createTOJsonFromString(childGenStr);
				var TOObj = createTOFromJSON(TOJ);
				this.properties.textChildren.push(TOObj);
				this.handler.addTextObject(TOObj);
				this.properties.currentChar++;
				
				if(this.properties.currentChar > this.properties.Lines[this.properties.currentLine].length - 1) {
					this.properties.currentLine++;
				}
			} else {
				this.properties.textChildren[this.properties.currentLine].textContent = this.properties.textChildren[this.properties.currentLine].textContent + this.properties.Lines[this.properties.currentLine].charAt(this.properties.currentChar);
				this.properties.currentChar++;
				
				if(this.properties.currentChar > this.properties.Lines[this.properties.currentLine].length - 1) {
					this.properties.currentLine++;
				}
			}
		} else {
			this.properties.waitFrames++;
		}
		
		if(this.properties.waitFrames == 10) {
			this.properties.waitFrames = 0;
		}
	}
}
/*
TEXTBOX
end
*/

function setupCaesar() {
	console.log('set up Caesar');
	
	var SelText = '';
	SelText = SelText + 'GameObject -x -100 -y -100'
	SelText = SelText + ' -p Line0 "I lost."'
	SelText = SelText + ' -p Line1 "I cared."'
	SelText = SelText + ' -p Line2 "Wish Tedsly here."'
	SelText = SelText + ' -u textBoxUpdate_MM'
	SelText = SelText + ' -pi setupMMTextBox'
	
	var GO = createGOFromString(SelText);
	this.properties.TextBox = GO;
	console.log(this.properties.TextBox);
	this.handler.addObject(GO);
}

function setupCaesar2() {
	console.log('set up Caesar');
	
	var SelText = '';
	SelText = SelText + 'GameObject -x -100 -y -100'
	SelText = SelText + ' -p Line0 "Tanks for helping"'
	SelText = SelText + ' -p Line1 "I Caesar Mouse"'
	SelText = SelText + ' -u textBoxUpdate_MM'
	SelText = SelText + ' -pi setupMMTextBox'
	
	var GO = createGOFromString(SelText);
	this.properties.TextBox = GO;
	console.log(this.properties.TextBox);
	this.handler.addObject(GO);
}

function CaesarUpdate() {
	this.properties.TextBox.position.x = this.position.x - 50;
	this.properties.TextBox.position.y = this.position.y - 75;
}