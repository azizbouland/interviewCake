function findRotationPoint(words) {

  // Find the rotation point in the vector
  var letterIndex = 0;

  for (var i = 1; i < words.length; i++) {
    var current = words[i].charCodeAt(letterIndex);
    var previous = words[i - 1].charCodeAt(letterIndex);
    while (current === previous) {
      letterIndex++;
      current = words[i].charCodeAt(letterIndex);
      previous = words[i - 1].charCodeAt(letterIndex);

    } if (current < previous) {
      return i;
    }
    letterIndex = 0;
  }

  return false;
}

// Tests

let desc = 'small array';
let actual = findRotationPoint(['cape', 'cake']);
let expected = 1;
assertEquals(actual, expected, desc);

desc = 'medium array';
actual = findRotationPoint(['grape', 'orange', 'plum', 'radish', 'apple']);
expected = 4;
assertEquals(actual, expected, desc);

desc = 'large array';
actual = findRotationPoint(['ptolemaic', 'retrograde', 'supplant',
  'undulate', 'xenoepist', 'asymptote',
  'babka', 'banoffee', 'engender',
  'karpatka', 'othellolagkage']);
expected = 5;
assertEquals(actual, expected, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
