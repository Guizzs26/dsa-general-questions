/*

Write a function that takes an array of integers and a target sum, and returns all unique
pairs of numbers that add up to the target. Each pair should be returned as a sorted array,
and the output should not contain duplicate pairs.

Example
Input: nums = [1, 2, 3, 4, 3, 5, 1, 2], target = 6
Output: [[1, 5], [2, 4], [3, 3]]

*/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[][]}
 */
function findPairsWithSum(numbers, target) {
  let pairs = [];
  let seen = {};

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        let pair;

        if (numbers[i] < numbers[j]) {
          pair = [numbers[i], numbers[j]];
        } else {
          pair = [numbers[j], numbers[i]];
        }

        let key = pair.toString();
        if (!seen[key]) {
          pairs[pairs.length] = pair;
          seen[key] = true;
        }
      }
    }
  }

  return pairs;
}

console.log(findPairsWithSum([1, 2, 3, 4, 3, 5, 1, 2], 6));

/*

Time Complexity: O(n^2)
  - The function uses two nested loops to check each pair of numbers, which results in a quadratic time complexity.
  - The outer loop runs n times, and the inner loop runs up to n times for each iteration of the outer loop.
  - Therefore, the time complexity is O(n^2), where n is the number of elements in the input array.

Space Complexity: O(n)
  - The space complexity is determined by the `seen` object and the `pairs` array.
  - In the worst case, where no duplicates are found, both the `pairs` array and the `seen` object will contain all unique pairs, resulting in O(n) space complexity.

*/
