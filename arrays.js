/*var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(a, b) {
  var c = [b, ...a]
  return c
}

function destructivelyAddElementToBeginningOfArray(a, b) {
  return a.unshift(b)
}

function addElementToEndOfArray(a, b) {
  var c = [...a, b]
  return c
}

function destructivelyAddElementToEndOfArray(a, b) {
  return a.push(b)
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
*/
function destructivelyRemoveElementFromEndOfArray(a) {
  return a.pop()
}

destructivelyRemoveElementFromEndOfArray([1,2,3])
/*
function removeElementFromEndOfArray(a) {
  return a.slice(0, a.length - 1)
}
*/