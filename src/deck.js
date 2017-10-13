/**
 * Module for creating a deck of cards
 * @module src/deck
 * @author Adda Skogberg
 * @version 1.0.0
 */

'use strict'
const card = require('./card.js')

function Deck () {
  this.dealerDeck = []
  this.trashDeck = []
}

Deck.prototype.addCards = function () {
  let aCard = card.creatCard()
  aCard.setFaces()
  aCard.setSuites()
  let faces = aCard.getFaces()
  let suites = aCard.getSuites()

  console.log(faces)
  console.log(suites)
}

let myDeck = new Deck()
myDeck.addCards()
module.exports = Deck
