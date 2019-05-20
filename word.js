const Letter = require('./letter.js')


function Word(text) {
  this.letters = []

  this.addLetter = function (char) {
    let letter = new Letter(char)
    this.letters.push(letter)
    return letter
  }

  this.setText = function (text) {
    this.letters = []
    text.split('').forEach(char => {
      this.addLetter(char)
    })
  }

  if (text) this.setText(text)

  this.toString = function (exposed = false, separator = ' ') {
    let output = ''
    for (let i = 0; i < this.letters.length; i++) {
      const letter = this.letters[i];
      if (exposed) {
        output += letter.char
      } else {
        output += letter.toString()
      }
      if (i < this.letters.length - 1) {
        output += separator
      }
    }
    return output.trim()
  }

  this.guess = function (char) {
    this.letters.forEach(letter => {
      letter.guess(char)
    })
  }

  this.chars = function() {
    let output = []
    this.letters.forEach(letter => {
      output.push(letter.char)
    })
    return output
  }

  this.uniqueChars = function() {
    return Array.from(new Set(this.chars()))
  }

}


module.exports = Word