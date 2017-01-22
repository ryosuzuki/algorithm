const _ = require('lodash')

let array = []
for (let i = 0; i < 20; i++) {
  array.push(Math.floor(Math.random() * 100))
}

console.log(array)
const test = _.clone(array).sort((a, b) => {
  return a - b
})

const bubbleSort = require('./src/bubble-sort')
const selectionSort = require('./src/selection-sort')
const insertionSort = require('./src/insertion-sort')
const mergeSort = require('./src/merge-sort')
const quickSort = require('./src/quick-sort')

const result = quickSort(array)
console.log(result)
console.log(test)
console.log(_.isEqual(result, test))