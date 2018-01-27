// first, separatethe string into an array of characters without any spaces
// in empty array, push only alpha characters
// in new variable, store the array in reversed order
// check if the new array and the new variable are the same
// if a match, return true, otherwise return false

function palindrome(str) {
  const arrStr = []
  let strNew = str.split('')
  strNew.forEach(character => {
    if (character.match(/[A-Za-z]/g)) {
      arrStr.push(character.toLowerCase())
    }
  })
  if (arrStr.join('') === arrStr.reverse().join('')) {
    return true
  } else {
    return false
  }
}

module.exports = palindrome
