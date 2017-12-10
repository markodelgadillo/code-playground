//Only push the unique value

const arr = [1, 1, 3, 2, 2, 5, 5, 5, 4]
const stringCaps = 'AAABBBCCDAABBB'
const mix = 'ABBCcAD'

function uniqueInOrder(iterable) {
  const unique = []
  for (i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i + 1]) {
      unique.push(iterable[i])
    }
  }
  return unique
}
