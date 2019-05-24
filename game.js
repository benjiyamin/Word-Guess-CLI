const Word = require('./word.js')


function Game(textChoices, maxGuesses) {
  let text = textChoices[Math.floor(Math.random() * textChoices.length)]
  this.word = new Word(text)
  this.maxGuesses = maxGuesses
  this.guesses = []
  this.wins = 0
  this.losses = 0

  this.validGuesses = function () {
    let output = []
    this.word.uniqueChars().forEach(char => {
      if (this.charPicked(char)) {
        output.push(char)
      }
    })
    return output
  }

  this.newGame = function (maxGuesses) {
    let text = textChoices[Math.floor(Math.random() * textChoices.length)]
    this.word.setText(text)
    if (maxGuesses) {
      this.maxGuesses = maxGuesses
    }
    this.guesses = []
  }

  this.remainingGuesses = function () {
    return this.maxGuesses - this.guesses.length + this.validGuesses().length
  }

  this.won = function () {
    let exposed = true
    return this.word.toString() === this.word.toString(exposed)
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

  this.charPicked = function (char) {
    return this.guesses.indexOf(char) !== -1
  }

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
}


module.exports = Game