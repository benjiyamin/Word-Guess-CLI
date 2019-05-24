const assert = require('assert')

const mocha = require('mocha')

const Word = require('../word.js')


const describe = mocha.describe
const it = mocha.it


describe('Word(text)', function () {

  it('should throw an error if text is not a string', function () {
    assert.throws(function () {
      new Word(1)
    }, Error)
  })

  it('should throw an error if text is not in the alphabet', function () {
    assert.throws(function () {
      new Word("1")
    }, Error)
  })

  describe('.letters', function () {

    it('should be empty array if no text defined', function () {
      let word = new Word()
      let actual = word.letters
      let expected = []
      assert.deepEqual(actual, expected)
    })

  })

  describe('.toString()', function () {

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

    it('should throw an error if char is not a string', function () {
      assert.throws(function () {
        let foo = new Word('foo')
        foo.guess(1)
      }, Error)
    })

    it('should throw an error if char is not in the alphabet', function () {
      assert.throws(function () {
        let foo = new Word('foo')
        foo.guess('1')
      }, Error)
    })

  })

  describe('.chars()', function () {

    it('should return array of chars from text', function () {
      let text = 'foo'
      let word = new Word(text)
      let actual = word.chars()
      let expected = text.split('')
      assert.deepEqual(actual, expected)
    })

  })

  describe('.uniqueChars()', function () {

    it('should consolidate indentical letters in an array', function () {
      let word = new Word('foo')
      let actual = word.uniqueChars()
      let expected = ['f', 'o']
      assert.deepEqual(actual, expected)
    })

  })

})