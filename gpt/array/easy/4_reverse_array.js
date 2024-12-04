// Write a function that takes an array and returns a new array with the elements in reverse order.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function reverseArray(nums) {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;

    start++;
    end--;
  }

  return nums;
}

/* 

Time Complexity: O(n)
- The function iterates through half of the array, where `n` is
the length of the array. This makes the time complexity linear.

Space Complexity: O(1)
- The function performs the reversal in-place, meaning no
additional space proportional to the input size is allocated.

*/
