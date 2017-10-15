/**
 * Module for creating a player
 * @module src/player
 * @author Adda Skogberg
 * @version 1.0.0
 */

'use strict'

/**
 * player gets new card until sum is 15

let playerCard (){
    if (playerCard =15){
        player get new card
    }else
    player done, dealers turn
}
*/
const dealer = require('./dealer')
class Player {
  constructor () {
    this.hand = []
  }
  getHand () {
    return this.hand
  }
  getSum () {
    let sum = 0
    for (let i = 0; i < this.hand.length; i++) {
      sum += this.hand[i][1]
    }
    return sum
  }
  drawCard () {
    while (this.getSum() < 15) {
      this.hand = dealer.askForNewCard()
    }
  }
}

//let player = new Player()
//console.log(player)
    // Exports
module.exports = Player
