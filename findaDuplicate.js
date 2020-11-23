// o(n) time o(n) space
// function findDuplicate(array) {
//   var counts = {};
//   for (var i = 0; i < array.length; i++) {
//     var num = array[i];
//     if (!counts[num]) {
//       counts[num] = 0;
//     }
//     counts[num]++;
//     if (counts[num] > 1) {
//       return num;
//     }
//   }
//   throw new Error('no duplicate found!');
// }

// optimized for space o(1) space O(nlog n) time
function findDuplicate(array) {
  var sortedArray = array.slice().sort();
  for (var i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] === sortedArray[i + 1]) {
      return sortedArray[i];
    }
  }
  throw new Error('no duplicate found!');
}
