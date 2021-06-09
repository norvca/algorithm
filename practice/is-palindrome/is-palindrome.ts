// NOTE: This methods' efficiency is not good as javascript native methods

// Time complexity: O(n)
// According to the length of input

// Space complexity: O(1)
// It just use 2 pointers as variable

// Solution
// 0. Clean the input string
// 1. Set 2 pointers, one pointer as 0 index, one as last index (length -1)
// 2. While point A < point B, check if their value is equal
// 2.1 If not, exit wile loop and return false
// 2.2 else index of point A + 1, index of point B - 1, check while loop, if all pass, return true

function isPalindrome(str: string): boolean {
  str = str.replace(/[^\w]/gi, '');

  let left = 0;
  let right = str.length - 1;

  while (length < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }

  return true;
}

// JS native method, much faster
function isPalindrome2(str: string): boolean {
  str = str.replace(/[^\w]/gi, '');
  return str === str.split('').reverse().join('');
}
