/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let num = 0 ;
    numbers.forEach(element => {
        if(num < element)
            num = element;
    });
    return num;
}

console.log(findLargestElement([30, 7, 21, 9, 1111]));
module.exports = findLargestElement;