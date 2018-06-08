/*
Find the index of the letter that matches each letter of the secret message
if the index is less than or equal to 12, move up 13 indeces
if the index is greater than or equal to 13, move down 13 indeces
Store the value of the letter of the new index
Push the stored letter to the answer array
If letter not matching, push a space
Join the answer array and return it
*/

// creates an array of the alphabet
const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('')

// the secret message to decipher
const secret = "Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf"

// store regex looking for charachters that are not letters or numbers
// only storing punctuation and spaces
const re = new RegExp(/^(?![A-Za-z0-9])+/g)

// store regex that looks for upper case characters including
// consecutive characters
const upperCase = new RegExp(/^([A-Z])+$/)

// index number in alpha that matches the letter in secret
let b

// flag for upper case letters
let Y

// flag for numbers
let N

function rot13(secret) {
  const answer = []
  const x = [...secret]
  x.forEach(letter => {
    // checking if the letter is a number
    isNaN(letter) ? (N = false) : (N = true)

    // finding the index to 'alpha' that matches the letter from 'secret'
    b = alpha.findIndex(x => x === letter.toLowerCase())

    // Checking for upper case
    upperCase.test(letter) ? (Y = true) : (Y = false)

    if (letter.match(re) || N) {
      answer.push(letter)
    } else if (b <= 12) {
      answer.push(...(Y ? alpha[b + 13].toUpperCase() : alpha[b + 13]))
    } else if (b >= 13) {
      answer.push(...(Y ? alpha[b - 13].toUpperCase() : alpha[b - 13]))
    }
  })
  return answer.join('')
}
