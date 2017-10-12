/**
 * @module app.js
 * @author Adda Skogberg
 * @version 1.0.0
 */

'use strict'

const card = require('./src/card.js')

console.log('\u2665 \u2666 \u2663 \u2660 \u2665 \u2666 \u2663 \u2660 \u2665 \u2666 \u2663 \u2660 \u2665 \u2666 \u2663 \u2660')
console.log('     Welcome to Blackjack')
console.log('\u2665 \u2666 \u2663 \u2660 \u2665 \u2666 \u2663 \u2660 \u2665 \u2666 \u2663 \u2660 \u2665 \u2666 \u2663 \u2660')

// let lego = legoMaker5.createLegoBrick()
let mycard = card.creatCard('hearts', '4')

console.log(mycard.creatMyCard())

//console.log(myDeck.this.cards.face[0], deck.this.card.suite[0])
