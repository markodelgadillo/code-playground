// create logic for each move that will move the position of
// the cursor of the fighters array

function streetFighterSelection(fighters, position, moves){
  var fighterHovered = []
  for (i = 0; i < moves.length; i++){
    if (moves[i] === 'up'){
      fighterHovered.push(fighters[0][position[1]])
    }
    else if (moves[i] === 'down')  {
      fighterHovered.push(fighters[1][position[1]])
    }
    else if {
      if (moves[i] === 'left' && position[1] === 0){
      fighterHovered.push(fighters[position[0]][position[5]])
      }
      else {
        fighterHovered.push(fighters[position[0][position[1] - 1])
      }
    }
    else if {
      if (moves[i] === 'right' && position[1] === fighters.length){
        fighterHovered.push(fighters[position[0]][0])
      }
      else {
        fighterHovered.push(fighters[position[0][position[1] + 1])
      }
    }
  } return fighterHovered
}
