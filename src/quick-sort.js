
const quickSort = (array, left, right) => {
  if (!left) left = 0
  if (!right) right = array.length -1

  let pivot
  if (array.length > 1) {
    pivot = partition(array, left, right)
    if (left < pivot - 1) {
      quickSort(array, left, pivot - 1)
    }
    if (pivot < right) {
      quickSort(array, pivot, right)
    }
  }
  return array
}

const partition = (array, left, right) => {
  const mid = Math.floor((right + left) / 2)
  let pivot = array[mid]
  let i = left
  let j = right

  while (i <= j) {
    while (array[i] < pivot) {
      i++
    }
    while (array[j] > pivot) {
      j--
    }
    if (i <= j) {
      let temp = array[i]
      array[i] = array[j]
      array[j] = temp
      i++
      j--
    }
  }
  return i
}

module.exports = quickSort
