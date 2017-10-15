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
let myDeck = new Deck()
myDeck.addCards()
myDeck.shuffleDeck()

console.log(myDeck.getCard(0))
console.log(myDeck.getCard(1))
console.log(myDeck.getCard(23))
console.log(myDeck.getCard(51))

/**
let mycard = card.creatCard()
mycard.setCard('\u2665', '10')
console.log(mycard.getCard())
const card = require('./src/card.js')
*/
