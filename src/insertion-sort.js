
const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let current = array[i]
    let j
    for (j = i-1; j >= 0; j--) {
      if (array[j] > current) {
        array[j+1] = array[j]
      } else {
        break
      }
    }
    array[j+1] = current
  }
  return array
}

module.exports = insertionSort