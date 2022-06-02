'use strict';

function compareRandom() {
  return Math.random() - 0.5;
};

class Card {

  constructor(s, v){
    this.suit = s;
    this.value = v;
  };

  removeCard(){
    return `${this.value}${this.suit}`;
  };

  static compareCards(card1, card2){
    if(card1.value > card2.value){
      return true;
    }else if(card1.value === card2.value){
      if(card1.suit.charCodeAt() > card2.suit.charCodeAt()){
        return true;
      }else{
        return false;
      }
    }else{
      return false;
    }
  };

};

class Deck {

  constructor(){
    this.suits = ['♠', '♥', '♦', '♣'];
    this.values = ['2', '3', '4', '5', '6', '7', '8', '9','10', 'Jack', 'Queen', 'King', 'Ace'];
    this.cards = [];
  };

  initDeck(){
    for(this.value of this.values){
      for(this.suit of this.suits){
        const card = new Card(this.suit, this.value);
        this.cards.push(card);
      }
    }
  };

  getDeck(){
    return this.cards
  };

  shuffle(){
    this.cards.sort(compareRandom);
  };

  removeCard(){
    return this.cards.pop();
  };
};

class Player{

  constructor(name){
    this.wins = 0;
    this.card = {};
    this.name = name;
  };

};

class Game{

  constructor(name1, name2){
    this.player1 = new Player(name1);
    this.player2 = new Player(name2);
    this.deck = new Deck();
  };

  startGame(){
    this.deck.initDeck();
    this.deck.shuffle();
  };

  step(){
    if(this.deck.cards.length){
      this.player1.card = this.deck.removeCard();
    }else{
      console.log('ya esta...')
    }
  }

};
