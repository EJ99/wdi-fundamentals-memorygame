var cardOne = "queen";
var cardTwo =  "queen";
var cardThree = "king";
var cardFour = "king";

//console.log(cardOne == cardTwo); //check comparison is true
//console.log(cardOne == cardThree); //check comparison is false

if(cardOne === cardTwo || cardThree === cardFour){
	alert("You found a match!");
}else {
	alert("Sorry, try again.")
}
