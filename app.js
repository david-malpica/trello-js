require('dotenv').config()

if(!process.env.TOKEN && !process.env.KEY){
  throw new Error('No hay configuración con Api Key y con Token')
}

let Trello = require("trello");
let trello = new Trello(process.env.KEY, process.env.TOKEN);

let cardTitle = `Card Nueva ${new Date()}`

trello.addCard(cardTitle, "LaunchX Card Description", "62a38fea2866035c938557f9",
	function (error, trelloCard) {
		if (error) {
			console.log('Could not add card:', error);
		}
		else {
			console.log('Added card:', trelloCard);
		}
	});

trello.addListToBoard("62a38defa40d26675550b90c","API list test",
	function (error, trelloCard) {
		if (error) {
			console.log('Could not add list:', error);
		}
		else {
			console.log('Added list', trelloCard);
		}
	});