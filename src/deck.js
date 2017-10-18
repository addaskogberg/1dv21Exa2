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
  if (this.dealerDeck.length === 1) {
    for (let i = 0; i < this.trashDeck.length; i++) {
      this.dealerDeck.push(this.trashDeck[i])
    }
    shuffle(this.dealerDeck)
    console.log('korten är slut hämtar nya')
    console.log()
  }
  return this.dealerDeck.pop()
}

Deck.prototype.shuffleDeck = function () {
  this.dealerDeck = shuffle(this.dealerDeck)
}

Deck.prototype.shuffleTrash = function () {
  this.trashDeck = shuffle(this.trashDeck)
}

Deck.prototype.addToTrash = function (card) {
  this.trashDeck.push(card)
}

module.exports = Deck
