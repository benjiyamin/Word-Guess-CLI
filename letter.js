function Letter(char) {
  this.guessed = false

  this.validateChar = function (char) {
    if (!char) throw Error('char is undefined')
    if (char.length !== 1) throw Error('char must have length of 1')
    if (!char.match(/[a-z]/i)) throw Error('char is not in the alphabet')
    return char
  }

  this.char = this.validateChar(char)

  this.toString = function () {
    if (this.guessed) {
      return this.char
    } else {
      return '_'
    }
  }

  this.guess = function (char) {
    char = this.validateChar(char)
    if (char === this.char) {
      this.guessed = true
    }
    return this.guessed
  }
}


module.exports = Letter