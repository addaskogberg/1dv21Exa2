/**
 * Module for creating a dealer
 * @module src/dealer
 * @author Adda Skogberg
 * @version 1.0.0
 */

'use strict'

// collects the functions from player enabeling an instance of player in dealer.
const Player = require('./player')

class Dealer {
  /**
   * constructor for a dealer who is a player
   * @param  {deck} - dealers deck of cards.
   */
  constructor (deck) {
    this.deck = deck
    this.player = new Player()
  }
  /**
   * function providing a card from the deck in use.
   * @return {card} - returns a card from the deck
   */
  askForNewCard () {
    return this.deck.getCard()
  }
}

// exports dealer.
module.exports = Dealer
