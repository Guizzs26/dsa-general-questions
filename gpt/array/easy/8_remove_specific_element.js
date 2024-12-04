// Write a function that removes all occurrences of a specific number from an array.

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
function removeOccurrenceOfTarget(numbers, target) {
  let filteredArray = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== target) {
      filteredArray[filteredArray.length] = numbers[i];
    }
  }

  return filteredArray;
}

/* 

Time Complexity: O(n)
- The function iterates through all the elements of the array once, performing
a simple comparison for each element. Therefore, the time complexity is
linear, where `n` is the number of elements in the input array.

Space Complexity: O(n)
- The function creates a new array `filteredArray` that, in the worst case, can have
the same size as the input array if no elements match the target. Thus, the 
space complexity is linear.

*/
