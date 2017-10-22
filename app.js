/**
 * @module app.js
 * @author Adda Skogberg
 * @version 1.0.0
 */

'use strict'
// welcome frase
console.log('\u2665 \u2666 \u2663 \u2660 \u2665 \u2666 \u2663 \u2660 \u2665 \u2666 \u2663 \u2660 \u2665 \u2666 \u2663 \u2660')
console.log('     Welcome to Blackjack')
console.log('\u2665 \u2666 \u2663 \u2660 \u2665 \u2666 \u2663 \u2660 \u2665 \u2666 \u2663 \u2660 \u2665 \u2666 \u2663 \u2660')
console.log()

// makes deck, dealer and player available
const Deck = require('./src/deck.js')
const Dealer = require('./src/dealer.js')
const Player = require('./src/player.js')

// instanciates the deck adds the cards and shuffles the deck
let myDeck = new Deck()
myDeck.addCards()
myDeck.shuffleDeck()

// instanciates the player and dealer(a type of player)
let player = new Player()
let dealer = new Dealer(myDeck)

// The game logic and print to console
for (let i = 0; i < 20; i++) {
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
      console.log('Dealer: ' + dealer.player.getHandString() + '(' + dealer.player.getSum() + ')' + ' Busted')
    } else {
      console.log('Dealer: ' + dealer.player.getHandString() + '(' + dealer.player.getSum() + ')')
    }
  }

  if (player.getSum() > 21) {
    console.log('Dealer wins!')
  } else if (dealer.player.getSum() > 21) {
    console.log('Player wins!')
  } else if (player.hasFiveCards()) {
    console.log('Player wins with five cards!')
  } else if (player.getSum() > dealer.player.getSum()) {
    console.log('Player wins!')
  } else {
    console.log('Dealer wins!')
  }
  console.log()
  PrepareNewRound()
}

/**
 * prepares a new round by emptying the hands and moving the used cards
 * to the trash deck
 */

function PrepareNewRound () {
  let cards = player.emptyHand()
  for (let i = 0; i < cards.length; i++) {
    myDeck.addToTrash(cards[i])
  }
  cards = dealer.player.emptyHand()
  for (let i = 0; i < cards.length; i++) {
    myDeck.addToTrash(cards[i])
  }
}
