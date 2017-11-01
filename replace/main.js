// Replace

// replace matches for pattern in string with replacement

// arguements: the string to modify, the pattern to replacement
// and the match replacement

// returns: the modified string

// example: _.replace('Hi Fred', 'Fred', 'Barney')
// returns: 'Hi Barney'

// function to compare three strings
// if the first string has the second string
// replace it with the third string

// string one will have multiple words
// seperate words
// check if one of those words matches the second string
// if it does, replace that matching word in the first
// string with the third string

// separate the first string with split to an array of strings
// loop through that array
// if string[i] is equal to str2, replace it with str3

const string = 'Hi, my name is Marko'
const pattern = 'Marko'
const replacement = 'Jeff'

// var newStr1 = string.replace(pattern, replacement)

function replace(string, pattern, replacement) {
  // const to assign the result
  let newStr = ''
  // split is set equal to the split up str1 into an array
  const split = string.split(' ')
  // loops through the new array from string
  for (let i = 0; i < split.length; i++) {
    console.log(split[i])
    // removes puncutation from strings
    let alpha = split[i].replace(/[^a-zA-Z]$/, '')
    console.log(alpha)
    // looks for alpha characters from the beginning
    // of the string and replaces them with nothing
    let character = split[i].replace(/^[a-zA-Z]+/, '')
    console.log(character)
    // checks if one of the strings matches the seconds string
    if (alpha.toLowerCase() === pattern.toLowerCase()) {
      console.log(alpha)
      // adds the removed punctuation to the replacement
      replacement += character
      // replaces the removed string in the array with the replacement
      split.fill(replacement, i, i + 1)
      // set equals the new array joined together with the replaceemnt to newStr
      newStr = split.join(' ')
      console.log(split)
      // } else {
      //   newStr = 'The word to replace is not present.'
    }
  }
  // joins together the array as a string.
  return newStr
}

module.exports = replace
