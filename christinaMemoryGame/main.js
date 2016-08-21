var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var board = document.getElementById('game-board');
var createBoard = function(){
  for (var i=0; i<cards.length; i++) {
      var cardElement = document.createElement('div');
      cardElement.className = 'card';
      cardElement.setAttribute('data-card', cards[i]);
      cardElement.addEventListener('click', isTwoCards);

      board.appendChild(cardElement);
    }
}
var isTwoCards = function(){
  cardsInPlay.push(this.getAttribute('data-card'));
  
  console.log(this.getAttribute('data-card'));
    if (this.getAttribute('data-card') === 'king') {
      this.innerHTML = "<img src='king.png' alt='King of Hearts'>"; 
    } else {
      this.innerHTML = "<img src='queen.png' alt='Queen of Hearts'>";
    }
    if (cardsInPlay.length === 2) {
        isMatch(cardsInPlay);
        cardsInPlay = [];
      }
}
var isMatch = function(){
  setTimeout(function(){

    if (cardsInPlay[0] === cardsInPlay[1]){
      alert("You found a match!");
    } else {
      alert("Sorry, try again.");
    }

    for (i = 0; i<cards.length; i++){
    document.getElementsByClassName('card')[i].innerHTML = " ";
    }
  }, 500);
}

createBoard();