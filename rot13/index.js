/*
Find the index of the letter that matches each letter of the secret message
if the index is less than or equal to 12, move up 13 indeces
if the index is greater than or equal to 13, move down 13 indeces
Store the value of the letter of the new index
Push the stored letter to the answer array
If letter not matching, push a space
Join the answer array and return it
*/

const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('') // creates an array of the alphabet

const secret = "Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf".split(
  ''
) // creates an array of the secret message

const re = new RegExp(/^(?![A-Za-z0-9])+/g) //store regex looking for charachters that are not letters or numbers

let b // index number in alpha that matches the letter in secret

let upperCase = new RegExp(/^([A-Z])+$/)
let Y

function rot13(secret) {
  const answer = [] // pushing the rotated characters
  secret.forEach(letter => {
    b = alpha.findIndex(x => x === letter.toLowerCase()) // finding the index to 'alpha' that matches the letter from 'secret'
    // console.log(upperCase.test(letter))
    upperCase.test(letter) ? (Y = true) : (Y = false)
    console.log(Y, b, letter)
    if (letter.match(re)) {
      answer.push(letter)
    } else if (b <= 12) {
      answer.push(...(Y ? alpha[b + 13].toUpperCase() : alpha[b + 13]))
    } else if (b >= 13) {
      answer.push(...(Y ? alpha[b - 13].toUpperCase() : alpha[b - 13]))
    }
  })
  return answer.join('')
}
