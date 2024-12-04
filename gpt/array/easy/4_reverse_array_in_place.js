// Write a function that takes an array and returns a new array with the elements in reverse order.

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function reverseArrayInPlace(numbers) {
  let leftPointer = 0;
  let rightPointer = numbers.length - 1;

  while (leftPointer < rightPointer) {
    let temp = numbers[leftPointer];
    numbers[leftPointer] = numbers[rightPointer];
    numbers[rightPointer] = temp;

    leftPointer++;
    rightPointer--;
  }

  return numbers;
}

/* 

Time Complexity: O(n)
- The function iterates through half of the array, where `n` is
the length of the array. This makes the time complexity linear.

Space Complexity: O(1)
- The function performs the reversal in-place, meaning no
additional space proportional to the input size is allocated.

*/
