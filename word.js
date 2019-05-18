const Letter = require('./letter.js')


function Word(text) {
  this.letters = []

  this.addLetter = function (char) {
    let letter = new Letter(char)
    this.letters.push(letter)
    return letter
  }

  this.addWord = function (text) {
    this.letters = []
    text.split('').forEach(char => {
      this.addLetter(char)
    })
  }

  if (text) this.addWord(text)

  this.displayed = function (exposed = false, separator = ' ') {
    let output = ''
    for (let i = 0; i < this.letters.length; i++) {
      const letter = this.letters[i];
      if (exposed) {
        output += letter.char
      } else {
        output += letter.displayed()
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

}


module.exports = Word