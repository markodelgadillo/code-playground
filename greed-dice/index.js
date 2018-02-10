function score(dice) {
  let score = ''
  const ones = []
  const sixes = []
  const fives = []
  const fours = []
  const threes = []
  const twos = []

  for (i = 0; i < dice.length; i++) {
    if (dice[i] === 1) {
      ones.push(dice[i])
    } else if (dice[i] === 2) {
      twos.push(dice[i])
    } else if (dice[i] === 3) {
      threes.push(dice[i])
    } else if (dice[i] === 4) {
      fours.push(dice[i])
    } else if (dice[i] === 5) {
      fives.push(dice[i])
    } else if (dice[i] === 6) {
      sixes.push(dice[i])
    }
  }
  console.log(ones, twos, threes, fours, fives, sixes)

  if (twos.length >= 3) {
    score = 200
  } else if (threes.length >= 3) {
    score = 300
  } else if (fours.length >= 3) {
    score = 400
  } else if (sixes.length >= 3) {
    score = 600
  }

  if (ones.length >= 3) {
    score = 1000
    score += 100 * (ones.length - 3)
  } else if (ones.length < 3) {
    score += 100 * ones.length
  }

  if (fives.length >= 3) {
    score = 500
    score += 50 * (fives.length - 3)
  } else if (fives.length < 3) {
    score += 50 * fives.length
  }

  console.log(parseInt(score, 10))
  return parseInt(score, 10)
}

module.exports = score
