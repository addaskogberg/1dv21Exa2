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

while (player.getSum() < 15) {
  player.addCard(dealer.askForNewCard())
}
if (player.isBusted()) {
  console.log('Player #1: ' + player.getHandString() + '(' + player.getSum() + ')' + 'Busted')
} else {
  console.log('Player #1: ' + player.getHandString() + '(' + player.getSum() + ')')
}

if (player.getSum() > 21) {
  console.log('Dealer: - ')
} else {
  while (dealer.player.getSum() < 15) {
    dealer.player.addCard(dealer.askForNewCard())
  }
  if (dealer.player.isBusted()) {
    console.log('Dealer: ' + dealer.player.getHandString() + '(' + dealer.player.getSum() + ')' + 'Busted')
  } else {
    console.log('Dealer: ' + dealer.player.getHandString() + '(' + dealer.player.getSum() + ')')
  }
}

if (player.getSum() > 21) {
  console.log('Dealer wins!')
} else if (dealer.player.getSum() > 21) {
  console.log('Player wins!')
} else if (player.getSum() > dealer.player.getSum()) {
  console.log('Player wins!')
} else {
  console.log('Dealer wins!')
}
