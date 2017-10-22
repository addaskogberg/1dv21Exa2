/**
 * Module for creating a cards
 * @module src/card
 * @author Adda Skogberg
 * @version 1.0.0
 */

'use strict'

const Card = {
  /**
   * A function building the card.
   * @param  {String} suite
   * @param  {String} face
   */
  setCard: function (suite, face) {
    this.suite = suite
    this.face = face
  },
  /**
   * A function for the values of the cards.
   */
  setFaces: function () {
    this.faces = [ 'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K' ]
  },
  /**
   * A function for the type of suites.
   */
  setSuites: function () {
    this.suites = [ '\u2665', '\u2666', '\u2663', '\u2660' ]
  },
  /**
   * Creates the card with a vaulue and a suite
   * @returns {(string|array)} -suits an array with two strings suite and face
   */
  getCard: function () {
    return [this.suite, this.face]
  },
  /**
   * getter for instance faces as part of creation of the deck
   * @returns {array} all faces
   */
  getFaces: function () {
    return this.faces
  },
  /**
   * getter for instance of faces as part of the creation of the deck
   * @returns {array} all suites
   */
  getSuites: function () {
    return this.suites
  }
}
/**
 * @return {object} object card cointaining suit and face
 * @param  {true} writable
 * @param  {true} enumerable
 * @param  {true}} configurable
 * @param  {true} writable
 * @param  {true} enumerable
 * @param  {true}} configurable
 * @returns true
 */
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

// exports
exports.createCard = createCard
