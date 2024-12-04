// Write a function that checks if there are duplicate elements in an array. Return true if duplicates exist, otherwise return false.

/**
 * @param {number[]} numbers
 * @return {boolean}
 */
function hasDuplicates(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] === numbers[j]) {
        return true;
      }
    }
  }

  return false;
}

/* 

Time Complexity: O(n^2)
- The function uses a nested loop, where the outer loop runs `n` times, 
and the inner loop runs up to `n - 1` times in the worst case. 

Space Complexity: O(1)
- The function does not use any additional data structures or memory.

*/
