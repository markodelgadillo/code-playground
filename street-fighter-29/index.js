// create logic for each move that will move the position of
// the cursor of the fighters array
/*
function streetFighterSelection(fighters, position, moves) {
  var fighterHovered = []
  for (i = 0; i < moves.length; i++) {
    console.log(moves[i])
    if (moves[i] === 'up') {
      fighterHovered.push(fighters[0][position[1]])
      position[0] = 0
    } else if (moves[i] === 'down') {
      fighterHovered.push(fighters[1][position[1]])
      position[0] = 1
    } else if (moves[i] === 'left' && position[1] === 0) {
      console.log(position[1])
      fighterHovered.push(fighters[position[0]][fighters[0].length - 1])
      position[1] = fighters[0].length - 1
      console.log(position[1])
    } else if (moves[i] === 'left') {
      console.log(position[1])
      fighterHovered.push(fighters[position[0]][position[1] - 1])
      position[1] = position[1] - 1
    } else if (moves[i] === 'right' && position[1] === fighters[0].length - 1) {
      fighterHovered.push(fighters[position[0]][0])
      position[1] = 0
    } else if (moves[i] === 'right') {
      fighterHovered.push(fighters[position[0]][position[1] + 1])
      position[1] += 1
    }
  }
  console.log(fighterHovered)
  return fighterHovered
}
*/

function up(fighters, position, fightersHovered) {
  position[0] = 0
  return fightersHovered.push(fighters[0][position[1]])
}

function down(fighters, position, fightersHovered) {
  position[0] = 1
  return fightersHovered.push(fighters[1][position[1]])
}

function left(fighters, position, fightersHovered) {
  if (position[1] === 0) {
    position[1] = fighters[0].length - 1
    fightersHovered.push(fighters[position[0]][fighters[0].length - 1])
  } else {
    fightersHovered.push(fighters[position[0]][position[1] - 1])
    position[1] = position[1] - 1
  }
  return fightersHovered
}

function right(fighters, position, fightersHovered) {
  if (position[1] === fighters[0].length - 1) {
    fightersHovered.push(fighters[position[0]][0])
    position[1] = 0
  } else {
    fightersHovered.push(fighters[position[0]][position[1] + 1])
    position[1] += 1
  }
  return fightersHovered
}

function streetFighterSelection(fighters, position, moves) {
  const fightersHovered = []
  moves.forEach(move => {
    switch (move) {
      case 'up':
        up(fighters, position, fightersHovered)
        break

      case 'down':
        down(fighters, position, fightersHovered)
        break

      case 'left':
        left(fighters, position, fightersHovered)
        break

      case 'right':
        right(fighters, position, fightersHovered)
        break
    }
  })
  return fightersHovered
}

module.exports = streetFighterSelection
