'use strict'

var ItemOptions = [
	{
		Name: 'Alphabet Soup',
		ItemAction: function() {
			console.log('Eating Soup');
			CheckStaleBuffs(QuestleGlobals.CurrAttacker);
			
			QuestleGlobals.MenuObject.properties.DialogQ.push('Player Restores 10 HP');
			QuestleGlobals.MenuObject.properties.EventQ.push({battleEvent: RestoreHealth, target: QuestleGlobals.CurrAttacker, amount: 10});
			QuestleGlobals.turnDone = true;
			
			removePartyItem(this.localPointers.itemIndex);
			
			MenuTransition();
			
			QuestleGlobals.MenuObject.properties.currLayer = 0;
			QuestleGlobals.MenuObject.properties.currSel = 0;
			ListItemOptions();
		}
	},
	{}
]

var partyItems = [0,0]

function removePartyItem(itemIndex) {
	console.log(itemIndex);
	console.log(partyItems);
	partyItems.splice(itemIndex,1);
	console.log(partyItems);
}