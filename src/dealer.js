/**
 * Module for creating a dealer
 * @module src/dealer
 * @author Adda Skogberg
 * @version 1.0.0
 */

'use strict'

const Player = require('./player')

class Dealer {
  constructor (deck) {
    this.deck = deck
    this.player = new Player()
  }
  askForNewCard () {
    return this.deck.getCard()
  }
}

module.exports = Dealer
