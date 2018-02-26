var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  var newArray = array.unshift(element)
  return newArray
}

function destructivelyAddElementToBeginningOfArray(a, b) {
  a = [b, ...a]
  return a
}

function accessElementInArray(a, i) {
  return a[i]
}

function destructivelyRemoveElementFromBeginningOfArray(a) {
  return a.shift()
}

function removeElementFromBeginningOfArray(a) {
  return a.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(a) {
  return a.pop()
}

function removeElementFromEndOfArray(a) {
  return a.slice(0, a.length - 1)
}