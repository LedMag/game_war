'use strick'

function compareRandom() {
  return Math.random() - 0.5;
};



let valuesArr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let suitsArr = [0, 1, 2, 3];

const suits = ['♠', '♥', '♦', '♣'];
const values = [null, null, '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9' ,
'10' , 'Jack' , 'Queen' , 'King' , 'Ace']


class Card {
  constructor(suit, value){
    this.suit = suit;
    this.value = value;
  }

  getCard(){
    console.log(`${this.value}${this.suit}`);
  }
};

class Deck {
  constructor(){
    this.deck = [];
    this.initDeck = this.initDeck();
  }

  initDeck(){
    for(this.v of valuesArr){
      for(this.s of suitsArr){
        const card = new Card(suits[this.s], values[this.v]);
        this.deck.push(card);
      }
    }
  }

  getDeck(){
    console.log(this.deck)
  }

  removeCards(){
    this.deck.sort(compareRandom);
  }
}


let deck = new Deck();

deck.removeCards();
deck.getDeck();
