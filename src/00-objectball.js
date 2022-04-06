function gameObject(){
  return {
    home: {
      teamName: 'Brooklyn Nets',
      colors: ['Black', 'White'],
      players: {
        'Alan Anderson': {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1
        },
        'Reggie Evans': {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7
        },
          'Brook Lopez': {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
        }
      }
    },
    away: {
      teamName: 'Charlotte Hornets',
      colors: ['Turquiose', 'Purple'],
      players: {
        'Jeff Adrien': {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2
        },
        'Bismak Biyombo': {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10
        },
        'Ben Gordon': {
          number: 8,
          shoe: 13,
          points: 19,
          rebounds: 14,
          assists: 3,
          steals: 15,
          blocks: 8,
          slamDunks: 3
        }
     }
    }
  }
}


// - Build a function, `numPointsScored` that takes in an argument of a player's name and returns the number of points scored for that player. - Think about where in the object you will find a player's `points`. How can you iterate down into that level? Think about the return value of your function.

function homeTeam() {
  return gameObject().home
}

function awayTeam() {
  return gameObject().away
}

function players() {
  return Object.assign({}, homeTeam().players, awayTeam().players)
}

function numPointsScored(playerInput){
  const playerArrays = Object.entries(players())
  const player = playerArrays.find(playerArray => playerArray[0] === playerInput)
  return player[1].points
  // find this player, and give me the [1] object, which is their points
}
 
console.log('Ben number of points', numPointsScored('Ben Gordon'))


