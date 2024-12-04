// Write a function that returns the index of the first occurrence of a specific number in an array. Return -1 if the number is not found.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function findFirstIndexOfTarget(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }

  return -1;
}

/* 

Time Complexity: O(n)
- The function iterates through the array once using a for loop, where `n` is the length of the array. This gives us a time complexity of O(n).
- In the worst case, the target is not found and the loop runs through all elements.

Space Complexity: O(1)
- The function uses only a few variables (`i` and `target`), and it does not allocate any additional memory proportional to the input size. Thus, the space complexity is O(1).

*/
