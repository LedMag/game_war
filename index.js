'use strick'

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


const suits = ['♠', '♥', '♦', '♣'];
const values = [null, null, '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9' ,
'10' , 'Jack' , 'Queen' , 'King' , 'Ace']

let suit = suits[getRandomInt(0, 4)];
let value = values[getRandomInt(2, 14)];

class Card {
  constructor(suit, value){
    this.suit = suit;
    this.value = value;
  }

  getCard(){
    console.log(`${this.value}${this.suit}`)
  }
};

let card = new Card(suit, value);

card.getCard();
