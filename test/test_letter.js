const assert = require('assert')

const mocha = require('mocha')

const Letter = require('../letter.js')


const describe = mocha.describe
const it = mocha.it


describe('Letter(char)', function () {

  it('should throw an error if a char is too long', function () {
    assert.throws(function () {
      new Letter('ab')
    }, Error)
  })

  it('should throw an error if a char is too short', function () {
    assert.throws(function () {
      new Letter('')
    }, Error)
  })

  it('should throw an error if char is not defined', function () {
    assert.throws(function () {
      new Letter()
    }, Error)
  })

  it('should throw an error if char is not a string', function () {
    assert.throws(function () {
      new Letter(1)
    }, Error)
  })

  it('should throw an error if char is not in the alphabet', function () {
    assert.throws(function () {
      new Letter('1')
    }, Error)
  })

  describe('.validateChar(char)', function () {

    it('should throw an error if a char is too long', function () {
      assert.throws(function () {
        let a = new Letter('a')
        a.validateChar('ab')
      }, Error)
    })

    it('should throw an error if a char is too short', function () {
      assert.throws(function () {
        let a = new Letter('a')
        a.validateChar('')
      }, Error)
    })

    it('should throw an error if char is not defined', function () {
      assert.throws(function () {
        let a = new Letter('a')
        a.validateChar()
      }, Error)
    })

    it('should throw an error if char is not a string', function () {
      assert.throws(function () {
        let a = new Letter('a')
        a.validateChar(1)
      }, Error)
    })

    it('should throw an error if char is not in the alphabet', function () {
      assert.throws(function () {
        let a = new Letter('a')
        a.validateChar('1')
      }, Error)
    })

  })

  describe('.toString()', function () {

    it('should show an underscore if a letter has not been guessed', function () {
      let actual = new Letter('a')
      let expected = '_'
      assert.equal(actual, expected)
    })

    it('should show a letter if a letter has been guessed', function () {
      let a = new Letter('a')
      a.guess('a')
      let actual = a
      let expected = 'a'
      assert.equal(actual, expected)
    })

  })

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

    it('should throw an error if char is not a string', function () {
      assert.throws(function () {
        let a = new Letter('a')
        a.guess(1)
      }, Error)
    })

    it('should throw an error if char is not in the alphabet', function () {
      assert.throws(function () {
        let a = new Letter('a')
        a.guess('1')
      }, Error)
    })

  })

})