function isSorted(input) {
  for (let i = 0; i < input.length; i++) {
    console.log(input[i]);
    if (input[i] > input[i + 1]) {
      return false;
    }
  }
  return true;
}

let input = [];
console.log(isSorted(input));
