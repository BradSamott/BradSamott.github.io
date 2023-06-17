'use strict'

var PartyBaseCharacters = {
	Knight: {
		Atk: 4,
		Def: 4,
		MagAtk: 2,
		MagDef: 3,
		Spd: 4,
		MaxHP: 50,
		
		Moves: [
			{
				Name: 'Attack',
				BasePower: 4,
				Attr: 'Atk',
				MaxUses: 999
			}
		]
		
	},
	Mage: {
		Atk: 1,
		Def: 2,
		MagAtk: 4,
		MagDef: 4,
		Spd: 4,
		MaxHP: 50,
		
		Moves: [
			{
				Name: 'Attack',
				BasePower: 4,
				Attr: 'Atk',
				MaxUses: 999
			}
		]
	}
}

var PartyCharacters = {
	Knight: {
		Atk: 4,
		Def: 4,
		MagAtk: 2,
		MagDef: 3,
		Spd: 4,
		MaxHP: 50,
		Level: 1,
		
		Moves: [
			{
				Name: 'Attack',
				BasePower: 4,
				Attr: 'Atk',
				MaxUses: 999
			}
		]
		
	}
}

var CurrParty = ['Knight'];

var PlayerGrowths = {
	Knight: {
		GrowthList: [
			{
				Atk: 0,
				Def: 0,
				MagAtk: 0,
				MagDef: 0,
				Spd: 0,
				MaxHP: 0
			},
			{
				Atk: 1,
				Def: 1,
				MagAtk: 1,
				MagDef: 1,
				Spd: 1,
				MaxHP: 5
			}
		]
	}
}

function ApplyPlayerGrowth(PlayerJSON,GrowthType) {
	for(var i = 0; i < PlayerJSON.Level; i++) {
		PlayerJSON.Atk = PlayerJSON.Atk + PlayerGrowths[GrowthType].GrowthList[i].Atk;
		PlayerJSON.Def = PlayerJSON.Def + PlayerGrowths[GrowthType].GrowthList[i].Def;
		PlayerJSON.MagAtk = PlayerJSON.MagAtk + PlayerGrowths[GrowthType].GrowthList[i].MagAtk;
		PlayerJSON.MagDef = PlayerJSON.MagDef + PlayerGrowths[GrowthType].GrowthList[i].MagDef;
		PlayerJSON.Spd = PlayerJSON.Spd + PlayerGrowths[GrowthType].GrowthList[i].Spd;
		PlayerJSON.MaxHP = PlayerJSON.MaxHP + PlayerGrowths[GrowthType].GrowthList[i].MaxHP;
	}
}

var EnemyBaseCharacters = {
	A: {
		Atk: 1,
		Def: 2,
		MagAtk: 3,
		MagDef: 3,
		Spd: 3,
		MaxHP: 50,
		
		Moves: [
			{
				Name: 'Attack',
				BasePower: 4,
				Attr: 'Atk',
				MaxUses: 999
			},
			{
				Name: 'Light Bolt',
				BasePower: 4,
				Attr: 'MagAtk',
				MaxUses: 25
			}
		]
	}
}

var EnemyGrowths = {
	A: {
		GrowthList: [
			{
				Atk: 0,
				Def: 0,
				MagAtk: 0,
				MagDef: 0,
				Spd: 0,
				MaxHP: 0
			},
			{
				Atk: 1,
				Def: 1,
				MagAtk: 1,
				MagDef: 1,
				Spd: 1,
				MaxHP: 5
			}
		]
	}
}

function ApplyEnemyGrowth(EnemyJSON,GrowthType) {
	for(var i = 0; i < EnemyJSON.Level; i++) {
		EnemyJSON.Atk = EnemyJSON.Atk + EnemyGrowths[GrowthType].GrowthList[i].Atk;
		EnemyJSON.Def = EnemyJSON.Def + EnemyGrowths[GrowthType].GrowthList[i].Def;
		EnemyJSON.MagAtk = EnemyJSON.MagAtk + EnemyGrowths[GrowthType].GrowthList[i].MagAtk;
		EnemyJSON.MagDef = EnemyJSON.MagDef + EnemyGrowths[GrowthType].GrowthList[i].MagDef;
		EnemyJSON.Spd = EnemyJSON.Spd + EnemyGrowths[GrowthType].GrowthList[i].Spd;
		EnemyJSON.MaxHP = EnemyJSON.MaxHP + EnemyGrowths[GrowthType].GrowthList[i].MaxHP;
	}
}