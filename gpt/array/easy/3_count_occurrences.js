// Write a function that counts how many times a specific number appears in an array.

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number}
 */
function countOccurrencesOfTarget(numbers, target) {
  let occurrenceCount = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
      occurrenceCount++;
    }
  }

  return occurrenceCount;
}

/* 

Time Complexity: O(n)
- The function iterates through the array once using a for loop,
where `n` is the length of the array. This makes the time complexity linear.

Space Complexity: O(1)
- The function uses a single variable `occurrenceCount` to store the result,
which does not depend on the size of the input array.
No additional space is allocated proportional to the input size.

*/
