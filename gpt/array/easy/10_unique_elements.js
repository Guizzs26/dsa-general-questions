// Write a function that takes an array and returns a new array containing only unique elements (no duplicates).

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function getUniqueElements(numbers) {
  let uniqueElementsArray = [];

  for (let i = 0; i < numbers.length; i++) {
    let isUnique = true;

    for (let j = 0; j < uniqueElementsArray.length; j++) {
      if (numbers[i] === uniqueElementsArray[j]) {
        isUnique = false;
        break;
      }
    }

    if (isUnique) {
      uniqueElementsArray[uniqueElementsArray.length] = numbers[i];
    }
  }

  return uniqueElementsArray;
}

/*

Time Complexity: O(n²)
- The function uses two loops, where the outer loop iterates over the array
and the inner loop checks if the element is already present in the `uniqueElementsArray`. 
This leads to a time complexity of O(n²).
- In the worst case, for each element, the function checks against all 
previously added elements in the array.

Space Complexity: O(n)
- The space complexity is O(n) as the function creates a new array (`uniqueElementsArray`) to store the unique elements. This space grows linearly with the number of unique elements.

*/
