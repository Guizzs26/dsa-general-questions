// Write a function that takes two arrays and returns a new array with their elements interleaved. Assume both arrays have the same length.

/**
 * @param {any[]} arr1
 * @param {any[]} arr2
 * @return {any[]}
 */
function interleaveArrays(arr1, arr2) {
  let interleavedArr = new Array(arr1.length + arr2.length);
  let interleavedArrIndex = 0;

  for (let i = 0; i < arr1.length; i++) {
    interleavedArr[interleavedArrIndex++] = arr1[i];
    interleavedArr[interleavedArrIndex++] = arr2[i];
  }

  return interleavedArr;
}

/* 

Time Complexity: O(n)
- The function iterates through both arrays once (equal length), where `n` is the length of the arrays.

Space Complexity: O(n)
- The function uses additional space for the `interleavedArr` array, which stores `2n` elements (all elements from both input arrays).

*/
