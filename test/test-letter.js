const assert = require('assert')

const Letter = require('../letter.js')


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