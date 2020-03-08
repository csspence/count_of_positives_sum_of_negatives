/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

const countPositivesSumNegatives = (input) => {
  let pos = 0;
  let neg = 0;
  const arr = [];

  if(input === null) {
      return [];
  }
  if(input.length < 1) {
      return [];
  }
  for(let i = 0; i < input.length; i++) {
      if(input[i] < 0) {
          neg += input[i];
      }
      if(input[i] > 0) {
          pos++;
      }
  }

  arr.push(pos, neg);
  return arr;
}