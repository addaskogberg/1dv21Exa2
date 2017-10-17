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
  setFaces: function () {
    this.faces = [ 'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K' ]
  },
  setSuites: function () {
    this.suites = [ '\u2665', '\u2666', '\u2663', '\u2660' ]
  },
  getFace: function () {
    return this.face
  },
  getSuite: function () {
    return this.suite
  },
  getCard: function () {
    return [this.suite, this.face]
  },
  getFaces: function () {
    return this.faces
  },
  getSuites: function () {
    return this.suites
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

exports.createCard = createCard
