//var cardOne = "queen";
//var cardTwo =  "queen";
//var cardThree = "king";
//var cardFour = "king";

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



//Unit 11 Assignment
var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];


var createBoard = function(){
	for(i = 0; i < cards.length; i++){

	    //create new div
      var cardElement = document.createElement('div');
		
	     //give div the class of card
      cardElement.className = 'card';

      // this will set the card's 'data-card' to be the element of the array
  	  // data- attributes are meant to store data about an element that is not
 	    // tied to a style.
  	  // i.e. "king"
  	  cardElement.setAttribute('data-card', cards[i]);


  	  // when a card is clicked the function isTwoCards will be executed
   	  cardElement.addEventListener('click', isTwoCards);


   	  //attach card to the new board	
      newBoard.appendChild(cardElement);


	}
}

//function to clear board
var clearCards = function(){
    for (i=0; i<cards.length; i+=1){
        document.getElementsByClassName("card")[i].innerHTML = '';
  }
}

//checks to see if there are cards in play
function isTwoCards() {

  // add card to array of cards in play
  // 'this' hasn't been covered in this prework, but
  // for now, just know it gives you access to the card the user clicked on
  cardsInPlay.push(this.getAttribute('data-card'));

  // show the card's image
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='king.png' class='cardimg'>"; // king
	} else {
		this.innerHTML = "<img src='queen.png' class='cardimg'>"; //queen
	}

  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {

    // pass the cardsInPlay as an argument to isMatch function
    isMatch(cardsInPlay);

    // clear cards in play array for next try
    cardsInPlay = [];

  }

}


// if two cards match
function isMatch(cards){

	if(cards[0] === cards[1]){
		alert('You found a match!');
	}else{
		alert('Sorry try again!');
    clearCards();
	}

} 


//run the function
createBoard();








