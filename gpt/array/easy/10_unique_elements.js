// Write a function that takes an array and returns a new array containing only unique elements (no duplicates).

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function uniqueElements(arr) {
  let uniqueArr = [];

  for (let i = 0; i < arr.length; i++) {
    let isUnique = true;

    for (let j = 0; j < uniqueArr.length; j++) {
      if (arr[i] === uniqueArr[j]) {
        isUnique = false;
        break;
      }
    }

    if (isUnique) {
      uniqueArr[uniqueArr.length] = arr[i];
    }
  }
}

/*

Time Complexity: O(n²)
- The function uses two loops, where the outer loop iterates over the array
and the inner loop checks if the element is already present in the `uniqueArr`. 
This leads to a time complexity of O(n²).
- In the worst case, for each element, the function checks against all 
previously added elements in the array.

Space Complexity: O(n)
- The space complexity is O(n) as the function creates a new array (`uniqueArr`) to store the unique elements. This space grows linearly with the number of unique elements.

*/
