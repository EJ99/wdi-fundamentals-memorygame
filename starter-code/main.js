var cardOne = "queen";
var cardTwo =  "queen";
var cardThree = "king";
var cardFour = "king";

//console.log(cardOne == cardTwo); //check comparison is true
//console.log(cardOne == cardThree); //check comparison is false

/*
if(cardOne === cardTwo || cardThree === cardFour){
	alert("You found a match!");
}else {
	alert("Sorry, try again.")
}
*/

//give the board an id of game-board
var getBoard = document.querySelector('.board');

var board = getBoard.setAttribute('id', 'game-board');

//create new Board

var newBoard = document.getElementById('game-board');

var createBoard = function(){
	for(i = 0; i < 4; i++){

	  //create new div
      var cardElement = document.createElement('div');
		
	  //give div the class of card
      cardElement.className = 'card';
		
	  //attach card to the new board	
      newBoard.appendChild(cardElement);
	}
}

//run the function
createBoard();
