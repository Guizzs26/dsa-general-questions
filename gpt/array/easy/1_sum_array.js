// Write a function that takes an array of numbers and returns the sum of all its elements.

/**
 * @param {number[]} nums
 * @return {number}
 */
function sumArray(nums) {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  return sum;
}

/* 

Time Complexity: O(n)
- The function iterates through the array once using a for loop,
where `n` is the length of the array. This makes the time complexity linear.
 
Space Complexity: O(1)
- The function uses a single variable `sum` to store the result,
which does not depend on the size of the input array.
No additional space is allocated proportional to the input size.
 
*/
