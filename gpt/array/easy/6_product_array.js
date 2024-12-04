// Write a function that calculates the product of all the elements in an array.

/**
 * @param {number[]} numbers
 * @return {number}
 */
function calculateProductOfArray(numbers) {
  let totalProduct = 1;

  for (let i = 0; i < numbers.length; i++) {
    totalProduct *= numbers[i];
  }

  return totalProduct;
}

/* 

Time Complexity: O(n)
- The function iterates through the array once using a single for loop,
where `n` is the number of elements in the array.

Space Complexity: O(1)
- The function uses only one variable, `totalProduct `, to store the result,
regardless of the size of the array.

*/
