/**
 * @module app.js
 * @author Adda Skogberg
 * @version 1.0.0
 */

'use strict'

console.log('\u2665 \u2666 \u2663 \u2660 \u2665 \u2666 \u2663 \u2660 \u2665 \u2666 \u2663 \u2660 \u2665 \u2666 \u2663 \u2660')
console.log('     Welcome to Blackjack')
console.log('\u2665 \u2666 \u2663 \u2660 \u2665 \u2666 \u2663 \u2660 \u2665 \u2666 \u2663 \u2660 \u2665 \u2666 \u2663 \u2660')

const card = require('./src/card.js')
const Deck = require('./src/deck.js')
let mycard = card.creatCard()
mycard.setCard('\u2665', '10')
let myDeck = new Deck()
myDeck.addCards()
console.log(mycard.getCard())
