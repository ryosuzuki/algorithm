const _ = require('lodash')

let array = []
for (let i = 0; i < 20; i++) {
  array.push(Math.floor(Math.random() * 100))
}

console.log(array)
const test = _.clone(array).sort((a, b) => {
  return a - b
})


const bubbleSort = require('./bubble-sort')
const selectionSort = require('./selection-sort')
const insertSort = require('./insert-sort')
const mergeSort = require('./merge-sort')

const result = mergeSort(array)
console.log(result)
console.log(test)
console.log(_.isEqual(result, test))