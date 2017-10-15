/**
 * Module for creating a dealer
 * @module src/dealer
 * @author Adda Skogberg
 * @version 1.0.0
 */

'use strict'

const Deck = require('./deck')

class Dealer {
  constructor () {
    this.hand = []
  }
  askForNewHand () {
    return theDeck.getCard()
  }
}

let dealer = new Dealer()
console.log(dealer)

let theDeck = new Deck()
theDeck.addCards()
theDeck.shuffleDeck()

module.exports = Dealer
