var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(a, b) {
  var c = a.unshift(b)
  return c
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