/**
 * Module for creating a player
 * @module src/player
 * @author Adda Skogberg
 * @version 1.0.0
 */

'use strict'
/**
 * constuctor for class player
 */

class Player {
  constructor () {
    this.hand = []
    this.handValue = 0
    this.aces = 0
  }

  /**
   * this method looks at the players hand and
   * @return {String}  the cards on the players hand
   */
  getHandString () {
    let handString = ''
    for (let i = 0; i < this.hand.length; i++) {
      handString += this.hand[i][0] + this.hand[i][1] + ' '
    }
    return handString
  }
  /**
   * this method looks at the hand and decides if an ace should count as 1 or 14
   * @return {int} the adjusted sum of the hand
   */
  getSum () {
    if (this.handValue > 21 && this.aces > 0) {
      this.handValue -= 13
      this.aces -= 1
    }
    return this.handValue
  }
  /**
   * the method gives the player a card
   * @param  {object} a card
   */
  addCard (card) {
    this.hand.push(card)
    this.translateFaces(card)
  }
  /**
   * translates the value of a card to an int
   * @param  {object} card
   */
  translateFaces (card) {
    if (card[1] === 'A') {
      this.handValue += 14
      this.aces += 1
    } else if (card[1] === 'J') {
      this.handValue += 11
    } else if (card[1] === 'Q') {
      this.handValue += 12
    } else if (card[1] === 'K') {
      this.handValue += 13
    } else {
      this.handValue += parseInt(card[1])
    }
  }
/**
 * evaluates if a player has exceded the total sum of 21 and thus is bust.
 */

  isBusted () {
    if (this.getSum() > 21) {
      return true
    } else {
      return false
    }
  }

  /**
   *looks at if the player has 5 cards or more.
   */
  hasFiveCards () {
    if (this.hand.length >= 5) {
      return true
    } else {
      return false
    }
  }
  /**
   * this method empties the hand and returns the cards on hand to be used in the trashdeck
   */
  emptyHand () {
    let cards = []
    for (let i = 0; i < this.hand.length; i++) {
      cards.push(this.hand[i])
    }
    this.hand = []
    this.handValue = 0
    this.aces = 0
    return cards
  }
  }

    // Exports player
module.exports = Player
