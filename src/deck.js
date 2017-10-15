/**
 * Module for creating a deck of cards
 * @module src/deck
 * @author Adda Skogberg
 * @version 1.0.0
 */

'use strict'
const card = require('./card.js')
const shuffle = require('fisher-yates')

function Deck (dealerDeck = [], trashDeck = []) {
  this.dealerDeck = dealerDeck
  this.trashDeck = trashDeck
}

Deck.prototype.addCards = function () {
  let aCard = card.createCard()
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

Deck.prototype.getCard = function (index) {
  //return this.dealerDeck[index]
  return this.dealerDeck.pop()
}

Deck.prototype.shuffleDeck = function () {
  this.dealerDeck = shuffle(this.dealerDeck)
}

Deck.prototype.shuffleTrash = function () {
  this.trashDeck = shuffle(this.trashDeck)
}
/**
let myDeck = new Deck([], [])
myDeck.addCards()

console.log(myDeck.dealerDeck[5])
 */

console.log(shuffle([1, 2, 3, 4, 5]))

module.exports = Deck
