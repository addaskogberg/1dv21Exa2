/**
 * Module for creating a deck of cards
 * @module src/deck
 * @author Adda Skogberg
 * @version 1.0.0
 */

'use strict'

const card = require('./card')

function deck () {
  this.cards = [card]

  card.prototype.faces.array.forEach(function (face) {
    card.prototype.suites.array.forEach(function (suite) {
      this.cards.push(card(face, suite))
    }, this)
  }, this)
}

module.exports = deck
