// Write a function that removes all occurrences of a specific number from an array.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function removeElements(nums, target) {
  let removedElementArr = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== target) {
      removedElementArr[removedElementArr.length] = nums[i];
    }
  }

  return removedElementArr;
}

/* 

Time Complexity: O(n)
- The function iterates through all the elements of the array once, performing
a simple comparison for each element. Therefore, the time complexity is
linear, where `n` is the number of elements in the input array.

Space Complexity: O(n)
- The function creates a new array `removedElementArr` that, in the worst case, can have
the same size as the input array if no elements match the target. Thus, the 
space complexity is linear.

*/
