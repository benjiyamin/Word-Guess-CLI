const inquirer = require('inquirer')
const Table = require('cli-table3')

const choices = require('./choices')
const Game = require('./game')


let textChoices = choices
let maxGuesses = 8
let game = new Game(textChoices, maxGuesses)


function isLetter(x) {
  return x.length === 1 && x.match(/[a-z]/i);
}


function printDisplay() {
  var table = new Table({
    style: {
      head: [],
      border: []
    }
  })
  let lettersGuessed = game.guesses
    .join(' ')
    .toUpperCase()
  let currentWord = game.word
    .toString()
    .toUpperCase()
  table.push(
    [{
      colSpan: 2,
      hAlign: 'center',
      content: `Current Word\n${currentWord}`
    }],
    [{
        hAlign: 'center',
        content: `Remaining Guesses\n${game.remainingGuesses()}`

      },
      {
        hAlign: 'center',
        content: `Letters Guessed\n${lettersGuessed}`
      }
    ],
    [{
      colSpan: 2,
      hAlign: 'center',
      content: `ROUND ${game.round()}\n${game.wins} wins  ${game.losses} losses`
    }]
  )
  console.log(table.toString())
}

function promptGuess() {
  inquirer
    .prompt([{
      type: 'input',
      name: 'guess',
      message: 'Guess a letter!'
    }])
    .then(function (answers) {
      let char = answers.guess
      if (isLetter(char)) {
        game.guess(char)
        printDisplay()
      } else {
        printDisplay()
        console.log('Not a valid input. Input must be a single letter.')
      }

      if (!game.gameOver()) {
        // Game still in progress
        promptGuess()
      } else if (game.won()) {
        // Game won
        promptWin()
      } else if (game.lost()) {
        // Game lost
        promptLoss()
      }
    })
}

function promptWin() {
  inquirer
    .prompt([{
      type: 'confirm',
      name: 'playAgain',
      default: true,
      message: 'Congrats! You won this round. Play Again?'
    }])
    .then(function (answers) {
      if (answers.playAgain) {
        game.newGame()
        printDisplay()
        promptGuess()
      } else {
        process.exit()
      }
    })
}


function promptLoss() {
  inquirer
    .prompt([{
      type: 'confirm',
      name: 'playAgain',
      default: true,
      message: 'Sorry.. You lost this time. Try again?'
    }])
    .then(function (answers) {
      if (answers.playAgain) {
        game.newGame()
        printDisplay()
        promptGuess()
      } else {
        process.exit()
      }
    })
}

printDisplay()
promptGuess()