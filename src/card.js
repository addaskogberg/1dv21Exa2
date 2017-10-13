/**
 * Module for creating a cards
 * @module src/card
 * @author Adda Skogberg
 * @version 1.0.0
 */

'use strict'

const Card = {
  setCard: function (suite, face) {
    this.suite = suite
    this.face = face
  },
  getFace: function () {
    return this.face
  },
  getSuite: function () {
    return this.suite
  },
  getCard: function () {
    return this.suite + this.face
  }
}

let createCard = function () {
  return Object.create(Card, {
    'suite': {
      value: undefined,
      writable: true,
      enumerable: true,
      configurable: true
    },
    'face': {
      value: undefined,
      writable: true,
      enumerable: true,
      configurable: true
    }
  })
}

/**

Card.prototype.faces = [ 'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K' ]
Card.prototype.suites = [ 'Hearts', 'Spades', 'Diamonds', 'Clubs' ]
*/

let mycard = createCard()
mycard.setCard('\u2665', '4')
console.log(mycard.getFace() + mycard.getSuite())

exports.creatCard = createCard
