const Word = require('./word.js')


function Game(textChoices, maxGuesses) {
  let text = textChoices[Math.floor(Math.random() * textChoices.length)]
  this.word = new Word(text)
  this.maxGuesses = maxGuesses
  this.guesses = []
  this.wins = 0
  this.losses = 0

  this.guess = function (char) {
    let gameOverBeforeGuess = this.gameOver()
    if (!this.charPicked(char) && !this.gameOver()) {
      this.word.guess(char)
      this.guesses.push(char)
    }
    if (this.won() && !gameOverBeforeGuess) {
      this.wins += 1
    } else if (this.lost() && !gameOverBeforeGuess) {
      this.losses += 1
    }
  }

  this.charIsValid = function (char) {
    let chars = []
    this.word.letters.forEach(letter => {
      chars.push(letter.char)
    })
    return chars.indexOf(char) !== -1
  }

  this.charPicked = function (char) {
    return this.guesses.indexOf(char) !== -1
  }

  /*
  this.validGuesses = function () {
    let output = []
    this.guesses.forEach(char => {
      if (this.charPicked(char)) {
        output.push(char)
      }
    })
    return output
  }
  */

  this.remainingGuesses = function () {
    //console.log(this.maxGuesses, this.guesses.length, this.validGuesses().length)
    //return this.maxGuesses - this.guesses.length + this.validGuesses().length
    return this.maxGuesses - this.guesses.length
  }

  this.newGame = function (maxGuesses) {
    let text = textChoices[Math.floor(Math.random() * textChoices.length)]
    this.letters = text.split('')
    if (maxGuesses) {
      this.maxGuesses = maxGuesses
    }
    this.guesses = []
  }

  this.won = function () {
    return this.word.displayed() === this.word.displayed(true)
  }

  this.lost = function () {
    return this.remainingGuesses() <= 0 && !this.won()
  }

  this.round = function () {
    return this.wins + this.losses + 1
  }

  this.gameOver = function () {
    return this.won() || this.lost()
  }
}


module.exports = Game