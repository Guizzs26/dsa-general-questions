// Write a function that takes two arrays and returns a new array with their elements interleaved. Assume both arrays have the same length.

/**
 * @param {any[]} arr1
 * @param {any[]} arr2
 * @return {any[]}
 */
function mergeArraysInterleaved(array1, array2) {
  let interleavedArray = new Array(array1.length + array2.length);
  let currentIndex = 0;

  for (let i = 0; i < array1.length; i++) {
    interleavedArray[currentIndex++] = array1[i];
    interleavedArray[currentIndex++] = array2[i];
  }

  return interleavedArray;
}

/* 

Time Complexity: O(n)
- The function iterates through both arrays once (equal length), where `n` is the length of the arrays.

Space Complexity: O(n)
- The function uses additional space for the `interleavedArray` array, which stores `2n` elements (all elements from both input arrays).

*/
