const assert = require('assert')

const mocha = require('mocha')

const Word = require('../word.js')


const describe = mocha.describe
const it = mocha.it


describe('Word(text)', function () {

  describe('.letters', function() {

    it('should be empty array if no text defined', function() {
      let word = new Word()
      let actual = word.letters
      let expected = []
      assert.deepEqual(actual, expected)
    })

  })

  describe('.displayed()', function () {

    it('should display all blanks if no guesses made', function () {
      //let foo = new Word('foo')
      let actual = new Word('foo')
      let expected = '_ _ _'
      assert.equal(actual, expected)
    })

    it('should reveal letters if correct guess made', function () {
      let foo = new Word('foo')
      foo.guess('f')
      let actual = foo
      let expected = 'f _ _'
      assert.equal(actual, expected)
    })

  })

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

})