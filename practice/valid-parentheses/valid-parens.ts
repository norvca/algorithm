// Time complexity: O(n)
// Loop each char in input parens, so O(n)

// Space complexity: O(n)
// We need a stack to store left parens, according to the length of input characters, it's O(n)

// Solution
// - loop each of closing char
//   - If opening, put it into stack
//   - If closing, pop and compare top of the stack
//     - If no element in the stack, return false
//     - If top stack not matching closing, return false
// - check if there is opening left
//   - If left, return false
//   - If nothing left return true

function isValidParens(parens: string) {
  const stack = [];

  const pairs = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  for (let char of parens) {
    if (char in pairs) {
      stack.push(char);
    } else {
      const topStackChar = stack.pop();
      if (!topStackChar) return false;
      if (pairs[topStackChar] !== char) return false;
    }
  }
  if (stack.length) return false;
  return true;
}

isValidParens('(({{}}))');
isValidParens('([]({}[]){})');
isValidParens('([]{}])');
