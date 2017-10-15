/**
 * @module app.js
 * @author Adda Skogberg
 * @version 1.0.0
 */

'use strict'

console.log('\u2665 \u2666 \u2663 \u2660 \u2665 \u2666 \u2663 \u2660 \u2665 \u2666 \u2663 \u2660 \u2665 \u2666 \u2663 \u2660')
console.log('     Welcome to Blackjack')
console.log('\u2665 \u2666 \u2663 \u2660 \u2665 \u2666 \u2663 \u2660 \u2665 \u2666 \u2663 \u2660 \u2665 \u2666 \u2663 \u2660')
console.log()

const Deck = require('./src/deck.js')
const Dealer = require('./src/dealer.js')
const Player = require('./src/player.js')

let myDeck = new Deck()
myDeck.addCards()
myDeck.shuffleDeck()

let player = new Player()
let dealer = new Dealer(myDeck)

//console.log(dealer.askForNewCard())

while (player.getSum() < 15) {
  console.log(player.getSum())
  player.addCard(dealer.askForNewCard())
}
console.log(player.getSum())

/**
console.log(myDeck.getCard())
console.log(myDeck.getCard())
console.log(myDeck.getCard())
console.log(myDeck.getCard())
 */

/**
let mycard = card.creatCard()
mycard.setCard('\u2665', '10')
console.log(mycard.getCard())
const card = require('./src/card.js')
*/
