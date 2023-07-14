'use strict'

var QuestleGlobals = {}

var LevelSetups = {
	Levels: [
	{
		answer: 'KEY',
		traps: [
			{Letter: 'A', Level: 1}
		],
		complete: false
	},
	{
		answer: 'AND',
		traps: [
			{Letter: 'B', Level: 1},
			{Letter: 'A', Level: 2},
			{Letter: 'C', Level: 1}
		],
		complete: false
	},
	{
		answer: 'BAD',
		traps: [
			{Letter: 'B', Level: 2},
			{Letter: 'A', Level: 2},
			{Letter: 'D', Level: 2}
		],
		complete: false
	}
	]
}