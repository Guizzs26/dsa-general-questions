// Write a function that counts how many times a specific number appears in an array.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function countOccurrences(nums, target) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      count++;
    }
  }

  return count;
}

/* 

Time Complexity: O(n)
- The function iterates through the array once using a for loop,
where `n` is the length of the array. This makes the time complexity linear.

Space Complexity: O(1)
- The function uses a single variable `count` to store the result,
which does not depend on the size of the input array.
No additional space is allocated proportional to the input size.

*/
