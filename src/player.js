/**
 * Module for creating a player
 * @module src/player
 * @author Adda Skogberg
 * @version 1.0.0
 */

'use strict'

class Player {
  constructor () {
    this.hand = []
    this.handValue = 0
    this.aces = 0
  }
  getHand () {
    return this.hand
  }
  getSum () {
    let sum = 0
    for (let i = 0; i < this.hand.length; i++) {
      sum += this.hand[i][1]
    }
    return sum
  }
  addCard (card) {
    this.hand.push(card)
    this.translateFaces(card)
  }
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
    }
  }
}

    // Exports
module.exports = Player
