// O(n) time || O(1) space
function reverse(arrayOfChars) {

    // Reverse the input array of characters in place
    var left = 0;
    var right = arrayOfChars.length - 1;
    var tmp;
    
    while (left < right) {
      tmp = arrayOfChars[left];
      arrayOfChars[left] = arrayOfChars[right];
      arrayOfChars[right] = tmp;
      left++;
      right--;
    }
    return arrayOfChars;
  
  }
  
  // Tests
  
  let desc = 'empty string';
  let input = ''.split('');
  reverse(input);
  let actual = input.join('');
  let expected = '';
  assertEqual(actual, expected, desc);
  
  desc = 'single character string';
  input = 'A'.split('');
  reverse(input);
  actual = input.join('');
  expected = 'A';
  assertEqual(actual, expected, desc);
  
  desc = 'longer string';
  input = 'ABCDE'.split('');
  reverse(input);
  actual = input.join('');
  expected = 'EDCBA';
  assertEqual(actual, expected, desc);
  
  function assertEqual(a, b, desc) {
    if (a === b) {
      console.log(`${desc} ... PASS`);
    } else {
      console.log(`${desc} ... FAIL: ${a} != ${b}`);
    }
  }