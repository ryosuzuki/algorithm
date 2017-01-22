
const mergeSort = (array) => {
  if (array.length < 2) return array

  const mid = Math.floor(array.length / 2)
  const left = array.slice(0, mid)
  const right = array.slice(mid, array.length)
  array = merge(mergeSort(left), mergeSort(right))
  return array
}

const merge = (left, right) => {
  let array = []
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      array.push(left.shift())
    } else {
      array.push(right.shift())
    }
  }
  while (left.length > 0) {
    array.push(left.shift())
  }
  while (right.length > 0) {
    array.push(right.shift())
  }
  return array
}

module.exports = mergeSort