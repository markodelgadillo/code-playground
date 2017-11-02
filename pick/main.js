// Creates and object composed of the picked object properties

// Arguements: object - The source object,
// paths - the property paths to pick.

// Return: Returns the new object

/*
Example:

var object = { 'a': 1, 'b': '2', 'c': 3}

_.pick(object, ['a', 'c'])
=> { 'a': 1, 'c': 3}
*/

// Create a function called pick that takes in two Arguements,
// a source object and a path (array of strings)

// The function will:
// Isolate the strings in the path.
// Loop through the obect key/value pairs.
// If a key from the looped object matches a strings
// from the path array, it will create a new object
// with the matching key/value pair
// selected from the path strings

// Object.keys(obj) returns an array of strings of the keys
// Object.values(obj) returns an array of strings of the values
// Object.defineProperty() returns the update object passed to the function

/*
function pick(object, paths) {
  // assign the returned array of keys to const keys
  const keys = Object.keys(object)
  console.log(keys)
  // assign the returned array of values to the const values
  const values = Object.values(object)
  console.log(values)
  // loop through each element in the const paths array
  paths.forEach(function(element) {
    console.log(element)
    // loop through the keys in the array
    for (let i = 0; i < keys.length; i++) {
      if (element === keys[i]) {
        Object.defineProperty(obj, element, {
          value: values[i]
        })
        console.log(obj)
        console.log(element)
        console.log(values[i])
      }
    }
    return obj
  })
}
*/
// const paths = ['a', 'b']
// const object = { a: 2, b: 'ten', c: 'Hello' }

// shortened code
/*
const pick = (object, paths) =>
  paths.map(path => path.toLowerCase()).reduce((sum, value) => {
    object[value] ? (sum[value] = object[value]) : null
    return sum
  }, {})
*/

function pick(object, paths) {
  const obj = {}
  // assign the returned array of keys to const keys
  const keys = Object.keys(object)
  console.log(keys)
  // assign the returned array of values to the const values
  const values = Object.values(object)
  console.log(values)
  // loop through the keys in the array
  for (let i = 0; i < keys.length; i++) {
    // stores the current value of keys[i] into the let key
    let key = keys[i].toLowerCase()
    // loops through elements of the array from the paths parameter
    paths.forEach(function(element) {
      // stores the current value of element in the let el
      let el = element.toLowerCase()
      // compares to see if the value of el and key match
      if (el === key) {
        // // defines the properties if the Object in the const obj
        // // (object, key, descriptor)
        // Object.defineProperty(obj, el, {
        //   value: values[i],
        //   enumerable: true
        // })
        obj[el] = values[i]
        console.log(obj)
      }
    })
  }
  return obj
}

module.exports = pick
