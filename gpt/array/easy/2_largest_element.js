// Write a function that finds and returns the largest number in an array.

/**
 * @param {number[]} numbers
 * @return {number}
 */
function findLargestElementInArray(numbers) {
  let largestValue = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largestValue) {
      largestValue = numbers[i];
    }
  }

  return largestValue;
}

/* 

Time Complexity: O(n)
- The function iterates through the array once using a for loop,
where `n` is the length of the array. This makes the time complexity linear.

Space Complexity: O(1)
- The function uses a single variable `largestValue` to store the result,
which does not depend on the size of the input array.
No additional space is allocated proportional to the input size.

*/
