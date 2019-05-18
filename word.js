const Letter = require('./letter.js')


function Word(text) {
  this.letters = []
  //if (text) {
  //  this.addWord(text)
  //}
  //this.guesses = []

  this.addChar = function (char) {
    let letter = new Letter(char)
    this.letters.push(letter)
  }

  this.addWord = function (text) {
    this.letters = []
    text.split('').forEach(char => {
      this.addChar(char)
    })
  }

  if (text) this.addWord(text)

  this.displayed = function (separator = ' ') {
    let output = ''
    for (let i = 0; i < this.letters.length; i++) {
      const letter = this.letters[i];
      output += letter.displayed()
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
    //if (!this.charPicked(char)) {
    //  this.letters.forEach(letter => {
    //    letter.guess(char)
    //  })
    //  //this.guesses.push(char)
    //}
  }

  //this.charPicked = function (char) {
  //  return this.guesses.indexOf(char) !== -1
  //}

}


module.exports = Word