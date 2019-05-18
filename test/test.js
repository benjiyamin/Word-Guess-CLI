const assert = require('assert')

const Letter = require('../letter.js')
const Word = require('../word.js')


describe('Letter()', function () {

  describe('.guess(char)', function () {

    it('should throw an error if a char is too long', function () {
      assert.throws(function () {
        let a = new Letter('a')
        a.guess('ab')
      }, Error)
    })

    it('should throw an error if a char is too short', function () {
      assert.throws(function () {
        let a = new Letter('a')
        a.guess('')
      }, Error)
    })

    it('should throw an error if char is not defined', function () {
      assert.throws(function () {
        let a = new Letter('a')
        a.guess()
      }, Error)
    })

  })

})

describe('Word()', function () {

  describe('.guess(char)', function () {

    it('should throw an error if a char is too long', function () {
      assert.throws(function () {
        let foo = new Word('foo')
        foo.guess('ab')
      }, Error)
    })

    it('should throw an error if a char is too short', function () {
      assert.throws(function () {
        let foo = new Word('foo')
        foo.guess('')
      }, Error)
    })

    it('should throw an error if char is not defined', function () {
      assert.throws(function () {
        let foo = new Word('foo')
        foo.guess()
      }, Error)
    })

  })

  describe('.displayed()', function () {

    it('should display all blanks if no guesses made', function () {
      let foo = new Word('foo')
      let actual = foo.displayed()
      let expected = '_ _ _'
      assert.equal(actual, expected)
    })

    it('should display all blanks if no guesses made', function () {
      let foo = new Word('foo')
      let actual = foo.displayed()
      let expected = '_ _ _'
      assert.equal(actual, expected)
    })

    it('should reveal letters if correct guess made', function () {
      let foo = new Word('foo')
      foo.guess('f')
      let actual = foo.displayed()
      let expected = 'f _ _'
      assert.equal(actual, expected)
    })

    /*
    it('should add guessed characters to the .guesses array', function () {
      let foo = new Word('foo')
      foo.guess('g')
      let actual = foo.guesses
      let expected = ['g']
      assert.deepEqual(actual, expected)
    })

    it('should not accept guesses more than once', function () {
      let foo = new Word('foo')
      foo.guess('g')
      let guessed1 = foo.guesses
      foo.guess('g')
      let guessed2 = foo.guesses
      assert.equal(guessed1, guessed2)
    })
    */

  })


})