/*
Find the index of the letter that matches each letter of the secret message
if the index is less than or equal to 12, move up 13 indeces
if the index is greater than or equal to 13, move down 13 indeces
Store the value of the letter of the new index
Push the stored letter to the answer array
If letter not matching, push a space
Join the answer array and return it
*/

const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('')
const secret = "Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf".split(
  ''
)
let b

function rot13(secret) {
  const answer = []
  secret.map(letter => {
    if (letter != ' ') {
      b = alpha.findIndex(x => x === letter.toLowerCase())
    }
    if (b <= 12) {
      answer.push(alpha[b + 13])
    } else if (b >= 13) {
      answer.push(alpha[b - 13])
    }
  })
  return answer.join('')
}
