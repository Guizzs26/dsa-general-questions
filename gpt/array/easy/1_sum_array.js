// Write a function that takes an array of numbers and returns the sum of all its elements.

/**
 * @param {number[]} numbers
 * @return {number}
 */
function calculateSumOfArray(numbers) {
  let totalSum = 0;

  for (let i = 0; i < numbers.length; i++) {
    totalSum += numbers[i];
  }

  return totalSum;
}

/* 

Time Complexity: O(n)
- The function iterates through the array once using a for loop,
where `n` is the length of the array. This makes the time complexity linear.
 
Space Complexity: O(1)
- The function uses a single variable `totalSum` to store the result,
which does not depend on the size of the input array.
No additional space is allocated proportional to the input size.
 
*/
