/**
 * Module for creating a deck of cards
 * @module src/deck
 * @author Adda Skogberg
 * @version 1.0.0
 */

'use strict'
const card = require('./card.js')

function Deck (dealerDeck = [], trashDeck = []) {
  this.dealerDeck = []
  this.trashDeck = []
}

Deck.prototype.addCards = function () {
  let aCard = card.creatCard()
  aCard.setFaces()
  aCard.setSuites()
  let faces = aCard.getFaces()
  let suites = aCard.getSuites()

  faces.forEach(function (faceItem) {
    suites.forEach(function (suiteItem) {
      aCard.setCard(suiteItem, faceItem)
      this.dealerDeck.push(aCard.getCard())
    }, this)
  }, this)
}

Deck.prototype.getCard = function () {
  return this.dealerDeck[4]
}

let myDeck = new Deck([], [])
myDeck.addCards()

console.log(myDeck.dealerDeck[5])

module.exports = Deck
