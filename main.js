// intersection([arrays])

// creates an array of unique values that are included in all given arrays using
// SameValueZero for equality comparison.

// The order and reference of result values are determined by the first array.

// arguments: the arrays to inspect

// returns: the new array of intersecting values

// Example:  Inputs([2, 1], [2, 3]) - Outputs [2]

/* returned only the first element
function toString(arr2) {
  return arr2.toString()
}

function intersect(arr1) {
  return arr1.find(toString)
}
*/
// function intersect(arr1) {
//   return arr1.filter(toString)
// }
//
// console.log(intersect(arr1))
//
// var arr1 = [1, 3, 5]
// var arr2 = [1, 2, 3]
//
// function intersect(arr1, arr2) {
//
//   for (let i = 0; i < arrays.length; i++) {
//     const union = []
//     for (let k = 0; k < arrays[i].length; k++) {
//       let inEvery = true
//       for (let j = 0; j < others.length; j++) {
//         if (!others.includes(array[i][k])) {
//           inEvery = false
//         }
//       }
//       if (inEvery && !union.includes(array[i][k])) {
//         union.push(array[i][k])
//       }
//     }
//   }
//
//
//   function union(...arrays) {
//     const unioned = []
//
//     arrays.forEach(array => {
//       array.forEach(element => {
//         let inEvery = true
//
//         arrays.forEach(other => {
//           if (!other.includes(element)) {
//             inEvery = false
//           }
//         })
//
//         if (inEvery && !unioned.includes(element)) {
//           unioned.push(element)
//         }
//       })
//     })
//
//     return unioned
//   }
//

// function to find the common elements of all arrays
// and return all common elements to a new single array

function intersection(...arrays) {
  // empty array to push the common elements from all arrays
  const intersected = []
  // cycles through each array
  arrays.forEach(array => {
    // cycles through each element of an array
    array.forEach(e => {
      // if statement to check if the array includes the element OR
      // if const u doesn't include the element, push the element to
      // const u empty array
      // find will run a function
      const checkE = arrays.find(function(a) {
        // check if 'a' does not have the element OR intersected includes the element
        return !a.includes(e) || intersected.includes(e)
      })
      // if statement to check condtions met in const checkE
      if (checkE) {
        // push the element to the accumilated array in const intersected
        intersected.push(e)
      }
    })
  })
  // returns intersected after all loops complete
  return intersected
}

console.log(intersection([1, 2], [1, 3], [1, 4]))
console.log(intersection([1, 2], [1, 3, 2], [1, 4, 2]))
console.log(intersection([3], [1, 3], [3]))
