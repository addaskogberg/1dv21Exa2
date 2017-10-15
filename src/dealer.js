/**
 * Module for creating a dealer
 * @module src/dealer
 * @author Adda Skogberg
 * @version 1.0.0
 */

'use strict'

//const Deck = require('./deck')

class Dealer {
  constructor (deck) {
    this.hand = []
    this.deck = deck
  }
  askForNewCard () {
    return this.deck.getCard()
  }
}

let dealer = new Dealer()
//console.log(dealer)

module.exports = Dealer
