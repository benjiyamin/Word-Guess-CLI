const assert = require('assert')

const mocha = require('mocha')

const Game = require('../game.js')


const describe = mocha.describe
const it = mocha.it


describe('Game()', function () {

  describe('.guess(char)', function () {

    it('should throw an error if a char is too long', function () {
      assert.throws(function () {
        let game = new Game(['foo'], 1)
        game.guess('ab')
      }, Error)
    })

    it('should throw an error if a char is too short', function () {
      assert.throws(function () {
        let game = new Game(['foo'], 1)
        game.guess('')
      }, Error)
    })

    it('should throw an error if char is not defined', function () {
      assert.throws(function () {
        let game = new Game(['foo'], 1)
        game.guess()
      }, Error)
    })

    it('should add guessed characters to the .guesses array', function () {
      let game = new Game(['foo'], 2)
      game.guess('g')
      let actual = game.guesses
      let expected = ['g']
      assert.deepEqual(actual, expected)
    })

    it('should not accept guesses more than once', function () {
      let game = new Game(['foo'], 2)
      game.guess('g')
      let guessed1 = game.guesses
      game.guess('g')
      let guessed2 = game.guesses
      assert.equal(guessed1, guessed2)
    })

  })

  describe('.remainingGuesses()', function () {

    it('should decrease by one when an incorrect guess is made', function () {
      let game = new Game(['foo'], 3)
      let guesses1 = game.remainingGuesses()
      game.guess('x')
      let guesses2 = game.remainingGuesses()
      assert.equal(guesses1 - 1, guesses2)
    })

  })

  describe('.won()', function () {

    it('should be false if solution not found', function () {
      let game = new Game(['foo'], 3)
      game.guess('f')
      let actual = game.won()
      let expected = false
      assert.equal(actual, expected)
    })

    it('should be true if solution is found', function () {
      let game = new Game(['foo'], 3)
      game.guess('f')
      game.guess('o')
      let actual = game.won()
      let expected = true
      assert.equal(actual, expected)
    })

  })

  describe('.lost()', function () {

    it('should be true if solution not found and out of remaining guesses', function () {
      let game = new Game(['foo'], 1)
      game.guess('f') // Got one right
      game.guess('x') // Got one wrong
      let actual = game.lost()
      let expected = true
      assert.equal(actual, expected)
    })

    it('should be false if solution is found but guesses remaining', function () {
      let game = new Game(['foo'], 3)
      game.guess('f')
      game.guess('o')
      let actual = game.lost()
      let expected = false
      assert.equal(actual, expected)
    })

  })


})