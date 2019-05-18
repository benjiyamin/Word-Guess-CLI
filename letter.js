function Letter(char) {
  this.char = char
  this.guessed = false

  this.displayed = function () {
    if (this.guessed) {
      return this.char
    } else {
      return '_'
    }
  }

  this.guess = function (char) {
    if (char === this.char) {
      this.guessed = true
    } else if (char.length !== 1) {
      throw Error('char must have length of 1')
    } else if (!char.match(/[a-z]/i)) {
      throw Error('char is not in the alphabet')
    }
    return this.guessed
  }
}


module.exports = Letter