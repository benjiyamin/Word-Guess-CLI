
const Letter = require('./letter.js')


function Word() {
  this.letters = []
  this.guesses = []

  this.addChar = function(char) {
    let letter = new Letter(char)
    this.letters.push(letter)
  }

  this.addWord = function(word) {
    word.forEach(char => {
      this.addChar(char)
    })
  }

  this.displayed = function(separator = ' ') {
    let output = ''
    this.letters.forEach(letter => {
      output += ' ' + letter.displayed()
    })
    return output.trim()
  }

  this.guess = function(char) {
    if (!this.charPicked(char)) {
      this.letters.forEach(letter => {
        letter.guess(char)
      })
      this.guesses.push(char)
    }
  }

  this.charPicked = function(char) {
    return this.guesses.indexOf(char) !== -1
  }

}


exports = Word
