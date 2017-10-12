/**
 * Module for creating a cards
 * @module src/card
 * @author Adda Skogberg
 * @version 1.0.0
 */

'use strict'

const Card = {
  creatMyCard: function () {
    let suite = 'hearts'
    let face = '2'
    return suite + face
  }
}

let createCard = function (suite = 'hearts', face = '4') {
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
console.log(mycard.creatMyCard())
//console.log(mycard)

exports.creatCard = createCard
