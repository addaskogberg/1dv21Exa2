/**
 * Module for creating a deck of cards
 * @module src/deck
 * @author Adda Skogberg
 * @version 1.0.0
 */

'use strict'
// makes the card and the modules fisher-yates available
const card = require('./card.js')
const shuffle = require('fisher-yates')

/**
 * constructor prototype
 * @param  {array} dealerDeck=[]
 * @param  {array} trashDeck=[]
 */
function Deck (dealerDeck = [], trashDeck = []) {
  this.dealerDeck = dealerDeck
  this.trashDeck = trashDeck
}
/**
 * creates the deck by adding faces and suits, looping through eache option and
 *  creating a card for each posible combination of faces and suits. Pushing the cards into a deck.
 * Uses a for each loop even though its not the fastest opiotn, but with the small number of iterations
 * it will not effect performance noticably.
 */

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
/**
 * delivers a card to the dealer unless the dealers deck is almost empty.
 * if the dealers deck contains 1 card the cards from the trash deck is moved
 * to the dealers deck. When the cards have been moved to teh dealer deck it is shuffled.
 * @returns {object} card
 */
Deck.prototype.getCard = function () {
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

/**
 * shuffles the dealer deck
 */
Deck.prototype.shuffleDeck = function () {
  this.dealerDeck = shuffle(this.dealerDeck)
}
/**
 * takes the cards from the hand and places them i the trash deck
 * @param  {object} card
 */
Deck.prototype.addToTrash = function (card) {
  this.trashDeck.push(card)
}

// exports deck
module.exports = Deck
